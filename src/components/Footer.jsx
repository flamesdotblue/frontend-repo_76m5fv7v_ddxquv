import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-white/60">
        <div className="space-x-5 mb-3">
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <div className="text-white/70">© 2025 Hypersonic Labs. All Rights Reserved.</div>
        <div className="mt-1 text-white/40 text-xs">Flux is part of the Hypersonic ecosystem.</div>
      </div>
    </footer>
  );
};

export default Footer;
