import { MapPin, Navigation } from 'lucide-react';

export const AppMockup = () => (
  <div className="relative mx-auto border-slate-900 bg-slate-900 border-[12px] rounded-[2.5rem] h-[580px] w-[280px] shadow-2xl">
    <div className="w-[120px] h-[18px] bg-slate-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-100 relative">
      <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" alt="Map view" />
      
      <div className="absolute top-10 left-3 right-3 bg-white/95 backdrop-blur rounded-xl shadow-lg p-3 flex items-center gap-3 z-10">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Navigation className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider leading-tight">Current Area</p>
          <p className="text-xs font-bold text-slate-900">Oakridge Estates</p>
        </div>
      </div>

      <div className="absolute top-[40%] left-[30%] w-5 h-5 bg-emerald-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="absolute top-[55%] left-[60%] w-5 h-5 bg-emerald-500 rounded-full border-2 border-white shadow-md flex items-center justify-center animate-bounce">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      <div className="absolute top-[70%] left-[45%] w-5 h-5 bg-emerald-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 pb-6 rounded-t-3xl shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] z-10">
        <div className="flex justify-between items-center mb-4 px-2">
          <div>
            <div className="text-2xl font-bold text-slate-900">124</div>
            <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Pins Dropped</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">1.5h</div>
            <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Time Elapsed</div>
          </div>
        </div>
        <button className="w-full bg-orange-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
          <MapPin className="w-5 h-5" /> Drop Pin Here
        </button>
      </div>
    </div>
  </div>
);

export const MailerMockup = () => (
  <div className="relative w-[320px] sm:w-[400px] aspect-[1.5] bg-[#f8f9fa] rounded-md shadow-2xl border border-slate-200 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
    {/* Envelope Flap Effect */}
    <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-slate-200/50 to-transparent border-b border-slate-200/50"></div>
    
    {/* Return Address Lines */}
    <div className="absolute top-5 left-5 space-y-1.5 z-10">
      <div className="w-24 h-1.5 bg-slate-300 rounded"></div>
      <div className="w-16 h-1.5 bg-slate-200 rounded"></div>
    </div>

    {/* Postage Stamp */}
    <div className="absolute top-4 right-4 w-10 h-12 border-2 border-slate-300 border-dashed rounded-sm flex items-center justify-center z-10 bg-white/50 backdrop-blur-sm">
      <span className="text-[6px] text-slate-400 font-bold uppercase tracking-widest rotate-90">Postage</span>
    </div>

    {/* Teaser Copy on Envelope */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center w-full max-w-[45%] z-10">
      <p className="text-blue-600 font-bold text-[8px] uppercase tracking-wider mb-0.5">Custom Estimate</p>
      <p className="text-slate-900 font-black text-sm uppercase leading-tight">
        YOUR ROOF REPLACEMENT
      </p>
    </div>

    {/* The Window - Showing Street View - Made much larger */}
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[88%] h-[62%] bg-white rounded border-2 border-slate-300 overflow-hidden shadow-inner z-10">
      <img 
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600" 
        className="w-full h-full object-cover opacity-90" 
        alt="House street view" 
      />
      
      {/* Address Overlay inside window */}
      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded text-[10px] font-mono font-bold text-slate-800 shadow-sm border border-slate-100">
        1234 OAKRIDGE LN<br/>
        <span className="text-[8px] text-slate-500 font-normal">SEATTLE, WA 98101</span>
      </div>

      {/* "Open Immediately" Badge inside the window */}
      <div className="absolute top-3 right-3 bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide shadow-md">
        Open Immediately
      </div>
    </div>
    
    {/* Texture Overlay */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none z-20"></div>
  </div>
);
