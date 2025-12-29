import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      
      {/* 1. Fondo Técnico (Grid Pattern) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* 2. Efecto de Luz (Blur Gradient) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          Disponibles para nuevos proyectos
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Desarrollo de Software <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
            Sin Límites
          </span>
        </h1>

        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Creamos ecosistemas digitales, apps móviles y plataformas web que escalan con tu negocio. Código limpio, arquitectura sólida y diseño de vanguardia.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:scale-105"
          >
            Iniciar Proyecto
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#services" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
          >
            <Code2 className="mr-2 w-5 h-5" />
            Ver Tecnologías
          </a>
        </div>
      </div>
    </section>
  );
}