import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Satellite, FileText, PhoneCall, MapPin, CheckCircle2, Mail, UserCheck, Ruler, Layers } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Pin the Home',
    description: "Your team uses our mobile app to drop pins on homes that clearly need a roof replacement. It's fast—up to 200+ homes per hour.",
    icon: Smartphone,
  },
  {
    id: '02',
    title: 'Human Measurement & Pricing',
    description: 'Our trained team uses high-res satellite imagery to manually measure the roof, identify features, and apply your specific pricing per square.',
    icon: Satellite,
  },
  {
    id: '03',
    title: 'We Mail the Bid',
    description: 'We send a custom 5-page mailer. The envelope features a street view of their home, guaranteeing they open it.',
    icon: FileText,
  },
  {
    id: '04',
    title: 'You Get the Call',
    description: 'Homeowners review the detailed estimate. When they call, they already know the price and are ready to move forward.',
    icon: PhoneCall,
  },
];

const Step1Visual = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="relative w-full h-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
  >
    {/* Using a specific map image where we can target actual houses */}
    <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover scale-110" alt="Satellite" />
    
    {/* Animated Pins - Positioned over actual houses in the image */}
    <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} className="absolute top-[35%] left-[32%] text-red-500 drop-shadow-lg flex flex-col items-center">
      <MapPin className="w-10 h-10 fill-red-500" />
      <div className="w-2 h-1 bg-black/30 rounded-full blur-[2px] mt-1"></div>
    </motion.div>
    
    <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, type: "spring" }} className="absolute top-[48%] left-[58%] text-red-500 drop-shadow-lg flex flex-col items-center">
      <MapPin className="w-10 h-10 fill-red-500" />
      <div className="w-2 h-1 bg-black/30 rounded-full blur-[2px] mt-1"></div>
    </motion.div>
    
    <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.1, type: "spring" }} className="absolute top-[65%] left-[45%] text-red-500 drop-shadow-lg flex flex-col items-center">
      <MapPin className="w-10 h-10 fill-red-500" />
      <div className="w-2 h-1 bg-black/30 rounded-full blur-[2px] mt-1"></div>
    </motion.div>

    {/* Target reticle that moves before dropping a pin */}
    <motion.div 
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ 
        x: ['0%', '26%', '26%', '52%', '52%', '39%', '39%'], 
        y: ['0%', '35%', '35%', '48%', '48%', '65%', '65%'],
        opacity: [0, 1, 0, 1, 0, 1, 0]
      }}
      transition={{ duration: 3, times: [0, 0.1, 0.3, 0.4, 0.6, 0.7, 0.9] }}
      className="absolute top-0 left-0 w-12 h-12 border-2 border-blue-500 border-dashed rounded-full -ml-6 -mt-6 z-10"
    />
    
    {/* App UI Overlay */}
    <div className="absolute bottom-0 inset-x-0 bg-white p-6 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
      <div className="flex justify-between items-center">
        <div>
          <motion.div 
            key="counter"
            initial={{ scale: 1.5, color: '#f97316' }}
            animate={{ scale: 1, color: '#0f172a' }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold"
          >
            124
          </motion.div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Pins Dropped</div>
        </div>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/30 flex items-center gap-2">
          <MapPin className="w-5 h-5" /> Drop Pin
        </button>
      </div>
    </div>
  </motion.div>
);

