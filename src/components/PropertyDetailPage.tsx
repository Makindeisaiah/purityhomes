import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Zap,
  ShieldCheck,
  Check,
  Calendar,
  Phone,
  MessageSquare,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Info,
  Building,
  Clock,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { NigerianProperty } from '../types';
import { NIGERIAN_PROPERTIES } from '../data/nigerianProperties';

interface PropertyDetailPageProps {
  property: NigerianProperty;
  onBack: () => void;
  onSelectProperty?: (property: NigerianProperty) => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  property,
  onBack,
  onSelectProperty,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inspectionDate, setInspectionDate] = useState('');
  const [inspectionTime, setInspectionTime] = useState('11:00 AM');
  const [inspectionType, setInspectionType] = useState<'physical' | 'virtual'>('physical');
  const [tenantName, setTenantName] = useState('');
  const [tenantPhone, setTenantPhone] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on load or when property changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIndex(0);
    setIsBooked(false);
  }, [property.id]);

  const images =
    property.galleryImages && property.galleryImages.length > 0
      ? property.galleryImages
      : [property.image];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenantName || !tenantPhone) return;
    setIsBooked(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Purity Homes Nigeria, I am interested in inspecting the rental property "${property.name}" located at ${property.address} listed for ${property.priceFormatted}. Please schedule an inspection with me.`
  );

  // Similar properties: same city or type, excluding current
  const similarProperties = NIGERIAN_PROPERTIES.filter(
    (p) => p.id !== property.id && (p.city === property.city || p.type === property.type)
  ).slice(0, 2);

  return (
    <div id="property-detail-page" className="w-full bg-[#fcfcfc] text-neutral-900 pb-28 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* 1. Breadcrumb & Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-neutral-200/80 mb-6">
          <button
            type="button"
            id="back-to-properties-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-[#4cb882] transition-colors py-1.5 px-3 rounded-xl bg-white border border-neutral-200 shadow-2xs hover:border-[#4cb882]/40 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Listings</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              id="share-property-btn"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200 px-3.5 py-1.5 rounded-xl shadow-2xs transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              type="button"
              id="save-property-btn"
              onClick={() => setIsSaved(!isSaved)}
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-xl border transition-colors shadow-2xs cursor-pointer ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save Property'}</span>
            </button>
          </div>
        </div>

        {/* 2. Property Header: Name, Address, & Badges */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="bg-[#4cb882]/15 text-[#236844] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              {property.status}
            </span>
            <span className="bg-neutral-100 text-neutral-700 font-semibold text-xs px-3 py-1 rounded-full">
              {property.type}
            </span>
            {property.verifiedLandlord && (
              <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Landlord & Title</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 text-blue-800 font-semibold text-xs px-3 py-1 rounded-full">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Physically Inspected</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
                {property.name}
              </h1>
              <div className="flex items-center gap-2 text-neutral-600 text-sm sm:text-base mt-2 font-medium">
                <MapPin className="w-4 h-4 text-[#4cb882] shrink-0" />
                <span>{property.address}</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-700 font-semibold">{property.city}</span>
              </div>
            </div>

            {/* Price Header display on desktop */}
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-bold">Annual Rent</span>
              <div className="text-3xl xl:text-4xl font-black text-[#2e8b5a] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                {property.priceFormatted}
              </div>
              <span className="text-xs text-neutral-500 font-medium">{property.rentalPeriod}</span>
            </div>
          </div>
        </div>

        {/* 3. Comprehensive Image Showcase Gallery */}
        <div className="mb-10 sm:mb-12 space-y-3">
          <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-md border border-neutral-200/80 group">
            <motion.img
              key={activeImageIndex}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={images[activeImageIndex]}
              alt={`${property.name} photo ${activeImageIndex + 1}`}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-all shadow-md cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-all shadow-md cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Photo Counter Pill */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20">
              Photo {activeImageIndex + 1} of {images.length}
            </div>

            {/* Price Pill on Mobile */}
            <div className="lg:hidden absolute bottom-4 right-4 bg-neutral-950/85 backdrop-blur-md text-[#5dbd8c] font-black text-sm sm:text-base px-3.5 py-1.5 rounded-xl border border-white/20 shadow-md">
              {property.priceFormatted}
            </div>
          </div>

          {/* Thumbnails Row */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-24 sm:w-28 h-16 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#4cb882] ring-2 ring-[#4cb882]/30 scale-102 shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 4. Two-Column Layout: Property Specs & Details on Left, Booking Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT CONTENT COLUMN (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Specs Pill Row */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/80 shadow-xs">
              <div className="flex flex-col items-center justify-center p-2 text-center border-r border-neutral-100 last:border-r-0">
                <Bed className="w-5 h-5 text-[#4cb882] mb-1" />
                <span className="text-base sm:text-lg font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  {property.beds}
                </span>
                <span className="text-xs text-neutral-500 font-medium">Bedrooms</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 text-center border-r border-neutral-100 last:border-r-0">
                <Bath className="w-5 h-5 text-[#4cb882] mb-1" />
                <span className="text-base sm:text-lg font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  {property.baths}
                </span>
                <span className="text-xs text-neutral-500 font-medium">Bathrooms</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 text-center border-r border-neutral-100 last:border-r-0">
                <Maximize className="w-5 h-5 text-[#4cb882] mb-1" />
                <span className="text-base sm:text-lg font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  {property.sqft}
                </span>
                <span className="text-xs text-neutral-500 font-medium">Square Feet</span>
              </div>

              <div className="col-span-3 sm:col-span-1 flex flex-col items-center justify-center p-2 text-center">
                <Building className="w-5 h-5 text-[#4cb882] mb-1" />
                <span className="text-sm font-bold text-neutral-950 truncate max-w-full">
                  {property.type}
                </span>
                <span className="text-xs text-neutral-500 font-medium">Property Type</span>
              </div>
            </div>

            {/* Nigerian Power Guarantee Box */}
            <div className="bg-[#4cb882]/10 border border-[#4cb882]/35 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4cb882] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                  Guaranteed Utility & Power Assurance
                </h3>
                <p className="text-sm text-neutral-800 font-semibold mt-1">
                  {property.powerSupply}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                  Equipped with clean borehole filtration systems, dedicated transformer connections, and industrial soundproof generators to ensure non-stop electricity.
                </p>
              </div>
            </div>

            {/* Description & Overview */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                About This Residence
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {property.description}
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                Carefully evaluated by Purity Homes advisors. The estate provides 24/7 armed gate security, paved access roads, CCTV perimeter surveillance, and dedicated facility managers on-site.
              </p>
            </div>

            {/* Nigerian Rental Fee Breakdown Table */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                    Transparent Rental Fee Breakdown
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                    Standardized Nigerian tenancy fees with zero hidden agency charges.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2d7752] bg-[#4cb882]/15 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4cb882]" />
                  <span>Escrow Caution Protection</span>
                </span>
              </div>

              <div className="rounded-2xl border border-neutral-200 overflow-hidden divide-y divide-neutral-200/80">
                <div className="flex items-center justify-between p-4 text-sm bg-neutral-50/70">
                  <span className="text-neutral-700 font-semibold">Annual Net Rent</span>
                  <span className="text-neutral-950 font-black text-base">{property.priceFormatted}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-sm bg-white">
                  <div>
                    <span className="text-neutral-800 font-medium block">Service Charge</span>
                    <span className="text-xs text-neutral-500">Facility maintenance, estate security & waste</span>
                  </div>
                  <span className="text-neutral-800 font-bold">{property.serviceCharge || 'Included in Rent'}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-sm bg-white">
                  <div>
                    <span className="text-neutral-800 font-medium block">Refundable Caution Deposit</span>
                    <span className="text-xs text-neutral-500">Held securely; fully refunded upon move-out</span>
                  </div>
                  <span className="text-neutral-800 font-bold">{property.cautionFee || '₦300,000'}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-sm bg-white">
                  <div>
                    <span className="text-neutral-800 font-medium block">Legal Tenancy Agreement</span>
                    <span className="text-xs text-neutral-500">Drafted by certified Nigerian property barristers</span>
                  </div>
                  <span className="text-neutral-800 font-bold">{property.legalAgencyFee || '10% of Annual Rent'}</span>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                Features & Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                {property.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-neutral-50/90 border border-neutral-200/80 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-neutral-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#4cb882]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#4cb882]" />
                    </div>
                    <span className="truncate">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood & Location Highlights */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                Location & Neighborhood
              </h3>
              <p className="text-sm text-neutral-600 font-medium">
                Situated in prime {property.neighborhood}, {property.city}. Enjoy seamless road connectivity, top-tier international schools, culinary hubs, and secure gated perimeters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
                  <span className="text-xs text-neutral-500 font-medium block">Access Road</span>
                  <span className="text-sm font-bold text-neutral-900 mt-0.5 block">Tarred & Interlocked</span>
                </div>
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
                  <span className="text-xs text-neutral-500 font-medium block">Flood Risk</span>
                  <span className="text-sm font-bold text-[#2d7752] mt-0.5 block">Zero Flood Zone</span>
                </div>
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
                  <span className="text-xs text-neutral-500 font-medium block">Security Level</span>
                  <span className="text-sm font-bold text-neutral-900 mt-0.5 block">24/7 Gated Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR (4 cols) - Sticky Booking & Contact */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Main Pricing & Inspection Card */}
            <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-7 shadow-md">
              <div className="pb-5 border-b border-neutral-100">
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-bold">Annual Rent</span>
                <div className="text-2xl sm:text-3xl font-black text-[#2e8b5a] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mt-0.5">
                  {property.priceFormatted}
                </div>
                <p className="text-xs text-neutral-500 font-medium mt-1">
                  Payable yearly • Vetted by Purity Homes
                </p>
              </div>

              {/* Inspection Form */}
              <div className="pt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                    Book a Free Inspection
                  </h4>
                </div>

                {/* Physical vs Virtual Switcher */}
                <div className="grid grid-cols-2 gap-2 bg-neutral-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setInspectionType('physical')}
                    className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      inspectionType === 'physical'
                        ? 'bg-white text-neutral-950 shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    Physical Walkthrough
                  </button>
                  <button
                    type="button"
                    onClick={() => setInspectionType('virtual')}
                    className={`py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      inspectionType === 'virtual'
                        ? 'bg-white text-neutral-950 shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    Virtual HD Video Call
                  </button>
                </div>

                {isBooked ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#4cb882]/10 border border-[#4cb882] rounded-2xl p-5 text-center space-y-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#4cb882] text-white flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h5 className="text-base font-bold text-neutral-950">
                      Inspection Booked!
                    </h5>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Our leasing advisor will call <span className="font-bold text-[#2d7752]">{tenantPhone}</span> within 30 minutes to confirm access details for {inspectionDate || 'your selected date'}.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={tenantName}
                        onChange={(e) => setTenantName(e.target.value)}
                        placeholder="e.g. Femi Alabi"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={tenantPhone}
                        onChange={(e) => setTenantPhone(e.target.value)}
                        placeholder="e.g. 0803 123 4567"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          required
                          value={inspectionDate}
                          onChange={(e) => setInspectionDate(e.target.value)}
                          className="w-full text-xs px-2.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          Time Slot
                        </label>
                        <select
                          value={inspectionTime}
                          onChange={(e) => setInspectionTime(e.target.value)}
                          className="w-full text-xs px-2 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/40 bg-white"
                        >
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="confirm-inspection-btn"
                      className="w-full bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.99] text-white font-bold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Free Inspection</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="pt-4 mt-4 border-t border-neutral-100 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/2348031234567?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  id="property-whatsapp-btn"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:+2348031234567"
                  id="property-call-btn"
                  className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-neutral-500" />
                  <span>Call Officer (+234 803 123 4567)</span>
                </a>
              </div>
            </div>

            {/* Vetted Guarantee Card */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200/80 p-5 space-y-3">
              <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#4cb882]" />
                <span>Purity Homes Renter Guarantee</span>
              </div>
              <ul className="text-xs text-neutral-600 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4cb882] shrink-0 mt-0.5" />
                  <span>Direct landlord or accredited corporate manager contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4cb882] shrink-0 mt-0.5" />
                  <span>100% money-back caution deposit escrow protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4cb882] shrink-0 mt-0.5" />
                  <span>Standardized Nigerian legal tenancy agreements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Similar Verified Properties (2 cards in a row!) */}
        {similarProperties.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                  Similar Residences in <span className="text-[#4cb882]">{property.city}</span>
                </h2>
                <p className="text-sm text-neutral-500 mt-1 font-medium">
                  Compare other verified Nigerian rentals matching your preferences.
                </p>
              </div>
              <button
                type="button"
                onClick={onBack}
                className="text-sm font-bold text-[#2d7752] hover:text-[#4cb882] cursor-pointer inline-flex items-center gap-1"
              >
                <span>View All Properties</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>

            {/* 2-Card Row for Similar Properties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {similarProperties.map((similar) => (
                <div
                  key={similar.id}
                  onClick={() => {
                    if (onSelectProperty) onSelectProperty(similar);
                  }}
                  className="bg-white rounded-2xl border border-neutral-200/80 p-4 shadow-xs hover:shadow-md hover:border-[#4cb882]/40 transition-all cursor-pointer group flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100 mb-3.5">
                    <img
                      src={similar.image}
                      alt={similar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#4cb882] text-white font-bold text-xs px-2.5 py-1 rounded-md shadow-sm">
                      {similar.status}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-neutral-950/85 backdrop-blur-xs text-[#5dbd8c] font-black text-sm px-3 py-1 rounded-lg border border-white/15">
                      {similar.priceFormatted}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-[#4cb882] transition-colors line-clamp-1">
                    {similar.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#4cb882] shrink-0" />
                    <span className="line-clamp-1">{similar.address}</span>
                  </div>

                  <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-neutral-400" /> {similar.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-neutral-400" /> {similar.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="w-3.5 h-3.5 text-neutral-400" /> {similar.sqft} sqft
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
