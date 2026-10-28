"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MessageCircle, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Build prefilled WhatsApp message
    const waText = `Hi Shri Siddh Hotel,%0A%0AMy name: ${encodeURIComponent(formData.name)}%0AMobile: ${encodeURIComponent(formData.phone || "Not provided")}%0ADates: ${encodeURIComponent(formData.dates || "Not specified")}%0AMessage: ${encodeURIComponent(formData.message || "Enquiry")}`;
    window.open(`https://wa.me/911234567890?text=${waText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F5]">
      {/* ──────────────── 1. Hero Banner ──────────────── */}
      <section className="relative min-h-[420px] md:min-h-[500px] flex items-end justify-between overflow-hidden pt-28 pb-12 md:pb-16">
        {/* Background Lobby Grand Atrium */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85"
            alt="Shri Siddh Hotel Grand Lobby"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark luxury gradient overlays matching Image 2 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="container-site relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left Title Box */}
          <div className="max-w-xl">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#c9a96e] uppercase mb-3">
              Get In Touch
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-3">
              We are here.
            </h1>

            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Reach out for reservations, enquiries, or anything else.
              <br className="hidden sm:inline" /> We respond within 24 hours.
            </p>
          </div>

          {/* Right Ratings Strip matching Image 2 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 bg-black/40 backdrop-blur-md px-5 py-3 border border-white/15">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-[#c9a96e]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c9a96e] text-[#c9a96e]" />
                ))}
              </div>
              <span className="text-white text-xs font-semibold tracking-wide">
                4.9 out of 5
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-white/70 font-medium">
              <span className="hover:text-white transition-colors">Google</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Trustpilot</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Tripadvisor</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Booking.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. Contact Info & Enquiry Form ──────────────── */}
      <section className="py-20 md:py-28" aria-label="Contact information and enquiry form">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2 block">
                Shri Siddh
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.15] mb-8">
                Find us. We will be waiting.
              </h2>

              <div className="flex flex-col gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Address</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    1 Grand Avenue, City Centre
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Phone</h3>
                  <a
                    href="tel:+18000000000"
                    className="text-neutral-600 hover:text-[#b8933f] transition-colors"
                  >
                    +1 (800) 000 0000
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@thehotel.com"
                    className="text-neutral-600 hover:text-[#b8933f] transition-colors"
                  >
                    info@thehotel.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFF8E7] border border-[#EEDFCD] p-8 sm:p-12 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle size={48} className="text-[#25D366] mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-sm mb-6">
                      Your enquiry has been received and opened on WhatsApp. We will reply within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#b8933f] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Your Name */}
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-neutral-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D5C7B3] pb-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>

                    {/* WhatsApp / Mobile Number */}
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-neutral-700 mb-2">
                        Your WhatsApp / Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Your WhatsApp / Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D5C7B3] pb-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>

                    {/* Check In - Check Out Date */}
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-neutral-700 mb-2">
                        Check In - Check Out Date
                      </label>
                      <input
                        type="text"
                        placeholder="Check In - Check Out Date"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D5C7B3] pb-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-neutral-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Write Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-[#D5C7B3] pb-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm py-3.5 px-7 rounded-sm shadow-xs transition-colors duration-200"
                      >
                        <MessageCircle size={18} />
                        <span>Send Enquiry →</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 3. Location Map ──────────────── */}
      <section className="pb-20 md:pb-28" aria-label="Hotel Location Map">
        <div className="container-site">
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] overflow-hidden border border-[#EEDFCD] shadow-sm">
            <iframe
              title="Shri Siddh Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.16345638102!2d78.40112448261718!3d17.433807200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cd3d0473a3%3A0x8898239023737b83!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
