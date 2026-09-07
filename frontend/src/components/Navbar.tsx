// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'Manifestation', href: '#manifestation' },
//     { label: 'About', href: '#about' },
//     { label: 'Services', href: '#counselling' },
//     { label: 'Gallery', href: '#gallery' },
//     { label: 'Reviews', href: '#testimonials' },
//     { label: 'Book Session', href: '#booking' }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <nav 
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
//           isScrolled 
//             ? 'bg-white/98 backdrop-blur-lg shadow-lg shadow-purple-950/5 py-3' 
//             : 'bg-transparent py-5'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
//           {/* Logo with Dynamic Text Gradient */}
//           {/* <a 
//             href="#home" 
//             className={`text-2xl font-serif font-extrabold tracking-tight transition-colors duration-300 ${
//               isScrolled 
//                 ? 'text-primary' 
//                 : 'bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent'
//             }`}
//           >
//             Jinal Sanghavi
//           </a> */}
//           <a 
//   href="#home" 
//   className="text-[22px] md:text-[24px] font-serif font-bold tracking-tight transition-colors duration-300"
//   style={{ color: isScrolled ? 'text-primary' : '#8a2fdb' }}
// >
//   Jinal Sanghavi
// </a>

//           {/* Desktop Nav Items */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={`text-[14px] font-semibold tracking-wide transition-colors duration-200 relative group py-1.5 ${
//                   isScrolled 
//                     ? 'text-text-primary hover:text-primary' 
//                     : 'text-white/90 hover:text-white'
//                 }`}
//               >
//                 {item.label}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-1.5 rounded-lg focus:outline-hidden cursor-pointer"
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? (
//               <X size={24} className={isScrolled ? 'text-text-primary' : 'text-white'} />
//             ) : (
//               <Menu size={24} className={isScrolled ? 'text-text-primary' : 'text-white'} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Nav Overlay Panel */}
//       <div 
//         className={`fixed inset-0 z-40 bg-dark-slate/95 backdrop-blur-lg transition-transform duration-300 md:hidden flex flex-col items-center justify-center ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col space-y-6 text-center">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-white hover:text-primary text-xl font-serif font-bold transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { useLocation } from 'react-router-dom';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
  

//   const isHomePage = location.pathname === '/';

//   const navItems = [
//     { label: 'Home', href: isHomePage ? '#home' : '/' },
//     { label: 'Manifestation', href: isHomePage ? '#manifestation' : '/#manifestation' },
//     { label: 'About', href: isHomePage ? '#about' : '/#about' },
//     { label: 'Services', href: isHomePage ? '#counselling' : '/#counselling' },
//     { label: 'Gallery', href: isHomePage ? '#gallery' : '/#gallery' },
//     { label: 'Reviews', href: isHomePage ? '#testimonials' : '/#testimonials' },
//     { label: 'Book Session', href: isHomePage ? '#booking' : '/#booking' }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Sub-pages par navbar hamesha solid/scrolled jaisa behave karega taaki text hamesha visible rahe
//   const showScrolledStyle = isScrolled || !isHomePage;

//   return (
//     <>
//       <nav 
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
//           showScrolledStyle 
//             ? 'bg-white/98 backdrop-blur-lg shadow-lg shadow-purple-950/5 py-3' 
//             : 'bg-transparent py-5'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
//           <a 
//             href="/" 
//             className="text-[22px] md:text-[24px] font-serif font-bold tracking-tight transition-colors duration-300"
//             style={{ color: showScrolledStyle ? '#9e47ec' : '#8a2fdb' }}
//           >
//             Jinal Sanghavi
//           </a>

//           {/* Desktop Nav Items */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={`text-[14px] font-semibold tracking-wide transition-colors duration-200 relative group py-1.5 ${
//                   showScrolledStyle 
//                     ? 'text-gray-800 hover:text-primary' 
//                     : 'text-white/90 hover:text-white'
//                 }`}
//               >
//                 {item.label}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-1.5 rounded-lg focus:outline-hidden cursor-pointer"
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? (
//               <X size={24} className={showScrolledStyle ? 'text-gray-800' : 'text-white'} />
//             ) : (
//               <Menu size={24} className={showScrolledStyle ? 'text-gray-800' : 'text-white'} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Nav Overlay Panel */}
//       <div 
//         className={`fixed inset-0 z-40 bg-[#0d0520]/95 backdrop-blur-lg transition-transform duration-300 md:hidden flex flex-col items-center justify-center ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col space-y-6 text-center">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-white hover:text-primary text-xl font-serif font-bold transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'Home', href: isHomePage ? '#home' : '/' },
    { label: 'Manifestation', href: isHomePage ? '#manifestation' : '/#manifestation' },
    { label: 'About', href: isHomePage ? '#about' : '/#about' },
    { label: 'Services', href: isHomePage ? '#counselling' : '/#counselling' },
    { label: 'Gallery', href: isHomePage ? '#gallery' : '/#gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Reviews', href: isHomePage ? '#reviews' : '/#reviews' },
    { label: 'Book Session', href: isHomePage ? '#book-session' : '/#book-session' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showScrolledStyle = isScrolled || !isHomePage;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
          showScrolledStyle 
            ? 'bg-white/98 backdrop-blur-lg shadow-lg shadow-purple-950/5 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <Link 
            to="/" 
            className="text-[22px] md:text-[24px] font-serif font-bold tracking-tight transition-colors duration-300"
            style={{ color: showScrolledStyle ? '#9e47ec' : '#8a2fdb' }}
          >
            Jinal Sanghavi
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              const isBlogItem = item.label === 'Blog';
              const isBlogActive = isBlogItem && location.pathname.startsWith('/blog');
              
              const linkClasses = `text-[14px] font-semibold tracking-wide transition-colors duration-200 relative group py-1.5 ${
                isBlogActive
                  ? 'text-[#9e47ec] font-bold'
                  : showScrolledStyle 
                    ? 'text-gray-800 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
              }`;

              if (item.href.startsWith('/') && !item.href.includes('#')) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={linkClasses}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isBlogActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkClasses}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg focus:outline-hidden cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className={showScrolledStyle ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={showScrolledStyle ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay Panel */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0d0520]/95 backdrop-blur-lg transition-transform duration-300 md:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => {
            const isBlogItem = item.label === 'Blog';
            const isBlogActive = isBlogItem && location.pathname.startsWith('/blog');

            if (item.href.startsWith('/') && !item.href.includes('#')) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-serif font-bold transition-colors ${
                    isBlogActive ? 'text-primary underline' : 'text-white hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-primary text-xl font-serif font-bold transition-colors"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}