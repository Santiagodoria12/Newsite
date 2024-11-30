import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';
import { fadeInUp, slideIn } from '../../utils/animations';

export default function Analytics() {
  return (
    <div className="py-20 bg-gray-900">
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
              <BarChart2 className="w-5 h-5 text-[#42b6f5]" />
              <span className="text-[#42b6f5] font-medium">Analytics en Tiempo Real</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Monitorea y Optimiza tus Resultados</h2>
            <p className="text-gray-300 text-lg">
              Obtén insights valiosos sobre el rendimiento de tus campañas y la interacción de tus usuarios.
              Analiza métricas clave para tomar decisiones basadas en datos y optimiza tus estrategias de comunicación.
            </p>
          </motion.div>

          <motion.div
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <img 
              src="https://metalks.co/images/landing_analytics-1024x592.png"
              alt="Analytics Dashboard"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}