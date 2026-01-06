'use client'; // 👈 Esto es la clave. Le damos permiso de cliente.
import React from 'react';
import dynamic from 'next/dynamic';

// Aquí movemos la lógica que causaba el error
const ContactForm = dynamic(() => import('./Contact'), {
  ssr: false, // Ahora sí está permitido aquí
  loading: () => <div className="py-20 text-center text-slate-500">Cargando formulario...</div>
});

export default function ContactWrapper() {
  return <ContactForm />;
}