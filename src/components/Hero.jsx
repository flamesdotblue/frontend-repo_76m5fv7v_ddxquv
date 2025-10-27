import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay to enhance readability, does not block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-light tracking-tight text-white"
        >
          Generate Your SaaS in Minutes. Not Months.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 text-base md:text-lg text-white/70"
        >
          Flux is an AI engine that builds business blueprints, landing pages, and marketing systems — instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            id="generate"
            href="#pricing"
            className="rounded-xl bg-white text-black px-6 py-3 text-sm md:text-base font-medium shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:shadow-[0_0_45px_rgba(255,255,255,0.55)] transition-all"
          >
            Generate My SaaS
          </a>
          <a
            href="#demo"
            className="rounded-xl border border-white/30 text-white/90 px-6 py-3 text-sm md:text-base font-medium backdrop-blur-md hover:bg-white/5 transition-colors"
          >
            See Demo
          </a>
        </motion.div>

        <div className="mt-6 text-xs text-white/50">Powered by Hypersonic Intelligence.</div>
      </div>
    </section>
  );
};

export default Hero;
