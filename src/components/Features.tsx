import { ShieldCheck, Users, FileCheck, CreditCard, UserPlus } from 'lucide-react';
import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Users,
    title: 'Mass Campaigns',
    description: '98% open rate with real-time personalized messaging',
    metric: '40% increase in engagement',
  },
  {
    icon: ShieldCheck,
    title: 'Identity Verification',
    description: 'Secure document verification through WhatsApp',
    metric: 'Verify in seconds',
  },
  {
    icon: FileCheck,
    title: 'Background Check',
    description: 'Automated background verification process',
    metric: '70% faster processing',
  },
  {
    icon: CreditCard,
    title: 'Credit Analysis',
    description: 'Instant credit history verification',
    metric: 'Real-time decisions',
  },
  {
    icon: UserPlus,
    title: 'Smart Onboarding',
    description: 'Streamlined document collection process',
    metric: '60% faster onboarding',
  },
];

export default function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}