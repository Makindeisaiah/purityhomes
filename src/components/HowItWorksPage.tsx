import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  CalendarCheck,
  FileCheck2,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Lock,
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigateToProperties?: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateToProperties,
}) => {
  const steps = [
    {
      number: '01',
      title: 'Search Listings',
      description:
        'Browse verified apartments and homes filtered by neighborhood, budget, and power amenities.',
      icon: Search,
      highlight: '100% verified addresses',
    },
    {
      number: '02',
      title: 'Schedule a Viewing',
      description:
        'Book a free physical walkthrough or instant virtual tour with a verified Purity Homes leasing host.',
      icon: CalendarCheck,
      highlight: 'Flexible inspection times',
    },
    {
      number: '03',
      title: 'Sign Agreement',
      description:
        'Review transparent tenancy terms, itemized service charges, and escrow-backed caution deposits.',
      icon: FileCheck2,
      highlight: 'Secure digital contracts',
    },
    {
      number: '04',
      title: 'Move In',
      description:
        'Complete the digital check-in inventory, receive your keys, and settle into your new home with ease.',
      icon: KeyRound,
      highlight: '24/7 tenant care support',
    },
  ];

  const trustPillars = [
    {
      title: 'Strict Landlord & Property Vetting',
      description:
        'Every listed property undergoes physical inspection, title validation, and landlord identity verification to eliminate fraudulent listings.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Pricing & Service Fees',
      description:
        'No hidden agent charges or unexpected fees. All annual rent, service charges, and legal drafting costs are itemized upfront.',
      icon: CheckCircle2,
    },
    {
      title: 'Escrow Caution Fee Protection',
      description:
        'Your refundable caution fee is held safely in escrow and disbursed cleanly upon lease conclusion without landlord delays.',
      icon: Lock,
    },
    {
      title: 'Rapid Viewing Response',
      description:
        'Schedule tours in seconds. Our local leasing hosts respond within 15 minutes to confirm viewing slots at your convenience.',
      icon: Clock,
    },
  ];

  return (
    <div id="how-it-works-page" className="w-full bg-white text-neutral-900 pb-20">
      {/* 1. Header / Banner Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-neutral-50/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-[#4cb882]/10 border border-[#4cb882]/25 text-[#2d7752] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-5"
          >
            <Sparkles className="w-4 h-4 text-[#4cb882]" />
            <span>Simple, Transparent Rental Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] max-w-3xl mx-auto leading-[1.15]"
          >
            How It <span className="text-[#4cb882]">Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Find, inspect, and lease verified homes and apartments with zero middleman hassle and guaranteed peace of mind.
          </motion.p>
        </div>
      </section>

      {/* 2. 4-Step Process Section (Horizontal Timeline / Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#4cb882]/50 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Header: Numbered Green Circle Badge + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#4cb882] text-white font-extrabold text-base flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#4cb882]/10 text-neutral-700 group-hover:text-[#4cb882] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-950 mb-2.5 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#4cb882] transition-colors">
                    {step.title}
                  </h3>

                  {/* One-line Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Subtle highlight pill */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-[#2d7752]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4cb882] shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Supporting Image Section Reinforcing Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14">
        <div className="bg-neutral-50 rounded-3xl sm:rounded-[2rem] border border-neutral-200/80 p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Trust Pillars */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#4cb882]/15 text-[#2d7752] text-xs font-bold px-3.5 py-1.5 rounded-full w-fit mb-4">
                <ShieldCheck className="w-4 h-4 text-[#4cb882]" />
                <span>Verified & Protected Process</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                Designed For Confident, <br className="hidden sm:inline" />
                <span className="text-[#4cb882]">Stress-Free Renting</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                Traditional renting often means dealing with unverified middlemen, double-billed viewings, and opaque agreements. Purity Homes digitizes and verifies every step for seamless leasing.
              </p>

              {/* Pillars List */}
              <div className="mt-6 space-y-4">
                {trustPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#4cb882]/15 text-[#2d7752] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-[#4cb882]" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Supporting Image */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern verified apartment interior"
                  className="w-full h-80 sm:h-[420px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Floating Trust Card Badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4cb882] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-950">1,200+ Verified Leases Executed</p>
                    <p className="text-[11px] text-neutral-500">Zero middleman disputes across our network</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="bg-neutral-950 rounded-3xl sm:rounded-[2.2rem] p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-xl"
        >
          {/* Subtle green ambient glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#4cb882]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#4cb882]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
              Ready To Find Your <br />
              <span className="text-[#4cb882]">Next Rental Home?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              Explore our curated selection of verified serviced flats, mini flats, and luxury duplexes across Lagos, Abuja, and Port Harcourt.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                id="how-it-works-browse-btn"
                onClick={onNavigateToProperties}
                className="bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-150 shadow-md cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Browse Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
