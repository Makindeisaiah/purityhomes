import React from 'react';
import { Zap, ShieldCheck, Droplets, Lock, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const RentalPerks: React.FC = () => {
  const perks = [
    {
      icon: Zap,
      title: '24/7 Power Guarantee',
      desc: 'No blackouts. All listed serviced apartments and terraces feature verified central diesel generators, solar inverters, or dedicated estate power supply.',
    },
    {
      icon: ShieldCheck,
      title: '100% Vetted Landlords',
      desc: 'Zero fake agents and zero scam listings. We physically verify property ownership, Governor’s Consent / C of O titles, and landlord identities before listing.',
    },
    {
      icon: Droplets,
      title: 'Treated Water Systems',
      desc: 'Enjoy crystal-clear, laboratory-tested borehole water backed by modern industrial water treatment plants in every residential complex.',
    },
    {
      icon: Lock,
      title: 'Gated Estate Security',
      desc: 'Uniformed security guards, armed mobile police (MOPOL) patrol, perimeter electric fencing, and smart visitor call-in access control.',
    },
    {
      icon: FileText,
      title: 'Transparent Tenancy Fees',
      desc: 'Complete upfront transparency on annual rent, service charges, caution fees, and standard legal agency rates. No surprise bills or unauthorized fees.',
    },
    {
      icon: Clock,
      title: 'Instant Virtual & Live Tours',
      desc: 'Short on time? Schedule an HD video walkthrough with our licensed agents via WhatsApp, or book a physical guided tour within 2 hours.',
    },
  ];

  return (
    <section className="w-full bg-[#f8faf9] py-20 sm:py-24 lg:py-28 border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4cb882]">
            Built for Nigerian Renters
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 leading-[1.18] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif] mt-2">
            <span>Renting in Nigeria, </span>
            <span className="text-[#4cb882]">Finally Stress-Free</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-neutral-600 font-medium">
            We solved the traditional headaches of house hunting in Lagos and Abuja — from quack agents and phantom listings to power cuts and water issues.
          </p>
        </motion.div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-start"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#4cb882]/10 text-[#2d7752] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  {perk.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {perk.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
