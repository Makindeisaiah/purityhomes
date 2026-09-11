import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize, Zap, ShieldCheck, Check, Calendar, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NigerianProperty } from '../types';

interface PropertyDetailModalProps {
  property: NigerianProperty | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inspectionDate, setInspectionDate] = useState('');
  const [inspectionTime, setInspectionTime] = useState('11:00 AM');
  const [inspectionType, setInspectionType] = useState<'physical' | 'virtual'>('physical');
  const [tenantName, setTenantName] = useState('');
  const [tenantPhone, setTenantPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!property) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenantName || !tenantPhone) return;
    setIsBooked(true);
    setTimeout(() => {
      // simulate auto-close or reset
    }, 4000);
  };

  const images = property.galleryImages?.length > 0 ? property.galleryImages : [property.image];

  const whatsappMessage = encodeURIComponent(
    `Hello Purity Homes Nigeria, I am interested in inspecting the rental property "${property.name}" located at ${property.address} listed for ${property.priceFormatted}. Please schedule an inspection with me.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/70">
            <div className="flex items-center gap-2.5">
              <span className="bg-[#4cb882]/15 text-[#2d7752] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {property.status}
              </span>
              {property.verifiedLandlord && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 font-semibold text-xs px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Landlord & Title</span>
                </span>
              )}
            </div>

            <button
              type="button"
              id="btn-close-property-modal"
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Gallery Top Section */}
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
                <img
                  src={images[activeImageIndex] || property.image}
                  alt={property.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white font-extrabold text-lg sm:text-xl px-4 py-2 rounded-xl">
                  {property.priceFormatted}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx ? 'border-[#4cb882] scale-102 shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Key Specs */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  {property.name}
                </h3>
                <div className="flex items-center gap-1.5 text-neutral-600 text-sm sm:text-base mt-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#4cb882] shrink-0" />
                  <span>{property.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-neutral-50 px-4 py-3 rounded-2xl border border-neutral-200/80">
                <div className="flex items-center gap-1.5 text-neutral-700 text-sm font-semibold">
                  <Bed className="w-4 h-4 text-neutral-500" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="w-px h-4 bg-neutral-300" />
                <div className="flex items-center gap-1.5 text-neutral-700 text-sm font-semibold">
                  <Bath className="w-4 h-4 text-neutral-500" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="w-px h-4 bg-neutral-300" />
                <div className="flex items-center gap-1.5 text-neutral-700 text-sm font-semibold">
                  <Maximize className="w-4 h-4 text-neutral-500" />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>

            {/* Power Guarantee Box (High priority in Nigeria) */}
            <div className="bg-[#4cb882]/10 border border-[#4cb882]/30 rounded-2xl p-4 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#4cb882] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-[15px] font-bold text-neutral-950">
                  Guaranteed Power Supply
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 font-medium mt-0.5">
                  {property.powerSupply}
                </p>
              </div>
            </div>

            {/* Nigerian Rental Fee Breakdown Table */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-neutral-950 flex items-center gap-2">
                <span>Transparent Rental Fees Breakdown</span>
                <span className="text-xs font-normal text-neutral-500">(Standard Nigerian Tenancy)</span>
              </h4>
              <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/80 divide-y divide-neutral-200/80">
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-neutral-600 font-medium">Annual Rent</span>
                  <span className="text-neutral-950 font-bold">{property.priceFormatted}</span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-neutral-600 font-medium">Service Charge</span>
                  <span className="text-neutral-800 font-semibold">{property.serviceCharge || 'Included in Rent'}</span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-neutral-600 font-medium">Refundable Caution Deposit</span>
                  <span className="text-neutral-800 font-semibold">{property.cautionFee || '₦300,000'}</span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-neutral-600 font-medium">Legal Agreement & Agency Fee</span>
                  <span className="text-neutral-800 font-semibold">{property.legalAgencyFee || '10% / 10%'}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-base font-bold text-neutral-950">Apartment Overview</h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                {property.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-neutral-950">Features & Amenities</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {property.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/70 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-800"
                  >
                    <Check className="w-4 h-4 text-[#4cb882] shrink-0" />
                    <span className="truncate">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspection Booking & Direct Contact Section */}
            <div className="border-t border-neutral-200 pt-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-neutral-950">Schedule a Free Inspection</h4>
                  <p className="text-xs sm:text-sm text-neutral-500">
                    Visit physically in person or request an HD live walkthrough via WhatsApp video call.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setInspectionType('physical')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                      inspectionType === 'physical' ? 'bg-[#4cb882] text-white' : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    Physical Inspection
                  </button>
                  <button
                    type="button"
                    onClick={() => setInspectionType('virtual')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                      inspectionType === 'virtual' ? 'bg-[#4cb882] text-white' : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    Virtual Video Call
                  </button>
                </div>
              </div>

              {isBooked ? (
                <div className="bg-[#4cb882]/10 border border-[#4cb882] rounded-2xl p-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#4cb882] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h5 className="text-lg font-bold text-neutral-950">Inspection Request Received!</h5>
                  <p className="text-sm text-neutral-700 max-w-md mx-auto">
                    Our verified Purity Homes leasing officer will call you at <span className="font-bold text-[#2d7752]">{tenantPhone}</span> within 30 minutes to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={tenantName}
                        onChange={(e) => setTenantName(e.target.value)}
                        placeholder="e.g. Babatunde Adeleke"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={tenantPhone}
                        onChange={(e) => setTenantPhone(e.target.value)}
                        placeholder="e.g. +234 803 123 4567"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={inspectionDate}
                        onChange={(e) => setInspectionDate(e.target.value)}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Preferred Time</label>
                      <select
                        value={inspectionTime}
                        onChange={(e) => setInspectionTime(e.target.value)}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40 bg-white"
                      >
                        <option value="09:00 AM">09:00 AM (Morning)</option>
                        <option value="11:00 AM">11:00 AM (Mid-day)</option>
                        <option value="02:00 PM">02:00 PM (Afternoon)</option>
                        <option value="04:30 PM">04:30 PM (Evening)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      id="btn-confirm-inspection"
                      className="w-full sm:flex-1 bg-[#4cb882] hover:bg-[#3fa06f] text-white font-bold text-sm py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Free Inspection</span>
                    </button>

                    <a
                      href={`https://wa.me/2348031234567?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      id="btn-whatsapp-agent"
                      className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Agent</span>
                    </a>

                    <a
                      href="tel:+2348031234567"
                      id="btn-call-agent"
                      className="w-full sm:w-auto border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-bold text-sm px-5 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
