import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Building2,
  Award,
  Users2,
  ArrowRight,
  HeartHandshake,
  CheckCircle,
} from 'lucide-react';

interface AboutPageProps {
  onNavigateToProperties?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToProperties,
}) => {
  const stats = [
    {
      value: '1,200+',
      label: 'Verified Properties',
      description: 'Handpicked across prime neighborhoods',
    },
    {
      value: '87',
      label: 'Development Partners',
      description: 'Vetted real estate developers & landlords',
    },
    {
      value: '10+',
      label: 'Years of Excellence',
      description: 'Pioneering transparent African leasing',
    },
    {
      value: '5,000+',
      label: 'Happy Clients',
      description: 'Tenants settled into dream homes',
    },
  ];

  const teamMembers = [
    {
      name: 'Chioma Adeyemi',
      role: 'Head of Leasing & Client Experience',
      photo:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=350&h=350&q=80',
      bio: 'Over 8 years managing high-end residential portfolios in Ikoyi and Victoria Island.',
    },
    {
      name: 'Tunde Babalola',
      role: 'Senior Property Advisor (Lagos)',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=350&h=350&q=80',
      bio: 'Specialist in Lekki Phase 1 and Ikeja GRA serviced flats and duplexes.',
    },
    {
      name: 'Amina Danjuma',
      role: 'Regional Manager (Abuja FCT)',
      photo:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=350&h=350&q=80',
      bio: 'Leading diplomatic and corporate expatriate relocations across Maitama & Wuse 2.',
    },
    {
      name: 'Emeka Nwosu',
      role: 'Director of Legal & Tenancy Verification',
      photo:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=350&h=350&q=80',
      bio: 'Ensuring 100% verified property titles and clear, dispute-free tenancy agreements.',
    },
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Integrity First',
      description:
        'We believe in absolute transparency: no exaggerated features, no concealed service fees, and no bait-and-switch listings.',
    },
    {
      icon: Building2,
      title: 'Architectural Quality',
      description:
        'Every residence on our platform is evaluated for structural durability, ventilation, and reliable utilities.',
    },
    {
      icon: HeartHandshake,
      title: 'Tenant-Centric Care',
      description:
        'From physical walkthroughs to post-move-in support, our priority is ensuring your housing transition is comfortable and secure.',
    },
  ];

  return (
    <div id="about-page" className="w-full bg-white text-neutral-900 pb-20">
      {/* 1. Header / Story Banner */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-neutral-50/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-[#4cb882]/10 border border-[#4cb882]/25 text-[#2d7752] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#4cb882]" />
            <span>Our Mission & Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] max-w-3xl mx-auto leading-[1.15]"
          >
            About <span className="text-[#4cb882]">Purity Homes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="mt-5 text-base sm:text-lg text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Purity Homes was founded with a singular purpose: to make finding and renting a home in Nigeria transparent, modern, and trustworthy. We connect renters directly with vetted properties and landlords.
          </motion.p>
        </div>
      </section>

      {/* 2. Story Narrative & Showcase Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-5"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
              Reinventing Residential Leasing <br />
              <span className="text-[#4cb882]">For Modern Living</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              For too long, renting an apartment in African cities has meant contending with unverified intermediaries, unexpected service markups, and protracted disputes over caution deposits.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              We built Purity Homes as a modern standard: every residence is personally cataloged and verified by our on-ground team. Landlords are vetted, tenancy agreements are legally digitized, and utilities are honestly recorded.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                <CheckCircle className="w-4 h-4 text-[#4cb882]" />
                <span>100% physically inspected properties</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                <CheckCircle className="w-4 h-4 text-[#4cb882]" />
                <span>Zero undocumented agency markups</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                <CheckCircle className="w-4 h-4 text-[#4cb882]" />
                <span>Dedicated support from viewing to key collection</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-neutral-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                alt="Purity Homes Luxury Residence"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats Row: 4 Stat Blocks (Bold Green Numbers + Gray Labels) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="bg-neutral-50 rounded-3xl sm:rounded-[2.2rem] border border-neutral-200/90 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className={`flex flex-col items-center justify-center ${
                  idx > 0 ? 'pt-6 md:pt-0' : ''
                }`}
              >
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4cb882] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-none">
                  {stat.value}
                </span>
                <span className="mt-3 text-sm sm:text-base font-bold text-neutral-800">
                  {stat.label}
                </span>
                <span className="mt-1 text-xs text-neutral-500 max-w-[180px]">
                  {stat.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team / Agents Grid: Circular Headshots, Names & Roles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#4cb882]/10 text-[#2d7752] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Users2 className="w-4 h-4 text-[#4cb882]" />
            <span>Dedicated Professionals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Meet Our <span className="text-[#4cb882]">Leasing Team</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-medium">
            Experienced real estate advisors dedicated to helping you secure the right home across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-neutral-200/90 p-6 shadow-sm hover:shadow-md hover:border-[#4cb882]/40 transition-all flex flex-col items-center text-center group"
            >
              {/* Circular Headshot */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-3 border-[#4cb882]/30 group-hover:border-[#4cb882] transition-colors mb-4 shadow-sm">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#4cb882] transition-colors">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-xs font-semibold text-[#4cb882] mt-1 mb-2">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-xs text-neutral-500 leading-relaxed font-medium">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Closing CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-10">
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
              Ready To Work With <br />
              <span className="text-[#4cb882]">Purity Homes?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              Explore verified residences across Lagos, Abuja, and Port Harcourt, or contact our team to list your property.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                id="about-browse-properties-btn"
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
