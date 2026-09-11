import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NIGERIAN_LOCATIONS } from '../data/nigerianProperties';
import { NigerianLocation } from '../types';

interface TopLocationsProps {
  onSelectLocation?: (locationName: string) => void;
}

export const TopLocations: React.FC<TopLocationsProps> = ({ onSelectLocation }) => {
  return (
    <section className="w-full bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-14"
        >
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4cb882]">
              Prime Nigerian Neighborhoods
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 leading-[1.15] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif] mt-1.5">
              <span>Explore Top Rental Corridors in </span>
              <span className="text-[#4cb882]">Lagos & Abuja</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base font-medium text-neutral-500 max-w-xl">
              From waterfront penthouses in Ikoyi to diplomatic residences in Maitama, discover verified apartments with 24/7 power and security.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-700 bg-neutral-100 px-4 py-2 rounded-full border border-neutral-200">
              <span className="w-2 h-2 rounded-full bg-[#4cb882] animate-pulse" />
              <span>1,200+ Verified Units Across Nigeria</span>
            </span>
          </div>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {NIGERIAN_LOCATIONS.map((loc: NigerianLocation, index: number) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectLocation?.(loc.name)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-neutral-900 aspect-[16/11] cursor-pointer"
            >
              {/* Image */}
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-90"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Tag on Top Right */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-neutral-900 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                {loc.tag}
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#5dbd8c] font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{loc.city}, Nigeria</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#5dbd8c] transition-colors leading-tight">
                  {loc.name}
                </h3>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20 text-xs sm:text-sm font-medium text-white/90">
                  <span>{loc.propertyCount}+ Verified Rentals</span>
                  <span className="font-bold text-[#5dbd8c] flex items-center gap-1">
                    {loc.startingPrice}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
