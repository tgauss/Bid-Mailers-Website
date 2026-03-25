import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-blue-700">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-multiply"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to stop competing for clicks?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the top residential roofers who are using Bidmailers to generate high-intent leads and close more deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg font-semibold transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-xl text-lg font-semibold transition-all border border-blue-600 flex items-center justify-center">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
