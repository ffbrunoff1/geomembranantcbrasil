import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Check, Star, Award, Clock, Calendar } from 'lucide-react'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const productDetails = {
    features: [
      'Material: Polietileno de Alta Densidade (PEAD)',
      'Espessuras disponíveis: 0,5mm a 3,0mm',
      'Larguras: até 9 metros',
      'Resistência química superior',
      'Proteção UV integrada',
      'Flexibilidade em baixas temperaturas',
      'Soldagem por termofusão',
      'Vida útil superior a 50 anos'
    ],
    benefits: [
      'Impermeabilização 100% eficaz',
      'Resistente a produtos químicos agressivos',
      'Instalação rápida e econômica',
      'Baixo custo de manutenção',
      'Proteção ambiental garantida',
      'Certificação internacional',
      'Sustentável e reciclável',
      'Adaptável a qualquer terreno'
    ],
    applications: [
      'Aterros Sanitários e Industriais',
      'Mineração (Pilhas de Lixiviação)',
      'Barragens de Rejeito',
      'Canais de Irrigação e Adução',
      'Reservatórios de Água',
      'Estações de Tratamento',
      'Tanques de Oxidação',
      'Lagos Artificiais e Piscicultura'
    ]
  }

  const tabs = [
    { name: 'Características', content: 'features' },
    { name: 'Benefícios', content: 'benefits' },
    { name: 'Aplicações', content: 'applications' }
  ]

  const testimonials = [
    {
      name: 'João Silva',
      company: 'Mineradora Alpha',
      text: 'Excelente qualidade da geomembrana e instalação impecável. Projeto entregue no prazo.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'Construtora Beta',
      text: 'Equipe técnica muito competente. Suporte completo desde o projeto até a finalização.',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      company: 'Saneamento Gamma',
      text: 'Melhor custo-benefício do mercado. Recomendo para projetos de grande porte.',
      rating: 5
    }
  ]

  const services = [
    {
      title: 'Consultoria Técnica',
      description: 'Análise completa do projeto e especificação da melhor solução',
      icon: Award,
      features: ['Estudo de viabilidade', 'Dimensionamento técnico', 'Especificação de materiais']
    },
    {
      title: 'Fornecimento',
      description: 'Geomembranas de alta qualidade com certificação internacional',
      icon: Shield,
      features: ['Materiais certificados', 'Controle de qualidade', 'Logística especializada']
    },
    {
      title: 'Instalação',
      description: 'Equipe especializada para instalação e soldagem profissional',
      icon: Check,
      features: ['Soldagem termoplástica', 'Testes de qualidade', 'Garantia de instalação']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Geomembrana de{' '}
            <span className="gradient-text">PEAD</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A solução mais eficiente para impermeabilização em diversas aplicações. 
            Oferecemos desde a consultoria técnica até a instalação completa com garantia total.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325683841_1avww5cfn4di_geomembrana-de-pead-1.jpg"
                alt="Geomembrana de PEAD"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325684735_86ytg812lr9_geomembrana-de-pead-10.jpg"
                alt="Instalação profissional"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325685595_1hm5em4rrgy_geomembrana-de-pead-506x372.jpg"
                alt="Aplicação em mineração"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1756325686515_4ssnvwqjn5s_geomembrana-de-pead-7.jpg"
                alt="Projeto finalizado"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center">
                <Shield className="mr-2" size={24} />
                Garantia de Qualidade
              </h3>
              <p className="text-primary-700 leading-relaxed">
                A geomembrana de PEAD é uma solução eficiente para impermeabilização em diversas aplicações, 
                como aterros sanitários, lagos de contenção e proteção de solos. Fabricada em polietileno de 
                alta densidade, oferece excelente resistência a produtos químicos, radiação UV e variações de temperatura.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 font-semibold text-sm transition-all duration-300 ${
                      activeTab === index
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {productDetails[tabs[activeTab].content].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Check className="text-primary-600 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Por que escolher nossa geomembrana?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="text-accent-500" size={18} />
                  <span className="text-sm text-gray-600">Entrega rápida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-accent-500" size={18} />
                  <span className="text-sm text-gray-600">Instalação agendada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-accent-500" size={18} />
                  <span className="text-sm text-gray-600">Certificação ISO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-accent-500" size={18} />
                  <span className="text-sm text-gray-600">Garantia total</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos <span className="gradient-text">Serviços</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card text-center group cursor-pointer"
                >
                  <div className="p-4 bg-primary-100 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-12 h-12 text-primary-600 mt-1" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="text-primary-600 mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Pronto para seu projeto?</h3>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba uma consultoria técnica gratuita para seu projeto de impermeabilização.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-accent-600 hover:shadow-lg"
          >
            Solicitar Orçamento Gratuito
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}