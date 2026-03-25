import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            No Bulls*it Pricing
          </h2>
          <p className="text-lg text-slate-600">
            We believe in keeping things simple. You only pay for the mailers we send. No hidden fees, no long-term commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Old Way */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-stone-50 p-8 rounded-3xl shadow-sm border border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">✕</span>
              Digital Agencies
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                <span>Expensive monthly retainers ($2k-$5k/mo)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                <span>Long-term 6-12 month contracts</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                <span>Shared leads sold to your competitors</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                <span>Homeowners just shopping for the lowest price</span>
              </li>
            </ul>
          </motion.div>

          {/* The Bidmailers Way */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-700 p-8 rounded-3xl shadow-xl border border-blue-600 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm">✓</span>
              Bidmailers
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3 text-blue-100">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <span className="font-medium text-white">NO Sign Up Cost</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <span className="font-medium text-white">NO Long Term Contracts</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <span className="font-medium text-white">NO Monthly Retainers</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <span><strong className="text-white">ONLY PAY FOR WHAT WE MAIL.</strong> Simple per-mailer pricing that includes measurement, design, printing, and postage.</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-blue-600 relative z-10">
              <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-orange-500/30">
                Get Pricing Details
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
