// import React from 'react';
// import { Brain, Heart, GraduationCap, User, Users, Flame, Info, Calendar } from 'lucide-react';

// export default function CounsellingSpecializations() {
//   const specializations = [
//     {
//       icon: <Brain size={24} />,
//       title: "Manifestation Training",
//       desc: "Align your energy and manifest the life you desire through proven manifestation techniques and energy alignment.",
//       knowMoreUrl: "https://jinalsanghavi.com/manifestation-training-progrram/"
//     },
//     {
//       icon: <Heart size={24} />,
//       title: "Relationship Counselling",
//       desc: "Strengthen relationships, rebuild trust, and improve communication with your partner. Heal emotional wounds and build lasting connections.",
//       knowMoreUrl: "https://jinalsanghavi.com/relationship-counselling-program/"
//     },
//     {
//       icon: <GraduationCap size={24} />,
//       title: "Student Counselling",
//       desc: "Overcome exam anxiety, academic stress, and confidence issues with personalized guidance.",
//       knowMoreUrl: "https://jinalsanghavi.com/student-counselling/"
//     },
//     {
//       icon: <User size={24} />,
//       title: "Personal Counselling",
//       desc: "Navigate life transitions, anxiety, and emotional challenges with compassionate support.",
//       knowMoreUrl: "https://jinalsanghavi.com/personal-counselling-page/"
//     },
//     {
//       icon: <Users size={24} />,
//       title: "Parenting Counselling",
//       desc: "Build stronger parent-child relationships and overcome family communication barriers.",
//       knowMoreUrl: "https://jinalsanghavi.com/parenting-counselling/"
//     },
//     {
//       icon: <Flame size={24} />,
//       title: "Stress & Anxiety Management",
//       desc: "Learn proven techniques to reduce stress and manage anxiety effectively.",
//       knowMoreUrl: "https://jinalsanghavi.com/stress-anxiety-counselling-page/"
//     }
//   ];

//   return (
//     <section id="counselling" className="py-24 px-6 md:px-16 bg-white relative border-t border-purple-50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Heading */}
//         <div className="text-center mb-16 space-y-3">
//           <h2 className="text-4xl font-extrabold text-[#110A24] font-serif tracking-tight">
//             Counselling Specializations
//           </h2>
//           <p className="text-gray-500 text-sm font-medium">
//             Expert guidance for every life challenge
//           </p>
//           <div className="w-20 h-[3px] bg-gradient-to-r from-secondary-cyan to-primary mx-auto rounded-full mt-3" />
//         </div>

//         {/* 3x2 Layout Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {specializations.map((item, index) => (
//             <div 
//               key={index} 
//               className="bg-white border border-purple-100/40 rounded-3xl p-8 flex flex-col items-center text-center shadow-md shadow-purple-950/5 hover:shadow-xl hover:shadow-purple-950/10 hover:border-primary/20 transition-all duration-300"
//             >
//               {/* Rounded Rounded Icon Container */}
//               <div className="w-14 h-14 bg-purple-50 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-2xs">
//                 {item.icon}
//               </div>

//               {/* Card Titles */}
//               <h3 className="text-[19px] font-bold text-[#110A24] font-serif mb-3 h-12 flex items-center">
//                 {item.title}
//               </h3>

//               {/* Description Body */}
//               <p className="text-gray-500 text-[13.5px] leading-relaxed mb-8 flex-grow">
//                 {item.desc}
//               </p>

//               {/* Dual CTA Action Row */}
//               <div className="flex gap-3 w-full mt-auto">
//                 <a 
//                   href={item.knowMoreUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-secondary-cyan hover:bg-cyan-600 text-white text-[11px] font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-1.5 shadow-md shadow-cyan-600/10 transition-colors cursor-pointer"
//                 >
//                   <Info size={13} /> Know More
//                 </a>
//                 <a 
//                   href="#booking"
//                   className="flex-1 bg-primary hover:bg-primary-dark text-white text-[11px] font-bold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/10 transition-colors cursor-pointer"
//                 >
//                   <Calendar size={13} /> Book Session
//                 </a>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
// import React from 'react';
// import { Brain, Heart, GraduationCap, User, Users, Flame, Info, Calendar } from 'lucide-react';

// export default function CounsellingSpecializations() {
//   const specializations = [
//     {
//       icon: <Brain size={24} fill="currentColor" />,
//       title: "Manifestation Training",
//       desc: "Align your energy and manifest the life you desire through proven manifestation techniques and energy alignment.",
//       knowMoreUrl: "https://jinalsanghavi.com/manifestation-training-progrram/"
//     },
//     {
//       icon: <Heart size={24} fill="currentColor" />,
//       title: "Relationship Counselling",
//       desc: "Strengthen relationships, rebuild trust, and improve communication with your partner. Heal emotional wounds and build lasting connections.",
//       knowMoreUrl: "https://jinalsanghavi.com/relationship-counselling-program/"
//     },
//     {
//       icon: <GraduationCap size={24} fill="currentColor" />,
//       title: "Student Counselling",
//       desc: "Overcome exam anxiety, academic stress, and confidence issues with personalized guidance.",
//       knowMoreUrl: "https://jinalsanghavi.com/student-counselling/"
//     },
//     {
//       icon: <User size={24} fill="currentColor" />,
//       title: "Personal Counselling",
//       desc: "Navigate life transitions, anxiety, and emotional challenges with compassionate support.",
//       knowMoreUrl: "https://jinalsanghavi.com/personal-counselling-page/"
//     },
//     {
//       icon: <Users size={24} fill="currentColor" />,
//       title: "Parenting Counselling",
//       desc: "Build stronger parent-child relationships and overcome family communication barriers.",
//       knowMoreUrl: "https://jinalsanghavi.com/parenting-counselling/"
//     },
//     {
//       icon: <Flame size={24} fill="currentColor" />,
//       title: "Stress & Anxiety Management",
//       desc: "Learn proven techniques to reduce stress and manage anxiety effectively.",
//       knowMoreUrl: "https://jinalsanghavi.com/stress-anxiety-counselling-page/"
//     }
//   ];

