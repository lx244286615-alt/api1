import React, { useEffect, useState } from 'react';
import { OrbitAnimation } from './OrbitAnimation';
import { Activity, Cpu, Globe, Zap } from 'lucide-react';

interface MainContentProps {
  isOpen: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({ isOpen }) => {
  const [showContent, setShowContent] = useState(false);

  // Delay showing content slightly until gates open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-black">
        
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Container */}
      <div className={`
        relative z-10 w-full max-w-7xl px-6 h-full flex flex-col items-center justify-center
        transition-all duration-1000 ease-out delay-300
        ${isOpen ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'}
      `}>
        
        {/* Header */}
        <header className="absolute top-0 left-0 w-full py-8 flex justify-between items-center px-8 border-b border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-sky-600 rounded-md flex items-center justify-center">
                    <Activity className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-bold text-xl tracking-wider text-slate-200">NEXUS<span className="text-sky-500">CORE</span></span>
            </div>
            <nav className="hidden md:flex gap-8 text-sm text-slate-400 font-medium tracking-wide">
                <a href="#" className="hover:text-sky-400 transition-colors">系统监控</a>
                <a href="#" className="hover:text-sky-400 transition-colors">数据分析</a>
                <a href="#" className="hover:text-sky-400 transition-colors">网络拓扑</a>
                <a href="#" className="hover:text-sky-400 transition-colors">关于我们</a>
            </nav>
        </header>

        {/* Centerpiece Animation */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
            <div className="relative">
                <OrbitAnimation isActive={showContent} />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center space-y-2 mix-blend-screen">
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                            未来视界
                        </h2>
                        <p className="text-sky-200/60 tracking-[0.3em] text-sm uppercase">System Online • Ready</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Floating Cards (Bottom) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <Card 
                icon={<Cpu className="w-6 h-6 text-pink-400" />} 
                title="神经处理单元" 
                value="98.2%" 
                label="负载效率"
                delay={800}
                show={showContent}
             />
             <Card 
                icon={<Globe className="w-6 h-6 text-sky-400" />} 
                title="全球节点连接" 
                value="4,291" 
                label="活跃终端"
                delay={900}
                show={showContent}
             />
             <Card 
                icon={<Zap className="w-6 h-6 text-amber-400" />} 
                title="实时能量流" 
                value="12.4 TW" 
                label="输出功率"
                delay={1000}
                show={showContent}
             />
        </div>
      </div>
    </div>
  );
};

// Sub-component for Info Cards
const Card = ({ icon, title, value, label, delay, show }: any) => (
    <div 
        className={`
            group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-xl p-6
            hover:border-sky-500/30 hover:bg-slate-800/40 transition-all duration-500
            transform
            ${show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-950/50 px-2 py-1 rounded border border-white/5">LIVE</span>
        </div>
        <div className="space-y-1">
            <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
            <div className="text-3xl font-display font-bold text-white tracking-tight">{value}</div>
            <p className="text-xs text-slate-600 uppercase tracking-wider">{label}</p>
        </div>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
);