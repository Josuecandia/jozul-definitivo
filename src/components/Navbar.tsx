'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react'; // Importamos Terminal como logo temporal

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para el efecto "Glass"
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Portafolio', href: '#portfolio' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* --- LOGO & BRANDING JOZUL --- */}
          <a href="#" className="flex items-center gap-3 group">
            
            {/* OPCIÓN 1: Logo con Código (Isotipo Moderno) */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Terminal className="text-white w-6 h-6" />
              {/* Brillo interno */}
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* OPCIÓN 2: Si tienes una imagen (Descomenta esto y comenta el div de arriba) */}
            {/* <img 
              src="/logo.png" 
              alt="Logo JOZUL" 
              className="w-10 h-10 object-contain hover:scale-105 transition-transform" 
            /> 
            */}

            <span className="text-2xl font-bold tracking-tight text-white">
              JO<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">ZUL</span>
            </span>
          </a>
          
          {/* --- DESKTOP MENU (NUEVAS ANIMACIONES) --- */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="relative px-4 py-2 text-sm font-medium text-slate-300 transition-colors group"
              >
                {/* Texto */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>

                {/* Fondo animado (Pill Glow) */}
                <div className="absolute inset-0 bg-white/5 rounded-full scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-center" />
                
                {/* Borde sutil al hacer hover */}
                <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}

            {/* Botón de Contacto Destacado */}
            <div className="pl-4">
              <a 
                href="#contact" 
                className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <span className="absolute w-40 h-40 -mt-10 -ml-10 transition-all duration-700 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-40 animate-blob"></span>
                <span className="relative">Contacto</span>
              </a>
            </div>
          </div>

          {/* --- MOBILE BUTTON --- */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU PANEL --- */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-3 rounded-lg text-base font-bold text-center text-white bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}