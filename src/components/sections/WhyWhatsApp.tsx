import { motion } from 'framer-motion';
import { MessageCircle, TrendingUp, ClipboardList, Workflow, Megaphone } from 'lucide-react';
import { fadeInUp, slideIn } from '../../utils/animations';

const features = [
  { icon: TrendingUp, text: 'Ventas online' },
  { icon: ClipboardList, text: 'Registro de clientes' },
  { icon: Workflow, text: 'Procesos automáticos' },
  { icon: Megaphone, text: 'Campañas de marketing' }
];

export default function WhyWhatsApp() {
  return (
    <div className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-[#42b6f5]/10 rounded-full px-4 py-2">
              <MessageCircle className="w-5 h-5 text-[#42b6f5]" />
              <span className="text-[#42b6f5] font-medium">¿Por qué WhatsApp?</span>
            </div>
            <h2 className="text-3xl font-bold text-white">La plataforma más usada en el mundo</h2>
            <p className="text-gray-300 text-lg">
              WhatsApp es un canal con más de 30 millones de usuarios en Colombia y más de 2.000 millones 
              de usuarios en el mundo. Es la aplicación perfecta para crear canales conversacionales que potencien:
            </p>
          </motion.div>

          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <div key={feature.text} className="bg-gray-700/50 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <feature.icon className="w-8 h-8 text-[#42b6f5] mb-3" />
                <h3 className="text-lg font-semibold text-white">{feature.text}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}