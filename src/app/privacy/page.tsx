import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl mb-4">
            <ShieldCheck className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-slate-400">
            Última actualización: Enero 2026
          </p>
        </div>

        {/* Contenido Legal */}
        <div className="space-y-12 text-slate-300 leading-relaxed">
          
          <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              1. Identidad y Domicilio
            </h2>
            <p>
              <strong>JOZUL Agencia Digital</strong> (en adelante "El Responsable"), con domicilio en Santiago de Querétaro, Querétaro, México, es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Datos que recabamos</h2>
            <p className="mb-4">
              Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Nombre completo.</li>
              <li>Correo electrónico.</li>
              <li>Número de teléfono.</li>
              <li>Datos sobre su proyecto o empresa (información no sensible).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Finalidad del uso de datos</h2>
            <p className="mb-4">
              Los datos personales que recabamos de usted los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Proveer los servicios y productos requeridos (Desarrollo Web, Software, etc.).</li>
              <li>Informar sobre cambios o nuevos productos o servicios.</li>
              <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes.</li>
              <li>Contacto para cotizaciones y seguimiento de proyectos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
            </p>
            <p className="mt-4 p-4 bg-slate-800 rounded-lg border-l-4 border-blue-500">
              Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: <strong className="text-white">contacto@jozul.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" />
              5. Seguridad de la Información
            </h2>
            <p>
              Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Su información es resguardada bajo estrictos estándares de confidencialidad.
            </p>
          </section>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}