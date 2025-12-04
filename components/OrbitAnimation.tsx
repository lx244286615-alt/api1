import React from 'react';

interface OrbitAnimationProps {
  isActive: boolean;
}

export const OrbitAnimation: React.FC<OrbitAnimationProps> = ({ isActive }) => {
  return (
    <div className={`relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Core Glow */}
      <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[100px] animate-pulse" />

      {/* SVG Animation Container */}
      <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Outer Ring Dashed */}
        <circle cx="300" cy="300" r="280" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="1" strokeDasharray="10 20" className="animate-[spin_20s_linear_infinite_reverse] origin-center" />
        
        {/* Middle Tech Ring */}
        <g className="animate-[spin_15s_linear_infinite] origin-center">
            <circle cx="300" cy="300" r="230" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
            <path d="M 300 70 L 300 90" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 300 530 L 300 510" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 70 300 L 90 300" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 530 300 L 510 300" stroke="#38bdf8" strokeWidth="2" />
        </g>

        {/* Inner Octagon Rotating */}
        <g className="animate-[spin_10s_linear_infinite_reverse] origin-center opacity-60">
            <polygon points="300,150 406,194 450,300 406,406 300,450 194,406 150,300 194,194" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1" fill="transparent" />
        </g>

        {/* Inner Circles with varying stroke widths */}
        <circle cx="300" cy="300" r="120" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="20" className="animate-pulse" />
        <circle cx="300" cy="300" r="120" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" className="animate-[spin-slow_4s_linear_infinite]" strokeDasharray="100 300" />
        
        {/* Center Nucleus */}
        <circle cx="300" cy="300" r="40" fill="url(#grad1)" className="animate-pulse-fast" />
        
        {/* Orbital Particle */}
        <g className="animate-[spin_3s_linear_infinite] origin-center">
             <circle cx="300" cy="100" r="6" fill="#38bdf8" className="drop-shadow-[0_0_10px_#38bdf8]" />
        </g>
         <g className="animate-[spin_5s_linear_infinite_reverse] origin-center">
             <circle cx="300" cy="450" r="4" fill="#a78bfa" className="drop-shadow-[0_0_10px_#a78bfa]" />
        </g>

        {/* Gradients */}
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.2 }} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};