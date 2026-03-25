import { motion } from 'motion/react';
import { MapPin, Mail, BarChart3, Target, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    name: 'Pin 200+ Homes per Hour',
    description: 'Our mobile app is built for speed. Your sales team can drive through a neighborhood and drop pins on homes needing replacement faster than ever before.',
    icon: Zap,
    colSpan: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  {
    name: 'Satellite Precision',
    description: 'We use high-res satellite imagery to measure the roof accurately without setting foot on the property.',
    icon: BarChart3,
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100'
  },
  {
    name: 'Street View Envelopes',
    description: 'The secret to our insane open rates: the envelope features a street view image of the exact home we are mailing to.',
    icon: Mail,
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100'
  },
  {
    name: 'Custom 5-Page Design',
    description: 'We design a beautiful, custom 5-page estimate template for your brand during onboarding—completely free.',
    icon: ShieldCheck,
    colSpan: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-slate-50',
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-200'
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            A system built for <span className="text-blue-700">residential roofers</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Stop competing for clicks. Start delivering custom bids directly to the homes that need your services the most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group ${feature.colSpan} ${feature.bg}`}
            >
              <div className={`w-14 h-14 ${feature.iconBg} ${feature.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.name}
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
