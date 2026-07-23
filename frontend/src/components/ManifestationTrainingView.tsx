import  { useEffect } from 'react';
import { Star, Sparkles, Award, Rocket, Target, Eye, ShieldAlert, Heart, TrendingUp, Compass, Clock, Monitor, Calendar, Shield, MessageCircle, Flame, User, Phone, Mail, MapPin, Check, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ManifestationTrainingView() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#110A24]">
      
      {/* 1. Global Navbar (Non-fixed so it sits naturally at the top) */}
      <div className="bg-[#1d0b45] text-white">
        <Navbar />
      </div>

      {/* Back Header Bar - Clean spacing right below the navbar */}
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
            Manifestation Training
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl font-light">
            Transform Your Thoughts Into Real Results & Attract the Life You Truly Deserve
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Star size={14} className="text-yellow-400 fill-yellow-400" /> Expert Guidance
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-yellow-400 fill-yellow-400" /> Proven Results
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Award size={14} className="text-yellow-400 fill-yellow-400" /> 17+ Years
            </span>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
              <Rocket size={14} /> Book Discovery Session
            </a>
            <a href="#science" className="inline-flex items-center gap-2 bg-white text-[#110A24] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
              &darr; Discover More
            </a>
          </div>
          <div className="pt-12 grid grid-cols-3 gap-6 border-t border-white/10 max-w-2xl mt-8">
            <div>
              <span className="text-3xl md:text-4xl font-black block">500+</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Happy Clients</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-black block">1800+</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Sessions Done</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-black block">98%</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCIENCE SECTION */}
      <section id="science" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Manifestation Is Not Magic &mdash; It Is Science
          </h2>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Your thoughts, beliefs, emotions, and actions shape your reality. Manifestation is the process of aligning your mindset, energy, and actions toward your desired goals.
          </p>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Whether you want <span className="text-primary font-bold">success, abundance, confidence, relationships, health, or personal growth</span>, manifestation training can help you create powerful internal shifts that attract the life you truly deserve.
          </p>
        </div>
      </section>

      {/* 4. WHAT YOU WILL LEARN SECTION */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              What You Will Learn
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Master powerful manifestation techniques that create lasting transformation in your life
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Goal Alignment", desc: "Align your deepest goals with your values, energy, and daily actions.", icon: <Target size={26} fill="currentColor" /> },
              { title: "Positive Mindset Development", desc: "Develop a powerful abundance mindset that attracts success.", icon: <Sparkles size={26} fill="currentColor" /> },
              { title: "Limiting Belief Removal", desc: "Identify and eliminate beliefs that are blocking your progress.", icon: <ShieldAlert size={26} fill="currentColor" /> },
              { title: "Visualization Techniques", desc: "Master powerful visualization to program your subconscious mind.", icon: <Eye size={26} fill="currentColor" /> },
              { title: "Emotional Alignment", desc: "Align your emotions with your goals for faster manifestation.", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Self-Confidence Building", desc: "Build unshakeable confidence to pursue and attract your goals.", icon: <Award size={26} fill="currentColor" /> },
              { title: "Energy Management", desc: "Learn to raise and maintain your vibrational energy daily.", icon: <Flame size={26} fill="currentColor" /> }
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

      {/* 5. IDEAL FOR PEOPLE WHO WANT */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Ideal For People Who Want
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Manifestation training works for anyone ready to take full control of their destiny
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Greater Success", desc: "Achieve career and life goals faster than ever before.", icon: <TrendingUp size={26} fill="currentColor" /> },
              { title: "Better Relationships", desc: "Attract and nurture meaningful, deep connections.", icon: <Heart size={26} fill="currentColor" /> },
              { title: "More Confidence", desc: "Believe in yourself and face every challenge with courage.", icon: <Star size={26} fill="currentColor" /> },
              { title: "Financial Growth", desc: "Create abundance and attract financial prosperity.", icon: <Compass size={26} fill="currentColor" /> },
              { title: "Emotional Healing", desc: "Release past wounds and create lasting emotional wellness.", icon: <Sparkles size={26} fill="currentColor" /> },
              { title: "Purpose & Clarity", desc: "Find your true life purpose and direction clearly.", icon: <Target size={26} fill="currentColor" /> }
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

      {/* 6. TRANSFORM MULTIPLE AREAS */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Transform Multiple Areas of Your Life
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Experience real, lasting benefits across mental, emotional, and achievement dimensions
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-8 shadow-lg shadow-purple-950/5 space-y-4">
              <h3 className="text-xl font-bold font-serif text-[#110A24] mb-4 text-center">Mental & Emotional Benefits</h3>
              {[
                "Crystal clear mental clarity and focus daily",
                "Reduced anxiety, worry, and stress levels",
                "Increased confidence and strong self-belief",
                "Better emotional control and inner stability",
                "Powerful, positive thinking patterns always",
                "Deep inner peace and lasting calm mindset"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-sans font-normal text-[#6B6579]">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">&bull;</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-8 shadow-lg shadow-purple-950/5 space-y-4">
              <h3 className="text-xl font-bold font-serif text-[#110A24] mb-4 text-center">Life & Achievement Benefits</h3>
              {[
                "Naturally attract success and opportunities",
                "Create financial abundance and prosperity",
                "Build deep and meaningful relationships",
                "Advance your career rapidly and confidently",
                "Unlock better life opportunities every day",
                "Fulfill your true life purpose and mission"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-sans font-normal text-[#6B6579]">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">&bull;</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROVEN RESULTS */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#7c2ae8] to-[#9e47ec] text-white text-center shadow-xl">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Proven Results From Real Clients</h2>
            <p className="text-purple-100 text-sm font-sans tracking-wide mt-3">Transformations backed by real data and authentic client success stories</p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-white to-pink-400 mx-auto rounded-full mt-4 opacity-80" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "92%", text: "See Results in 3-5 Sessions" },
              { val: "500+", text: "Transformed Lives" },
              { val: "98%", text: "Client Satisfaction Rate" },
              { val: "17+", text: "Years Of Expertise" }
            ].map((m, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <span className="text-3xl font-black block mb-2">{m.val}</span>
                <span className="text-xs text-purple-100/90 font-medium">{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Choose Jinal Sanghavi?
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              A trusted manifestation expert combining experience, compassion, and proven results
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Manifestation Expert", desc: "Proven techniques that have transformed 500+ lives", icon: <Award size={26} fill="currentColor" /> },
              { title: "Practical Techniques", desc: "Real strategies you implement immediately in daily life", icon: <Sparkles size={26} fill="currentColor" /> },
              { title: "Personalized Guidance", desc: "Customized approach tailored to your unique journey", icon: <User size={26} fill="currentColor" /> },
              { title: "Holistic Transformation", desc: "Complete mind, body, and soul transformation approach", icon: <Target size={26} fill="currentColor" /> },
              { title: "Proven Client Results", desc: "Real measurable results backed by client success stories", icon: <TrendingUp size={26} fill="currentColor" /> }
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

      {/* 9. SESSION DETAILS */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Session Details & Information
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Everything you need to know about how manifestation training sessions work
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Session Duration", desc: "45-60 minutes per session. First consultation is 60-75 minutes to understand your goals and create a personalized manifestation roadmap.", icon: <Clock size={26} fill="currentColor" /> },
              { title: "Format Options", desc: "Choose in-person sessions in Surat or secure online video sessions. Both formats are equally effective and professionally delivered.", icon: <Monitor size={26} fill="currentColor" /> },
              { title: "Easy Booking", desc: "Simple online booking. Select your preferred date and time. We confirm within 24 hours. Flexible scheduling to suit your lifestyle.", icon: <Calendar size={26} fill="currentColor" /> },
              { title: "Complete Confidentiality", desc: "100% confidential and judgment-free environment. Your privacy, trust, and personal journey are our absolute highest priorities.", icon: <Shield size={26} fill="currentColor" /> }
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

      {/* 10. WHY CLIENTS TRUST */}
      <section className="py-24 px-6 bg-white">
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

      {/* 11. FINAL CTA BANNER */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto my-12">
        <div className="bg-gradient-to-r from-[#1d0b45] to-[#9e47ec] rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight max-w-3xl mx-auto">
            Imagine Becoming The Person Who Naturally Attracts Success. <br/> Your Transformation Starts Here.
          </h2>
          <p className="text-xs md:text-sm text-purple-100/90 max-w-xl mx-auto font-sans leading-relaxed">
            Stop waiting for life to change on its own. With expert manifestation training, you'll learn to align your mindset, energy, and actions to attract everything you desire &mdash; success, abundance, love, and fulfillment. Take the first step today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <Rocket size={14} /> Book Discovery Session
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#9e47ec] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <MessageCircle size={14} className="fill-current" /> Chat On Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* 12. BOOK YOUR MANIFESTATION DISCOVERY SESSION */}
      <section id="booking" className="py-24 px-6 md:px-16 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Book Your Manifestation Discovery Session
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Take the first powerful step toward attracting the life you truly deserve
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Booking Form (Left Side) */}
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
                      <option value="manifestation-1">Manifestation Training - 1 Session</option>
                      <option value="manifestation-5">Manifestation Training - 5 Sessions</option>
                      <option value="coaching">1-on-1 Coaching Package</option>
                      <option value="workshop">Group Manifestation Workshop</option>
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
                    What Do You Want To Manifest? (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Share your goals, desires, or what you want to attract in your life..."
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-[#7c2ae8] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Rocket size={16} /> Book My Discovery Session
                </button>
              </form>
            </div>

            {/* Connect With Jinal Sidebar (Right Side) */}
            <div className="lg:col-span-5 space-y-6">
              
              <h3 className="text-xl font-serif font-bold text-[#110A24] px-1">Connect With Jinal</h3>

              {/* WhatsApp Card */}
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

              {/* Phone Call Card */}
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

              {/* Email Us Card */}
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

              {/* Location Card */}
              <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5">
                <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#110A24] font-serif">Location</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Pal-Adajan, Surat, Gujarat</p>
                </div>
              </div>

              {/* Availability Hours Box */}
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
                  First discovery session is 60–75 minutes. Evening slots available on request for your convenience.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 13. Global Footer */}
      <Footer />

    </div>
  );
}