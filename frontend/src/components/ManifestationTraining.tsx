// import React from 'react';
// import { Brain, Zap, Heart, CheckCircle2, Crown, Sparkles, MessageSquare } from 'lucide-react';

// export default function ManifestationTraining() {
//   const points = [
//     { icon: <Brain size={20} />, title: "Reprogram Your Mindset", desc: "Release limiting beliefs that block success and replace them with empowering thoughts." },
//     { icon: <Zap size={20} />, title: "Align Your Energy", desc: "Sync your vibration with your goals through proven energy alignment techniques." },
//     { icon: <Sparkles size={20} />, title: "Attract Your Desires", desc: "Consciously create the life you deserve using manifestation principles." },
//     { icon: <Heart size={20} />, title: "Inner Clarity & Peace", desc: "Find emotional clarity and lasting peace in your personal and professional life." }
//   ];

//   return (
//     <section id="manifestation" className="bg-purple-50/30 py-24 px-6 md:px-16 relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-3">
//           <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
//             ★ Featured Service
//           </span>
//           <h2 className="text-4xl font-extrabold text-[#110A24] font-serif">Manifestation Training</h2>
//           <p className="text-gray-500 text-sm md:text-base font-medium">Transform Your Energy, Align Your Goals & Attract the Life You Deserve</p>
//           <div className="w-20 h-[3px] bg-gradient-to-r from-primary to-secondary-cyan mx-auto rounded-full mt-3" />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//           {/* Left Column: What & Benefits */}
//           <div className="lg:col-span-6 space-y-6">
//             <div className="bg-white border border-purple-100/50 p-8 rounded-3xl shadow-xs">
//               <div className="text-primary mb-5 bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center">
//                 <Brain size={24} />
//               </div>
//               <h3 className="text-xl font-bold text-[#110A24] font-serif mb-3">What is Manifestation Training?</h3>
//               <p className="text-[#6B6579] leading-relaxed text-sm md:text-[14.5px]">
//                 Manifestation training is the transformative process of consciously aligning your thoughts, emotions, beliefs, and actions with your deepest desires. It's about shifting your vibration to attract abundance, clarity, and meaningful opportunities into your life.
//               </p>
//             </div>

//             <div className="space-y-4">
//               {points.map((pt, index) => (
//                 <div key={index} className="bg-white border border-purple-100/40 p-5 rounded-2xl flex gap-4 items-start hover:border-primary/30 transition-all duration-300 shadow-xs">
//                   <div className="p-3 bg-purple-50 text-primary rounded-xl shrink-0">{pt.icon}</div>
//                   <div>
//                     <h4 className="font-bold text-[#110A24] text-sm md:text-[15px]">{pt.title}</h4>
//                     <p className="text-[#6B6579] text-xs md:text-sm mt-1 leading-relaxed">{pt.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Statistics & GAIN */}
//           <div className="lg:col-span-6 space-y-6">
//             {/* Stats Card */}
//             <div className="bg-white border border-purple-100/50 p-8 rounded-3xl shadow-xs">
//               <h3 className="text-xl font-bold text-[#110A24] font-serif mb-3 flex items-center gap-2">
//                 <Crown size={20} className="text-primary" /> Proven Transformation Results
//               </h3>
//               <p className="text-[#6B6579] text-sm leading-relaxed mb-6">
//                 Manifestation training combines NLP, hypnotherapy, energy alignment, and proven psychological techniques to help you attract abundance faster than you ever thought possible.
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-2xl text-center shadow-md shadow-purple-600/10">
//                   <span className="text-3xl font-black block">92%</span>
//                   <span className="text-[10px] text-purple-200 uppercase font-bold tracking-wider mt-1 block">See Results in 3-5 Sessions</span>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#803AD4] to-[#6027A8] text-white p-6 rounded-2xl text-center shadow-md shadow-purple-800/10">
//                   <span className="text-3xl font-black block">500+</span>
//                   <span className="text-[10px] text-purple-200 uppercase font-bold tracking-wider mt-1 block">Transformed Lives</span>
//                 </div>
//               </div>
//             </div>

