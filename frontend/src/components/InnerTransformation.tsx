
// import { Image as ImageIcon } from 'lucide-react';

// export default function InnerTransformation() {
//   const images = [
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/6.jpeg", alt: "Counselling Session" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/1-2.jpeg", alt: "Workshop" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/4-1.jpeg", alt: "Meditation" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/2-2.jpeg", alt: "Studio" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/2-1.jpeg", alt: "Professional Session" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/3-1.jpeg", alt: "Team Session" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/5-2.jpeg", alt: "Counselling" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/4-2.jpeg", alt: "Client Interaction" },
//     { src: "https://jinalsanghavi.com/wp-content/uploads/2025/02/3-2.jpeg", alt: "Client Healing" }
//   ];

//   return (
//     <section id="gallery" className="py-24 px-6 md:px-12 bg-white relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 space-y-3">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
//             Pathways to Inner Transformation
//           </h2>
//           <p className="text-gray-500 text-sm font-sans tracking-wide">
//             Discover balance, purpose, and inner peace.
//           </p>
//           <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
//         </div>

//         {/* Clean Responsive Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {images.map((item, idx) => (
//             <div 
//               key={idx} 
//               className="relative group rounded-3xl overflow-hidden shadow-md shadow-purple-950/5 border border-purple-100/30 aspect-4/3 cursor-pointer"
//             >
//               <img 
//                 src={item.src} 
//                 alt={item.alt} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 loading="lazy"
//               />
              
//               {/* Premium Hover Overlay Grid */}
//               <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
//                 <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                   <ImageIcon size={20} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { Image as ImageIcon } from 'lucide-react';

import img1 from '../assets/6.jpeg';
import img2 from '../assets/1-2.jpeg';
import img3 from '../assets/4-1.jpeg';
import img4 from '../assets/2-2.jpeg';
import img5 from '../assets/2-1.jpeg';
import img6 from '../assets/3-1.jpeg';
import img7 from '../assets/5-2.jpeg';
import img8 from '../assets/4-2.jpeg';
import img9 from '../assets/3-2.jpeg';

export default function InnerTransformation() {
  const images = [
    { src: img1, alt: "Counselling Session" },
    { src: img2, alt: "Workshop" },
    { src: img3, alt: "Meditation" },
    { src: img4, alt: "Studio" },
    { src: img5, alt: "Professional Session" },
    { src: img6, alt: "Team Session" },
    { src: img7, alt: "Counselling" },
    { src: img8, alt: "Client Interaction" },
    { src: img9, alt: "Client Healing" }
  ];

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Pathways to Inner Transformation
          </h2>
          <p className="text-gray-500 text-sm font-sans tracking-wide">
            Discover balance, purpose, and inner peace.
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Clean Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div 
              key={idx} 
              className="relative group rounded-3xl overflow-hidden shadow-md shadow-purple-950/5 border border-purple-100/30 aspect-4/3 cursor-pointer"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Premium Hover Overlay Grid */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ImageIcon size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}