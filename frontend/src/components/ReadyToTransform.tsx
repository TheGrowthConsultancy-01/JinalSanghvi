
import { Calendar, MessageCircle } from 'lucide-react';

export default function ReadyToTransform() {
  return (
    <section className="relative bg-gradient-to-r from-[#1E0D3D] via-[#481E8C] to-[#763CD2] text-white py-20 px-6 text-center overflow-hidden">
      {/* Soft ambient overlay light effect */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Exact Header Font Style & Size */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
          Ready to Transform?
        </h2>

        {/* Clean Subtext Copy */}
        <p className="text-purple-100/90 text-sm md:text-base font-sans max-w-2xl mx-auto leading-relaxed">
          Take the first step toward healing and positive change. Your journey to a better life starts today.
        </p>

        {/* Dual Action Pill Button Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          
          {/* White Solid Booking Button */}
          <button className="w-full sm:w-auto bg-white text-[#763CD2] hover:bg-purple-50 font-sans font-bold text-[12.5px] uppercase tracking-wider px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-black/10 transition-all transform hover:-translate-y-0.5 cursor-pointer">
            <Calendar size={15} className="text-[#763CD2]" />
            Book Your Session
          </button>

          {/* Green Brand WhatsApp Button */}
          <a 
            href="https://wa.me/919924999666"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-bold text-[12.5px] uppercase tracking-wider px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle size={15} fill="currentColor" className="stroke-none" />
            Chat on WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
}