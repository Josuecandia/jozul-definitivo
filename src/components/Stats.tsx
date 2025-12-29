import React from 'react';

const STATS = [
  { value: "50+", label: "Proyectos Completados" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "5+", label: "Años de Experiencia" },
  { value: "24/7", label: "Soporte Técnico" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-blue-600 relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}