'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "¿Cuánto tiempo tarda un desarrollo web?",
    answer: "Depende de la complejidad. Una Landing Page puede estar lista en 1 semana, mientras que un sistema corporativo puede tomar de 4 a 8 semanas. Te damos un cronograma exacto antes de empezar."
  },
  {
    question: "¿Incluyen hosting y dominio?",
    answer: "Te asesoramos para comprarlo a tu nombre (para que tú seas el dueño real) y nosotros nos encargamos de toda la configuración técnica y subida al servidor."
  },
  {
    question: "¿Hacen factura fiscal?",
    answer: "Sí, por supuesto. Todos nuestros servicios son facturables y los precios son más IVA si requieres comprobante."
  },
  {
    question: "¿Qué pasa si necesito cambios después?",
    answer: "Ofrecemos 30 días de soporte gratuito post-entrega para cualquier ajuste técnico. También tenemos planes de mantenimiento mensual si deseas actualizaciones constantes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-800 rounded-lg bg-slate-900 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-slate-800 transition-colors"
              >
                {faq.question}
                {openIndex === index ? <Minus className="text-blue-500" /> : <Plus className="text-slate-500" />}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}