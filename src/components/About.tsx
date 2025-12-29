import React from 'react';
import { CheckCircle2, Users, Cpu, Zap } from 'lucide-react';

const FEATURES = [
  {
    title: "Transparencia Total",
    description: "Sin letras chiquitas. Tienes acceso al progreso del proyecto y comunicación directa en cada etapa."
  },
  {
    title: "Arquitectura Escalable",
    description: "No escribimos código para hoy, sino para mañana. Sistemas listos para crecer cuando tu negocio lo haga."
  },
  {
    title: "Velocidad de Entrega",
    description: "Metodologías ágiles (Scrum/Kanban) que garantizan entregas puntuales sin sacrificar calidad."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Imagen y Visuales */}
          <div className="relative">
            {/* Imagen Principal */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipo de desarrollo colaborando" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
            </div>

            {/* Tarjeta Flotante (Experiencia) */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl hidden md:block animate-fade-in-up">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Equipo Senior</p>
                  <p className="text-white font-bold text-lg">Ingenieros Certificados</p>
                </div>
              </div>
            </div>

            {/* Elemento decorativo detrás */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Columna Derecha: Texto y Argumentos */}
          <div>
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
              Sobre Nosotros
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Más que código, somos tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Socios Estratégicos</span>
            </h3>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              En JOZUL, no solo entregamos software; entregamos tranquilidad. Nacimos con la misión de eliminar la brecha entre la complejidad técnica y las necesidades reales de negocio.
            </p>

            <div className="space-y-6">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-800 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">100%</span>
                  <span className="text-slate-500 text-sm">Remote First</span>
               </div>
               <div className="w-px h-10 bg-slate-800"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">Global</span>
                  <span className="text-slate-500 text-sm">Cobertura</span>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}