import React from 'react';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2 select-none">
          <Rocket className="w-5 h-5 text-white/90" />
          <div className="relative text-sm tracking-widest uppercase text-white/90">
            <span className="font-light">Flux by Hypersonic</span>
            <span className="absolute -bottom-1 left-0 h-px w-full bg-white/30 blur-[1px]" />
            <span className="absolute -bottom-1 left-0 h-px w-1/3 bg-white/80 animate-pulse" />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {['Features','Pricing','Launch Studio','Docs','Login'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#generate"
          className="ml-6 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:shadow-[0_0_40px_rgba(255,255,255,0.55)] transition-all"
        >
          Generate Startup →
        </a>
      </div>
    </header>
  );
};

export default Header;
