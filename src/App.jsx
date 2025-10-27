import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

const App = () => {
  // Simple cursor trail (white glow)
  const trailRef = useRef(null);
  useEffect(() => {
    const root = trailRef.current;
    if (!root) return;
    const dots = Array.from({ length: 14 }).map(() => {
      const el = document.createElement('span');
      el.className = 'pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.85)]';
      el.style.transition = 'transform 0.3s ease-out, opacity 0.6s ease';
      el.style.opacity = '0';
      root.appendChild(el);
      return el;
    });
    let i = 0;
    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      const el = dots[i % dots.length];
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.opacity = '1';
      setTimeout(() => (el.style.opacity = '0'), 250);
      i++;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-[#0A0A0A] text-white font-inter relative overflow-hidden">
      {/* Page mount subtle motion blur */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Header />
        <Hero />
        <Sections />
        <Footer />
      </motion.div>

      {/* Cursor trail container */}
      <div ref={trailRef} className="pointer-events-none fixed inset-0 z-[60]" />

      {/* Subtle radial vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.05),rgba(0,0,0,0)_60%)]" />
    </div>
  );
};

export default App;
