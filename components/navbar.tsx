"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <a href="#" className="text-xl font-bold text-gray-800">
          Aidan Lottering
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          <a href="#about" className="text-gray-600 hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-gray-600 hover:text-blue-400 transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-gray-600 hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#education" className="text-gray-600 hover:text-blue-400 transition-colors">
            Education
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="px-4 py-2 space-y-2 bg-white/95 backdrop-blur-sm md:hidden">
          <a href="#about" className="block py-2 text-gray-600 hover:text-blue-400" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" className="block py-2 text-gray-600 hover:text-blue-400" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#experience" className="block py-2 text-gray-600 hover:text-blue-400" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#projects" className="block py-2 text-gray-600 hover:text-blue-400" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#education" className="block py-2 text-gray-600 hover:text-blue-400" onClick={toggleMenu}>
            Education
          </a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-400" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </header>
  )
}