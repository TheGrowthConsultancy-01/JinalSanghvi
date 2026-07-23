import  { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

export default function ProofBeyondPromises() {
  const testimonials = [
    {
      text: "My son had serious health issues. After Reiki healing with Jinal Ben, he completely recovered. She's an amazing healer with a compassionate heart. Highly grateful!",
      name: "Parent",
      tag: "Reiki Client",
      initial: "P",
      color: "from-cyan-400 to-blue-500"
    },
    {
      text: "My daughter was struggling with studies and confidence. After just 5 sessions with Jinal Ben, she's transformed completely. Her focus has improved dramatically!",
      name: "Mother",
      tag: "Student Counselling",
      initial: "M",
      color: "from-blue-400 to-purple-500"
    },
    {
      text: "Jinal Ben helped me reduce stress and increase my overall happiness. Her therapeutic sessions have genuinely transformed my life for the better. Truly grateful!",
      name: "Nitin",
      tag: "Stress Management",
      initial: "N",
      color: "from-indigo-400 to-cyan-500"
    },
    {
      text: "I've been a client for 8 years. Tarot readings with Jinal Ben have provided clarity on all major life decisions. Her insights are always accurate and helpful!",
      name: "Viren",
      tag: "Tarot Client",
      initial: "V",
      color: "from-purple-400 to-pink-500"
    },
    {
      text: "Learning Reiki from Jinal Ben was a life-changing experience. She's an incredible teacher and healer. I now use these healing powers to help others. Blessed!",
      name: "Urmila",
      tag: "Reiki Training",
      initial: "U",
      color: "from-pink-400 to-rose-500"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // Uses browser-native number reference to prevent TypeScript NodeJS compiler errors
  const timeoutRef = useRef<number | null>(null);
  const ROTATION_TIME = 7000; 

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      ROTATION_TIME
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="reviews" className="relative min-h-[70vh] bg-gradient-to-br from-[#1A0A3A] via-[#320E65] to-[#14062B] text-white py-24 px-6 md:px-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Background ambient lighting blur matching image layout */}
      <div className="absolute left-[-20%] bottom-[-20%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full z-10 text-center space-y-12">
        {/* Core Title Header Block */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Proof Beyond Promises
          </h2>
          <div className="w-16 h-[1.5px] bg-gray-400/30 mx-auto" />
          <p className="text-purple-200/80 text-sm md:text-base font-sans tracking-wide">
            Authentic experiences of manifestation, healing, and life transformation.
          </p>
        </div>

        {/* Master Active Frame Slider Container */}
        <div className="relative min-h-[260px] md:min-h-[220px] w-full flex items-center justify-center">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
                idx === activeIndex
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {/* Sleek High-Gloss Frosted Glass Card Structure */}
              <div className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center shadow-2xl shadow-black/20">
                {/* 5-Star Row */}
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="stroke-none" />
                  ))}
                </div>

                {/* Testimonial Quote Copy */}
                <p className="text-gray-100 text-sm md:text-base font-sans italic font-light leading-relaxed max-w-2xl mb-8">
                  "{item.text}"
                </p>

                {/* Profile Identity Cluster */}
                <div className="flex items-center gap-4 text-left">
                  {/* Glowing Initials circle with dynamic gradient overlay */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.color} shadow-lg shadow-purple-500/20 flex items-center justify-center font-sans font-bold text-white text-base`}>
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">{item.name}</h4>
                    <p className="font-sans text-xs text-purple-300/80 font-medium">{item.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Nav Tracking indicators layout */}
        <div className="flex items-center justify-center gap-2.5 pt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualSelect(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}