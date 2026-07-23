import  { useEffect } from 'react';
import { 
  Star, Award, Rocket, Target, Heart, Compass, 
  Clock, Monitor, Calendar, Shield, MessageCircle, Phone, 
  Mail, MapPin, Check, X, ShieldAlert, MessageSquare, Users, 
  AlertTriangle, FileText, 
  GraduationCap, BookOpen, Brain, Trophy, Zap, Smile, 
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// interface StudentCounsellingViewProps {
//   onBack: () => void;
// }

export default function StudentCounsellingView() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#1d0b45] to-[#3b1580] text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight max-w-3xl leading-tight">
            Student Counselling
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl font-light">
            Unlock Confidence, Focus & Academic Success for Every Student
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Star size={14} className="text-yellow-400 fill-yellow-400" /> Expert Guidance
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <GraduationCap size={14} className="text-yellow-400 fill-yellow-400" /> Proven Results
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
              <Award size={14} className="text-yellow-400 fill-yellow-400" /> 17+ Years
            </span>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
              <Rocket size={14} /> Book Appointment
            </a>
            <a href="#overview" className="inline-flex items-center gap-2 bg-white text-[#110A24] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all">
              &darr; Discover More
            </a>
          </div>
          <div className="pt-12 grid grid-cols-3 gap-6 border-t border-white/10 max-w-2xl mt-8">
            <div>
              <span className="text-3xl md:text-4xl font-black block">500+</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Students Helped</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-black block">2000+</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Sessions Done</span>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-black block">98%</span>
              <span className="text-[10px] text-purple-200/80 uppercase tracking-widest font-bold">Parent Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW SECTION */}
      <section id="overview" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
            Student Success Starts With Confidence
          </h2>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Today's students face immense pressure from academics, competition, career decisions, social expectations, and emotional challenges. Many struggle with exam anxiety, lack of focus, low confidence, and overwhelming stress that hinders their potential.
          </p>
          <p className="text-[#6B6579] text-base font-sans font-normal leading-relaxed">
            Professional student counselling provides the guidance, tools, and emotional support needed to overcome these obstacles and unlock academic excellence combined with personal growth.
          </p>
        </div>
      </section>

      {/* 4. COMMON CHALLENGES WE ADDRESS */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Common Challenges We Address
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Help your students overcome these obstacles and unlock their true potential
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Exam Anxiety", desc: "Overcome the fear and stress that disrupts performance during exams", icon: <FileText size={26} fill="currentColor" /> },
              { title: "Lack of Concentration", desc: "Develop sharp focus and mental clarity for effective studying", icon: <Target size={26} fill="currentColor" /> },
              { title: "Low Confidence", desc: "Build strong self-belief and inner strength to face every challenge", icon: <ShieldAlert size={26} fill="currentColor" /> },
              { title: "Career Confusion", desc: "Get clarity on career paths aligned with strengths and passion", icon: <Compass size={26} fill="currentColor" /> },
              { title: "Academic Pressure", desc: "Learn healthy coping strategies to manage academic demands", icon: <GraduationCap size={26} fill="currentColor" /> },
              { title: "Fear of Failure", desc: "Transform fear into motivation and embrace growth mindset", icon: <AlertTriangle size={26} fill="currentColor" /> },
              { title: "Social Anxiety", desc: "Build social skills and confidence in peer interactions", icon: <Users size={26} fill="currentColor" /> },
              { title: "Time Management", desc: "Master time management for studies, hobbies, and rest balance", icon: <Clock size={26} fill="currentColor" /> },
              { title: "Motivation Problems", desc: "Reignite passion and drive toward academic goals daily", icon: <Zap size={26} fill="currentColor" /> }
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

      {/* 5. HOW WE HELP STUDENTS SUCCEED */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              How We Help Students Succeed
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Proven techniques and personalized strategies designed to bring out the best in every student
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Improve Focus & Memory", desc: "Enhance concentration and memory retention with proven techniques", icon: <Brain size={26} fill="currentColor" /> },
              { title: "Build Self-Confidence", desc: "Develop unshakeable self-belief and a strong personal identity", icon: <Trophy size={26} fill="currentColor" /> },
              { title: "Manage Exam Stress", desc: "Stay calm, composed, and confident during all examinations", icon: <Heart size={26} fill="currentColor" /> },
              { title: "Positive Study Habits", desc: "Develop effective study routines that produce lasting results", icon: <BookOpen size={26} fill="currentColor" /> },
              { title: "Set Realistic Goals", desc: "Create achievable academic and personal goals with clear plans", icon: <Target size={26} fill="currentColor" /> },
              { title: "Emotional Well-Being", desc: "Enhance emotional health and develop strong resilience daily", icon: <Smile size={26} fill="currentColor" /> }
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

      {/* 6. TRANSFORMATIONAL BENEFITS */}
      <section className="py-24 px-4 md:px-8 bg-[#f2ebfd]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Transformational Benefits
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Experience benefits that go beyond academics and shape a brighter future
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-8 shadow-lg shadow-purple-950/5 space-y-4">
              <h3 className="text-xl font-bold font-serif text-[#110A24] mb-4 text-center">Academic & Mental Benefits</h3>
              {[
                "Better academic performance across all subjects",
                "Improved concentration and sharper focus",
                "Enhanced memory retention and recall ability",
                "Stronger problem-solving and analytical skills",
                "Crystal clear thinking and mental clarity",
                "Increased motivation and study discipline"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-sans font-normal text-[#6B6579]">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">&bull;</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-8 shadow-lg shadow-purple-950/5 space-y-4">
              <h3 className="text-xl font-bold font-serif text-[#110A24] mb-4 text-center">Personal & Emotional Benefits</h3>
              {[
                "Increased confidence and positive self-image",
                "Reduced anxiety and exam-related stress",
                "Better decision making for career and life",
                "Healthier mindset and emotional balance",
                "Improved social skills and relationships",
                "Strong resilience to handle challenges"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-sans font-normal text-[#6B6579]">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">&bull;</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY PARENTS TRUST JINAL SANGHAVI */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Parents Trust Jinal Sanghavi
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              A trusted name in student counselling combining experience, compassion, and proven techniques
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Personalized Guidance", desc: "Tailored plans designed for each student's unique needs", icon: <GraduationCap size={26} fill="currentColor" /> },
              { title: "Student-Friendly Approach", desc: "Warm, relatable communication that students love", icon: <MessageSquare size={26} fill="currentColor" /> },
              { title: "Supportive Environment", desc: "Safe, judgment-free space for honest expression", icon: <Shield size={26} fill="currentColor" /> },
              { title: "Practical Techniques", desc: "Real-world strategies that create lasting improvements", icon: <ShieldAlert size={26} fill="currentColor" /> }
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

      {/* 8. PROVEN RESULTS FROM REAL STUDENTS */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#7c2ae8] to-[#9e47ec] text-white text-center shadow-xl">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Proven Results From Real Students</h2>
            <p className="text-purple-100 text-sm font-sans tracking-wide mt-3">Transformations backed by real data and authentic success stories</p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-white to-pink-400 mx-auto rounded-full mt-4 opacity-80" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "92%", text: "Better Academic Performance" },
              { val: "500+", text: "Students Transformed" },
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

      {/* 9. SESSION DETAILS & INFORMATION */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Session Details & Information
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Everything you need to know about how student counselling sessions work
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Session Duration", desc: "45–60 minutes per session. First consultation is 60–75 minutes to understand the student's unique situation and create a personalized plan.", icon: <Clock size={26} fill="currentColor" /> },
              { title: "Format Options", desc: "Choose in-person sessions in Surat or secure online video sessions. Both formats are equally effective and student-friendly.", icon: <Monitor size={26} fill="currentColor" /> },
              { title: "Easy Booking", desc: "Simple online booking. Select your preferred date and time. We confirm within 24 hours. Flexible scheduling around school timings.", icon: <Calendar size={26} fill="currentColor" /> },
              { title: "Complete Confidentiality", desc: "100% confidential and judgment-free environment. Student privacy and trust are our absolute highest priorities.", icon: <Shield size={26} fill="currentColor" /> }
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
      <section className="py-24 px-6 bg-[#f2ebfd]">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Why Families Trust Jinal Sanghavi
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide mt-3">
              Built on years of dedication, proven expertise, and real transformation results
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "1800+", text: "Counselling Sessions" },
              { val: "1000+", text: "Registered Students" },
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
            Every Student Has Potential. Let's Help Your Child Discover It.
          </h2>
          <p className="text-xs md:text-sm text-purple-100/90 max-w-xl mx-auto font-sans leading-relaxed">
            Schedule a student counselling session today and give your child the gift of confidence, focus, and academic excellence. The journey to success begins with the right guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-[#9e47ec] hover:bg-[#8534cc] border border-white/20 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <Calendar size={14} /> Book Appointment
            </a>
            <a href="https://wa.me/919924999666" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#9e47ec] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all">
              <MessageCircle size={14} className="fill-current" /> Chat On Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* 12. SCHEDULE A STUDENT COUNSELLING SESSION & BOOKING FORM */}
      <section id="booking" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#110A24] tracking-tight">
              Schedule a Student Counselling Session
            </h2>
            <p className="text-gray-500 text-sm font-sans tracking-wide">
              Take the first step toward your child's transformation and academic success
            </p>
            <div className="w-14 h-[3px] bg-gradient-to-r from-secondary-cyan via-primary to-pink-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Booking Form (Left Side) */}
            <div className="lg:col-span-7 bg-white border-2 border-purple-200/80 rounded-3xl p-8 md:p-10 shadow-xl shadow-purple-950/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#ead5ff]/60 text-primary rounded-xl flex items-center justify-center font-bold">
                  <Calendar size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#110A24]">Quick Booking Form</h3>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Student Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Student's full name" 
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
                      className="w-full bg-white border-2 border-purple-200/80 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="student-1-session">Student Counselling - 1 Session</option>
                      <option value="student-5-sessions">Student Counselling - 5 Sessions</option>
                      <option value="career-counselling-package">Career Counselling Package</option>
                      <option value="exam-stress-management">Exam Stress Management</option>
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
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#110A24] mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
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
                    Tell Us About Concerns (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="What challenges is the student facing? What goals do you want to achieve?"
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-[#7c2ae8] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Rocket size={16} /> Book Appointment
                </button>
              </form>
            </div>

            {/* Connect With Jinal Sidebar (Right Side) */}
            <div className="lg:col-span-5 space-y-6">
              
              <h3 className="text-xl font-serif font-bold text-[#110A24] px-1">Connect With Jinal</h3>

              {/* WhatsApp Card */}
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

              {/* Phone Call Card */}
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

              {/* Email Us Card */}
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

              {/* Location Card */}
              <div className="bg-white border-2 border-purple-200/80 rounded-3xl p-6 flex items-center gap-5 shadow-lg shadow-purple-950/5">
                <div className="w-14 h-14 bg-[#ead5ff]/60 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#110A24] font-serif">Location</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Pal-Adajan, Surat, Gujarat</p>
                </div>
              </div>

              {/* Availability Hours Box */}
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
                  First consultation typically takes 60–75 minutes. Schedule according to your child's school timings. Evening slots available on request.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 13. Global Footer */}
      <Footer />

    </div>
  );
}