import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Manifestation', href: '/#manifestation' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#counselling' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Reviews', href: '/#reviews' }
  ];
  const services = ['Manifestation Training', 'Reiki Healing', 'Tarot Reading', 'Counselling', 'Numerology'];

  // Safe Inline SVGs replacing the missing Lucide brand icons
  const socialIcons = [
    {
      name: 'Facebook',
      href: '#',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      svg: (
        <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.516 0-9.387.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.387.508 9.387.508s7.518 0 9.387-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#0D111E] text-gray-300 font-sans text-sm pt-20 pb-8 px-4 sm:px-6 md:px-16 border-t border-gray-800/20 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* 4-Column Structural Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: Brand Info & Socials (Spans 4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white tracking-wide">
              Jinal Sanghavi
            </h3>
            <p className="text-gray-400 text-[13.5px] leading-relaxed max-w-sm">
              313, Western Business Hub, Opp. GJ5 Garden Restaurant Pratham Circle, Green City Road, Pal-Adajan, Surat.
            </p>
            
            {/* Soft Circular Social Icons Container */}
            <div className="flex gap-3 pt-2">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-xs"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2 Columns) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[15px] font-serif font-bold text-white tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-[13.5px] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white text-[13.5px] transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links (Spans 3 Columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[15px] font-serif font-bold text-white tracking-tight">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white text-[13.5px] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info Details (Spans 3 Columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[15px] font-serif font-bold text-white tracking-tight">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-[13.5px]">
                <Phone size={15} className="text-purple-400 shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">+91 9924 999 666</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-[13.5px]">
                <MessageSquare size={15} className="text-purple-400 shrink-0" />
                <a href="https://wa.me/919924999666" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-[13.5px]">
                <Mail size={15} className="text-purple-400 shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer truncate">jinalsanghaviofficial@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-[13.5px]">
                <MapPin size={15} className="text-purple-400 shrink-0" />
                <span className="hover:text-white transition-colors">Surat, Gujarat</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-gray-800/40 pt-8 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            Copyright © 2025 Jinal Sanghavi | Made with <span className="text-rose-500">❤️</span> by <span className="text-purple-400/80 font-semibold tracking-wider">THE GROWTH CONSULTANCY</span>
          </p>
        </div>

      </div>
    </footer>
  );
}