//             {/* Checklist & Action Card */}
//             <div className="bg-white border border-purple-100/50 p-8 rounded-3xl shadow-xs">
//               <h4 className="text-lg font-bold text-[#110A24] font-serif mb-5 flex items-center gap-2">
//                 <CheckCircle2 className="text-[#10b981]" size={20} /> What You'll Gain
//               </h4>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {['Advanced manifestation techniques', 'Energy alignment practices', 'Belief system transformation', 'Action plan for attraction'].map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#6B6579] font-medium leading-tight">
//                     <CheckCircle2 size={16} className="text-[#10b981] shrink-0 mt-0.5" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100/80">
//                 <a 
//                   href="#booking"
//                   className="flex-1 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl text-center shadow-lg shadow-purple-600/10 transition-colors cursor-pointer"
//                 >
//                   🚀 Start Training
//                 </a>
//                 <a 
//                   href="https://wa.me/919924999666"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-white border border-purple-200 text-primary hover:bg-purple-50 text-xs font-bold uppercase tracking-wider py-4 rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
//                 >
//                   <MessageSquare size={14} /> Ask Jinal
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Lightbulb, Zap, Heart, CheckCircle2, Crown, Sparkles, MessageSquare } from 'lucide-react';

// export default function ManifestationTraining() {
//   const points = [
//     { icon: <Lightbulb size={20} fill="currentColor" />, title: "Reprogram Your Mindset", desc: "Release limiting beliefs that block success and replace them with empowering thoughts." },
//     { icon: <Zap size={20} fill="currentColor" />, title: "Align Your Energy", desc: "Sync your vibration with your goals through proven energy alignment techniques." },
//     { icon: <Sparkles size={20} fill="currentColor" />, title: "Attract Your Desires", desc: "Consciously create the life you deserve using manifestation principles." },
//     { icon: <Heart size={20} fill="currentColor" />, title: "Inner Clarity & Peace", desc: "Find emotional clarity and lasting peace in your personal and professional life." }
//   ];

//   return (
//     <section id="manifestation" className="bg-[#eddcff] py-24 px-6 md:px-16 relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-3">
//           <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
//             ★ Featured Service
//           </span>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
//             Manifestation Training
//           </h2>
//           <p className="text-gray-500 text-sm md:text-base font-medium">Transform Your Energy, Align Your Goals & Attract the Life You Deserve</p>
//           <div className="w-20 h-[3px] bg-gradient-to-r from-primary to-secondary-cyan mx-auto rounded-full mt-3" />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//           {/* Left Column: What & Benefits */}
//           <div className="lg:col-span-6 space-y-6">
//             <div className="bg-white border border-purple-100/50 p-8 rounded-3xl shadow-xs">
//               {/* Solid Lightbulb Icon with #9e47ec background */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="bg-[#9e47ec] text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
//                   <Lightbulb size={22} fill="currentColor" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#110A24] font-serif">What is Manifestation Training?</h3>
//               </div>
//               <p className="text-[#6B6579] leading-relaxed text-sm md:text-[14.5px]">
//                 Manifestation training is the transformative process of consciously aligning your thoughts, emotions, beliefs, and actions with your deepest desires. It's about shifting your vibration to attract abundance, clarity, and meaningful opportunities into your life.
//               </p>
//             </div>

