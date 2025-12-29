import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-slate-800">404</h1>
      <div className="absolute">
        <div className="bg-blue-600/20 blur-3xl w-32 h-32 rounded-full"></div>
      </div>
      <h2 className="text-3xl font-bold text-white mt-4 relative z-10">Página no encontrada</h2>
      <p className="text-slate-400 mt-2 max-w-md relative z-10">
        Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha sido movida.
      </p>
      <Link 
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg shadow-blue-600/20 relative z-10"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}