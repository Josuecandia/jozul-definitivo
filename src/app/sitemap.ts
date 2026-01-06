import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jozul.tech',      // Tu página principal
      lastModified: new Date(),       // Fecha de hoy (automática)
      changeFrequency: 'monthly',     // Le dice a Google que la revise cada mes
      priority: 1,                    // Prioridad máxima (1.0)
    },
    // Si tuvieras más páginas (ej. /nosotros), las pondrías aquí abajo
  ];
}