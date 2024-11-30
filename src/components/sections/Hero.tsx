import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Scene from '../3d/Scene';
import { fadeInUp, fadeInScale } from '../../utils/animations';
import RotatingText from '../ui/RotatingText';
import CTAButton from '../ui/CTAButton';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <Scene />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80&w=2070')] opacity-5 bg-cover bg-center" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          {...fadeInUp}
          className="flex justify-center mb-8"
        >
          <MessageCircle className="w-20 h-20 text-[#42b6f5]" />
        </motion.div>
        <motion.h1
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          <div className="flex items-center justify-center gap-x-3">
            <span>Transforma el sector</span>
            <RotatingText />
          </div>
          <div>con WhatsApp e IA</div>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8"
        >
          Potenciando empresas con Automatización Inteligente
        </motion.p>
        <motion.div
          {...fadeInScale}
          transition={{ ...fadeInScale.transition, delay: 0.6 }}
        >
          <CTAButton text="Contactar Ventas" href="https://metalks.co/contact-2/"/>
        </motion.div>
      </div>
    </div>
  );
}