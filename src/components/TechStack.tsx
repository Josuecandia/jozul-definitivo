import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Cloud, Lock, Terminal } from 'lucide-react';

const TECHS = [
  { name: "Next.js", icon: <Code2 /> },
  { name: "React Native", icon: <Smartphone /> },
  { name: "Node.js", icon: <Server /> },
  { name: "TypeScript", icon: <Terminal /> },
  { name: "Supabase", icon: <Database /> },
  { name: "Tailwind CSS", icon: <Layout /> },
  { name: "AWS Cloud", icon: <Cloud /> },
  { name: "Auth0", icon: <Lock /> },
  // Repetimos para el efecto infinito
  { name: "Next.js", icon: <Code2 /> },
  { name: "React Native", icon: <Smartphone /> },
  { name: "Node.js", icon: <Server /> },
  { name: "TypeScript", icon: <Terminal /> },
];

export default function TechStack() {
  return (
    <section className="py-10 bg-slate-950 border-y border-slate-800 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      
      <div className="flex w-[200%] animate-scroll">
        <div className="flex gap-16 items-center px-8">
          {TECHS.map((tech, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-500 font-semibold text-lg whitespace-nowrap">
              <span className="text-blue-500">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
        {/* Duplicado exacto para el loop */}
        <div className="flex gap-16 items-center px-8">
          {TECHS.map((tech, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-2 text-slate-500 font-semibold text-lg whitespace-nowrap">
              <span className="text-blue-500">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}