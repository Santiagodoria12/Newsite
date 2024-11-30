import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  metric,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-6">
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm font-medium text-emerald-600">{metric}</div>
    </div>
  );
}