//             <div className="space-y-4">
//               {points.map((pt, index) => (
//                 <div key={index} className="bg-white border border-purple-100/40 p-5 rounded-2xl flex gap-4 items-start hover:border-primary/30 transition-all duration-300 shadow-xs">
//                   {/* Solid list icons with #9e47ec background */}
//                   <div className="p-3 bg-[#9e47ec] text-white rounded-xl shrink-0">{pt.icon}</div>
//                   <div>
//                     <h4 className="font-bold text-[#110A24] text-sm md:text-[15px]">{pt.title}</h4>
//                     <p className="text-[#6B6579] text-xs md:text-sm mt-1 leading-relaxed">{pt.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Statistics & GAIN */}
//           <div className="lg:col-span-6 space-y-6">
//             {/* Stats Card */}
//             <div className="bg-white border border-purple-100/50 p-8 rounded-3xl shadow-xs">
//               <h3 className="text-xl font-bold text-[#110A24] font-serif mb-3 flex items-center gap-2">
//                 <Crown size={20} className="text-primary" /> Proven Transformation Results
//               </h3>
//               <p className="text-[#6B6579] text-sm leading-relaxed mb-6">
//                 Manifestation training combines NLP, hypnotherapy, energy alignment, and proven psychological techniques to help you attract abundance faster than you ever thought possible.
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-2xl text-center shadow-md shadow-purple-600/10">
//                   <span className="text-3xl font-black block">92%</span>
//                   <span className="text-[10px] text-purple-200 uppercase font-bold tracking-wider mt-1 block">See Results in 3-5 Sessions</span>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#803AD4] to-[#6027A8] text-white p-6 rounded-2xl text-center shadow-md shadow-purple-800/10">
//                   <span className="text-3xl font-black block">500+</span>
//                   <span className="text-[10px] text-purple-200 uppercase font-bold tracking-wider mt-1 block">Transformed Lives</span>
//                 </div>
//               </div>
//             </div>

//             {/* Checklist & Action Card */}
//             <div className="bg-white border border-purple-100/50 p-8 rounded-3xl shadow-xs">
//               <h4 className="text-lg font-bold text-[#110A24] font-serif mb-5 flex items-center gap-2">
//                 <CheckCircle2 className="text-[#10b981]" size={20} /> What You'll Gain
//               </h4>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {['Advanced manifestation techniques', 'Energy alignment practices', 'Belief system transformation', 'Action plan for attraction'].map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#6B6579] font-medium leading-tight">
//                     <CheckCircle2 size={16} className="text-[#10b981] shrink-0 mt-0.5" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100/80">
//                 <a 
//                   href="#booking"
//                   className="flex-1 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl text-center shadow-lg shadow-purple-600/10 transition-colors cursor-pointer"
//                 >
//                   🚀 Start Training
//                 </a>
//                 <a 
//                   href="https://wa.me/919924999666"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-white border border-purple-200 text-primary hover:bg-purple-50 text-xs font-bold uppercase tracking-wider py-4 rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
//                 >
//                   <MessageSquare size={14} /> Ask Jinal
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Lightbulb, Zap, Heart, CheckCircle2, Crown, Sparkles, MessageSquare, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ManifestationTrainingProps {
  isStandalonePage?: boolean;
}

