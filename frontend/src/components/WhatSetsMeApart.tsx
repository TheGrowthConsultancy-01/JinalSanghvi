// import React from 'react';
// import { Award, Fingerprint, Lock, ShieldCheck } from 'lucide-react';

// export default function WhatSetsMeApart() {
//   const features = [
//     {
//       icon: <Award size={24} />,
//       title: "Certified & Experienced",
//       desc: "17+ years of specialized practice with international certifications"
//     },
//     {
//       icon: <Fingerprint size={24} />,
//       title: "Personalized Approach",
//       desc: "Tailored solutions for your unique needs and goals"
//     },
//     {
//       icon: <Lock size={24} />,
//       title: "100% Confidential",
//       desc: "Safe, judgment-free environment for deep healing"
//     },
//     {
//       icon: <ShieldCheck size={24} />,
//       title: "Proven Results",
//       desc: "98% satisfaction rate"
//     }
//   ];

//   return (
//     <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-[#f8fafc] to-purple-50 relative border-t border-purple-50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-3">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
//             What Sets Me Apart
//           </h2>
//           <p className="text-gray-500 text-sm font-sans tracking-wide">
//             Through Genuine Guidance and Manifestation Support
//           </p>
//           <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
//         </div>

//         {/* 4-Column Feature Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-purple-100/30 shadow-md shadow-purple-950/5 hover:shadow-xl hover:border-primary/25 transition-all duration-300"
//             >
//               {/* Bold Solid Purple Circle Icon */}
//               <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-md shadow-purple-600/20">
//                 {feature.icon}
//               </div>

//               {/* Precise Typography Matches */}
//               <h3 className="text-[17px] font-serif font-bold text-[#110A24] mb-3 tracking-tight">
//                 {feature.title}
//               </h3>

//               {/* Muted Subtext */}
//               <p className="text-[#6B6579] text-[13px] font-sans font-normal leading-relaxed">
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import React from 'react';
import { Award, Fingerprint, Lock, ShieldCheck } from 'lucide-react';

export default function WhatSetsMeApart() {
  const features = [
    {
      icon: <Award size={24} />,
      title: "Certified & Experienced",
      desc: "17+ years of specialized practice with international certifications"
    },
    {
      icon: <Fingerprint size={24} />,
      title: "Personalized Approach",
      desc: "Tailored solutions for your unique needs and goals"
    },
    {
      icon: <Lock size={24} />,
      title: "100% Confidential",
      desc: "Safe, judgment-free environment for deep healing"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Proven Results",
      desc: "98% satisfaction rate"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#f0e6fe] relative border-t border-purple-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            What Sets Me Apart
          </h2>
          <p className="text-gray-500 text-sm font-sans tracking-wide">
            Through Genuine Guidance and Manifestation Support
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 4-Column Feature Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-purple-100/30 shadow-md shadow-purple-950/5 hover:shadow-xl hover:border-primary/25 transition-all duration-300"
            >
              {/* Bold Solid Purple Circle Icon */}
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-md shadow-purple-600/20">
                {feature.icon}
              </div>

              {/* Precise Typography Matches */}
              <h3 className="text-[17px] font-serif font-bold text-[#110A24] mb-3 tracking-tight">
                {feature.title}
              </h3>

              {/* Muted Subtext */}
              <p className="text-[#6B6579] text-[13px] font-sans font-normal leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}