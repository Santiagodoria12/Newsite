import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { fadeInUp, staggerChildren } from '../../utils/animations';
import ProblemCard from '../ui/ProblemCard';
import { problems } from '../../data/problems';

export default function Problems() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </motion.div>
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Desafíos de la Industria
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Problemas comunes que enfrentan las instituciones financieras en la gestión de clientes y operaciones
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {problems.map((problem, index) => (
            <ProblemCard key={problem.title} {...problem} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}