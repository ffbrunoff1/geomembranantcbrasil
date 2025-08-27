import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Shield, Building, Mountain, Waves, Factory, Truck } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '500+', label: 'Projetos Realizados', icon: Building },
    { number: '100%', label: 'Satisfação do Cliente', icon: Shield },
    { number: '24/7', label: 'Suporte Técnico', icon: Users }
  ]

  const applications = [
    {
      icon: Building,
      title: 'Aterro Sanitário e Industrial',
      description: 'Soluções completas para contenção e proteção ambiental em aterros.'
    },
    {
      icon: Mountain,
      title: 'Mineração',
      description: 'Base de pilha de lixiviação e barragem de rejeito com máxima segurança.'
    },
    {
      icon: Waves,
      title: 'Canal de Irrigação',
      description: 'Impermeabilização para canais de irrigação e adução em UHE e PCH.'
    },
    {
      icon: Droplets,
      title: 'Armazenamento de Água',
      description: 'Reservatórios para água potável, servida e efluentes industriais.'
    },
    {
      icon: Factory,
      title: 'Tratamento de Água e Esgoto',
      description: 'Revestimento de tanques em estações de tratamento e oxidação biológica.'
    },
    {
      icon: Truck,
      title: 'Aplicações Especiais',
      description: 'Lagos artificiais, piscicultura, esterqueira, biodigestores e coberturas.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Especialistas em{' '}
            <span className="gradient-text">Geomembranas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A NTC Brasil é referência nacional em soluções de impermeabilização com geomembranas de PEAD. 
            Nossa equipe de engenheiros especializados oferece desde a consultoria técnica até a instalação 
            completa de seus projetos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card text-center hover:shadow-2xl transform transition-all duration-300"
              >
                <IconComponent className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossas Principais <span className="gradient-text">Aplicações</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const IconComponent = app.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{app.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Por que escolher a NTC Brasil?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Shield className="w-12 h-12 mx-auto mb-4 text-accent-300" />
              <h4 className="text-xl font-semibold mb-3">Qualidade Garantida</h4>
              <p className="text-gray-100">Utilizamos apenas geomembranas de primeira linha com certificação internacional.</p>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4 text-accent-300" />
              <h4 className="text-xl font-semibold mb-3">Equipe Especializada</h4>
              <p className="text-gray-100">Engenheiros experientes para projetos complexos e instalações precisas.</p>
            </div>
            <div>
              <Award className="w-12 h-12 mx-auto mb-4 text-accent-300" />
              <h4 className="text-xl font-semibold mb-3">Suporte Completo</h4>
              <p className="text-gray-100">Desde o projeto até a manutenção, oferecemos suporte técnico integral.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}