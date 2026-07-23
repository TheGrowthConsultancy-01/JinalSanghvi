import React, { useState } from 'react';
import { Calendar, Send, MessageSquare, Phone, Mail, MapPin, Clock, Check, X } from 'lucide-react';

export default function BookingAndContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    "Manifestation Training",
    "Reiki Healing",
    "Tarot Reading",
    "Student Counselling",
    "Personal Counselling",
    "Relationship Counselling",
    "Stress & Anxiety Management",
    "Parenting Counselling",
    "Numerology",
    "Signature Analysis"
  ];

  const times = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
    // Add booking or automated notification system logic here
  };

  return (
    <section id="book-session" className="py-24 px-4 md:px-8 bg-gradient-to-b from-purple-50/20 to-purple-100/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Start Your Healing Journey
          </h2>
          <p className="text-gray-500 text-sm font-sans tracking-wide">
            Book your session and take the first step toward transformation
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Master Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-purple-100/40 shadow-xl shadow-purple-900/5">
            <div className="flex items-center gap-2 text-[#763CD2] mb-8">
              <Calendar size={20} className="text-[#763CD2]" />
              <h3 className="text-lg font-serif font-bold text-[#110A24]">Quick Booking</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-sans font-bold text-gray-700">Full Name <span className="text-rose-500">*</span></label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full text-sm font-sans px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-purple-400 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-sans font-bold text-gray-700">Phone <span className="text-rose-500">*</span></label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full text-sm font-sans px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-purple-400 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-sans font-bold text-gray-700">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full text-sm font-sans px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-purple-400 transition-colors"
                />
              </div>

              {/* Row 3: Service Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-sans font-bold text-gray-700">Service <span className="text-rose-500">*</span></label>
                <select 
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full text-sm font-sans px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-hidden focus:border-purple-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              {/* Row 4: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-sans font-bold text-gray-700">Preferred Date</label>
                  <input 
                    type="date" 
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full text-sm font-sans px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-purple-400 transition-colors text-gray-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-sans font-bold text-gray-700">Preferred Time</label>
                  <select 
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full text-sm font-sans px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-hidden focus:border-purple-400 transition-colors text-gray-500"
                  >
                    <option value="">Select time</option>
                    {times.map((tm, idx) => (
                      <option key={idx} value={tm}>{tm}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Message */}
              <div className="space-y-1.5">
                <label className="text-[12px] font-sans font-bold text-gray-700">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me a bit about what you need help with..."
                  className="w-full text-sm font-sans px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-purple-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#8A4FFF] hover:bg-[#713BD4] text-white text-[13px] font-sans font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition-colors cursor-pointer"
              >
                <Send size={14} /> Submit Booking
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details Panel */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xl font-serif font-bold text-[#110A24] mb-2 pl-1">Get in Touch</h3>
            
            {/* WhatsApp Block */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100/30 shadow-xs flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <MessageSquare size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[14px] font-sans font-bold text-[#110A24]">WhatsApp</h4>
                <p className="text-gray-400 text-xs">Quick response within hours</p>
                <p className="text-[#8A4FFF] text-xs font-bold font-sans pt-1">+91 9924 999 666</p>
              </div>
            </div>

            {/* Phone Call Block */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100/30 shadow-xs flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[14px] font-sans font-bold text-[#110A24]">Phone Call</h4>
                <p className="text-gray-400 text-xs">Direct booking line</p>
                <p className="text-[#8A4FFF] text-xs font-bold font-sans pt-1">+91 9924 999 666</p>
              </div>
            </div>

            {/* Email Block */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100/30 shadow-xs flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[14px] font-sans font-bold text-[#110A24]">Email</h4>
                <p className="text-gray-400 text-xs">Send your inquiry</p>
                <p className="text-[#8A4FFF] text-xs font-bold font-sans pt-1">jinalsanghaviofficial@gmail.com</p>
              </div>
            </div>

            {/* Location Block */}
            <div className="bg-white rounded-2xl p-5 border border-purple-100/30 shadow-xs flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[14px] font-sans font-bold text-[#110A24]">Location</h4>
                <p className="text-[#6B6579] text-xs font-normal leading-relaxed pt-1">
                  313, Western Business Hub, Opp. GJ5 Garden Restaurant Pratham Circle, Green City Road, Pal-Adajan, Surat.
                </p>
              </div>
            </div>

            {/* Availability Panel */}
            <div className="bg-[#FAF7FF] border border-purple-200/50 rounded-2xl p-6 space-y-3">
              <h4 className="text-[15px] font-serif font-bold text-[#110A24] flex items-center gap-2">
                <Clock size={16} className="text-purple-600" /> Availability
              </h4>
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs text-[#6B6579] font-medium">
                  <Check size={14} className="text-emerald-500 font-bold" />
                  <span>Monday - Saturday: 10 AM - 6 PM</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6B6579] font-medium">
                  <X size={14} className="text-rose-500 font-bold" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}