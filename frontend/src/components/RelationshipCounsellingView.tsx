import React, { useEffect } from 'react';
import { 
  Star, Sparkles, Award, Rocket, Target, Heart, TrendingUp, Compass, 
  Clock, Monitor, Calendar, Shield, MessageCircle, Flame, User, Phone, 
  Mail, MapPin, Check, X, ShieldAlert, MessageSquare, VolumeX, Users, 
  AlertTriangle, Lock, HelpCircle, EyeOff, FileText, CheckCircle2 
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface RelationshipCounsellingViewProps {
  onBack: () => void;
}

export default function RelationshipCounsellingView({ onBack }: RelationshipCounsellingViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#110A24]">
      
      {/* 1. Global Navbar */}
      <div className="bg-[#1d0b45] text-white">
        <Navbar />
      </div>

      {/* Back Header Bar */}
      {/* <div className="bg-[#f2ebfd] py-4 px-6 border-b border-purple-100">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors cursor-pointer"
          >
            &larr; Back to Specializations
          </button>
        </div>
      </div> */}

      {/* 2. HERO SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#1d0b45] to-[#3b1580] text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight max-w-3xl leading-tight">
            Relationship Counselling
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl font-light">
            Heal Misunderstandings. Rebuild Trust. Create Meaningful Relationships.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Heart size={14} className="text-yellow-400 fill-yellow-400" /> Expert Guidance
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Shield size={14} className="text-yellow-400 fill-yellow-400" /> 100% Confidential
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Award size={14} className="text-yellow-400 fill-yellow-400" /> 17+ Years
            </span>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
              <Calendar size={14} /> Book Appointment
            </a>
            <a href="#overview" className="inline-flex items-center gap-2 bg-white text-[#110A24] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
              &darr; Discover More
            </a>
          </div>
          <div className="pt-12 grid grid-cols-3 gap-6 border-t border-white/10 max-w-2xl mt-8">
            <div>
              <span className="text-3xl md:text-4xl font-black block">1800+</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Sessions Done</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-black block">1000+</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Clients Helped</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-black block">98%</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW / UNDERSTANDING SECTION */}
      <section id="overview" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Understanding Relationship Challenges
          </h2>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Relationships are meant to bring happiness, support, and emotional security. But sometimes misunderstandings, communication gaps, trust issues, emotional distance, or recurring conflicts can make even the strongest relationships feel exhausting.
          </p>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            If you feel unheard, disconnected, emotionally hurt, or confused about your relationship, professional guidance can help you gain clarity and move forward with confidence.
          </p>
        </div>
      </section>

      {/* 4. ARE YOU EXPERIENCING? (Challenges Grid) */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Are You Experiencing?
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              These common relationship challenges can create distance and pain in your connection
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Frequent Arguments", desc: "Constant conflicts draining the joy from your relationship", icon: <MessageSquare size={26} fill="currentColor" /> },
              { title: "Communication Breakdown", desc: "Feeling unable to express yourself or be understood", icon: <VolumeX size={26} fill="currentColor" /> },
              { title: "Trust Issues", desc: "Broken trust making it hard to feel safe and secure", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Emotional Distance", desc: "Feeling disconnected despite being physically together", icon: <User size={26} fill="currentColor" /> },
              { title: "Pre-Marital Confusion", desc: "Uncertainty about taking the next step in relationship", icon: <Compass size={26} fill="currentColor" /> },
              { title: "Family Conflicts", desc: "External family pressures affecting your relationship", icon: <Users size={26} fill="currentColor" /> },
              { title: "Toxic Patterns", desc: "Recurring negative behaviors damaging the connection", icon: <AlertTriangle size={26} fill="currentColor" /> },
              { title: "Post-Breakup Pain", desc: "Difficulty moving on and healing after separation", icon: <Lock size={26} fill="currentColor" /> },
              { title: "Feeling Lonely", desc: "Feeling alone despite being in a relationship", icon: <HelpCircle size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW RELATIONSHIP COUNSELLING HELPS */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              How Relationship Counselling Helps
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Through personalized counselling sessions, we help you create lasting positive change
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Understand Patterns", desc: "Identify underlying relationship patterns causing conflicts", icon: <Target size={26} fill="currentColor" /> },
              { title: "Improve Communication", desc: "Learn effective ways to express and understand each other", icon: <MessageSquare size={26} fill="currentColor" /> },
              { title: "Resolve Conflicts", desc: "Handle disagreements constructively and peacefully", icon: <Users size={26} fill="currentColor" /> },
              { title: "Rebuild Trust", desc: "Restore emotional intimacy and deepen connection", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Gain Clarity", desc: "Make informed decisions about your relationship future", icon: <Compass size={26} fill="currentColor" /> },
              { title: "Healthier Habits", desc: "Develop positive relationship habits that last", icon: <Sparkles size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY WORK WITH JINAL SANGHAVI? */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Work With Jinal Sanghavi?
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              A trusted relationship counsellor combining experience, compassion, and proven results
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "1800+ Sessions", desc: "Extensive experience helping couples and individuals heal", icon: <Star size={26} fill="currentColor" /> },
              { title: "Personalized Guidance", desc: "Tailored strategies for your unique relationship situation", icon: <User size={26} fill="currentColor" /> },
              { title: "100% Confidential", desc: "Safe, judgment-free environment for honest expression", icon: <Lock size={26} fill="currentColor" /> },
              { title: "Practical Solutions", desc: "Real tools combined with deep emotional healing", icon: <ShieldAlert size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  <Flame size={26} fill="currentColor" />
                </div>
                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  Holistic Approach
                </h3>
                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  Complete focus on personal growth and relationship wellness
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. IMAGINE A RELATIONSHIP WHERE... */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#7c2ae8] to-[#9e47ec] text-white text-center shadow-xl">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Imagine a Relationship Where...</h2>
            <p className="text-purple-100 text-sm font-sans tracking-wide mt-3">Experience the transformation that’s possible with the right guidance and support</p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-white to-pink-400 mx-auto rounded-full mt-4 opacity-80" />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 text-left space-y-6 max-w-2xl mx-auto">
            {[
              "You communicate openly and honestly without fear",
              "Conflicts are handled peacefully and constructively",
              "Trust is restored and grows stronger daily",
              "Emotional connection deepens and flourishes",
              "You feel respected, understood, and truly valued"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4 text-sm md:text-base font-sans font-medium text-white">
                <div className="w-6 h-6 bg-emerald-400 text-white rounded-full flex items-center justify-center shrink-0 text-xs font-bold">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SESSION DETAILS & INFORMATION */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Session Details & Information
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Everything you need to know about how relationship counselling sessions work
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Session Duration", desc: "45–60 minutes per session. First consultation is 60–75 minutes to deeply understand your relationship situation and create a personalized healing plan.", icon: <Clock size={26} fill="currentColor" /> },
              { title: "Format Options", desc: "Choose in-person sessions in Surat or secure online video sessions. Both formats are equally effective and completely confidential.", icon: <Monitor size={26} fill="currentColor" /> },
              { title: "Easy Booking", desc: "Simple online booking. Select your preferred date and time. We confirm within 24 hours. Flexible scheduling to suit your needs.", icon: <Calendar size={26} fill="currentColor" /> },
              { title: "Complete Confidentiality", desc: "100% confidential and judgment-free environment. Your privacy, trust, and emotional safety are our absolute highest priorities.", icon: <Shield size={26} fill="currentColor" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-purple-200/80 rounded-3xl p-8 shadow-lg shadow-purple-950/5 flex gap-5 items-start">
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[19px] mb-2 text-[#110A24] font-serif tracking-tight">{item.title}</h4>
                  <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY CLIENTS TRUST JINAL SANGHAVI */}
      <section className="py-24 px-6 bg-[#f2ebfd]">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Clients Trust Jinal Sanghavi
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide mt-3">
              Built on years of dedication, proven expertise, and real transformation results
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "1800+", text: "Counselling Sessions" },
              { val: "1000+", text: "Registered Clients" },
              { val: "Award", text: "Winning Counselor" },
              { val: "Online & Offline", text: "Sessions Available" }
            ].map((box, i) => (
              <div key={i} className="bg-white rounded-3xl border-2 border-purple-200/80 p-8 text-center shadow-lg shadow-purple-950/5">
                <span className="text-3xl font-extrabold text-[#9e47ec] block mb-2">{box.val}</span>
                <span className="text-xs text-gray-500 font-medium">{box.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto my-12">
        <div className="bg-gradient-to-r from-[#1d0b45] to-[#9e47ec] rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight max-w-3xl mx-auto">
            Your Relationship Can Improve. Take the First Step Today.
          </h2>
          <p className="text-xs md:text-sm text-purple-100/90 max-w-xl mx-auto font-sans leading-relaxed">
            Don't let misunderstandings, conflicts, and emotional distance continue to hurt your relationship. Professional guidance can help you heal, rebuild trust, and create the meaningful connection you deserve. Start your transformation journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <Calendar size={14} /> Book Consultation Now
            </a>
            <a href="https://wa.me/919924999666" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#9e47ec] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <MessageCircle size={14} className="fill-current" /> Chat On Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* 11. BOOK YOUR CONFIDENTIAL CONSULTATION FORM SECTION */}
      <section id="booking" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Book Your Confidential Consultation
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Take the first step toward healing and creating a meaningful relationship
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Booking Form */}
            <div className="lg:col-span-7 bg-white border-2 border-purple-200/80 rounded-3xl p-8 md:p-10 shadow-xl shadow-purple-950/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#ead5ff]/60 text-primary rounded-xl flex items-center justify-center font-bold">
                  <Calendar size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#110A24]">Quick Booking Form</h3>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your full name" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                    Choose Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full bg-white border-2 border-purple-200/80 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a service</option>
  <option value="relationship-1-session">Relationship Counselling - 1 Session</option>
  <option value="couples-5-sessions">Couples Counselling - 5 Sessions</option>
  <option value="pre-marital-package">Pre-Marital Counselling Package</option>
  <option value="post-breakup-healing">Post-Breakup Healing</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      &#9662;
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                        <option value="">Select time</option>
                        <option value="morning">Morning (10 AM - 1 PM)</option>
                        <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 7 PM)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        &#9662;
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                    Tell Us About Your Situation (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Share what challenges you're facing in your relationship..."
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-[#7c2ae8] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Rocket size={16} /> Book Consultation
                </button>
              </form>
            </div>

            {/* Connect With Jinal Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              
              <h3 className="text-xl font-serif font-bold text-[#110A24] px-1">Connect With Jinal</h3>

              <a 
                href="https://wa.me/919924999666" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle size={26} className="fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#110A24] font-serif">WhatsApp</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Instant responses available</p>
                  <p className="text-sm font-bold text-primary mt-1">+91 9924 999 666</p>
                </div>
              </a>

              <a 
                href="tel:+919924999666"
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
              >
                <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#110A24] font-serif">Phone Call</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Direct booking line</p>
                  <p className="text-sm font-bold text-primary mt-1">+91 9924 999 666</p>
                </div>
              </a>

              <a 
                href="mailto:jinalsanghaviofficial@gmail.com"
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
              >
                <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#110A24] font-serif">Email Us</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send your inquiry</p>
                  <p className="text-xs font-bold text-primary mt-1 truncate max-w-[200px]">jinalsanghaviofficial@gmail.com</p>
                </div>
              </a>

              <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5">
                <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#110A24] font-serif">Location</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Pal-Adajan, Surat, Gujarat</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#ebd6ff] to-[#f4ebfe] border-2 border-purple-300/80 rounded-3xl p-6 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-[#110A24]">
                  <Clock size={18} className="text-primary" />
                  <h4 className="font-bold text-sm font-serif">Availability Hours</h4>
                </div>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 font-bold" />
                    <span>Monday to Saturday: 10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X size={14} className="text-red-500 font-bold" />
                    <span>Sunday: Closed</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 pt-2 border-t border-purple-200/60 leading-relaxed">
                  First consultation typically takes 60–75 minutes. Schedule according to your convenience. Evening slots available on request.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 12. Global Footer */}
      <Footer />

    </div>
  );
}