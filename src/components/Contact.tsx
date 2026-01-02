'use client';
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
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
      captchaToken: captchaToken
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
        recaptchaRef.current?.reset();
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
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Fondos decorativos para dar ambiente */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
         <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: DISEÑO RESTAURADO */}
          <div>
            {/* Etiqueta pequeña superior */}
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
              Contacto
            </h2>
            
            {/* TÍTULO GIGANTE CON DEGRADADO (Como en tu foto) */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hablemos de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                tu Proyecto
              </span>
            </h3>
            
            <p className="text-slate-400 mb-12 text-lg max-w-lg leading-relaxed">
              ¿Listo para transformar tu presencia digital? Escríbeme y analicemos cómo llevar tu negocio al siguiente nivel.
            </p>
            
            <div className="space-y-8">
              
              {/* Iconos con fondo degradado y diseño vibrante */}
              <div className="flex items-center gap-5 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Correo Electrónico</p>
                  <a href="mailto:contacto@jozul.com" className="text-white font-bold text-xl hover:text-blue-400 transition-colors">
                    contacto@jozul.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Teléfono</p>
                  <p className="text-white font-bold text-xl">4427526699</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Ubicación</p>
                  <p className="text-white font-bold text-xl">Querétaro, México</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <form onSubmit={handleSubmit} className="bg-slate-900/80 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl relative">
            <div className="space-y-6 relative z-10">
              
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2 pl-1">Nombre Completo</label>
                <input required type="text" name="name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all placeholder:text-slate-600" placeholder="Ej. Juan Pérez" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2 pl-1">Correo Electrónico</label>
                <input required type="email" name="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all placeholder:text-slate-600" placeholder="juan@empresa.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2 pl-1">Mensaje</label>
                <textarea required name="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all resize-none placeholder:text-slate-600" placeholder="Cuéntame sobre tu proyecto..." />
              </div>

              {/* RECAPTCHA CENTRADO */}
              <div className="flex justify-center py-2 scale-90 md:scale-100 origin-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lf4sj0sAAAAAGBKWKTXC-ePTn-1sVU4OvO3mzNP" 
                  onChange={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              {/* CHECKBOX LEGAL */}
              <div className="flex items-start gap-3">
                <input 
                  id="privacy" 
                  type="checkbox" 
                  required 
                  className="mt-1 w-5 h-5 rounded bg-slate-950 border-slate-700 text-blue-500 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-sm text-slate-400 cursor-pointer leading-tight">
                  He leído y acepto el <a href="/privacy" target="_blank" className="text-blue-400 hover:text-blue-300 hover:underline font-semibold">Aviso de Privacidad</a>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading || success}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:-translate-y-1"
              >
                {loading ? (
                  <>Enviando... <Loader2 className="animate-spin w-6 h-6" /></>
                ) : success ? (
                  "¡Mensaje Enviado! 🎉"
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