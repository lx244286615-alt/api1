import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

interface IntroOverlayProps {
  isOpen: boolean;
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ isOpen, onEnter }) => {
  return (
    <div className={`absolute inset-0 z-50 pointer-events-none flex w-full h-full`}>
      {/* Left Panel */}
      <div
        className={`
          relative w-1/2 h-full bg-slate-950 border-r border-slate-800/50
          transition-transform duration-[1500ms] cubic-bezier(0.22, 1, 0.36, 1) will-change-transform
          flex items-center justify-end
          ${isOpen ? '-translate-x-full' : 'translate-x-0'}
          pointer-events-auto
        `}
      >
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1000/1000?grayscale&blur=2')] opacity-10 bg-cover bg-center" />
        <div className={`mr-12 text-slate-700 transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-8xl font-display font-bold tracking-tighter opacity-20 select-none">DATA</h1>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`
          relative w-1/2 h-full bg-slate-950 border-l border-slate-800/50
          transition-transform duration-[1500ms] cubic-bezier(0.22, 1, 0.36, 1) will-change-transform
          flex items-center justify-start
          ${isOpen ? 'translate-x-full' : 'translate-x-0'}
          pointer-events-auto
        `}
      >
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1001/1001?grayscale&blur=2')] opacity-10 bg-cover bg-center" />
        <div className={`ml-12 text-slate-700 transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-8xl font-display font-bold tracking-tighter opacity-20 select-none">CORE</h1>
        </div>
      </div>

      {/* Center Trigger Button Container */}
      <div 
        className={`
          absolute inset-0 flex items-center justify-center z-50 
          transition-all duration-700
          ${isOpen ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}
        `}
      >
        <button
          onClick={onEnter}
          className="
            group pointer-events-auto
            relative w-32 h-32 rounded-full 
            bg-slate-900 border border-slate-700 
            flex flex-col items-center justify-center
            shadow-[0_0_50px_rgba(56,189,248,0.2)]
            hover:shadow-[0_0_80px_rgba(56,189,248,0.6)]
            hover:scale-105 hover:border-sky-500
            transition-all duration-500 ease-out
          "
        >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full border border-sky-500/30 animate-ping opacity-75"></span>
            
            <Lock className="w-8 h-8 text-sky-400 mb-2 group-hover:hidden transition-all" />
            <ArrowRight className="w-8 h-8 text-sky-400 mb-2 hidden group-hover:block transition-all animate-pulse" />
            
            <span className="text-xs font-display tracking-[0.2em] text-slate-400 group-hover:text-sky-300 uppercase">
                点击开启
            </span>
        </button>
      </div>
    </div>
  );
};