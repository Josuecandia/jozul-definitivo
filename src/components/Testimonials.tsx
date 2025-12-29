import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Gerente General",
    company: "3F MÉXICO",
    text: "La transformación de nuestra web fue total. Lograron captar la esencia corporativa que buscábamos y la velocidad del sitio es impresionante.",
    rating: 5
  },
  {
    name: "Dirección",
    company: "Herrería M&V",
    text: "Entendieron perfectamente que necesitábamos mostrar nuestro catálogo de forma elegante. El branding nuevo nos ha traído clientes más grandes.",
    rating: 5
  },
  {
    name: "Equipo Administrativo",
    company: "Laboratorio Diesel AV",
    text: "El sistema que desarrollaron nos ahorra horas de trabajo manual cada semana. Son un equipo técnico muy capaz y transparente.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-16">
          Lo que dicen nuestros <span className="text-blue-500">Aliados</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 relative">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-slate-700 opacity-50" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">"{review.text}"</p>
              
              <div>
                <p className="text-white font-bold">{review.name}</p>
                <p className="text-blue-400 text-sm">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}