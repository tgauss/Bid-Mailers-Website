import { motion } from 'motion/react';
import { HardHat, Zap, DollarSign } from 'lucide-react';

export const TargetAudience = () => {
  return (
    <section className="py-24 bg-stone-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
              Built by roofers, <br />
              <span className="text-blue-600">for roofers.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We know the roofing business because we were in it. We started Bidmailers because we needed a faster, more cost-effective way to get our bids into the hands of people who truly needed a new roof.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We understand the daily grind because we've lived it. Now, we've switched our focus entirely to running Bidmailers to help you grow your roofing or home services company. No fluff, just a system that works.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">Fast</h4>
                  <p className="text-slate-600">Pin 200+ homes an hour. We measure, print, and ship your custom bids weekly.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">Affordable</h4>
                  <p className="text-slate-600">Stop paying retainers for shared digital leads. You only pay for the exact mailers we send.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <HardHat className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">Effective</h4>
                  <p className="text-slate-600">When homeowners call with your 5-page custom estimate in hand, they aren't shopping—they're buying.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-orange-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
              alt="Roofing founders" 
              className="rounded-3xl shadow-xl object-cover w-full h-auto aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                <HardHat className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Roofer Owned</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
