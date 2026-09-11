import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, Sparkles } from 'lucide-react';
import { PropertyFilterSidebar } from './PropertyFilterSidebar';
import { PropertyResultsGrid } from './PropertyResultsGrid';
import { PropertyDetailModal } from './PropertyDetailModal';
import { NIGERIAN_PROPERTIES } from '../data/nigerianProperties';
import { NigerianProperty } from '../types';

interface PropertyListingsProps {
  searchQuery?: string;
  selectedType?: string;
  minPrice?: string;
  maxPrice?: string;
  onResetFilters?: () => void;
  onNavigateToPropertyPage?: () => void;
  isPropertyPage?: boolean;
  onSelectProperty?: (property: NigerianProperty) => void;
}

export const PropertyListings: React.FC<PropertyListingsProps> = ({
  searchQuery = '',
  selectedType = '',
  minPrice = '',
  maxPrice = '',
  onResetFilters,
  onNavigateToPropertyPage,
  isPropertyPage = false,
  onSelectProperty,
}) => {
  const [selectedPropertyForModal, setSelectedPropertyForModal] = useState<NigerianProperty | null>(null);

  // Filter properties based on props
  const properties = NIGERIAN_PROPERTIES.filter((item) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matches =
        item.name.toLowerCase().includes(q) ||
        item.address.toLowerCase().includes(q) ||
        item.neighborhood.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q);
      if (!matches) return false;
    }
    if (selectedType && selectedType !== 'All Types' && selectedType !== 'Select Type') {
      if (item.type && !item.type.toLowerCase().includes(selectedType.toLowerCase())) {
        return false;
      }
    }
    return true;
  });

  const hasActiveFilters = searchQuery || (selectedType && selectedType !== 'Select Type' && selectedType !== 'All Types');

  const renderCards = (isTwoColumns: boolean) => (
    <div
      id="property-listings-grid"
      className={`grid grid-cols-1 md:grid-cols-2 ${
        isTwoColumns ? 'lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8' : 'lg:grid-cols-3 gap-8 sm:gap-10'
      }`}
    >
      {properties.slice(0, 6).map((property, index) => (
        <motion.div
          key={property.id}
          id={`property-card-${property.id}`}
          onClick={() => {
            if (onSelectProperty) {
              onSelectProperty(property);
            } else {
              setSelectedPropertyForModal(property);
            }
          }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            delay: index * 0.1,
            ease: 'easeOut',
          }}
          whileHover={{ y: -6 }}
          className="group flex flex-col cursor-pointer bg-white rounded-2xl sm:rounded-[1.4rem] border border-neutral-200/80 p-3 sm:p-3.5 shadow-sm hover:shadow-md transition-all duration-200"
        >
          {/* Card Image Container with price badge overlaid */}
          <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-[1.15rem] overflow-hidden bg-neutral-100 shadow-xs">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Status Badge top-left */}
            <div className="absolute top-3 left-3 bg-[#4cb882] text-white font-bold text-xs px-2.5 py-1 rounded-md shadow-sm">
              {property.status || 'Serviced'}
            </div>
            
            {/* Price Badge on bottom-right of the image in Naira */}
            <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 bg-neutral-950/85 backdrop-blur-xs text-[#5dbd8c] font-black text-sm sm:text-[15px] px-3.5 py-1.5 rounded-lg sm:rounded-xl shadow-md tracking-tight border border-white/15">
              {property.priceFormatted}
            </div>
          </div>

          {/* Card Information: Name in green, Address underneath */}
          <div className="mt-3.5 flex flex-col space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-[#4cb882] transition-colors leading-snug line-clamp-1">
              {property.name}
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-[#4cb882] shrink-0" />
              <span className="line-clamp-1">{property.address}</span>
            </div>

            {/* Specs row */}
            <div className="pt-2.5 mt-1 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 font-medium">
              <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-neutral-400" /> {property.beds} Beds</span>
              <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-neutral-400" /> {property.baths} Baths</span>
              <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5 text-neutral-400" /> {property.sqft} sqft</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="property" className="w-full bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {isPropertyPage ? (
          /* Property Listing Page: Sidebar Filters on Left + Property Grid on Right (No "All The Best Residences" header) */
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 pt-2">
            {/* Sidebar Column */}
            <div className="w-full lg:w-[290px] xl:w-[300px] shrink-0">
              <PropertyFilterSidebar />
            </div>

            {/* Listings Grid Column */}
            <div className="flex-1 w-full min-w-0">
              <PropertyResultsGrid totalProperties={150} onSelectProperty={onSelectProperty} />
            </div>
          </div>
        ) : (
          /* Home Landing Page: Standard Header Row + 3-Column Grid */
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 sm:mb-14"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 leading-[1.15] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif]">
                  <span>All The </span>
                  <span className="text-[#4cb882]">Best Residences</span>
                  <br />
                  <span>To Rent in Nigeria</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-neutral-500">
                  Curated & Verified Apartments Across Lagos, Abuja & Port Harcourt
                </p>
              </div>

              {/* Action Button / Filter Reset: Top-Right */}
              <div className="shrink-0 pt-1 flex items-center gap-3">
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={onResetFilters}
                    className="text-xs sm:text-sm font-bold text-neutral-500 hover:text-neutral-900 px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-400 transition-colors cursor-pointer"
                  >
                    Clear Filters
                  </button>
                )}
                <button
                  id="btn-see-our-property"
                  type="button"
                  onClick={onNavigateToPropertyPage}
                  className="bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.98] text-white font-semibold text-sm sm:text-[15px] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-150 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Explore All Nigerian Rentals
                </button>
              </div>
            </motion.div>

            {/* Empty state if filters match nothing */}
            {properties.length === 0 && (
              <div className="text-center py-16 px-4 bg-neutral-50 rounded-3xl border border-neutral-200/80 my-6">
                <p className="text-lg font-bold text-neutral-800">No rental apartments found matching your search</p>
                <p className="text-sm text-neutral-500 mt-1">Try clearing or adjusting your search filters above.</p>
                <button
                  type="button"
                  onClick={onResetFilters}
                  className="mt-5 bg-[#5dbd8c] hover:bg-[#4eb37f] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Reset Search
                </button>
              </div>
            )}

            {renderCards(false)}
          </div>
        )}

        {/* Interactive Property Detail Modal */}
        <PropertyDetailModal
          property={selectedPropertyForModal}
          isOpen={!!selectedPropertyForModal}
          onClose={() => setSelectedPropertyForModal(null)}
        />
      </div>
    </section>
  );
};
