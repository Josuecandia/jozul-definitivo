'use client';
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha"; // <--- IMPORTANTE

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null); // Guardar token
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // 1. Validar que el humano haya hecho el captcha
    if (!captchaToken) {
      alert("Por favor confirma que no eres un robot.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      captchaToken: captchaToken // Enviamos el token al backend
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        e.currentTarget.reset();
        recaptchaRef.current?.reset(); // Reiniciar captcha
        setCaptchaToken(null);
      } else {
        alert('Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      alert('Error de conexión.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info de contacto (Izquierda) */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Hablemos de tu Proyecto</h2>
            <p className="text-slate-400 mb-8 text-lg">
              ¿Listo para transformar tu presencia digital? Escríbeme y analicemos cómo llevar tu negocio al siguiente nivel.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <span>contacto@jozul.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                  <Phone className="w-6 h-6" />
                </div>
                <span>+52 (442) 123 4567</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>Querétaro, México</span>
              </div>
            </div>
          </div>

          {/* Formulario (Derecha) */}
          <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nombre Completo</label>
                <input required type="text" name="name" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Ej. Juan Pérez" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Correo Electrónico</label>
                <input required type="email" name="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="juan@empresa.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
                <textarea required name="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Cuéntame sobre tu proyecto..." />
              </div>

              {/* AQUÍ ESTÁ EL RECAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lf4sj0sAAAAAGBKWKTXC-ePTn-1sVU4OvO3mzNP" // <--- PEGA TU CLAVE DE SITIO AQUÍ
                  onChange={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              {/* AQUÍ ESTÁ EL AVISO DE PRIVACIDAD */}
              <div className="flex items-start gap-3">
                <input 
                  id="privacy" 
                  type="checkbox" 
                  required 
                  className="mt-1 w-4 h-4 rounded bg-slate-950 border-slate-700 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-sm text-slate-400">
  He leído y acepto el 
  <a href="/privacy" target="_blank" className="text-blue-400 hover:underline ml-1">
    Aviso de Privacidad
  </a>
  {/* ... */}
</label>
              </div>

              <button 
                type="submit" 
                disabled={loading || success}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Enviando... <Loader2 className="animate-spin w-5 h-5" /></>
                ) : success ? (
                  "¡Mensaje Enviado!"
                ) : (
                  <>Enviar Mensaje <Send className="w-5 h-5" /></>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}