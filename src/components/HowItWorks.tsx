import React from 'react';
import { Search, CalendarCheck, FileCheck, Key } from 'lucide-react';
import { motion } from 'framer-motion';

interface HowItWorksProps {
  onExploreClick?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onExploreClick }) => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Browse Verified Flats',
      desc: 'Filter hundreds of inspected apartments in Lekki, Ikoyi, Ikeja, Maitama, and Wuse with real photos and exact pricing in Naira.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Schedule Free Inspection',
      desc: 'Pick your preferred date and time. Take a physical tour with our verified leasing officer or join an HD live WhatsApp video walkthrough.',
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Transparent Agreement',
      desc: 'Review standard tenancy agreements with itemized legal and service fee schedules. Pay directly into secure, verified landlord escrow accounts.',
    },
    {
      number: '04',
      icon: Key,
      title: 'Collect Keys & Move In',
      desc: 'Receive your estate gate pass, meter activation token, and move-in inventory report. Welcome to your peaceful new Nigerian home!',
    },
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4cb882]">
            Seamless Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 leading-[1.18] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif] mt-2">
            <span>How Renting With Us </span>
            <span className="text-[#4cb882]">Works</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-medium">
            From first search to receiving your front-door keys in 4 simple steps.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="relative flex flex-col items-center text-center p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                {/* Step badge */}
                <div className="absolute -top-3.5 bg-[#4cb882] text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
                  Step {step.number}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-[#4cb882] shadow-xs my-4">
                  <Icon className="w-7 h-7 stroke-[2]" />
                </div>

                <h3 className="text-lg font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 sm:mt-18 text-center"
        >
          <button
            type="button"
            id="btn-explore-rentals-cta"
            onClick={onExploreClick}
            className="bg-neutral-950 hover:bg-[#4cb882] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <span>Start Exploring Nigerian Rentals</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
