// import React from 'react';
// import { Users, Award, Heart, CalendarCheck, HelpCircle } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section id="home" className="relative min-h-screen bg-[#0d0520] bg-gradient-to-br from-[#0d0520] via-[#1a0840] to-[#2a0d65] text-white overflow-hidden py-24 px-6 md:px-16 flex flex-col justify-center">
//       {/* Background ambient lighting blur */}
//       <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-secondary-cyan/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
//         {/* Left Content Column */}
//         <div className="lg:col-span-7 space-y-6">
          
//           <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-serif tracking-tight leading-[1.15]">
//             <span className="text-primary-light font-sans font-extrabold text-[32px] md:text-[38px] block tracking-wider mb-2">MANIFESTATION</span>
//             for people ready <br />
//             to attract success, <br />
//             <span className="text-primary-light font-sans font-extrabold text-[32px] md:text-[38px] tracking-wider">ABUNDANCE</span> <br />
//             and inner peace with
//             <span className="font-signature text-5xl md:text-6xl text-white mt-3 block font-normal tracking-wide bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent [text-shadow:0_4px_20px_rgba(255,255,255,0.5),0_2px_10px_rgba(168,85,247,0.4)]">
//               Jinal Sanghavi
//             </span>
//           </h1>
          
//           <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-sans">
//             Step into the life you've always envisioned with expert manifestation guidance from Jinal Sanghavi. 
//             Transform your mindset, align your energy, and attract abundance & inner peace.
//           </p>

//           {/* Booking / Information buttons */}
//           <div className="flex flex-wrap gap-4 pt-4">
//             <a 
//               href="#booking" 
//               className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 cursor-pointer text-sm tracking-wider uppercase"
//             >
//               <CalendarCheck size={18} /> Book Now
//             </a>
//             <a 
//               href="#manifestation" 
//               className="bg-white text-dark-slate hover:bg-purple-100/10 hover:text-white font-bold px-8 py-3.5 rounded-full border border-white/20 transition-all shadow-md flex items-center gap-2 cursor-pointer text-sm tracking-wider uppercase bg-transparent"
//             >
//               <HelpCircle size={18} /> Learn More
//             </a>
//           </div>

//           {/* Hero Statistics Glass Card */}
//           <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md grid grid-cols-3 gap-4 max-w-lg">
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Users size={20} /></div>
//               <div><h4 className="text-lg font-bold">500+</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Happy Clients</p></div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Award size={20} /></div>
//               <div><h4 className="text-lg font-bold">17+</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Years Exp.</p></div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Heart size={20} /></div>
//               <div><h4 className="text-lg font-bold">98%</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Satisfaction</p></div>
//             </div>
//           </div>
//         </div>

//         {/* Right Portrait Column */}
//         <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
//           <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-primary/20 to-pink-500/20 p-2 border border-white/10 shadow-2xl flex items-center justify-center">
//             <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_100s_linear_infinite]" />
//             <div className="w-full h-full rounded-full bg-[#180A2B] overflow-hidden relative border border-white/10 shadow-inner">
//               <img 
//                 src="https://jinalsanghavi.com/wp-content/uploads/2026/05/jinal-hero-banner-image.png" 
//                 alt="Jinal Sanghavi - Manifestation Expert" 
//                 className="w-full h-full object-cover object-center scale-[1.05] translate-y-3"
//               />
//             </div>
//           </div>
//           <div className="mt-6 inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg">
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//             Certified Manifestation Expert
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { Users, Award, Heart, CalendarCheck, HelpCircle } from 'lucide-react';
// import heroImage from '../assets/herobanner.jpg'; // Import the local image

// export default function Hero() {
//   return (
//     <section id="home" className="relative min-h-screen bg-[#0d0520] bg-gradient-to-br from-[#0d0520] via-[#1a0840] to-[#2a0d65] text-white overflow-hidden py-24 px-6 md:px-16 flex flex-col justify-center">
//       {/* Background ambient lighting blur */}
//       <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-secondary-cyan/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
//         {/* Left Content Column */}
//         <div className="lg:col-span-7 space-y-6">
          
//           <h1 className="font-bold font-serif tracking-tight leading-[1.25]">
//             <span className="text-[#882ed8] font-sans font-extrabold text-[32px] md:text-[38px] block tracking-wider mb-2">MANIFESTATION</span>
//             <span className="text-[32px] md:text-[38px] block font-serif tracking-tight leading-tight">for people ready to attract</span>
//             <span className="text-[32px] md:text-[38px] block font-serif tracking-tight leading-tight">success,</span>
//             <span className="text-[#882ed8] font-sans font-extrabold text-[32px] md:text-[38px] tracking-wider block mt-2">ABUNDANCE</span>
//             <span className="text-[32px] md:text-[38px] block font-serif tracking-tight leading-tight">and inner peace with</span>
//             <span className="font-signature text-5xl md:text-6xl text-[#f1d3ff] mt-4 block font-normal tracking-wide [text-shadow:0_4px_20px_rgba(255,255,255,0.3),0_2px_10px_rgba(168,85,247,0.4)]">
//               Jinal Sanghavi
//             </span>
//           </h1>
          
