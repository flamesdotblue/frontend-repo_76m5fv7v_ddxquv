import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FeatureCard = ({ title, description, index }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(255,255,255,0.15)' }}
    className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7 text-white/90"
  >
    <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
    <div className="relative">
      <div className="text-xs uppercase tracking-widest text-white/50 mb-2">0{index + 1}</div>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const PricingCard = ({ plan, price, features, cta, highlight }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: '0 0 50px rgba(255,255,255,0.15)' }}
    className={`relative rounded-2xl border ${highlight ? 'border-white/30' : 'border-white/10'} bg-white/5 backdrop-blur-xl p-6 md:p-7 text-white/90`}
  >
    <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
    <div className="relative">
      <div className="flex items-end justify-between">
        <h4 className="text-lg font-medium text-white">{plan}</h4>
        <div className="text-white">
          <span className="text-2xl font-light">{price}</span>
          {price !== 'Free' && <span className="text-sm text-white/60">/mo</span>}
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/80">
            <Check className="w-4 h-4 mt-0.5 text-white/70" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-6 inline-block rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
          highlight
            ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:shadow-[0_0_45px_rgba(255,255,255,0.55)]'
            : 'border border-white/30 text-white/90 backdrop-blur-md hover:bg-white/5'
        }`}
      >
        {cta}
      </a>
    </div>
  </motion.div>
);

const Sections = () => {
  return (
    <div id="features" className="relative z-10">
      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            index={0}
            title="AI SaaS Generator"
            description="Type your idea → Flux builds your niche, product, and pricing in seconds."
          />
          <FeatureCard
            index={1}
            title="Auto Website Builder"
            description="Generate landing pages that sell. Directly deploy to Vercel or Framer."
          />
          <FeatureCard
            index={2}
            title="Smart Monetization"
            description="Predicts pricing models, affiliate potential, and user growth trends."
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-8 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-white">Start Fast. Scale Faster.</h2>
          <p className="mt-2 text-white/60 text-sm">Cancel anytime. 7-day free trial.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard
            plan="Starter"
            price="Free"
            cta="Get Started"
            features={[
              'Generate 3 SaaS Blueprints/month',
              'Basic templates & export',
              'Limited AI Branding',
              'Access to Discord (Starter Area)'
            ]}
          />
          <PricingCard
            plan="Pro"
            price="$19"
            cta="Go Pro"
            features={[
              '10 Business Blueprints',
              'Website Export (HTML/Framer)',
              'Monetization Insights',
              'Branding Pack',
              'Access to Discord (Pro Area)'
            ]}
          />
          <PricingCard
            plan="Hypersonic+"
            price="$49"
            cta="Upgrade Now"
            highlight
            features={[
              'Full Automation Suite',
              '20 Business Blueprints',
              'Early Access to Hypersonic Tools',
              'Access to Discord (Flux Nerds)'
            ]}
          />
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl text-white font-light mb-3">Mini Demo</h3>
              <p className="text-white/70 text-sm mb-5">
                Type your niche: <span className="text-white/90">[input box]</span> → Flux generates startup idea instantly.
              </p>
              <div className="flex items-center gap-3">
                <input
                  aria-label="niche"
                  placeholder="AI Tool for Designers"
                  className="flex-1 rounded-xl bg-black/60 border border-white/15 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:shadow-[0_0_40px_rgba(255,255,255,0.55)] transition-all">
                  Generate
                </button>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-5 text-white/80">
              <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Example</div>
              <div className="text-white text-lg">“PixelPilot” — SaaS for auto UI generation.</div>
              <p className="mt-2 text-white/60 text-sm">
                Blueprint: Landing page + onboarding + pricing model with affiliate loops.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[11px] text-white/40 text-center max-w-3xl mx-auto">
          Policy: Accounts are automatically deactivated if monthly payments fail. Deleting an account requires password confirmation. After deletion, the same email cannot be used to sign up again.
        </p>
      </section>
    </div>
  );
};

export default Sections;
