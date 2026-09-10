import  { useState,useEffect } from 'react';
import { 
  Star,  Award, Rocket,  Heart, 
  Clock, Monitor, Calendar, Shield, MessageCircle, User, Phone, 
  Mail, MapPin, Check, X, ShieldAlert, MessageSquare, VolumeX, Users, 
  BookOpen,  Sliders,  
  Activity, Smartphone, Frown, Users2, ShieldCheck, Home, Sprout, Lightbulb
} from 'lucide-react';
import Navbar from './Navbar';
import heroImg from '../assets/Parenting Counselling.png';


// interface ParentingCounsellingViewProps {
//   onBack: () => void;
// }

// export default function ParentingCounsellingView() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

export default function ParentingCounsellingView() {
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
    <div className="bg-white min-h-screen font-sans antialiased text-[#110A24]">
      
      {/* 1. Global Navbar */}
      <div className="bg-[#1d0b45] text-white">
        <Navbar />
      </div>

      {/* Back Header Bar */}
      {/* <div className="bg-[#f2ebfd] py-4 px-6 border-b border-purple-100">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors cursor-pointer"
          >
            &larr; Back to Specializations
          </button>
        </div>
      </div> */}

      {/* 2. HERO SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#1d0b45] to-[#3b1580] text-white relative overflow-hidden">
        {/* Background ambient lighting blurs */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight max-w-3xl leading-tight">
              Parenting Counselling
            </h1>
            <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl font-light">
              Build Stronger Bonds With Your Child Through Understanding, Connection & Love
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Heart size={14} className="text-yellow-400 fill-yellow-400" /> Family-Centered
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Shield size={14} className="text-yellow-400 fill-yellow-400" /> Practical Solutions
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
                <Award size={14} className="text-yellow-400 fill-yellow-400" /> 17+ Years
              </span>
            </div>

            {/* Mobile Only: Photo placed right after badges */}
            <div className="block lg:hidden w-full max-w-sm mx-auto my-6 z-10">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-purple-950/40">
                <img 
                  src={heroImg} 
                  alt="Parenting Counselling - Jinal Sanghavi" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
                <Calendar size={14} /> Book Consultation
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
                <span className="text-3xl md:text-4xl font-black block">500+</span>
                <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Families Helped</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black block">98%</span>
                <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Column (Desktop Only) */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-purple-950/40 backdrop-blur-sm group z-10">
              <img 
                src={heroImg} 
                alt="Parenting Counselling - Jinal Sanghavi" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d0b45]/60 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Trust Badge placed underneath */}
            {/* <div className="mt-5 inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Family-Centered Guidance
            </div> */}
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW SECTION */}
      <section id="overview" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Parenting Doesn't Come With a Manual
          </h2>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Every child is unique, and every stage of development brings new challenges. Whether you are dealing with behavioral issues, communication difficulties, emotional struggles, academic concerns, or teenage challenges, <span className="text-primary font-bold">expert guidance can help.</span>
          </p>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Professional parenting counselling provides you with the tools, understanding, and confidence to navigate these challenges and build stronger, more meaningful bonds with your child.
          </p>
        </div>
      </section>

      {/* 4. COMMON PARENTING CONCERNS */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Common Parenting Concerns
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              These challenges are common — and with the right support, every one of them can be resolved
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Child Not Listening", desc: "Struggling with constant defiance and disobedience at home", icon: <VolumeX size={26} fill="currentColor" /> },
              { title: "Excessive Screen Time", desc: "Unable to set healthy technology and gadget boundaries", icon: <Smartphone size={26} fill="currentColor" /> },
              { title: "Anger & Behavioral Issues", desc: "Dealing with tantrums, aggression, and frequent outbursts", icon: <Frown size={26} fill="currentColor" /> },
              { title: "Lack of Confidence", desc: "Child struggling with low self-esteem, shyness, and fear", icon: <ShieldAlert size={26} fill="currentColor" /> },
              { title: "Academic Stress", desc: "Study pressure affecting your child's mental well-being", icon: <BookOpen size={26} fill="currentColor" /> },
              { title: "Teenager Communication", desc: "Difficulty connecting and communicating with your teenager", icon: <Users2 size={26} fill="currentColor" /> },
              { title: "Emotional Outbursts", desc: "Frequent mood swings and emotional struggles in the child", icon: <Activity size={26} fill="currentColor" /> },
              { title: "Parent-Child Conflicts", desc: "Constant arguments damaging your precious relationship", icon: <Users size={26} fill="currentColor" /> }
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

      {/* 5. HOW PARENTING COUNSELLING HELPS */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              How Parenting Counselling Helps
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Through personalized sessions, we equip you with practical strategies that transform family dynamics
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Understand Emotional Needs", desc: "Deeply understand what your child truly needs and feels", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Improve Communication", desc: "Learn effective, loving ways to connect with your child", icon: <MessageSquare size={26} fill="currentColor" /> },
              { title: "Create Healthy Boundaries", desc: "Set clear, loving limits that children genuinely respect", icon: <ShieldCheck size={26} fill="currentColor" /> },
              { title: "Build Trust & Connection", desc: "Strengthen the parent-child bond deeply every day", icon: <Users size={26} fill="currentColor" /> },
              { title: "Reduce Home Conflicts", desc: "Create a peaceful, calm, and harmonious household", icon: <Home size={26} fill="currentColor" /> },
              { title: "Support Child's Development", desc: "Guide your child's emotional and personal growth well", icon: <Sprout size={26} fill="currentColor" /> }
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

      {/* 6. RESULTS PARENTS OFTEN EXPERIENCE */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Results Parents Often Experience
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Real, meaningful transformations that improve family life permanently
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Improved Child Behavior", desc: "Positive, lasting changes in attitude and daily actions", icon: <Star size={26} fill="currentColor" /> },
              { title: "Better Communication", desc: "Open, honest conversations become the natural norm", icon: <MessageSquare size={26} fill="currentColor" /> },
              { title: "Stronger Family Bonds", desc: "Deeper connection and mutual love and understanding", icon: <Heart size={26} fill="currentColor" /> },
              { title: "More Parenting Confidence", desc: "Feel empowered and sure in your parenting decisions", icon: <User size={26} fill="currentColor" /> }
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
                  <Home size={26} fill="currentColor" />
                </div>
                <h3 className="text-[19px] font-bold text-[#110A24] font-serif tracking-tight mb-3 text-center h-12 flex items-center justify-center">
                  Peaceful Home Environment
                </h3>
                <p className="text-[#6B6579] text-[13.5px] font-sans font-normal leading-relaxed mb-2">
                  Transform your home into a calm, loving, safe space
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PROVEN RESULTS FROM REAL FAMILIES */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#7c2ae8] to-[#9e47ec] text-white text-center shadow-xl">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Proven Results From Real Families</h2>
            <p className="text-purple-100 text-sm font-sans tracking-wide mt-3">Transformations backed by real data and authentic family success stories</p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-white to-pink-400 mx-auto rounded-full mt-4 opacity-80" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "95%", text: "Improved Child Behavior" },
              { val: "500+", text: "Families Transformed" },
              { val: "98%", text: "Parent Satisfaction Rate" },
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

      {/* 8. WHY FAMILIES CHOOSE JINAL SANGHAVI */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Families Choose Jinal Sanghavi
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              A trusted parenting counsellor dedicated to building stronger, happier families
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Child-Centered Approach", desc: "Always putting your child's well-being at the forefront", icon: <User size={26} fill="currentColor" /> },
              { title: "Practical Parenting Strategies", desc: "Real, actionable solutions you can implement right away", icon: <Sliders size={26} fill="currentColor" /> },
              { title: "Compassionate Support", desc: "Warm, non-judgmental guidance for every parent", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Real-Life Solutions", desc: "Proven techniques that genuinely work in daily life", icon: <Lightbulb size={26} fill="currentColor" /> }
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

      {/* 9. SESSION DETAILS & INFORMATION */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Session Details & Information
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Everything you need to know about how parenting counselling sessions work
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Session Duration", desc: "45–60 minutes per session. First consultation is 60–75 minutes to understand your family dynamics and create a personalized parenting plan.", icon: <Clock size={26} fill="currentColor" /> },
              { title: "Format Options", desc: "Choose In-person sessions in Surat or secure online video sessions. Both formats are equally effective and completely family-friendly.", icon: <Monitor size={26} fill="currentColor" /> },
              { title: "Easy Booking", desc: "Simple online booking. Select your preferred date and time. We confirm within 24 hours. Flexible scheduling for busy parents.", icon: <Calendar size={26} fill="currentColor" /> },
              { title: "Complete Confidentiality", desc: "100% confidential and judgment-free environment. Your family's privacy and trust are our absolute highest priorities always.", icon: <Shield size={26} fill="currentColor" /> }
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

      {/* 10. WHY FAMILIES TRUST JINAL SANGHAVI */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Families Trust Jinal Sanghavi
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide mt-3">
              Built on years of dedication, proven expertise, and real family transformations
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "1800+", text: "Counselling Sessions" },
              { val: "500+", text: "Families Supported" },
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
            Great Parenting Starts With Better Understanding.
          </h2>
          <p className="text-xs md:text-sm text-purple-100/90 max-w-xl mx-auto font-sans leading-relaxed">
            You don't have to navigate parenting challenges alone. Get expert guidance to understand your child better, build stronger bonds, and create a peaceful, loving family environment. Take the first step today — your child deserves it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <Calendar size={14} /> Book Consultation Today
            </a>
            <a href="https://wa.me/919924999666" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#9e47ec] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <MessageCircle size={14} className="fill-current" /> Chat On Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section id="booking" className="py-24 px-6 md:px-16 bg-[#f2ebfd]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Book a Parenting Consultation Today
          </h2>
          <p className="text-gray-500 text-sm font-sans tracking-wide">
            Take the first step toward building stronger, more meaningful family bonds
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
                  Book Another Consultation
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
                      <option value="parenting-1-session">Parenting Counselling - 1 Session</option>
                      <option value="parenting-5-sessions">Parenting Counselling - 5 Sessions</option>
                      <option value="family-coaching-package">Family Coaching Package</option>
                      <option value="teenage-parenting-support">Teenage Parenting Support</option>
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
                    Tell Us Your Parenting Concern (Optional)
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What challenges are you facing with your child? What is your child's age?"
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-[#7c2ae8] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Rocket size={16} /> {loading ? 'Submitting...' : 'Book Consultation Now'}
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
                First consultation is 60–75 minutes. Evening slots available for working parents on request.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

     
    </div>
  );
}