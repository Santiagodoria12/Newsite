import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: string[];
  index: number;
}

export default function SolutionCard({
  icon: Icon,
  title,
  description,
  metrics,
  index
}: SolutionCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1d5370] mb-6">
        <Icon className="w-6 h-6 text-[#42b6f5]" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="space-y-2">
        {metrics.map((metric) => (
          <div key={metric} className="text-sm font-medium text-[#42b6f5]">
            {metric}
          </div>
        ))}
      </div>
    </motion.div>
  );
}