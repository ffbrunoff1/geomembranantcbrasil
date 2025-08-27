import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Contato', href: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1756325692404_0.png"
              alt="Geomembrana NTC Brasil"
              className="h-12 w-auto"
            />
            <span className={`ml-3 text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              NTC Brasil
            </span>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="flex items-center space-x-4 ml-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:1152424280"
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-primary-600 hover:bg-primary-50' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Phone size={20} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:contato@ntcbrasil.com.br"
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-primary-600 hover:bg-primary-50' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </nav>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="tel:1152424280"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                >
                  <Phone size={18} />
                  <span>(11) 5242-4280</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:contato@ntcbrasil.com.br"
                  className="p-2 rounded-full text-primary-600 hover:bg-primary-50"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}