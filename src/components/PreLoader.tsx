'use client';
import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1. El loader se muestra 2 segundos
    const timer = setTimeout(() => {
      setFadeOut(true); // Empieza a desaparecer (fade out)
      
      // 2. Esperamos medio segundo más para que termine la animación de borrado y lo quitamos del todo
      setTimeout(() => {
        setShow(false);
      }, 500);

    }, 2000); // <-- TIEMPO QUE DURA EL LOADER (2000ms = 2 segundos)

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center">
        {/* Logo / Texto Animado */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider animate-pulse">
            JOZUL
          </h1>
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        </div>
        
        {/* Barra de carga decorativa */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[loading_2s_ease-in-out_infinite] w-full origin-left" />
        </div>
        
        <p className="text-slate-500 text-xs mt-4 font-mono tracking-widest uppercase">
          Cargando Experiencia...
        </p>
      </div>

      {/* Estilos para la animación de la barra */}
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}