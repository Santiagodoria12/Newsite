import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  impact: string;
  index: number;
}

export default function ProblemCard({
  icon: Icon,
  title,
  description,
  impact,
  index
}: ProblemCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-6">
        <Icon className="w-6 h-6 text-red-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm font-medium text-red-500">
        Impacto: {impact}
      </div>
    </motion.div>
  );
}