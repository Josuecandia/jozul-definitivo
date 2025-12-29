import React from 'react';
import { Globe, Smartphone, Palette, Cpu, Camera, Share2 } from 'lucide-react';

const SERVICES = [
  {
    title: "Desarrollo Web",
    description: "Sitios corporativos, landing pages y E-commerce de alto impacto visual y rendimiento optimizado.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-400",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Desarrollo de Software",
    description: "Sistemas a la medida, automatización de procesos y plataformas empresariales robustas y escalables.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-indigo-400 to-violet-400",
    shadow: "shadow-indigo-500/20"
  },
  {
    title: "Desarrollo Móvil",
    description: "Apps nativas e híbridas (iOS y Android) diseñadas para ofrecer la mejor experiencia de usuario.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-emerald-400 to-green-400",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Redes Sociales",
    description: "Estrategia digital, gestión de comunidades (Community Management) y campañas de publicidad (Ads) efectivas.",
    icon: <Share2 className="w-8 h-8" />,
    color: "from-pink-400 to-rose-400",
    shadow: "shadow-pink-500/20"
  },
  {
    title: "Branding",
    description: "Construcción de identidad de marca, diseño de logotipos y guías de estilo que transmiten tu esencia.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-orange-400 to-amber-400",
    shadow: "shadow-orange-500/20"
  },
  {
    title: "Producción Foto y Video",
    description: "Contenido audiovisual profesional, fotografía de producto y corporativa para elevar la imagen de tu marca.",
    icon: <Camera className="w-8 h-8" />,
    color: "from-red-400 to-yellow-400",
    shadow: "shadow-red-500/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
         <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Nuestros Servicios
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Soluciones Integrales <br />
            <span className="text-slate-400">para tu Negocio</span>
          </h3>
          <p className="text-lg text-slate-400">
            Combinamos tecnología, diseño y estrategia para cubrir todas las necesidades digitales de tu empresa en un solo lugar.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradiente sutil en Hover (Borde brillante) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icono con fondo dinámico */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-700 group-hover:border-transparent group-hover:scale-110 transition-all duration-300 relative mb-6 overflow-hidden`}>
                {/* Fondo coloreado del icono al hacer hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className={`text-slate-300 group-hover:text-white relative z-10`}>
                  {service.icon}
                </div>
              </div>

              {/* Contenido */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>

              {/* Borde inferior de color */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}