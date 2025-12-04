import React, { useState } from 'react';
import { IntroOverlay } from './components/IntroOverlay';
import { MainContent } from './components/MainContent';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnter = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900 text-white">
      {/* Background Content (Visible after reveal) */}
      <MainContent isOpen={isOpen} />

      {/* Foreground Overlay (The Gate) */}
      <IntroOverlay isOpen={isOpen} onEnter={handleEnter} />
    </div>
  );
}