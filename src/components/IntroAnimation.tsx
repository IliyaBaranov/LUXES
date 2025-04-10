
import { useState, useEffect } from 'react';

const IntroAnimation = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2C2C2C] animate-intro-bg">
      <div className="animate-intro-text text-6xl md:text-9xl font-bold font-['Rubik']">
        <span className="text-[#D06F9C]">L</span>
        <span className="text-brand-blue">U</span>
        <span className="text-[#D06F9C]">X</span>
        <span className="text-brand-blue">E</span>
        <span className="text-[#D06F9C]">$</span>
      </div>
    </div>
  );
};

export default IntroAnimation;
