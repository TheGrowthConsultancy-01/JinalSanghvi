import  { useState,useEffect } from 'react';
import { 
   Award, Rocket,  Heart, TrendingUp, 
  Clock, Monitor, Calendar, Shield, MessageCircle, User, Phone, 
  Mail, MapPin, Check, X, CheckCircle2,Flower2,
  Brain,  Sliders, Feather,Wind,Moon,Search,
  Activity, Frown, Sprout,} from 'lucide-react';
import Navbar from './Navbar';
import heroBg from '../assets/stress-anxiety-hero-bg.png';


// interface StressAnxietyCounsellingViewProps {
//   onBack: () => void;
// }

// export default function StressAnxietyCounsellingView() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

export default function StressAnxietyCounsellingView() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong while submitting your booking.');
      }

      setSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#110A24] pt-16">
      <Navbar />

      {/* 2. HERO SECTION */}
      <section className=" min-h-[540px] lg:min-h-[600px] xl:min-h-[640px] flex items-center py-16 lg:py-20 px-6 md:px-16 text-white overflow-hidden bg-[#2c0c64]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={heroBg} 
            alt="Stress & Anxiety Counselling Background" 
            className="w-full h-full object-cover object-[right_top]"
          />  
          {/* Mobile dark overlay for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c0c64]/90 via-[#2c0c64]/75 to-[#2c0c64]/90 lg:hidden" />
          {/* Desktop gradient overlay for text contrast on left while keeping right visual clear */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#2c0c64] via-[#2c0c64]/80 to-transparent max-w-3xl" />
        </div>

        {/* Background ambient lighting blurs */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight max-w-3xl leading-tight">
              Stress & Anxiety Counselling
            </h1>
            <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl font-light">
              Find Calm. Regain Control. Live Peacefully.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Feather size={14} className="text-yellow-400 fill-yellow-400" /> Inner Peace
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Shield size={14} className="text-yellow-400 fill-yellow-400" /> Safe Environment
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Award size={14} className="text-yellow-400 fill-yellow-400" /> 17+ Years
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
                <Calendar size={14} /> Book Appointment
              </a>
              <a href="#overview" className="inline-flex items-center gap-2 bg-white text-[#110A24] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
                &darr; Discover More
              </a>
            </div>

            <div className="pt-12 grid grid-cols-3 gap-6 border-t border-white/10 max-w-2xl mt-8">
              <div>
                <span className="text-3xl md:text-4xl font-black block">1800+</span>
                <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Sessions Done</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black block">1000+</span>
                <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Lives Transformed</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black block">98%</span>
                <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Open space showcasing the background illustration */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center min-h-[460px] relative pointer-events-none" />
        </div>
      </section>

      {/* 3. OVERVIEW SECTION */}
      <section id="overview" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            You Don't Have to Live With Constant Stress
          </h2>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Constant stress and anxiety can affect your health, relationships, work, sleep, and overall happiness.
          </p>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            If your mind feels constantly busy, overwhelmed, worried, or exhausted, <span className="text-primary font-bold">it may be time to seek support.</span> Professional counselling provides a safe space to understand your anxiety, develop coping skills, and create a calmer, more fulfilling life.
          </p>
        </div>
      </section>

      {/* 4. SYMPTOMS YOU MAY BE EXPERIENCING */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Symptoms You May Be Experiencing
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Recognizing these signs is the first and most important step toward healing and peace
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Constant Worrying", desc: "Unable to stop racing thoughts and persistent worry", icon: <Wind size={26} fill="currentColor" /> },
              { title: "Overthinking", desc: "Mind looping endlessly over past events and future fears", icon: <Brain size={26} fill="currentColor" /> },
              { title: "Sleep Problems", desc: "Difficulty falling or staying asleep due to mental stress", icon: <Moon size={26} fill="currentColor" /> },
              { title: "Panic Feelings", desc: "Sudden intense fear, racing heart, and breathlessness", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Restlessness", desc: "Inability to relax, constantly feeling on edge and tense", icon: <Activity size={26} fill="currentColor" /> },
              { title: "Irritability", desc: "Snapping easily, low tolerance, and frequent mood changes", icon: <Frown size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW COUNSELLING HELPS */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              How Counselling Helps
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Personalized strategies that address the root causes of stress and anxiety
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Identify Anxiety Triggers", desc: "Discover the root causes behind your stress and anxiety", icon: <Search size={26} fill="currentColor" /> },
              { title: "Emotional Regulation", desc: "Learn proven techniques to manage emotions effectively", icon: <Sliders size={26} fill="currentColor" /> },
              { title: "Reduce Overthinking", desc: "Break free from mental loops and racing thought patterns", icon: <Brain size={26} fill="currentColor" /> },
              { title: "Improve Coping Skills", desc: "Develop healthier ways to handle stress and challenges", icon: <Shield size={26} fill="currentColor" /> },
              { title: "Build Emotional Resilience", desc: "Grow stronger and bounce back from life's difficulties", icon: <Sprout size={26} fill="currentColor" /> },
              { title: "Create Calmer Mindset", desc: "Develop lasting inner peace and mental tranquility daily", icon: <Feather size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS YOU'LL EXPERIENCE */}
      <section className="py-24 px-6 md:px-16 bg-[#f2ebfd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Benefits You'll Experience
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Real, lasting improvements across every area of your daily life
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border-2 border-purple-200/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-purple-950/5">
            
            {/* Column 1: Mental & Emotional Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#110A24] pb-3 border-b border-purple-100">
                Mental & Emotional Benefits
              </h3>
              <ul className="space-y-4 text-sm text-[#6B6579]">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Better, deeper, and more restful sleep nightly</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Increased mental clarity and sharp focus daily</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Improved concentration and decision making</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Greater emotional stability and balance always</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Significantly reduced stress levels over time</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Deep, lasting inner peace and calm every day</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Life & Wellness Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#110A24] pb-3 border-b border-purple-100">
                Life & Wellness Benefits
              </h3>
              <ul className="space-y-4 text-sm text-[#6B6579]">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Healthier, more positive relationships with others</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Better performance at work and in daily tasks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Reduced physical symptoms like tension and aches</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>More energy and enthusiasm for everyday life</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Greater confidence in handling difficult situations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Overall happier and more fulfilling quality of life</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PROVEN RESULTS FROM REAL CLIENTS */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#7c2ae8] to-[#9e47ec] text-white text-center shadow-xl">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Proven Results From Real Clients</h2>
            <p className="text-purple-100 text-sm font-sans tracking-wide mt-3">Transformations backed by real data and authentic client success stories</p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-white to-pink-400 mx-auto rounded-full mt-4 opacity-80" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "92%", text: "Feel Calmer in 3-5 Sessions" },
              { val: "1000+", text: "Lives Transformed" },
              { val: "98%", text: "Client Satisfaction Rate" },
              { val: "17+", text: "Years Of Expertise" }
            ].map((m, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <span className="text-3xl font-black block mb-2">{m.val}</span>
                <span className="text-xs text-purple-100/90 font-medium">{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY WORK WITH JINAL SANGHAVI? */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Work With Jinal Sanghavi?
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              A trusted counsellor combining experience, compassion, and proven healing methods
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Personalized Sessions", desc: "Tailored strategies designed for your unique situation", icon: <User size={26} fill="currentColor" /> },
              { title: "Safe Environment", desc: "Confidential, judgment-free space to heal and grow", icon: <Shield size={26} fill="currentColor" /> },
              { title: "Practical Techniques", desc: "Real tools you can use immediately every single day", icon: <Sliders size={26} fill="currentColor" /> },
              { title: "Holistic Healing", desc: "Complete mind, body, and emotional wellness approach", icon: <Flower2 size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="group bg-white border-2 border-purple-200/80 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  <TrendingUp size={26} fill="currentColor" />
                </div>
                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  Sustainable Wellness
                </h3>
                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  Long-lasting emotional health that stays with you always
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. SESSION DETAILS & INFORMATION */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Session Details & Information
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Everything you need to know about stress and anxiety counselling sessions
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Session Duration", desc: "45–60 minutes per session. First consultation is 60–75 minutes to fully understand your stress triggers and create a personalized healing plan.", icon: <Clock size={26} fill="currentColor" /> },
              { title: "Format Options", desc: "Choose in-person sessions in Surat or secure online video sessions. Both formats are equally effective and completely confidential.", icon: <Monitor size={26} fill="currentColor" /> },
              { title: "Easy Booking", desc: "Simple online booking. Select your preferred date and time. We confirm within 24 hours. Flexible scheduling to suit your lifestyle.", icon: <Calendar size={26} fill="currentColor" /> },
              { title: "Complete Confidentiality", desc: "100% confidential and judgment-free environment. Your privacy, trust, and emotional safety are our absolute highest priorities.", icon: <Shield size={26} fill="currentColor" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-purple-200/80 rounded-3xl p-8 shadow-lg shadow-purple-950/5 flex gap-5 items-start">
                <div className="w-16 h-16 bg-[#ead5ff]/60 text-[#9e47ec] rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[19px] mb-2 text-[#110A24] font-serif tracking-tight">{item.title}</h4>
                  <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY CLIENTS TRUST JINAL SANGHAVI */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Clients Trust Jinal Sanghavi
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide mt-3">
              Built on years of dedication, proven expertise, and real transformation results
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "1800+", text: "Counselling Sessions" },
              { val: "1000+", text: "Registered Clients" },
              { val: "Award", text: "Winning Counselor" },
              { val: "Online & Offline", text: "Sessions Available" }
            ].map((box, i) => (
              <div key={i} className="bg-white rounded-3xl border-2 border-purple-200/80 p-8 text-center shadow-lg shadow-purple-950/5">
                <span className="text-3xl font-extrabold text-[#9e47ec] block mb-2">{box.val}</span>
                <span className="text-xs text-gray-500 font-medium">{box.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA BANNER */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto my-12">
        <div className="bg-gradient-to-r from-[#1d0b45] to-[#9e47ec] rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight max-w-3xl mx-auto">
            You Deserve Peace Of Mind.
          </h2>
          <p className="text-xs md:text-sm text-purple-100/90 max-w-xl mx-auto font-sans leading-relaxed">
            Don't let stress and anxiety control your life any longer. Take your first step toward emotional freedom today. With the right guidance and proven techniques, you can find calm, regain control, and live the peaceful life you truly deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <Calendar size={14} /> Book Appointment Today
            </a>
            <a href="https://wa.me/919924999666" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#9e47ec] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <MessageCircle size={14} className="fill-current" /> Chat On Whatsapp
            </a>
          </div>
        </div>
      </section>

     {/* BOOKING FORM SECTION */}
      <section id="booking" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Take Your First Step Toward Emotional Freedom
          </h2>
          <p className="text-gray-500 text-sm font-sans tracking-wide">
            Book your confidential stress and anxiety counselling session today
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Booking Form */}
          <div className="lg:col-span-7 bg-white border-2 border-purple-200/80 rounded-3xl p-8 md:p-10 shadow-xl shadow-purple-950/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#ead5ff]/60 text-primary rounded-xl flex items-center justify-center font-bold">
                <Calendar size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#110A24]">Quick Booking Form</h3>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-xl font-serif font-bold text-emerald-900">Booking Successful!</h4>
                <p className="text-gray-600 text-sm">
                  Thank you for booking. Your session details have been saved, and an email notification has been dispatched successfully.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold uppercase rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-600 text-xs p-4 rounded-xl">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                    Choose Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white border-2 border-purple-200/80 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="stress-1-session">Stress & Anxiety Counselling - 1 Session</option>
                      <option value="stress-5-sessions">Stress & Anxiety Counselling - 5 Sessions</option>
                      <option value="anxiety-management-package">Anxiety Management Package</option>
                      <option value="panic-stress-relief-program">Panic & Stress Relief Program</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      &#9662;
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <select 
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (10 AM - 1 PM)</option>
                        <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 7 PM)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        &#9662;
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                    Tell Us How You're Feeling (Optional)
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What stress or anxiety symptoms are you experiencing? How long have you been feeling this way?"
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-[#7c2ae8] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Rocket size={16} /> {loading ? 'Submitting...' : 'Book My Session Now'}
                </button>
              </form>
            )}
          </div>

          {/* Connect With Jinal Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            <h3 className="text-xl font-serif font-bold text-[#110A24] px-1">Connect With Jinal</h3>

            <a 
              href="https://wa.me/919924999666" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                <MessageCircle size={26} className="fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#110A24] font-serif">WhatsApp</h4>
                <p className="text-xs text-gray-500 mt-0.5">Instant responses available</p>
                <p className="text-sm font-bold text-primary mt-1">+91 9924 999 666</p>
              </div>
            </a>

            <a 
              href="tel:+919924999666"
              className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
            >
              <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#110A24] font-serif">Phone Call</h4>
                <p className="text-xs text-gray-500 mt-0.5">Direct booking line</p>
                <p className="text-sm font-bold text-primary mt-1">+91 9924 999 666</p>
              </div>
            </a>

            <a 
              href="mailto:jinalsanghaviofficial@gmail.com"
              className="group bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
            >
              <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#110A24] font-serif">Email Us</h4>
                <p className="text-xs text-gray-500 mt-0.5">Send your inquiry</p>
                <p className="text-xs font-bold text-primary mt-1 truncate max-w-[200px]">jinalsanghaviofficial@gmail.com</p>
              </div>
            </a>

            <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5">
              <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#110A24] font-serif">Location</h4>
                <p className="text-xs text-gray-500 mt-0.5">Pal-Adajan, Surat, Gujarat</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ebd6ff] to-[#f4ebfe] border-2 border-purple-300/80 rounded-3xl p-6 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-[#110A24]">
                <Clock size={18} className="text-primary" />
                <h4 className="font-bold text-sm font-serif">Availability Hours</h4>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 font-bold" />
                  <span>Monday to Saturday: 10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <X size={14} className="text-red-500 font-bold" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 pt-2 border-t border-purple-200/60 leading-relaxed">
                First consultation is 60–75 minutes. Evening slots available on request for your convenience.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

  

    </div>
  );
}