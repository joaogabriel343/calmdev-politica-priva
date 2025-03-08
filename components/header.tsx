"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/calmdev-logotipo-removebg-preview-DYYFdJ3F2LLzFIriZlgBeu8wWiyi1B.png"
            alt="Logo CalmDev"
            width={150}
            height={40}
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Abrir menu</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navegação desktop */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary">
            Início
          </Link>
          <Link href="/terms" className="text-sm font-medium text-gray-700 hover:text-primary">
            Termos de Uso
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-gray-700 hover:text-primary">
            Política de Privacidade
          </Link>
        </nav>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/terms"
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Termos de Uso
              </Link>
              <Link
                href="/privacy"
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Política de Privacidade
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

