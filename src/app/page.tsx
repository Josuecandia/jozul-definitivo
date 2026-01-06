import dynamic from 'next/dynamic';

// 🚀 COMPONENTES CRÍTICOS (Se cargan al instante para el SEO y la vista inicial)
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// 💤 CARGA DIFERIDA (Lazy Loading) - Se cargan mientras el usuario baja
// Esto reduce drásticamente el peso inicial de la página
const TechStack = dynamic(() => import('@/components/TechStack'));
const Stats = dynamic(() => import('@/components/Stats'));
const Services = dynamic(() => import('@/components/Services'));
const About = dynamic(() => import('@/components/About'));
const Portfolio = dynamic(() => import('@/components/Portfolio'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Footer = dynamic(() => import('@/components/Footer'));

// ⚠️ EL PESADO: Contacto (ReCAPTCHA + EmailJS)
// ssr: false asegura que no bloquee la carga inicial
const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => <div className="py-20 text-center text-slate-500">Cargando formulario...</div>
});

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <Navbar />
      <Hero />
      
      {/* El resto se irá cargando mágicamente a medida que bajas */}
      <TechStack />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}