import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Rental Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Contact form submitted with values:', formData);

    // Simulate swift network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Rental Inquiry',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div id="contact-page" className="w-full bg-white text-neutral-900 pb-20">
      {/* 1. Header / Banner */}
      <section className="pt-12 sm:pt-16 pb-10 sm:pb-14 bg-gradient-to-b from-neutral-50/80 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-[#4cb882]/10 border border-[#4cb882]/25 text-[#2d7752] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#4cb882]" />
            <span>We’re Here To Help You Settle In</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif] max-w-2xl mx-auto leading-[1.15]"
          >
            Get In <span className="text-[#4cb882]">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-base sm:text-lg text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about a rental apartment, need to book an urgent inspection, or want to list your property? Reach out anytime.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Two-Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[2rem] border border-neutral-200/90 p-6 sm:p-10 shadow-sm"
          >
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                Send Us A Message
              </h2>
              <p className="text-sm text-neutral-500 mt-1 font-medium">
                Fill out the details below and our team will get back to you within 15 minutes.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#4cb882]/10 border border-[#4cb882]/30 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center my-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#4cb882] text-white flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-['Plus_Jakarta_Sans',sans-serif]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-600 mt-2 max-w-md leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. A Purity Homes leasing specialist has received your inquiry and will reach out to <span className="font-semibold text-neutral-900">{formData.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.98] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Chukwuemeka Adeleke"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/30 focus:border-[#4cb882] focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Email and Phone (2 Cols on tablet+) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/30 focus:border-[#4cb882] focus:bg-white transition-all font-medium"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 803 123 4567"
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/30 focus:border-[#4cb882] focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type / Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/30 focus:border-[#4cb882] focus:bg-white transition-all font-medium cursor-pointer"
                    >
                      <option value="Rental Inquiry">Book a Property Inspection</option>
                      <option value="List a Property">List an Apartment as Landlord</option>
                      <option value="Tenancy Support">Tenancy Agreement & Lease Inquiries</option>
                      <option value="General Question">General Support & Partnerships</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the property you're interested in, your preferred inspection date, or specific location needs..."
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#4cb882]/30 focus:border-[#4cb882] focus:bg-white transition-all font-medium resize-none"
                    />
                  </div>

                  {/* Solid Green Pill Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.98] text-white font-bold text-sm sm:text-base px-9 py-3.5 sm:py-4 rounded-full transition-all duration-150 shadow-sm cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 stroke-[2.2]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Contact Info & Rounded Map Image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Info Cards */}
            <div className="bg-neutral-50 rounded-3xl sm:rounded-[2rem] border border-neutral-200/80 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                Office & Contact Info
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4cb882]/15 text-[#2d7752] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#4cb882]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Main Office Address
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-neutral-900 mt-1 leading-snug">
                    Plot 14, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Branch: Maitama District, Abuja (FCT)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4cb882]/15 text-[#2d7752] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#4cb882]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Direct Phone Lines
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-neutral-900 mt-1">
                    <a href="tel:+2348038924511" className="hover:text-[#4cb882] transition-colors">
                      +234 (0) 803 892 4511
                    </a>
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    <a href="tel:+2349021147720" className="hover:text-[#4cb882] transition-colors">
                      +234 (0) 902 114 7720
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4cb882]/15 text-[#2d7752] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#4cb882]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Email Inquiries
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-neutral-900 mt-1">
                    <a
                      href="mailto:rentals@purityhomes.ng"
                      className="hover:text-[#4cb882] transition-colors underline decoration-1 underline-offset-4"
                    >
                      rentals@purityhomes.ng
                    </a>
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">support@purityhomes.ng</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4cb882]/15 text-[#2d7752] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#4cb882]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Inspection & Support Hours
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-neutral-900 mt-1">
                    Monday – Saturday: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Sunday: By appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Rounded-Corner Embedded Map Image (Placeholder Map) */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm aspect-[16/10] sm:aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                alt="Map overview of Lekki Phase 1 Lagos"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />

              {/* Map pin badge overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-neutral-200 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4cb882] animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-900">Lekki Phase 1 Headquarters</span>
                  <span className="text-[10px] text-neutral-500">Admiralty Way, Lagos</span>
                </div>
              </div>

              {/* Location pin visual at center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4cb882] text-white p-2.5 rounded-full shadow-xl border-2 border-white animate-bounce">
                <MapPin className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
