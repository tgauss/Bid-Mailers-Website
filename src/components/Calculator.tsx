import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, DollarSign, Users, TrendingUp } from 'lucide-react';

export const Calculator = () => {
  const [mailers, setMailers] = useState(1000);
  const [closeRate, setCloseRate] = useState(20);
  const [avgTicket, setAvgTicket] = useState(15000);
  const [callRate, setCallRate] = useState(1.5); // 1.5% call rate

  // Derived metrics
  const totalCost = mailers * 2.5; // Assuming $2.50 per mailer
  const callsGenerated = Math.floor(mailers * (callRate / 100));
  const jobsSold = Math.floor(callsGenerated * (closeRate / 100));
  const totalRevenue = jobsSold * avgTicket;
  const roi = totalCost > 0 ? ((totalRevenue - totalCost) / totalCost) * 100 : 0;

  return (
    <section className="py-24 bg-stone-100 text-slate-900 relative overflow-hidden border-y border-slate-200">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-medium mb-6 shadow-sm">
            <CalcIcon className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl mb-6 text-slate-900">
            Run the numbers for your market.
          </h2>
          <p className="text-lg text-slate-600">
            See the potential return on investment when you target the right homes with custom estimates.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
          >
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-600">Mailers Sent</label>
                  <span className="text-sm font-bold text-slate-900">{mailers.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="500"
                  value={mailers} 
                  onChange={(e) => setMailers(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-600">Average Ticket Size</label>
                  <span className="text-sm font-bold text-slate-900">${avgTicket.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="35000" 
                  step="1000"
                  value={avgTicket} 
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-600">Your Close Rate</label>
                  <span className="text-sm font-bold text-slate-900">{closeRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="1"
                  value={closeRate} 
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <p className="text-xs text-slate-500 mt-2">Remember: These are high-intent leads who already know the price.</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-600">Expected Call Rate</label>
                  <span className="text-sm font-bold text-slate-900">{callRate.toFixed(1)}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="3" 
                  step="0.1"
                  value={callRate} 
                  onChange={(e) => setCallRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-center shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-slate-500 text-sm font-medium mb-1">High-Intent Calls</div>
              <div className="text-4xl font-bold text-slate-900">{callsGenerated}</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-center shadow-sm">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-slate-500 text-sm font-medium mb-1">Jobs Sold</div>
              <div className="text-4xl font-bold text-slate-900">{jobsSold}</div>
            </div>

            <div className="sm:col-span-2 bg-blue-700 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div>
                  <div className="text-blue-100 text-sm font-medium mb-2 uppercase tracking-wider">Estimated Revenue</div>
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    ${totalRevenue.toLocaleString()}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg text-sm font-medium text-white">
                    <TrendingUp className="w-4 h-4" />
                    {roi.toLocaleString(undefined, { maximumFractionDigits: 0 })}% ROI
                  </div>
                </div>
                
                <div className="w-full sm:w-auto text-right">
                  <div className="text-blue-100 text-sm font-medium mb-1">Campaign Cost</div>
                  <div className="text-2xl font-bold text-white mb-6">${totalCost.toLocaleString()}</div>
                  <button className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors">
                    Start Campaign
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
