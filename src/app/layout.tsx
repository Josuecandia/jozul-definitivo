import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/PreLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. ESTO ES VITAL: Le dice a WhatsApp dónde empieza tu web
  metadataBase: new URL('https://jozul.tech'),

  title: {
    default: "JOZUL | Desarrollo de Software & Apps",
    template: "%s | JOZUL"
  },
  description: "Agencia de tecnología experta en desarrollo web y apps móviles en Querétaro.",
  
  // 2. AQUÍ CONECTAMOS LA IMAGEN DE PUBLIC
  openGraph: {
    title: "JOZUL - Transformamos Ideas en Código",
    description: "Desarrollo de software profesional y escalable para empresas modernas.",
    url: "https://jozul.tech",
    siteName: "JOZUL Agencia Digital",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: '/og-image.jpg', // 👈 Aquí apuntamos a tu archivo en public
        width: 1200,
        height: 630,
        alt: 'JOZUL Agencia Digital',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "JOZUL | Desarrollo de Software",
    description: "Agencia de tecnología experta en desarrollo web y apps.",
    images: ['/og-image.jpg'], // 👈 Lo mismo para X (Twitter)
  },

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