export default function ManifestationTraining({ isStandalonePage = false }: ManifestationTrainingProps) {
  const points = [
    { icon: <Lightbulb size={20} fill="currentColor" />, title: "Reprogram Your Mindset", desc: "Release limiting beliefs that block success and replace them with empowering thoughts." },
    { icon: <Zap size={20} fill="currentColor" />, title: "Align Your Energy", desc: "Sync your vibration with your goals through proven energy alignment techniques." },
    { icon: <Sparkles size={20} fill="currentColor" />, title: "Attract Your Desires", desc: "Consciously create the life you deserve using manifestation principles." },
    { icon: <Heart size={20} fill="currentColor" />, title: "Inner Clarity & Peace", desc: "Find emotional clarity and lasting peace in your personal and professional life." }
  ];

  return (
    <section 
      id="manifestation" 
      className={`bg-[#eddcff] ${isStandalonePage ? 'py-10 sm:py-14 md:py-16 min-h-[calc(100vh-80px)] flex items-center' : 'py-14 sm:py-20 lg:py-24'} px-4 sm:px-6 md:px-16 relative`}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
            ★ Featured Service
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Manifestation Training
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium">Transform Your Energy, Align Your Goals & Attract the Life You Deserve</p>
          <div className="w-16 sm:w-20 h-[3px] bg-gradient-to-r from-primary to-secondary-cyan mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column: What & Benefits */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="bg-white border border-purple-100/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xs">
              {/* Solid Lightbulb Icon with #9e47ec background */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="bg-[#9e47ec] text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <Lightbulb size={22} fill="currentColor" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#110A24] font-serif">What is Manifestation Training?</h3>
              </div>
              <p className="text-[#6B6579] leading-relaxed text-xs sm:text-sm md:text-[14.5px]">
                Manifestation training is the transformative process of consciously aligning your thoughts, emotions, beliefs, and actions with your deepest desires. It's about shifting your vibration to attract abundance, clarity, and meaningful opportunities into your life.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {points.map((pt, index) => (
                <div key={index} className="bg-white border border-purple-100/40 p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3 sm:gap-4 items-start hover:border-primary/30 transition-all duration-300 shadow-xs">
                  {/* Solid list icons with #9e47ec background */}
                  <div className="p-2.5 sm:p-3 bg-[#9e47ec] text-white rounded-xl shrink-0">{pt.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#110A24] text-sm md:text-[15px]">{pt.title}</h4>
                    <p className="text-[#6B6579] text-xs md:text-sm mt-0.5 sm:mt-1 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Statistics & GAIN */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Stats Card */}
            <div className="bg-white border border-purple-100/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-[#110A24] font-serif mb-2 sm:mb-3 flex items-center gap-2">
                <Crown size={20} className="text-primary" /> Proven Transformation Results
              </h3>
              <p className="text-[#6B6579] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Manifestation training combines NLP, hypnotherapy, energy alignment, and proven psychological techniques to help you attract abundance faster than you ever thought possible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-5 sm:p-6 rounded-xl sm:rounded-2xl text-center shadow-md shadow-purple-600/10">
                  <span className="text-2xl sm:text-3xl font-black block">92%</span>
                  <span className="text-[10px] text-purple-200 uppercase font-bold tracking-wider mt-1 block">See Results in 3-5 Sessions</span>
                </div>
                <div className="bg-gradient-to-br from-[#803AD4] to-[#6027A8] text-white p-5 sm:p-6 rounded-xl sm:rounded-2xl text-center shadow-md shadow-purple-800/10">
                  <span className="text-2xl sm:text-3xl font-black block">500+</span>
                  <span className="text-[10px] text-purple-200 uppercase font-bold tracking-wider mt-1 block">Transformed Lives</span>
                </div>
              </div>
            </div>

            {/* Checklist & Action Card */}
            <div className="bg-white border border-purple-100/50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xs">
              <h4 className="text-base sm:text-lg font-bold text-[#110A24] font-serif mb-4 sm:mb-5 flex items-center gap-2">
                <CheckCircle2 className="text-[#10b981]" size={20} /> What You'll Gain
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {['Advanced manifestation techniques', 'Energy alignment practices', 'Belief system transformation', 'Action plan for attraction'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13.5px] text-[#6B6579] font-medium leading-tight">
                    <CheckCircle2 size={16} className="text-[#10b981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100/80">
                <Link 
                  to="/manifestation-training"
                  className="w-full sm:flex-1 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider py-3.5 sm:py-4 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-lg shadow-purple-600/10 transition-colors cursor-pointer"
                >
                  <Info size={14} /> Know More
                </Link>
                <a 
                  href="/#book-session"
                  className="w-full sm:flex-1 bg-white border border-purple-200 text-primary hover:bg-purple-50 text-xs font-bold uppercase tracking-wider py-3.5 sm:py-4 rounded-xl text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare size={14} /> Ask Jinal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}