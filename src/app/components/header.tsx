'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#ffffff] to-[#4CA1AF] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className='flex space-x-4'>
          <Image
              src="/logo.png"     
              alt="Calmnest Logo"
              width={32}
              height={32}
              className="rounded" 
            /> 
            <Link href="/" className="text-2xl font-bold text-yellow-300">Calmnest</Link>
          </div>
            
          <nav className="space-x-6">
            <Link href="/" className="hover:text-yellow-300 text-yellow-300">Accueil</Link>
            <Link href="/contact" className="hover:text-yellow-300 text-yellow-300">Contactez Nous</Link>
            <Link href="/about" className="hover:text-yellow-300 text-yellow-300">A Propos de Nous</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