const Step2Visual = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500); // Draw outline
    const timer2 = setTimeout(() => setStep(2), 3000); // Identify features
    const timer3 = setTimeout(() => setStep(3), 4500); // Calculate
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="relative w-full h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center"
    >
      <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-150 origin-center" alt="Satellite Zoomed" />
      
      {/* Human Expert Badge */}
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 z-30">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-xs font-medium text-white">Expert Measurer Active</span>
      </div>

      {/* Roof Polygon Animation - Outline */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.polygon
          points="35,35 65,30 70,60 40,65"
          fill={step >= 1 ? "rgba(59, 130, 246, 0.2)" : "transparent"}
          stroke="#60a5fa"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Ridge lines */}
        {step >= 1 && (
          <motion.line
            x1="35" y1="35" x2="70" y2="60"
            stroke="#60a5fa" strokeWidth="0.3" strokeDasharray="1,1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
          />
        )}
        
        {/* Features (Skylights, Chimney) */}
        {step >= 2 && (
          <>
            <motion.rect x="45" y="40" width="3" height="4" fill="rgba(249, 115, 22, 0.5)" stroke="#f97316" strokeWidth="0.2" initial={{ scale: 0 }} animate={{ scale: 1 }} />
            <motion.rect x="55" y="45" width="3" height="4" fill="rgba(249, 115, 22, 0.5)" stroke="#f97316" strokeWidth="0.2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
            <motion.circle cx="50" cy="55" r="1.5" fill="rgba(16, 185, 129, 0.5)" stroke="#10b981" strokeWidth="0.2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
          </>
        )}
      </svg>

      {/* Processing Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 20 }}
        className="absolute right-4 bottom-4 z-20 bg-white rounded-2xl p-5 shadow-2xl border border-slate-200 w-64"
      >
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <UserCheck className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Verified By</div>
            <div className="text-sm font-bold text-slate-900">Sarah M.</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 flex items-center gap-1.5"><Ruler className="w-3.5 h-3.5" /> Area</span>
            <span className="font-bold text-slate-900">{step >= 1 ? '32.5 SQ' : '---'}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500 flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> Pitch</span>
            <span className="font-bold text-slate-900">{step >= 1 ? '6/12' : '---'}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Features</span>
            <span className="font-bold text-orange-500 text-xs">{step >= 2 ? '2 Skylights, 1 Chimney' : 'Scanning...'}</span>
          </div>
          
          <div className="flex justify-between items-center text-base pt-3 border-t border-slate-100">
            <span className="text-slate-500 font-medium">Est. Price</span>
            {step >= 3 ? (
              <motion.span initial={{ scale: 1.5, color: '#3b82f6' }} animate={{ scale: 1, color: '#10b981' }} className="font-bold text-emerald-600">
                $14,250
              </motion.span>
            ) : (
              <span className="font-bold text-slate-300">Calculating...</span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Step3Visual = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="relative w-full h-full bg-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-blue-100 flex items-center justify-center"
  >
    <div className="relative w-64 h-80">
      {/* Pages stacking */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ y: -200, opacity: 0, rotate: -20, scale: 0.8 }}
          animate={{ y: i * 4, opacity: 1, rotate: (i % 2 === 0 ? 1 : -1) * (i * 0.5), scale: 1 }}
          transition={{ delay: i * 0.3, type: "spring", stiffness: 120, damping: 12 }}
          className="absolute inset-x-0 top-0 h-72 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-200 p-5"
          style={{ zIndex: i }}
        >
          {/* Mock Document Content */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-20 h-6 bg-blue-100 rounded"></div>
            <div className="w-12 h-12 bg-slate-100 rounded-full"></div>
          </div>
          <div className="w-3/4 h-3 bg-slate-200 rounded mb-3"></div>
          <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
          <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
          <div className="w-5/6 h-2 bg-slate-100 rounded mb-6"></div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
            <div className="h-16 bg-slate-50 rounded border border-slate-100"></div>
          </div>
          
          {i === 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
              <div className="w-1/3 h-4 bg-emerald-100 rounded"></div>
              <div className="w-1/4 h-6 bg-emerald-500 rounded"></div>
            </motion.div>
          )}
        </motion.div>
      ))}
      
      {/* Envelope sliding up */}
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 80, opacity: 1 }}
        transition={{ delay: 2.2, type: "spring", stiffness: 80, damping: 15 }}
        className="absolute inset-x-0 bottom-0 h-56 bg-[#f8f9fa] rounded-t-sm shadow-[0_-20px_40px_rgba(0,0,0,0.15)] z-20 flex items-center justify-center border-t border-x border-slate-200"
      >
        {/* Envelope Flap */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-slate-200/50 to-transparent border-b border-slate-200/50"></div>
        
        {/* Postage */}
        <div className="absolute top-4 right-4 w-8 h-10 border-2 border-slate-300 border-dashed rounded-sm flex items-center justify-center bg-white/50"></div>
        
        {/* The Window - Showing Street View */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[85%] h-28 bg-white rounded border-2 border-slate-300 overflow-hidden shadow-inner">
           <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-90" alt="Street View" />
           <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-mono font-bold text-slate-800 border border-slate-100">
             1234 OAKRIDGE LN
           </div>
           <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
             Open Immediately
           </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Step4Visual = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="relative w-full h-full bg-emerald-50 rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 flex items-center justify-center"
  >
    <motion.div 
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="w-72 bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden"
    >
      <div className="bg-slate-900 p-8 text-center relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-emerald-500/30 rounded-full blur-3xl"
        ></motion.div>
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
          <PhoneCall className="w-10 h-10 text-white animate-pulse" />
        </div>
        <h4 className="text-white font-bold text-xl relative z-10 mb-1">Incoming Call</h4>
        <p className="text-emerald-400 text-base font-medium relative z-10">John Doe</p>
      </div>
      <div className="p-5 bg-slate-50 border-t border-slate-100">
        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Lead Source</div>
        <div className="flex items-center gap-3 text-base font-bold text-slate-900 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Mail className="w-4 h-4 text-blue-600" />
          </div>
          Bidmailer Campaign
        </div>
      </div>
      <div className="flex p-4 gap-4 bg-slate-50">
        <button className="flex-1 py-3.5 bg-red-100 text-red-600 font-bold text-sm rounded-xl hover:bg-red-200 transition-colors">Decline</button>
        <button className="flex-1 py-3.5 bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors">Accept</button>
      </div>
    </motion.div>
  </motion.div>
);

const visuals = [Step1Visual, Step2Visual, Step3Visual, Step4Visual];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000); // Increased time to allow animations to finish
    return () => clearInterval(interval);
  }, []);

  const ActiveVisual = visuals[activeStep];

  return (
    <section id="how-it-works" className="py-24 bg-white text-slate-900 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold sm:text-5xl mb-6 tracking-tight text-slate-900">
            How Bidmailers Works
          </h2>
          <p className="text-lg text-slate-600">
            A streamlined process designed to turn targeted neighborhoods into high-intent leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps List */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-xl border border-slate-200 scale-[1.02]' 
                      : 'hover:bg-slate-50 border border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex gap-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-bold tracking-wider ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                          {step.id}
                        </span>
                        <h3 className={`text-xl font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className={`leading-relaxed ${isActive ? 'text-slate-600' : 'text-slate-500'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Bar for active step */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-step-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 rounded-l-2xl"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Visuals */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <AnimatePresence mode="wait">
              <ActiveVisual key={activeStep} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
