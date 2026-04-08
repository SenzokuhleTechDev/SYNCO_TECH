"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react'; 
import { 
  Zap, 
  History, 
  LayoutDashboard, 
  ShoppingCart, 
  TrendingUp, 
  Settings,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function SyncoMemberApp() {
  const [mounted, setMounted] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24 font-sans">
      
      {/* 1. HEADER */}
      <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <motion.div 
            initial={{ rotate: -20 }}
            animate={{ rotate: 0 }}
            className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"
          >
            <Zap size={18} fill="currentColor" />
          </motion.div>
          <h1 className="text-xl font-black tracking-tighter uppercase italic">
            SYNCO<span className="text-blue-600">TECH</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trust Score</p>
            <p className="text-sm font-black text-blue-600 underline decoration-blue-200">842 / 1000</p>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center font-bold text-slate-400 text-xs">
            JD
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto p-4 space-y-6">
        
        {/* 2. THE GLOWING TRUST CARD */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl overflow-hidden border border-white/5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Pool Balance</p>
                <h2 className="text-4xl font-black tracking-tighter italic">R 42,500<span className="text-slate-500 text-2xl">.00</span></h2>
              </div>
              <div className="bg-orange-500/20 p-2 rounded-xl text-orange-500 border border-orange-500/20">
                <Zap size={20} fill="currentColor" />
              </div>
            </div>

            <div className="mt-10 space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-xs font-semibold text-slate-400">December Bulk Buy Goal</span>
                <span className="text-xl font-black text-blue-400">85%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700 p-[2px]">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" 
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. QUICK ACTIONS */}
        <div className="grid grid-cols-2 gap-4">
          <ActionButton 
            icon={<Zap className="text-blue-600" />} 
            label="Contribute" 
            onClick={() => setIsPaying(true)}
            color="bg-blue-50"
          />
          <ActionButton 
            icon={<History className="text-slate-600" />} 
            label="Activity" 
            color="bg-slate-100"
          />
        </div>

        {/* 4. RECENT ACTIVITY FEED */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h3 className="font-black text-slate-800 uppercase tracking-widest text-[11px]">Community Feed</h3>
            <div className="h-px flex-grow mx-4 bg-slate-200"></div>
          </div>

          <AnimatePresence>
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 rounded-3xl flex justify-between items-center border border-slate-100 shadow-sm shadow-slate-200/50 hover:border-blue-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-slate-300 text-xs group-hover:bg-blue-50 group-hover:text-blue-400 transition-colors">
                    0{i}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">Member #00{i} Paid</p>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-emerald-500" />
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Verified by AI</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-emerald-600 font-black text-sm">+R500</p>
                  <p className="text-[9px] text-slate-300">2h ago</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {/* 5. THE "SYNCO CART" TEASER */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-[2rem] border border-orange-100 flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-orange-600">
              <ShoppingCart size={20} />
            </div>
            <div>
              <p className="font-black text-orange-900 text-sm">SYNCO Cart Deals</p>
              <p className="text-xs text-orange-700/60 font-medium italic">Save 15% on bulk Rice & Oil</p>
            </div>
          </div>
          <ChevronRight className="text-orange-300 group-hover:translate-x-1 transition-transform" />
        </div>
      </main>

      {/* 6. BOTTOM NAVIGATION */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm">
        <div className="bg-slate-900/95 backdrop-blur-md rounded-full p-2 flex justify-around items-center shadow-2xl border border-white/10">
          <NavIcon icon={<LayoutDashboard size={20} />} active />
          <NavIcon icon={<ShoppingCart size={20} />} />
          <NavIcon icon={<TrendingUp size={20} />} />
          <NavIcon icon={<Settings size={20} />} />
        </div>
      </footer>
    </div>
  );
}

// SMALLER COMPONENTS FOR CLEANLINESS
function ActionButton({ icon, label, color, onClick }: any) {
  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center gap-3 transition-all hover:shadow-md hover:border-blue-100`}
    >
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center`}>
        {icon}
      </div>
      <span className="font-bold text-slate-700 text-sm">{label}</span>
    </motion.button>
  );
}

function NavIcon({ icon, active = false }: any) {
  return (
    <button className={`p-4 rounded-full transition-all ${active ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white'}`}>
      {icon}
    </button>
  );
}