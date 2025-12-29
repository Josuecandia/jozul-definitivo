'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Estado ampliado para manejar mejor el feedback al usuario
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Limpiar errores cuando el usuario empieza a escribir de nuevo
    if (status === 'error') {
        setStatus('idle');
        setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Llamada al Backend Real (API Route)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Volver al estado normal después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Error de conexión. Inténtalo más tarde.');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-900 overflow-hidden">
      
      {/* Elementos de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Información */}
          <div>
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
              Contacto
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Siguiente Gran Idea
              </span>
            </h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Ya sea que necesites una arquitectura compleja, un rediseño de marca o una aplicación móvil, estamos listos para integrar tecnología de punta en tu negocio.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Corporativo</h4>
                  <p className="text-slate-400">contacto@technova.io</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-purple-400 border border-slate-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Oficinas</h4>
                  <p className="text-slate-400">Ciudad de México, Reforma 222</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-xl relative">
            {/* Glow sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="tucorreo@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  <option value="Desarrollo Web">Desarrollo Web</option>
                  <option value="App Móvil">App Móvil</option>
                  <option value="Diseño UI/UX">Diseño UI/UX</option>
                  <option value="Consultoría">Consultoría</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                  placeholder="Detalles del proyecto..."
                ></textarea>
              </div>

              {/* Mensajes de Feedback visual */}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-900/20 p-3 rounded-lg border border-green-900/50">
                    <CheckCircle className="w-4 h-4" />
                    <span>¡Mensaje recibido! Nos pondremos en contacto pronto.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full flex items-center justify-center py-4 rounded-lg text-white font-bold text-lg transition-all ${
                  status === 'success' 
                    ? 'bg-green-600 hover:bg-green-700 cursor-default' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/25'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? (
                  <>
                   <Loader2 className="w-6 h-6 animate-spin mr-2" /> Enviando...
                  </>
                ) : status === 'success' ? (
                  "Enviado Correctamente"
                ) : (
                  <>
                    Enviar Mensaje <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}