//   return (
//     <section id="counselling" className="py-24 px-6 md:px-16 bg-white relative border-t border-purple-50">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Heading */}
//         <div className="text-center mb-16 space-y-3">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
//             Counselling Specializations
//           </h2>
//           <p className="text-gray-500 text-sm font-medium">
//             Expert guidance for every life challenge
//           </p>
//           <div className="w-20 h-[3px] bg-gradient-to-r from-secondary-cyan to-primary mx-auto rounded-full mt-3" />
//         </div>

//         {/* 3x2 Layout Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {specializations.map((item, index) => (
//             <div 
//               key={index} 
//               className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
//             >
//               {/* Animated Top Border Line on Hover */}
//               <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Rounded Rounded Icon Container */}
//               <div className="w-14 h-14 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
//                 {item.icon}
//               </div>

//               {/* Card Titles */}
//               <h3 className="text-[19px] font-bold text-[#110A24] font-serif mb-3 h-12 flex items-center">
//                 {item.title}
//               </h3>

//               {/* Description Body */}
//               <p className="text-gray-500 text-[13.5px] leading-relaxed mb-8 flex-grow">
//                 {item.desc}
//               </p>

//               {/* Dual CTA Action Row */}
//               <div className="flex gap-3 w-full mt-auto">
//                 <a 
//                   href={item.knowMoreUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-secondary-cyan hover:bg-cyan-600 text-white text-[11px] font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-cyan-600/10 transition-colors cursor-pointer"
//                 >
//                   <Info size={13} /> Know More
//                 </a>
//                 <a 
//                   href="#booking"
//                   className="flex-1 bg-primary hover:bg-primary-dark text-white text-[11px] font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/10 transition-colors cursor-pointer"
//                 >
//                   <Calendar size={13} /> Book Session
//                 </a>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { Brain, Heart, GraduationCap, User, Users, Flame, Info, Calendar } from 'lucide-react';

interface CounsellingProps {
  onViewChange: (viewId: string) => void;
}

export default function CounsellingSpecializations({ onViewChange }: CounsellingProps) {
  const specializations = [
    {
      id: "manifestation-training",
      icon: <Brain size={24} fill="currentColor" />,
      title: "Manifestation Training",
      desc: "Align your energy and manifest the life you desire through proven manifestation techniques and energy alignment."
    },
    {
      id: "relationship-counselling",
      icon: <Heart size={24} fill="currentColor" />,
      title: "Relationship Counselling",
      desc: "Strengthen relationships, rebuild trust, and improve communication with your partner. Heal emotional wounds and build lasting connections."
    },
    {
      id: "student-counselling",
      icon: <GraduationCap size={24} fill="currentColor" />,
      title: "Student Counselling",
      desc: "Overcome exam anxiety, academic stress, and confidence issues with personalized guidance."
    },
    {
      id: "personal-counselling",
      icon: <User size={24} fill="currentColor" />,
      title: "Personal Counselling",
      desc: "Navigate life transitions, anxiety, and emotional challenges with compassionate support."
    },
    {
      id: "parenting-counselling",
      icon: <Users size={24} fill="currentColor" />,
      title: "Parenting Counselling",
      desc: "Build stronger parent-child relationships and overcome family communication barriers."
    },
    {
      id: "stress-anxiety-counselling",
      icon: <Flame size={24} fill="currentColor" />,
      title: "Stress & Anxiety Management",
      desc: "Learn proven techniques to reduce stress and manage anxiety effectively."
    }
  ];

  return (
    <section id="counselling" className="py-24 px-6 md:px-16 bg-white relative border-t border-purple-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Counselling Specializations
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Expert guidance for every life challenge
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-secondary-cyan to-primary mx-auto rounded-full mt-3" />
        </div>

        {/* 3x2 Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Top Border Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Rounded Rounded Icon Container */}
              <div className="w-14 h-14 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                {item.icon}
              </div>

              {/* Card Titles */}
              <h3 className="text-[19px] font-bold text-[#110A24] font-serif mb-3 h-12 flex items-center">
                {item.title}
              </h3>

              {/* Description Body */}
              <p className="text-gray-500 text-[13.5px] leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Dual CTA Action Row */}
              <div className="flex gap-3 w-full mt-auto">
                <button 
                  onClick={() => onViewChange(item.id)}
                  className="flex-1 bg-secondary-cyan hover:bg-cyan-600 text-white text-[11px] font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-cyan-600/10 transition-colors cursor-pointer"
                >
                  <Info size={13} /> Know More
                </button>
                <a 
                  href="#booking"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white text-[11px] font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/10 transition-colors cursor-pointer"
                >
                  <Calendar size={13} /> Book Session
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}