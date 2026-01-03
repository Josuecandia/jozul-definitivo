import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/PreLoader"; // Asegúrate que la mayúscula coincida con tu archivo

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. ESTO ES VITAL: Define la raíz de tu dominio para que las imágenes funcionen
  metadataBase: new URL('https://jozul.tech/'), // O usa tu link de Vercel si aún no conectas el dominio

  title: {
    default: "JOZUL | Desarrollo de Software & Apps",
    template: "%s | JOZUL"
  },
  description: "Agencia de tecnología experta en desarrollo web, aplicaciones móviles y transformación digital. Llevamos tu negocio al siguiente nivel.",
  keywords: ["Desarrollo Web", "App Móvil", "Software", "Agencia Digital", "React", "Next.js", "Querétaro"],
  authors: [{ name: "JOZUL Team" }],
  
  // Para compartir en redes (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "JOZUL - Transformamos Ideas en Código",
    description: "Desarrollo de software profesional y escalable para empresas modernas.",
    url: "https://jozul.tech",
    siteName: "JOZUL Agencia Digital",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "JOZUL Agencia Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JOZUL - Transformamos Ideas en Código",
    description: "Desarrollo de software profesional y escalable para empresas modernas.",
    images: ["/og-image.jpg"], // Usa la misma imagen que en OpenGraph
  },
  // Icono en la pestaña del navegador
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-24">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}