import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOZUL | Desarrollo de Software & Apps",
  description: "Agencia de tecnología experta en desarrollo web, aplicaciones móviles y transformación digital. Llevamos tu negocio al siguiente nivel.",
  keywords: ["Desarrollo Web", "App Móvil", "Software", "Agencia Digital", "React", "Next.js"],
  authors: [{ name: "JOZUL Team" }],
  openGraph: {
    title: "JOZUL - Transformamos Ideas en Código",
    description: "Desarrollo de software profesional y escalable para empresas modernas.",
    url: "https://tudominio.com", // <--- Pon tu dominio real cuando lo tengas
    siteName: "JOZUL",
    images: [
      {
        url: "/og-image.jpg", // <--- Tendrás que poner una imagen jpg en la carpeta public
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* 1. lang="es": Importante para SEO en español.
      2. scroll-smooth: Activa la animación suave al navegar.
      3. scroll-pt-24: Deja espacio arriba para que el menú fijo no tape los títulos.
    */
    <html lang="es" className="scroll-smooth scroll-pt-24">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
