// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack'; // <--- NUEVO: Movimiento
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials'; // <--- NUEVO: Confianza
import FAQ from '@/components/FAQ'; // <--- NUEVO: Información
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 font-sans text-slate-100">
      <Navbar />
      <Hero />
      <TechStack />   {/* Da vida inmediata después del Hero */}
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Testimonials /> {/* Valida el portafolio */}
      <FAQ />          {/* Resuelve dudas antes de contactar */}
      <Contact />
      <Footer />
    </main>
  );
}