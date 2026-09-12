import { useState, useEffect } from 'react';
import { 
  Star, Award, Rocket, Target, Heart, TrendingUp, Compass, 
  Clock, Monitor, Calendar, Shield, MessageCircle, User, Phone, 
  Mail, MapPin, Check, X, HelpCircle, FileText,
  Brain, Zap, Smile, Trophy, 
  Feather, Sliders, Ear, CloudRain, Pause, RefreshCw, TrendingDown, Sprout, Eye,
  Battery, Flower2, Lightbulb
} from 'lucide-react';
import heroBg from '../assets/persnal_coun.png';

export default function PersonalCounsellingView() {
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
    <div className="bg-white min-h-screen font-sans antialiased text-[#110A24] pt-16 w-full max-w-full overflow-x-hidden">
      {/* 2. HERO SECTION */}
      <section className=" min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] xl:min-h-[640px] flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-16 text-white overflow-hidden bg-[#250f5a]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={heroBg} 
            alt="Personal Counselling Background" 
            className="w-full h-full object-cover object-[right_top]"
          />  
          {/* Mobile dark overlay for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#250f5a]/90 via-[#250f5a]/75 to-[#250f5a]/90 lg:hidden" />
          {/* Desktop gradient overlay for text contrast on left while keeping right visual clear */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#250f5a] via-[#250f5a]/80 to-transparent max-w-3xl" />
        </div>

        {/* Background ambient lighting blurs */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight max-w-3xl leading-tight">
              Personal Counselling
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-purple-100/90 max-w-2xl font-light">
              When Life Feels Overwhelming, You Don't Have To Face It Alone
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Heart size={14} className="text-yellow-400 fill-yellow-400" /> Compassionate Care
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Shield size={14} className="text-yellow-400 fill-yellow-400" /> Safe Space
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Award size={14} className="text-yellow-400 fill-yellow-400" /> 17+ Years
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 w-full sm:w-auto">
              <a href="#booking" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all text-center">
                <Calendar size={14} /> Book Appointment
              </a>
              <a href="#overview" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#110A24] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all text-center">
                &darr; Discover More
              </a>
            </div>

            <div className="pt-8 sm:pt-12 grid grid-cols-3 gap-2 sm:gap-6 border-t border-white/10 max-w-2xl mt-6 sm:mt-8">
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-black block">1800+</span>
                <span className="text-[9px] sm:text-[10px] text-purple-200/80 uppercase tracking-widest font-bold block mt-0.5">Sessions Done</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-black block">1000+</span>
                <span className="text-[9px] sm:text-[10px] text-purple-200/80 uppercase tracking-widest font-bold block mt-0.5">Lives Transformed</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-black block">98%</span>
                <span className="text-[9px] sm:text-[10px] text-purple-200/80 uppercase tracking-widest font-bold block mt-0.5">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Column (Desktop Only) */}
          {/* <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-purple-950/40 backdrop-blur-sm group z-10">
              <img 
                src={heroImg} 
                alt="Personal Counselling - Jinal Sanghavi" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d0b45]/60 via-transparent to-transparent pointer-events-none" />
            </div>
            Trust Badge placed underneath
            <div className="mt-5 inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              1-on-1 Confidential Care
            </div>
          </div> */}
          {/* Right Column: Open space showcasing the background illustration */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center min-h-[460px] relative pointer-events-none" />
        </div>
      </section>

      {/* 3. OVERVIEW SECTION */}
      <section id="overview" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-left space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            You Don't Have To Face This Alone
          </h2>
          <p className="text-[#6B6579] text-sm sm:text-base font-sans font-normal leading-relaxed">
            Sometimes everything looks fine from the outside, but internally you may feel confused, stuck, emotionally exhausted, anxious, or unhappy.
          </p>
          <p className="text-[#6B6579] text-sm sm:text-base font-sans font-normal leading-relaxed">
            Personal counselling provides a safe space where you can understand yourself better, overcome emotional challenges, and create a more fulfilling life filled with purpose and joy.
          </p>
        </div>
      </section>

      {/* 4. SIGNS YOU MAY BENEFIT FROM COUNSELLING */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Signs You May Benefit From Counselling
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-sans tracking-wide">
              Recognizing these signs is the first step toward positive change and personal growth
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Overthinking", desc: "Constant mental loops preventing peace and clarity", icon: <Brain size={26} fill="currentColor" /> },
              { title: "Low Self-Esteem", desc: "Feeling not good enough or lacking self-worth", icon: <User size={26} fill="currentColor" /> },
              { title: "Emotional Imbalance", desc: "Difficulty managing emotions and mood swings", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Lack of Clarity", desc: "Confusion about life direction and decisions", icon: <HelpCircle size={26} fill="currentColor" /> },
              { title: "Negative Thinking", desc: "Persistent negative thoughts affecting daily life", icon: <CloudRain size={26} fill="currentColor" /> },
              { title: "Feeling Stuck", desc: "Unable to move forward in personal or professional life", icon: <Pause size={26} fill="currentColor" /> },
              { title: "Loss of Motivation", desc: "No energy or drive to pursue goals and dreams", icon: <Battery size={26} fill="currentColor" /> },
              { title: "Personal Setbacks", desc: "Struggling to recover from failures or disappointments", icon: <TrendingDown size={26} fill="currentColor" /> },
              { title: "Life Transitions", desc: "Difficulty adapting to major life changes", icon: <RefreshCw size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-base sm:text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-2 sm:mb-3 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-xs sm:text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE WORK ON TOGETHER */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              What We Work On Together
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-sans tracking-wide">
              Comprehensive personal development areas we address through counselling sessions
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Emotional Healing", desc: "Release past pain and create emotional wellness", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Self-Confidence Building", desc: "Develop strong self-belief and inner strength", icon: <Trophy size={26} fill="currentColor" /> },
              { title: "Personal Growth", desc: "Unlock your full potential and evolve continuously", icon: <Sprout size={26} fill="currentColor" /> },
              { title: "Stress Management", desc: "Learn effective techniques to manage daily stress", icon: <Smile size={26} fill="currentColor" /> },
              { title: "Self-Awareness", desc: "Understand yourself deeply and authentically", icon: <Eye size={26} fill="currentColor" /> },
              { title: "Goal Clarity", desc: "Define meaningful goals aligned with your values", icon: <Target size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-base sm:text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-2 sm:mb-3 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-xs sm:text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  <Compass size={26} fill="currentColor" />
                </div>
                <h3 className="text-base sm:text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-2 sm:mb-3 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                  Life Direction
                </h3>
                <p className="text-[#6B6579] text-xs sm:text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  Find your true path and life purpose clearly
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. THE TRANSFORMATION YOU CAN EXPECT */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              The Transformation You Can Expect
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-sans tracking-wide">
              Real, lasting changes that improve every aspect of your life
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "More Confidence", desc: "Feel empowered and believe in yourself fully", icon: <Star size={26} fill="currentColor" /> },
              { title: "Better Emotional Control", desc: "Manage emotions with grace and awareness", icon: <Sliders size={26} fill="currentColor" /> },
              { title: "Improved Decision Making", desc: "Make choices with clarity and confidence", icon: <Lightbulb size={26} fill="currentColor" /> },
              { title: "Greater Peace of Mind", desc: "Experience inner calm and mental tranquility", icon: <Feather size={26} fill="currentColor" /> },
              { title: "Increased Self-Belief", desc: "Trust yourself and your abilities completely", icon: <Zap size={26} fill="currentColor" /> },
              { title: "Clear Life Direction", desc: "Know where you're going and how to get there", icon: <MapPin size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-950/10 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-base sm:text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-2 sm:mb-3 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-xs sm:text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE JINAL SANGHAVI? */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#1d0b45] to-[#3b1580] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
              Why Choose Jinal Sanghavi?
            </h2>
            <p className="text-purple-100/90 text-xs sm:text-sm font-sans tracking-wide">
              A trusted personal counsellor combining experience, compassion, and proven results
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-white to-pink-400 mx-auto rounded-full mt-3 sm:mt-4 opacity-80" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Compassionate Listening", desc: "Deep understanding and empathetic support always", icon: <Ear size={26} fill="currentColor" /> },
              { title: "Personalized Guidance", desc: "Customized strategies for your unique journey", icon: <User size={26} fill="currentColor" /> },
              { title: "Holistic Healing", desc: "Complete mind, body, and spirit transformation", icon: <Flower2 size={26} fill="currentColor" /> },
              { title: "Practical Action Plans", desc: "Real steps you can implement immediately", icon: <FileText size={26} fill="currentColor" /> }
            ].map((box, i) => (
              <div 
                key={i} 
                className="group bg-white text-[#110A24] border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl shadow-purple-950/20 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  {box.icon}
                </div>

                <h3 className="text-base sm:text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-2 sm:mb-3 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                  {box.title}
                </h3>

                <p className="text-[#6B6579] text-xs sm:text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="group bg-white text-[#110A24] border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl shadow-purple-950/20 hover:border-[#9e47ec] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#9e47ec] to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ead5ff]/60 text-[#9e47ec] group-hover:bg-[#9e47ec] group-hover:text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0 shadow-2xs transition-all duration-300 transform group-hover:rotate-3">
                  <TrendingUp size={26} fill="currentColor" />
                </div>
                <h3 className="text-base sm:text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-2 sm:mb-3 text-center min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                  Long-Term Growth
                </h3>
                <p className="text-[#6B6579] text-xs sm:text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  Sustainable personal development and success
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. SESSION DETAILS & INFORMATION */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Session Details & Information
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-sans tracking-wide">
              Everything you need to know about how personal counselling sessions work
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {[
              { title: "Session Duration", desc: "45–60 minutes per session. First consultation is 60–75 minutes to deeply understand your personal situation and create a tailored growth plan.", icon: <Clock size={26} fill="currentColor" /> },
              { title: "Format Options", desc: "Choose in-person sessions in Surat or secure online video sessions. Both formats are equally effective and completely confidential.", icon: <Monitor size={26} fill="currentColor" /> },
              { title: "Easy Booking", desc: "Simple online booking. Select your preferred date and time. We confirm within 24 hours. Flexible scheduling to suit your lifestyle.", icon: <Calendar size={26} fill="currentColor" /> },
              { title: "Complete Confidentiality", desc: "100% confidential and judgment-free environment. Your privacy, trust, and emotional safety are our absolute highest priorities.", icon: <Shield size={26} fill="currentColor" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-purple-950/5 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ead5ff]/60 text-[#9e47ec] rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-[19px] mb-1.5 sm:mb-2 text-[#110A24] font-serif tracking-tight">{item.title}</h4>
                  <p className="text-[#6B6579] text-xs sm:text-[13.5px] font-sans font-normal leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY CLIENTS TRUST JINAL SANGHAVI */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#f2ebfd]">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Clients Trust Jinal Sanghavi
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-sans tracking-wide mt-2 sm:mt-3">
              Built on years of dedication, proven expertise, and real transformation results
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-3 sm:mt-4" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { val: "1800+", text: "Counselling Sessions" },
              { val: "1000+", text: "Registered Clients" },
              { val: "Award", text: "Winning Counselor" },
              { val: "Online & Offline", text: "Sessions Available" }
            ].map((box, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl border-2 border-purple-200/80 p-4 sm:p-6 md:p-8 text-center shadow-lg shadow-purple-950/5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#9e47ec] block mb-1 sm:mb-2">{box.val}</span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight">{box.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto my-6 sm:my-12">
        <div className="bg-gradient-to-r from-[#1d0b45] to-[#9e47ec] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white space-y-4 sm:space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold leading-tight max-w-3xl mx-auto">
            Your Best Life Starts With One Decision. Choose Yourself.
          </h2>
          <p className="text-xs sm:text-sm text-purple-100/90 max-w-xl mx-auto font-sans leading-relaxed">
            Don't let confusion, anxiety, or emotional exhaustion hold you back any longer. Personal counselling can help you understand yourself better, overcome challenges, and create the fulfilling life you deserve. Take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
            <a href="#booking" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all text-center">
              <Calendar size={14} /> Book Session Now
            </a>
            <a href="https://wa.me/919924999666" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#9e47ec] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all text-center">
              <MessageCircle size={14} className="fill-current" /> Chat On Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* 11. BOOK YOUR PERSONAL COUNSELLING SESSION FORM SECTION */}
      <section id="booking" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Book Your Personal Counselling Session
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm font-sans tracking-wide">
            Take the first step toward understanding yourself better and creating positive change
          </p>
          <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-3 sm:mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Quick Booking Form */}
          <div className="lg:col-span-7 bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl shadow-purple-950/5">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 bg-[#ead5ff]/60 text-primary rounded-xl flex items-center justify-center font-bold shrink-0">
                <Calendar size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#110A24]">Quick Booking Form</h3>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4">
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
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {errorMessage && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-600 text-xs p-4 rounded-xl">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                      <option value="Personal Counselling - 1 Session">Personal Counselling - 1 Session</option>
                      <option value="Personal Counselling - 5 Sessions">Personal Counselling - 5 Sessions</option>
                      <option value="Life Coaching Package">Life Coaching Package</option>
                      <option value="Stress & Anxiety Management">Stress & Anxiety Management</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      &#9662;
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
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
                        className="w-full bg-white border-2 border-purple-200/80 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select time</option>
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        &#9662;
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                    What Would You Like To Work On? (Optional)
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share what challenges you're facing or what you'd like to achieve..."
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-[#7c2ae8] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Rocket size={16} /> {loading ? 'Submitting...' : 'Book Appointment'}
                </button>
              </form>
            )}
          </div>

          {/* Connect With Jinal Sidebar */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#110A24] px-1">Connect With Jinal</h3>

            <a 
              href="https://wa.me/919924999666" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 text-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                <MessageCircle size={24} className="fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#110A24] font-serif">WhatsApp</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Instant responses available</p>
                <p className="text-xs sm:text-sm font-bold text-primary mt-1">+91 9924 999 666</p>
              </div>
            </a>

            <a 
              href="tel:+919924999666"
              className="group bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ead5ff]/60 text-primary rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#110A24] font-serif">Phone Call</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Direct booking line</p>
                <p className="text-xs sm:text-sm font-bold text-primary mt-1">+91 9924 999 666</p>
              </div>
            </a>

            <a 
              href="mailto:jinalsanghaviofficial@gmail.com"
              className="group bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-lg shadow-purple-950/5 hover:border-primary transition-all duration-300 block"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ead5ff]/60 text-primary rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-sm sm:text-base text-[#110A24] font-serif">Email Us</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Send your inquiry</p>
                <p className="text-xs font-bold text-primary mt-1 break-all">jinalsanghaviofficial@gmail.com</p>
              </div>
            </a>

            <div className="bg-white border-2 border-purple-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-lg shadow-purple-950/5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ead5ff]/60 text-primary rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#110A24] font-serif">Location</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Pal-Adajan, Surat, Gujarat</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ebd6ff] to-[#f4ebfe] border-2 border-purple-300/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md space-y-3">
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
                First consultation typically takes 60–75 minutes. Schedule according to your convenience. Evening slots available on request.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

      

    </div>
  );
}