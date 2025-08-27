import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Map, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Contato', href: 'contact' }
  ]

  const services = [
    'Geomembrana de PEAD',
    'Consultoria Técnica',
    'Instalação Profissional',
    'Suporte Técnico'
  ]

  const applications = [
    'Aterros Sanitários',
    'Mineração',
    'Canais de Irrigação',
    'Reservatórios',
    'Tratamento de Água',
    'Lagos Artificiais'
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/ntcbrasil.oficial'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/ntcbrasil'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@ntcbrasil'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1756325692404_0.png"
                alt="Geomembrana NTC Brasil"
                className="h-10 w-auto filter brightness-0 invert"
              />
              <span className="ml-3 text-xl font-bold">NTC Brasil</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em soluções de impermeabilização com geomembranas de PEAD. 
              Oferecemos consultoria técnica e instalação profissional em todo o Brasil.
            </p>
            
            <div className="space-y-3">
              <motion.a
                whileHover={{ x: 5 }}
                href="tel:1152424280"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <Phone size={18} className="mr-3" />
                (11) 5242-4280
              </motion.a>
              
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:contato@ntcbrasil.com.br"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <Mail size={18} className="mr-3" />
                contato@ntcbrasil.com.br
              </motion.a>
              
              <div className="flex items-center text-gray-300">
                <Map size={18} className="mr-3" />
                Atendimento em todo Brasil
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mt-8 mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Aplicações</h3>
            <ul className="space-y-3">
              {applications.map((app, index) => (
                <li key={index} className="text-gray-300">
                  {app}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Siga-nos</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Atendimento</h4>
              <p className="text-gray-300 text-sm">
                Segunda a Sexta<br />
                8h às 18h
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Geomembrana NTC Brasil. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Papum</a></em>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}