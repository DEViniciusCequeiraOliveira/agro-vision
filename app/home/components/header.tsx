'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-[5%] py-3.5">
        {/* Logo */}
        <img src="logo.png" alt="Logo AgroVision" className="h-16" />

        {/* Menu desktop */}
        <nav>
          <ul className="hidden md:flex gap-5 list-none items-center">
            <li>
              <a href="#home" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300">
                Projetos
              </a>
            </li>
            <li>
              <a href="#equipe" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300">
                Equipe
              </a>
            </li>
            <li>
              <a href="#contato" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E] transition-colors duration-300">
                Contato
              </a>
            </li>
            <li>
              <button
                onClick={() => router.push('/login')}
                className="bg-[#2E5A33] text-white border-2 border-[#2E5A33] px-6 py-2 rounded-full font-semibold hover:text-[#F2C14E] transition-colors duration-300"
              >
                Login
              </button>
            </li>
          </ul>

          {/* Hamburger mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2E5A33] focus:outline-none"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            <li><a href="#home" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E]">Início</a></li>
            <li><a href="#sobre" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E]">Sobre</a></li>
            <li><a href="#projetos" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E]">Projetos</a></li>
            <li><a href="#equipe" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E]">Equipe</a></li>
            <li><a href="#contato" className="text-[#2E5A33] font-semibold hover:text-[#F2C14E]">Contato</a></li>
            <li>
              <button
                onClick={() => router.push('/login')}
                className="bg-[#2E5A33] text-white border-2 border-[#2E5A33] px-6 py-2 rounded-full font-semibold hover:text-[#F2C14E]"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
