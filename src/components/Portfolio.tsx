import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';

const PROJECTS = [
  {
    title: "3F MÉXICO",
    category: "Desarrollo Web / Corporativo",
    image: "/projects/3fmexico.jpg", // Imagen corporativa/edificio
    description: "Rediseño total de la página web para mejorar la presencia digital y la experiencia de usuario.",
    tags: ["React", "UI/UX", "Responsive"],
    link: "https://3fmexico.com/",
    status: "live"
  },
  {
    title: "QroPaint",
    category: "Desarrollo Web",
    image: "/projects/qropaint.jpg", // Imagen de construcción/pintura
    description: "Diseño y desarrollo completo de sitio web enfocado en mostrar catálogo y servicios de pintura.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://qropaint.com/",
    status: "live"
  },
  {
    title: "Herrería M&V",
    category: "Desarrollo Web & Branding",
    image: "/projects/herreria.jpg", // Imagen de chispas/soldadura (Se ve muy pro)
    description: "Desarrollo de identidad visual (Branding) y plataforma web para taller especializado.",
    tags: ["PHP", "JavaScript", "Branding"],
    link: "https://notaria30qro.mx/her/",
    status: "live"
  },
  {
    title: "Laboratorio Diesel AV",
    category: "Software & Web",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop", // Imagen técnica/mecánica
    description: "Plataforma web integrada con un sistema de seguimiento para procesos de laboratorio.",
    tags: ["Next.js", "React", "Supabase"],
    link: "#",
    status: "development"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">
            Nuestro Trabajo
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Proyectos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Generan Resultados</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde sitios web corporativos hasta sistemas de gestión complejos. Aquí una muestra de nuestra experiencia reciente.
          </p>
        </div>

        {/* Grid ajustado a 2 columnas para que 4 proyectos se vean simétricos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden h-[400px] border border-slate-800 bg-slate-900">
              
              {/* Imagen de Fondo con efecto Zoom */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              
              {/* Overlay Oscuro para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90" />

              {/* Contenido */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-xs font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  {project.category}
                </span>
                
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-800/80 text-white px-2 py-1 rounded border border-slate-700 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botón de Acción */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                   {project.status === 'live' ? (
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center text-white text-sm font-semibold hover:text-blue-400 transition-colors"
                     >
                       Visitar Sitio Web <ExternalLink className="ml-2 w-4 h-4" />
                     </a>
                   ) : (
                     <span className="inline-flex items-center text-slate-500 text-sm font-semibold cursor-not-allowed">
                       En Desarrollo <Lock className="ml-2 w-4 h-4" />
                     </span>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}