//           <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-sans">
//             Step into the life you've always envisioned with expert manifestation guidance from Jinal Sanghavi. 
//             Transform your mindset, align your energy, and attract abundance & inner peace.
//           </p>

//           {/* Booking / Information buttons */}
//           <div className="flex flex-wrap gap-4 pt-4">
//             <a 
//               href="#booking" 
//               className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 cursor-pointer text-sm tracking-wider uppercase"
//             >
//               <CalendarCheck size={18} /> Book Now
//             </a>
//             <a 
//               href="#manifestation" 
//               className="bg-white text-dark-slate hover:bg-purple-100/10 hover:text-white font-bold px-8 py-3.5 rounded-full border border-white/20 transition-all shadow-md flex items-center gap-2 cursor-pointer text-sm tracking-wider uppercase bg-transparent"
//             >
//               <HelpCircle size={18} /> Learn More
//             </a>
//           </div>

//           {/* Hero Statistics Glass Card */}
//           <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md grid grid-cols-3 gap-4 max-w-lg">
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Users size={20} /></div>
//               <div><h4 className="text-lg font-bold">10,000+</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Happy Clients</p></div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Award size={20} /></div>
//               <div><h4 className="text-lg font-bold">17+</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Years Exp.</p></div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Heart size={20} /></div>
//               <div><h4 className="text-lg font-bold">98%</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Satisfaction</p></div>
//             </div>
//           </div>
//         </div>

//         {/* Right Portrait Column */}
//         <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
//           <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-primary/20 to-pink-500/20 p-2 border border-white/10 shadow-2xl flex items-center justify-center">
//             <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_100s_linear_infinite]" />
//             <div className="w-full h-full rounded-full bg-[#180A2B] overflow-hidden relative border border-white/10 shadow-inner">
//               <img 
//                 src={heroImage} 
//                 alt="Jinal Sanghavi - Manifestation Expert" 
//                 className="w-full h-full object-cover object-center scale-[1.05] translate-y-3"
//               />
//             </div>
//           </div>
//           <div className="mt-6 inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg">
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//             Certified Manifestation Expert
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Users, Award, Heart, CalendarCheck, HelpCircle } from 'lucide-react';
import heroImage from '../assets/Jinal Hero Banner Image 2.png'; // Import the local image

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0d0520] bg-gradient-to-br from-[#0d0520] via-[#1a0840] to-[#2a0d65] text-white overflow-hidden py-24 px-6 md:px-16 flex flex-col justify-center">
      {/* Background ambient lighting blur */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-secondary-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6">
          
          <h1 className="font-bold font-serif tracking-tight leading-[1.25]">
            <span className="text-[#882ed8] font-sans font-extrabold text-[32px] md:text-[38px] block tracking-wider mb-2">MANIFESTATION</span>
            <span className="text-[32px] md:text-[38px] block font-serif tracking-tight leading-tight">for people ready to attract</span>
            <span className="text-[32px] md:text-[38px] block font-serif tracking-tight leading-tight">success,</span>
            <span className="text-[#882ed8] font-sans font-extrabold text-[32px] md:text-[38px] tracking-wider block mt-2">ABUNDANCE</span>
            <span className="text-[32px] md:text-[38px] block font-serif tracking-tight leading-tight">and inner peace with</span>
            <span className="font-signature text-5xl md:text-6xl text-[#f1d3ff] mt-4 block font-normal tracking-wide [text-shadow:0_4px_20px_rgba(255,255,255,0.3),0_2px_10px_rgba(168,85,247,0.4)]">
              Jinal Sanghavi
            </span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-sans">
            Step into the life you've always envisioned with expert manifestation guidance from Jinal Sanghavi. 
            Transform your mindset, align your energy, and attract abundance & inner peace.
          </p>

          {/* Booking / Information buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#booking" 
              className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 cursor-pointer text-sm tracking-wider uppercase"
            >
              <CalendarCheck size={18} /> Book Now
            </a>
            <a 
              href="#manifestation" 
              className="text-white hover:text-purple-200 font-bold px-8 py-3.5 rounded-full border border-white/20 transition-all shadow-md flex items-center gap-2 cursor-pointer text-sm tracking-wider uppercase bg-transparent"
            >
              <HelpCircle size={18} /> Learn More
            </a>
          </div>

          {/* Hero Statistics Glass Card */}
          <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md grid grid-cols-3 gap-4 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Users size={20} /></div>
              <div><h4 className="text-lg font-bold">10,000+</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Happy Clients</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Award size={20} /></div>
              <div><h4 className="text-lg font-bold">17+</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Years Exp.</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl text-primary-light shrink-0"><Heart size={20} /></div>
              <div><h4 className="text-lg font-bold">98%</h4><p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Satisfaction</p></div>
            </div>
          </div>
        </div>

        {/* Right Portrait Column with Image Shifted Up & More Gap for Badge */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          <div className="w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center z-10 -translate-y-4">
            <img 
              src={heroImage} 
              alt="Jinal Sanghavi - Manifestation Expert" 
              className="w-full h-full object-contain object-center drop-shadow-2xl scale-110"
            />
          </div>

          <div className="mt-10 inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Certified Manifestation Expert
          </div>
        </div>
      </div>
    </section>
  );
}