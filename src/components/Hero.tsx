import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { AppMockup, MailerMockup } from './Mockups';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fafaf9] text-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Built by roofers, for roofers
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-slate-900">
              Stop buying shared leads. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Mail custom bids.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              We used to knock doors and buy crappy shared leads. Then we built Bidmailers. You drop the pins, we measure the roof, and we mail a custom 5-page bid. Fast, affordable, and effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg font-semibold transition-all shadow-[0_8px_30px_rgb(249,115,22,0.3)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-sm">
                <Play className="w-5 h-5 fill-current text-slate-400" />
                Watch Overview
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Pin 200+ homes/hr</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Satellite measured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span>High-intent leads</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[650px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-full">
              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-slate-200 rounded-full"></div>
              
              {/* App Mockup */}
              <div className="absolute top-[5%] left-0 w-64 md:w-72 -rotate-6 transform-gpu shadow-2xl rounded-[2.5rem] z-10 border border-slate-200 bg-white">
                <AppMockup />
              </div>
              
              {/* Mailer Mockup */}
              <div className="absolute bottom-[10%] right-0 w-72 md:w-80 rotate-3 transform-gpu shadow-2xl rounded-xl z-20 translate-y-12 md:translate-y-0 border border-slate-200">
                <MailerMockup />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
