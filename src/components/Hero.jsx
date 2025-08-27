import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Droplets, Factory, Check, Award } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const benefits = [
    'Resistência química superior',
    'Proteção contra radiação UV',
    'Instalação rápida e eficiente',
    'Durabilidade comprovada'
  ]

  const applications = [
    { icon: Shield, title: 'Aterros Sanitários', desc: 'Proteção completa' },
    { icon: Droplets, title: 'Contenção de Água', desc: 'Impermeabilização total' },
    { icon: Factory, title: 'Mineração', desc: 'Soluções industriais' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-300/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent-400/20 rounded-full blur-xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Award className="text-accent-400" size={24} />
              <span className="text-accent-200 font-semibold">Especialistas em Geomembranas</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Soluções Completas em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
                Impermeabilização
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-100 mb-8 leading-relaxed"
            >
              Especialistas em venda técnica e instalação de geomembranas de PEAD. 
              Contamos com engenheiros para oferecer soluções de ponta a ponta para 
              seus projetos de impermeabilização.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Check className="text-accent-400 flex-shrink-0" size={18} />
                  <span className="text-gray-100">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-lg"
              >
                Solicitar Orçamento
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20"
              >
                Nossos Serviços
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325683841_1avww5cfn4di_geomembrana-de-pead-1.jpg"
                  alt="Geomembrana de PEAD"
                  className="w-full h-48 object-cover rounded-xl shadow-2xl"
                />
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325684735_86ytg812lr9_geomembrana-de-pead-10.jpg"
                  alt="Instalação de geomembrana"
                  className="w-full h-40 object-cover rounded-xl shadow-2xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-6 mt-8"
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325685595_1hm5em4rrgy_geomembrana-de-pead-506x372.jpg"
                  alt="Aplicação em mineração"
                  className="w-full h-40 object-cover rounded-xl shadow-2xl"
                />
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325686515_4ssnvwqjn5s_geomembrana-de-pead-7.jpg"
                  alt="Projeto finalizado"
                  className="w-full h-48 object-cover rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {applications.map((app, index) => {
                const IconComponent = app.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white"
                  >
                    <IconComponent className="mx-auto mb-2 text-accent-400" size={24} />
                    <h4 className="font-semibold text-sm mb-1">{app.title}</h4>
                    <p className="text-xs text-gray-200">{app.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}