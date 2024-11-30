import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone } from 'lucide-react';
import { fadeInUp, slideIn } from '../../utils/animations';

export default function OmniChannel() {
  return (
    <div className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Comunicación Omnicanal</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Potencia tu estrategia de comunicación con múltiples canales integrados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageSquare,
              title: 'SMS',
              description: 'Mensajería directa con alta tasa de entrega y lectura'
            },
            {
              icon: Mail,
              title: 'Email Marketing',
              description: 'Campañas personalizadas con seguimiento y análisis detallado'
            },
            {
              icon: Phone,
              title: 'AI Callers',
              description: 'Llamadas automatizadas con inteligencia artificial para seguimiento efectivo'
            }
          ].map((channel) => (
            <motion.div
              key={channel.title}
              variants={slideIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gray-700/50 p-8 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <channel.icon className="w-12 h-12 text-[#42b6f5] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
              <p className="text-gray-300">{channel.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}