import  { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqData = [
    {
      question: "How do I know if I need manifestation training?",
      answer: "If you feel stuck, lost, or disconnected from your goals, manifestation training helps realign your mindset and energy. It empowers you to attract clarity, positivity, and the life you truly desire. Many clients report transformative results within just a few sessions."
    },
    {
      question: "Are sessions confidential?",
      answer: "Yes, absolutely! Complete confidentiality is guaranteed. Everything shared stays between us unless there's an immediate safety concern. You can share openly in a completely safe and judgment-free environment."
    },
    {
      question: "How long is each session?",
      answer: "Sessions are typically 45-60 minutes. The first consultation may be slightly longer (60-75 minutes) to understand your situation, goals, and create a personalized plan for your transformation."
    },
    {
      question: "Can I do online sessions?",
      answer: "Yes! I offer both in-person and secure online video sessions. They are equally effective and conducted with the same level of care, attention, and professionalism."
    },
    {
      question: "What is Reiki?",
      answer: "Reiki is a Japanese energy healing technique where universal life force energy is transferred through the hands. It's safe, non-invasive, and promotes deep relaxation and healing at physical, emotional, and spiritual levels."
    },
    {
      question: "How many sessions will I need?",
      answer: "It varies based on your goals and situation. Some clients see significant results in 3-5 sessions, while others benefit from ongoing support. We'll discuss a personalized plan during your first session to ensure you get the best results."
    }
  ];

  // State initialized to null so all accordion items start closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm font-sans tracking-wide">
            Answers to your common questions
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-purple-200/60 rounded-2xl overflow-hidden bg-white shadow-xs transition-shadow duration-300 hover:shadow-md"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left font-sans text-[15px] font-semibold text-[#110A24] tracking-tight hover:bg-purple-50/30 transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-purple-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Animated Inner Content Tray */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}