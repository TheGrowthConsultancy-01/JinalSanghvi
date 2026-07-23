// import React, { useState, useEffect } from 'react';
// import { ShieldCheck,  Sparkles, Heart, Laptop, ArrowRight } from 'lucide-react';

// export default function About() {
//   const images = [
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.09.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.09-1.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.10-1.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.10-2.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.10-3.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.11-1.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.11-2.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.12.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.12-2.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.13-2.jpeg"
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   const qualifications = [
//     "Trained Hypnotherapist & NLP Master Practitioner",
//     "Certified International Reiki Therapist",
//     "Certified Past Life Regression Therapist",
//     "JCI Organization President",
//     "30+ Professional Awards & Recognition"
//   ];

//   const highlights = [
//     { label: "Certified Professional", color: "bg-purple-50 text-primary border border-purple-100" },
//     { label: "100% Confidential", color: "bg-blue-50 text-blue-700 border border-blue-100" },
//     { label: "Compassionate Care", color: "bg-pink-50 text-pink-700 border border-pink-100" },
//     { label: "Online & In-Person", color: "bg-emerald-50 text-emerald-700 border border-emerald-100" }
//   ];

//   return (
//     <section id="about" className="py-24 px-6 md:px-16 bg-white relative">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-[#110A24] font-serif">
//             About <span className="text-primary italic font-serif">Jinal Sanghavi</span>
//           </h2>
//           <p className="text-gray-500 text-sm mt-2 font-medium tracking-wide">
//             Professional Counsellor, Reiki Therapist, Life Coach & Manifestation Trainer
//           </p>
//           <div className="w-16 h-[3px] bg-primary mx-auto rounded-full mt-4" />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* Left: About Slider Carousel */}
//           <div className="lg:col-span-5 relative group">
//             <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100/40 relative aspect-4/5 h-[480px]">
//               {images.map((imgUrl, idx) => (
//                 <div 
//                   key={idx}
//                   className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                     idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//                   }`}
//                 >
//                   <img 
//                     src={imgUrl} 
//                     alt={`Jinal Sanghavi Presentation ${idx + 1}`} 
//                     className="w-full h-full object-cover object-center"
//                     loading="lazy"
//                   />
//                   {/* Subtle Dark Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
//                 </div>
//               ))}

//               {/* Slider Dots indicators */}
//               <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentSlide(idx)}
//                     className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
//                       idx === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
//                     }`}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Experience Badge */}
//             <div className="absolute bottom-6 -right-4 z-20 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl shadow-purple-600/20 text-center">
//               <span className="text-2xl font-black block">17+</span>
//               <span className="text-[10px] uppercase font-bold tracking-widest opacity-90">Years in Practice</span>
//             </div>
//           </div>

//           {/* Right: Copywriting Description */}
//           <div className="lg:col-span-7 space-y-6">
//             <h3 className="text-3xl font-extrabold text-[#110A24] font-serif">
//               I'm <span className="text-primary italic font-serif">Jinal Sanghavi</span>
//             </h3>
//             <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
//               I'm Jinal Sanghavi, a professional Manifestation Trainer dedicated to helping individuals transform their mindset, energy, and life journey. With 17+ years of experience, I have guided 500+ people toward emotional healing, self-growth, abundance, and inner clarity.
//             </p>
//             <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
//               My approach combines manifestation techniques with NLP, hypnotherapy, Reiki healing, relationship coaching, and past-life regression. I believe true transformation begins from within when your thoughts, emotions, and energy align with your desires.
//             </p>
//             <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
//               Every session is designed to help you release limiting beliefs, heal deeply, and attract the life you truly deserve. My mission is to empower you to become the highest version of yourself and consciously create a life filled with peace, purpose, and abundance.
//             </p>

//             {/* Qualifications list */}
//             <div className="space-y-3 pt-2">
//               <h4 className="font-bold text-[#110A24] text-base font-serif">My Qualifications</h4>
//               <ul className="space-y-2.5">
//                 {qualifications.map((q, i) => (
//                   <li key={i} className="flex items-start gap-3 text-[14px] text-gray-700 font-medium">
//                     <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
//                     <span>{q}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Grid of badges */}
//             <div className="grid grid-cols-2 gap-3 pt-4">
//               {highlights.map((hl, idx) => (
//                 <div key={idx} className={`${hl.color} font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center shadow-2xs`}>
//                   {hl.label}
//                 </div>
//               ))}
//             </div>

//             {/* Start CTA */}
//             <a 
//               href="#booking" 
//               className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-purple-600/10 transition-colors cursor-pointer mt-4"
//             >
//               Start Your Journey <ArrowRight size={14} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { ShieldCheck, ArrowRight, Sparkles, Heart, Laptop, Shield } from 'lucide-react';

// export default function About() {
//   const images = [
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.09.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.09-1.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.10-1.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.10-2.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.10-3.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.11-1.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.11-2.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.12.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.12-2.jpeg",
//     "https://jinalsanghavi.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-27-at-13.00.13-2.jpeg"
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   const qualifications = [
//     "Trained Hypnotherapist & NLP Master Practitioner",
//     "Certified International Reiki Therapist",
//     "Certified Past Life Regression Therapist",
//     "JCI Organization President",
//     "30+ Professional Awards & Recognition"
//   ];

//   const highlights = [
//     { label: "Certified Professional", icon: <Sparkles size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> },
//     { label: "100% Confidential", icon: <Shield size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> },
//     { label: "Compassionate Care", icon: <Heart size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> },
//     { label: "Online & In-Person", icon: <Laptop size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> }
//   ];

//   return (
//     <section id="about" className="py-24 px-6 md:px-16 bg-[#f6edfe] relative">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
//             About <span className="text-primary font-serif font-bold not-italic">Jinal Sanghavi</span>
//           </h2>
//           <p className="text-gray-500 text-sm mt-2 font-medium tracking-wide">
//             Professional Counsellor, Reiki Therapist, Life Coach & Manifestation Trainer
//           </p>
//           <div className="w-16 h-[3px] bg-primary mx-auto rounded-full mt-4" />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
//           {/* Left: About Slider Carousel */}
//           <div className="lg:col-span-6 relative group w-full flex flex-col justify-between">
//             <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100/40 relative w-full h-full min-h-[480px] lg:min-h-full">
//               {images.map((imgUrl, idx) => (
//                 <div 
//                   key={idx}
//                   className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                     idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
//                   }`}
//                 >
//                   <img 
//                     src={imgUrl} 
//                     alt={`Jinal Sanghavi Presentation ${idx + 1}`} 
//                     className="w-full h-full object-cover object-center"
//                     loading="lazy"
//                   />
//                   {/* Subtle Dark Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
//                 </div>
//               ))}

//               {/* Slider Dots indicators */}
//               <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentSlide(idx)}
//                     className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
//                       idx === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
//                     }`}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 ))}
//               </div>

//               {/* Experience Badge */}
//               <div className="absolute bottom-4 right-4 z-20 bg-primary text-white px-5 py-3.5 rounded-2xl shadow-xl shadow-purple-600/30 text-center border border-white/10 backdrop-blur-xs">
//                 <span className="text-2xl font-black block leading-none mb-1">17+</span>
//                 <span className="text-[9px] uppercase font-bold tracking-widest opacity-95 block">Years in Practice</span>
//               </div>
//             </div>
//           </div>

//           {/* Right: Copywriting Description */}
//           <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
//             <div className="space-y-6">
//               <h3 className="text-3xl font-extrabold text-[#110A24] font-serif">
//                 I'm <span className="text-primary font-serif font-bold not-italic">Jinal Sanghavi</span>
//               </h3>
//               <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
//                 I'm Jinal Sanghavi, a professional Manifestation Trainer dedicated to helping individuals transform their mindset, energy, and life journey. With 17+ years of experience, I have guided 500+ people toward emotional healing, self-growth, abundance, and inner clarity.
//               </p>
//               <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
//                 My approach combines manifestation techniques with NLP, hypnotherapy, Reiki healing, relationship coaching, and past-life regression. I believe true transformation begins from within when your thoughts, emotions, and energy align with your desires.
//               </p>
//               <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
//                 Every session is designed to help you release limiting beliefs, heal deeply, and attract the life you truly deserve. My mission is to empower you to become the highest version of yourself and consciously create a life filled with peace, purpose, and abundance.
//               </p>
//             </div>

//             {/* Qualifications list */}
//             <div className="space-y-3 pt-2">
//               <h4 className="font-bold text-[#110A24] text-base font-serif">My Qualifications</h4>
//               <ul className="space-y-2.5">
//                 {qualifications.map((q, i) => (
//                   <li key={i} className="flex items-start gap-3 text-[14px] text-gray-700 font-medium">
//                     <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
//                     <span>{q}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Grid of badges and CTA row */}
//             <div className="space-y-4 pt-2">
//               <div className="grid grid-cols-2 gap-3">
//                 {highlights.map((hl, idx) => (
//                   <div 
//                     key={idx} 
//                     className="bg-[#ead5ff] hover:bg-[#dec2fe] text-[#110A24] font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-2xl flex items-center justify-start gap-3 shadow-2xs transition-all duration-300 border border-purple-200/20 cursor-default"
//                   >
//                     {hl.icon}
//                     <span>{hl.label}</span>
//                   </div>
//                 ))}
//               </div>

//               <div>
//                 <a 
//                   href="#booking" 
//                   className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-purple-600/10 transition-colors cursor-pointer"
//                 >
//                   <ArrowRight size={14} className="rotate-180" /> START YOUR JOURNEY
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Heart, Laptop, Shield } from 'lucide-react';

// 1. Apni local images ko yahan import karein (path apne folder structure ke mutabiq adjust kar lein)
import img1 from '../assets/pic1.jpeg';
import img2 from '../assets/pic2.jpeg';
import img3 from '../assets/pic3.jpeg';
import img4 from '../assets/pic4.jpeg';
import img5 from '../assets/pic5.jpeg';
import img6 from '../assets/pic6.jpeg';
import img7 from '../assets/pic7.jpeg';
import img8 from '../assets/pic8.jpeg';
import img9 from '../assets/pic9.jpeg';
import img10 from '../assets/pic10.jpeg';
// ... jitni bhi images hain import kar lein

export default function About() {
  // 2. Imported images ko array mein rakh dein
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    // ... baaki images
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const qualifications = [
    "Trained Hypnotherapist & NLP Master Practitioner",
    "Certified International Reiki Therapist",
    "Certified Past Life Regression Therapist",
    "JCI Organization President",
    "30+ Professional Awards & Recognition"
  ];

  const highlights = [
    { label: "Certified Professional", icon: <Sparkles size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> },
    { label: "100% Confidential", icon: <Shield size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> },
    { label: "Compassionate Care", icon: <Heart size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> },
    { label: "Online & In-Person", icon: <Laptop size={16} className="shrink-0 text-[#9e47ec] fill-[#9e47ec]" /> }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-[#f6edfe] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            About <span className="text-primary font-serif font-bold not-italic">Jinal Sanghavi</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-medium tracking-wide">
            Professional Counsellor, Reiki Therapist, Life Coach & Manifestation Trainer
          </p>
          <div className="w-16 h-[3px] bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: About Slider Carousel */}
          <div className="lg:col-span-6 relative group w-full flex flex-col justify-between">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-100/40 relative w-full h-full min-h-[480px] lg:min-h-full">
              {images.map((imgSrc, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={imgSrc} 
                    alt={`Jinal Sanghavi Presentation ${idx + 1}`} 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}

              {/* Slider Dots indicators */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-primary text-white px-5 py-3.5 rounded-2xl shadow-xl shadow-purple-600/30 text-center border border-white/10 backdrop-blur-xs">
                <span className="text-2xl font-black block leading-none mb-1">17+</span>
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-95 block">Years in Practice</span>
              </div>
            </div>
          </div>

          {/* Right: Copywriting Description */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-3xl font-extrabold text-[#110A24] font-serif">
                I'm <span className="text-primary font-serif font-bold not-italic">Jinal Sanghavi</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
                I'm Jinal Sanghavi, a professional Manifestation Trainer dedicated to helping individuals transform their mindset, energy, and life journey. With 17+ years of experience, I have guided 500+ people toward emotional healing, self-growth, abundance, and inner clarity.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
                My approach combines manifestation techniques with NLP, hypnotherapy, Reiki healing, relationship coaching, and past-life regression. I believe true transformation begins from within when your thoughts, emotions, and energy align with your desires.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] font-sans">
                Every session is designed to help you release limiting beliefs, heal deeply, and attract the life you truly deserve. My mission is to empower you to become the highest version of yourself and consciously create a life filled with peace, purpose, and abundance.
              </p>
            </div>

            {/* Qualifications list */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-[#110A24] text-base font-serif">My Qualifications</h4>
              <ul className="space-y-2.5">
                {qualifications.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-gray-700 font-medium">
                    <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grid of badges and CTA row */}
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((hl, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#ead5ff] hover:bg-[#dec2fe] text-[#110A24] font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-2xl flex items-center justify-start gap-3 shadow-2xs transition-all duration-300 border border-purple-200/20 cursor-default"
                  >
                    {hl.icon}
                    <span>{hl.label}</span>
                  </div>
                ))}
              </div>

              <div>
                <a 
                  href="#booking" 
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-purple-600/10 transition-colors cursor-pointer"
                >
                  <ArrowRight size={14} className="rotate-180" /> START YOUR JOURNEY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}