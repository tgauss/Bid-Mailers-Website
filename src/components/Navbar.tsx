import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">BIDMAILERS</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:admin@bidmailers.com" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact Us</a>
            <button className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-orange-500 hover:bg-orange-600 text-white shadow-[0_4px_14px_0_rgb(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4 md:hidden"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-600 p-2">Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-600 p-2">How it Works</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-600 p-2">Pricing</a>
            <button className="w-full px-5 py-3 bg-orange-500 text-white rounded-xl text-base font-semibold mt-2 shadow-md">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
