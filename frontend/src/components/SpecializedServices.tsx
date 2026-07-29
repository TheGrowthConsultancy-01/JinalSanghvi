// import React from 'react';
// import { Brain, Sparkles, Star, PenTool, Hash, MoveRight } from 'lucide-react';

// export default function SpecializedServices() {
//   const services = [
//     {
//       icon: <Brain size={24} />,
//       title: "Manifestation Training",
//       desc: "Align your energy and manifest the life you desire through proven techniques."
//     },
//     {
//       icon: <Sparkles size={24} />,
//       title: "Reiki Healing",
//       desc: "Ancient energy healing to restore balance and promote wellness."
//     },
//     {
//       icon: <Star size={24} />,
//       title: "Tarot Reading",
//       desc: "Gain clarity through intuitive card reading and guidance."
//     },
//     {
//       icon: <PenTool size={24} />,
//       title: "Signature Analysis",
//       desc: "Reveal personality traits through professional analysis."
//     },
//     {
//       icon: <Hash size={24} />,
//       title: "Numerology",
//       desc: "Understand your life path using ancient number science."
//     }
//   ];

//   return (
//     <section id="services" className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#f8fafc] to-purple-100/40 relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Main Section Header */}
//         <div className="text-center mb-16 space-y-3">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
//             Specialized Services
//           </h2>
//           <p className="text-gray-500 text-sm font-sans tracking-wide">
//             Comprehensive healing solutions for your unique needs
//           </p>
//           <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
//         </div>

//         {/* 5-Column Horizontal Layout Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-purple-100/40 shadow-xs hover:shadow-md transition-all duration-300 group"
//             >
//               {/* Soft Tinted Icon Wrapper */}
//               <div className="w-14 h-14 bg-purple-50 text-primary rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs">
//                 {service.icon}
//               </div>

//               {/* Exact Weight Card Title */}
//               <h3 className="text-[17px] font-sans font-bold text-[#110A24] tracking-tight mb-3">
//                 {service.title}
//               </h3>

//               {/* Exact Light Body Copy */}
//               <p className="text-[#6B6579] text-[13px] font-sans font-normal leading-relaxed mb-6 flex-grow">
//                 {service.desc}
//               </p>

//               {/* Subtle Linear Text Action Link */}
//               <a 
//                 href="#booking"
//                 className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark text-[13px] font-sans font-bold tracking-wide transition-colors group-hover:gap-2 cursor-pointer mt-auto"
//               >
//                 Book <MoveRight size={14} />
//               </a>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// import { Brain, Sparkles, Star, PenTool, Hash, MoveRight } from 'lucide-react';

// export default function SpecializedServices() {
//   const services = [
//     {
//       icon: <Brain size={24} fill="currentColor" />,
//       title: "Manifestation Training",
//       desc: "Align your energy and manifest the life you desire through proven techniques."
//     },
//     {
//       icon: <Sparkles size={24} fill="currentColor" />,
//       title: "Reiki Healing",
//       desc: "Ancient energy healing to restore balance and promote wellness."
//     },
//     {
//       icon: <Star size={24} fill="currentColor" />,
//       title: "Tarot Reading",
//       desc: "Gain clarity through intuitive card reading and guidance."
//     },
//     {
//       icon: <PenTool size={24} fill="currentColor" />,
//       title: "Signature Analysis",
//       desc: "Reveal personality traits through professional analysis."
//     },
//     {
//       icon: <Hash size={24} fill="currentColor" />,
//       title: "Numerology",
//       desc: "Understand your life path using ancient number science."
//     }
//   ];

//   return (
//     <section id="services" className="py-24 px-4 md:px-8 bg-[#f2ebfd] relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Main Section Header */}
//         <div className="text-center mb-16 space-y-3">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
//             Specialized Services
//           </h2>
//           <p className="text-gray-500 text-sm font-sans tracking-wide">
//             Comprehensive healing solutions for your unique needs
//           </p>
//           <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
//         </div>

//         {/* 5-Column Horizontal Layout Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
//             >
//               {/* Animated Top Border Line on Hover */}
//               <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Soft Tinted Icon Wrapper - Transitions to Solid Purple on Hover */}
//               <div className="w-14 h-14 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
//                 {service.icon}
//               </div>

//               {/* Card Title - Updated to font-serif, font-bold, and matched color style */}
//               <h3 className="text-[17px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
//                 {service.title}
//               </h3>

//               {/* Description Body */}
//               <p className="text-[#6B6579] text-[13px] font-sans font-normal leading-relaxed mb-6 flex-grow">
//                 {service.desc}
//               </p>

//               {/* Text Action Link */}
//               <a 
//                 href="#booking"
//                 className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark text-[13px] font-sans font-bold tracking-wide transition-colors group-hover:gap-2 cursor-pointer mt-auto"
//               >
//                 Book <MoveRight size={14} />
//               </a>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { Brain, Sparkles, Star, PenTool, Hash, MoveRight } from 'lucide-react';

export default function SpecializedServices() {
  const services = [
    {
      icon: <Brain size={24} fill="currentColor" />,
      title: "Manifestation Training",
      desc: "Align your energy and manifest the life you desire through proven techniques."
    },
    {
      icon: <Sparkles size={24} fill="currentColor" />,
      title: "Reiki Healing",
      desc: "Ancient energy healing to restore balance and promote wellness."
    },
    {
      icon: <Star size={24} fill="currentColor" />,
      title: "Tarot Reading",
      desc: "Gain clarity through intuitive card reading and guidance."
    },
    {
      icon: <PenTool size={24} fill="currentColor" />,
      title: "Signature Analysis",
      desc: "Reveal personality traits through professional analysis."
    },
    {
      icon: <Hash size={24} fill="currentColor" />,
      title: "Numerology",
      desc: "Understand your life path using ancient number science."
    }
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-[#f2ebfd] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Specialized Services
          </h2>
          <p className="text-gray-500 text-sm font-sans tracking-wide">
            Comprehensive healing solutions for your unique needs
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 5-Column Horizontal Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Top Border Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Soft Tinted Icon Wrapper - Transitions to Solid Purple on Hover */}
              <div className="w-14 h-14 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                {service.icon}
              </div>

              {/* Card Title - Updated to font-serif, font-bold, and matched color style */}
              <h3 className="text-[17px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                {service.title}
              </h3>

              {/* Description Body */}
              <p className="text-[#6B6579] text-[13px] font-sans font-normal leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>

              {/* Text Action Link */}
              <a 
                href="#book-session"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark text-[13px] font-sans font-bold tracking-wide transition-colors group-hover:gap-2 cursor-pointer mt-auto"
              >
                Book <MoveRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}