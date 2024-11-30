import { motion } from 'framer-motion';
import SolutionCard from '../ui/SolutionCard';
import { solutions } from '../../data/solutions';
import { fadeInUp, staggerChildren, slideIn } from '../../utils/animations';
import { MessageCircle, Shield, Check, Send } from 'lucide-react';
import VerificationDemo from '../ui/VerificationDemo';
import CTAButton from '../ui/CTAButton';
import MassMessagingDemo from '../ui/MassMessagingDemo';

export default function Solutions() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <MessageCircle className="w-16 h-16 text-[#42b6f5]" />
          </motion.div>
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl font-bold text-white mb-3"
          >
            Nuestras Soluciones
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Transforma la experiencia de tus clientes con nuestras soluciones potenciadas por WhatsApp
          </motion.p>
          <CTAButton text="Agenda una Demo" href="https://metalks.co/contact-2/" className="mb-8" />
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} {...solution} index={index} />
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-[#1d5370]/30 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-[#42b6f5]" />
              <span className="text-[#42b6f5] font-medium">Verificación y Onboarding</span>
            </div>
            <h3 className="text-3xl font-bold text-white">Validación de Identidad y Onboarding Digital</h3>
            <p className="text-gray-400">
              Automatiza la verificación de identidad, procesos KYC y onboarding digital a través de WhatsApp. 
              Reduce el tiempo de registro en un 80% mientras mantienes los más altos estándares de seguridad 
              y mejoras la experiencia del usuario.
            </p>
            <ul className="space-y-3">
              {[
                'Verificación biométrica en segundos',
                'Validación automática de documentos',
                'Proceso de registro guiado paso a paso',
                'Cumplimiento normativo garantizado',
                'Recopilación de documentos simplificada',
                'Experiencia fluida y sin fricción'
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#42b6f5]" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <CTAButton text="Agenda una Reunión" href="https://metalks.co/contact-2/" />
          </motion.div>
          
          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <VerificationDemo />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <MassMessagingDemo />
          </motion.div>

          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-[#1d5370]/30 rounded-full px-4 py-2">
              <Send className="w-5 h-5 text-[#42b6f5]" />
              <span className="text-[#42b6f5] font-medium">Comunicación Masiva</span>
            </div>
            <h3 className="text-3xl font-bold text-white">Automatización de Comunicaciones</h3>
            <p className="text-gray-400">
              Potencia tus comunicaciones con campañas masivas personalizadas vía WhatsApp. 
              Alcanza a tus clientes con mensajes relevantes y oportunos, logrando tasas de 
              apertura del 98% y mejorando significativamente el engagement.
            </p>
            <ul className="space-y-3">
              {[
                'Campañas personalizadas y segmentadas',
                'Mensajes automatizados con IA',
                'Seguimiento en tiempo real',
                'Análisis detallado de resultados',
                'Integración con CRM',
                'Respuestas automáticas inteligentes'
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#42b6f5]" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}