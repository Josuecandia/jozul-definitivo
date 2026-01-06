import dynamic from 'next/dynamic';

// Componentes críticos (carga normal)
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Importamos el "Puente" que acabamos de crear (carga normal, él se encarga de lo demás)
import ContactWrapper from '@/components/ContactWrapper'; 

// El resto sigue igual con dynamic simple (sin ssr: false), eso sí está permitido
const TechStack = dynamic(() => import('@/components/TechStack'));
const Stats = dynamic(() => import('@/components/Stats'));
const Services = dynamic(() => import('@/components/Services'));
const About = dynamic(() => import('@/components/About'));
const Portfolio = dynamic(() => import('@/components/Portfolio'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <Navbar />
      <Hero />
      
      <TechStack />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Testimonials />
      <FAQ />
      
      {/* Usamos el Wrapper en lugar del componente directo */}
      <ContactWrapper />
      
      <Footer />
    </main>
  );
}