
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import FeaturedCounters from './components/FeaturedCounters';
// import ManifestationTraining from './components/ManifestationTraining';
// import About from './components/About';
// import CounsellingSpecializations from './components/CounsellingSpecializations';
// import SpecializedServices from './components/SpecializedServices';
// import WhatSetsMeApart from './components/WhatSetsMeApart';
// import InnerTransformation from './components/InnerTransformation';
// import ProofBeyondPromises from './components/ProofBeyondPromises';
// import FAQ from './components/FAQ';
// import ReadyToTransform from './components/ReadyToTransform';
// import BookingAndContact from './components/BookingAndContact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="min-h-screen bg-slate-50 antialiased selection:bg-purple-500 selection:text-white">
//       <Navbar />
//       <main>
//         <Hero />
//         <FeaturedCounters />
//         <ManifestationTraining />
//         <About />
//         <CounsellingSpecializations />
//         <SpecializedServices />
//         <WhatSetsMeApart />
//         <InnerTransformation />
//         <ProofBeyondPromises />
//         <FAQ />
//         <ReadyToTransform />
//         <BookingAndContact />
//         <Footer />
//       </main>

//       {/* Floating WhatsApp Quick-action anchor */}
//       <a 
//         href="https://wa.me/919924999666" 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
//         aria-label="Chat on WhatsApp"
//       >
//         <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
//           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.296 1.48 4.905 1.481 5.482 0 9.94-4.461 9.943-9.945.002-2.657-1.03-5.155-2.906-7.033A9.855 9.855 0 0 0 11.992 1.34C6.51 1.34 2.055 5.795 2.052 11.28c-.001 1.706.469 3.371 1.36 4.86l-.995 3.637 3.73-.978zm11.365-4.435c-.29-.145-1.711-.844-1.976-.94-.266-.097-.461-.145-.655.145-.194.29-.752.94-.922 1.133-.169.194-.339.218-.63.073-.29-.145-1.223-.45-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.508.145-.169.194-.29.29-.483.097-.194.048-.363-.024-.508-.073-.145-.655-1.579-.897-2.16-.236-.569-.477-.491-.655-.5l-.56-.011c-.194 0-.508.073-.774.363-.266.29-1.017.994-1.017 2.42 0 1.425 1.038 2.801 1.183 2.994.145.194 2.041 3.117 4.945 4.371.69.299 1.229.478 1.649.612.695.221 1.329.19 1.83.114.558-.085 1.712-.7 1.953-1.378.242-.677.242-1.258.17-1.378-.073-.121-.266-.194-.556-.339z"/>
//         </svg>
//       </a>
//     </div>
//   );
// }


// import  { useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import FeaturedCounters from './components/FeaturedCounters';
// import ManifestationTraining from './components/ManifestationTraining';
// import About from './components/About';
// import CounsellingSpecializations from './components/CounsellingSpecializations';
// import SpecializedServices from './components/SpecializedServices';
// import WhatSetsMeApart from './components/WhatSetsMeApart';
// import InnerTransformation from './components/InnerTransformation';
// import ProofBeyondPromises from './components/ProofBeyondPromises';
// import FAQ from './components/FAQ';
// import ReadyToTransform from './components/ReadyToTransform';
// import BookingAndContact from './components/BookingAndContact';
// import Footer from './components/Footer';

// // Agar aapke paas ManifestationTrainingView alag se hai toh usko import karein
// import ManifestationTrainingView from './components/ManifestationTrainingView';

// export default function App() {
//   const [currentView, setCurrentView] = useState<string>('home');

//   // Agar user ne Manifestation Training ka "Know More" dabaya toh yeh view render hoga
//   if (currentView === 'manifestation-training') {
//     return (
//       <div className="min-h-screen bg-slate-50 antialiased">
//         <ManifestationTrainingView onBack={() => {
//           setCurrentView('home');
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         }} />
//       </div>
//     );
//   }

  
//   return (
//     <div className="min-h-screen bg-slate-50 antialiased selection:bg-purple-500 selection:text-white">
//       <Navbar />
//       <main>
//         <Hero />
//         <FeaturedCounters />
//         <ManifestationTraining />
//         <About />
//         {/* Yahan hum currentView ka setter pass kar rahe hain */}
//         <CounsellingSpecializations onViewChange={(viewId: string) => {
//           setCurrentView(viewId);
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         }} />
//         <SpecializedServices />
//         <WhatSetsMeApart />
//         <InnerTransformation />
//         <ProofBeyondPromises />
//         <FAQ />
//         <ReadyToTransform />
//         <BookingAndContact />
//         <Footer />
//       </main>

//       {/* Floating WhatsApp Quick-action anchor */}
//       <a 
//         href="https://wa.me/919924999666" 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
//         aria-label="Chat on WhatsApp"
//       >
//         <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
//           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.296 1.48 4.905 1.481 5.482 0 9.94-4.461 9.943-9.945.002-2.657-1.03-5.155-2.906-7.033A9.855 9.855 0 0 0 11.992 1.34C6.51 1.34 2.055 5.795 2.052 11.28c-.001 1.706.469 3.371 1.36 4.86l-.995 3.637 3.73-.978zm11.365-4.435c-.29-.145-1.711-.844-1.976-.94-.266-.097-.461-.145-.655.145-.194.29-.752.94-.922 1.133-.169.194-.339.218-.63.073-.29-.145-1.223-.45-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.508.145-.169.194-.29.29-.483.097-.194.048-.363-.024-.508-.073-.145-.655-1.579-.897-2.16-.236-.569-.477-.491-.655-.5l-.56-.011c-.194 0-.508.073-.774.363-.266.29-1.017.994-1.017 2.42 0 1.425 1.038 2.801 1.183 2.994.145.194 2.041 3.117 4.945 4.371.69.299 1.229.478 1.649.612.695.221 1.329.19 1.83.114.558-.085 1.712-.7 1.953-1.378.242-.677.242-1.258.17-1.378-.073-.121-.266-.194-.556-.339z"/>
//         </svg>
//       </a>
//     </div>
//   );
// }

// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import FeaturedCounters from './components/FeaturedCounters';
// import ManifestationTraining from './components/ManifestationTraining';
// import About from './components/About';
// import CounsellingSpecializations from './components/CounsellingSpecializations';
// import SpecializedServices from './components/SpecializedServices';
// import WhatSetsMeApart from './components/WhatSetsMeApart';
// import InnerTransformation from './components/InnerTransformation';
// import ProofBeyondPromises from './components/ProofBeyondPromises';
// import FAQ from './components/FAQ';
// import ReadyToTransform from './components/ReadyToTransform';
// import BookingAndContact from './components/BookingAndContact';
// import Footer from './components/Footer';

// // Views Import
// import ManifestationTrainingView from './components/ManifestationTrainingView';
// import RelationshipCounsellingView from './components/RelationshipCounsellingView';
// import StudentCounsellingView from './components/StudentCounsellingView';
// import PersonalCounsellingView from './components/PersonalCounsellingView';
// import ParentingCounsellingView from './components/ParentingCounsellingView'; // <-- Added here
// import StressAnxietyCounsellingView from './components/StressAnxietyCounsellingView'; // <-- Added here

// export default function App() {
//   const [currentView, setCurrentView] = useState<string>('home');

//   const handleBackToHome = () => {
//     setCurrentView('home');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // 1. Manifestation Training View
//   if (currentView === 'manifestation-training') {
//     return (
//       <div className="min-h-screen bg-slate-50 antialiased">
//         <ManifestationTrainingView onBack={handleBackToHome} />
//       </div>
//     );
//   }

//   // 2. Relationship Counselling View
//   if (currentView === 'relationship-counselling') {
//     return (
//       <div className="min-h-screen bg-slate-50 antialiased">
//         <RelationshipCounsellingView onBack={handleBackToHome} />
//       </div>
//     );
//   }

//   // 3. Student Counselling View
//   if (currentView === 'student-counselling') {
//     return (
//       <div className="min-h-screen bg-slate-50 antialiased">
//         <StudentCounsellingView onBack={handleBackToHome} />
//       </div>
//     );
//   }

//   // 4. Personal Counselling View
//   if (currentView === 'personal-counselling') {
//     return (
//       <div className="min-h-screen bg-slate-50 antialiased">
//         <PersonalCounsellingView onBack={handleBackToHome} />
//       </div>
//     );
//   }

//   // 5. Parenting Counselling View
//   if (currentView === 'parenting-counselling') {
//     return (
//       <div className="min-h-screen bg-slate-50 antialiased">
//         <ParentingCounsellingView onBack={handleBackToHome} />
//       </div>
//     );
//   }

//   if (currentView === 'stress-anxiety-counselling') {
//     return (
//       <div className="min-h-screen bg-slate-50 antialiased">
//         <StressAnxietyCounsellingView onBack={handleBackToHome} />
//       </div>
//     );
//   } 

//   return (
//     <div className="min-h-screen bg-slate-50 antialiased selection:bg-purple-500 selection:text-white">
//       <Navbar />
//       <main>
//         <Hero />
//         <FeaturedCounters />
//         <ManifestationTraining />
//         <About />
        
//         {/* Counselling Specializations jahan se view change trigger hota hai */}
//         <CounsellingSpecializations onViewChange={(viewId: string) => {
//           setCurrentView(viewId);
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         }} />

//         <SpecializedServices />
//         <WhatSetsMeApart />
//         <InnerTransformation />
//         <ProofBeyondPromises />
//         <FAQ />
//         <ReadyToTransform />
//         <BookingAndContact />
//         <Footer />
//       </main>

//       {/* Floating WhatsApp Quick-action anchor */}
//       <a 
//         href="https://wa.me/919924999666" 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
//         aria-label="Chat on WhatsApp"
//       >
//         <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
//           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.296 1.48 4.905 1.481 5.482 0 9.94-4.461 9.943-9.945.002-2.657-1.03-5.155-2.906-7.033A9.855 9.855 0 0 0 11.992 1.34C6.51 1.34 2.055 5.795 2.052 11.28c-.001 1.706.469 3.371 1.36 4.86l-.995 3.637 3.73-.978zm11.365-4.435c-.29-.145-1.711-.844-1.976-.94-.266-.097-.461-.145-.655.145-.194.29-.752.94-.922 1.133-.169.194-.339.218-.63.073-.29-.145-1.223-.45-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.508.145-.169.194-.29.29-.483.097-.194.048-.363-.024-.508-.073-.145-.655-1.579-.897-2.16-.236-.569-.477-.491-.655-.5l-.56-.011c-.194 0-.508.073-.774.363-.266.29-1.017.994-1.017 2.42 0 1.425 1.038 2.801 1.183 2.994.145.194 2.041 3.117 4.945 4.371.69.299 1.229.478 1.649.612.695.221 1.329.19 1.83.114.558-.085 1.712-.7 1.953-1.378.242-.677.242-1.258.17-1.378-.073-.121-.266-.194-.556-.339z"/>
//         </svg>
//       </a>
//     </div>
//   );
// }

// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import FeaturedCounters from './components/FeaturedCounters';
// import ManifestationTraining from './components/ManifestationTraining';
// import About from './components/About';
// import CounsellingSpecializations from './components/CounsellingSpecializations';
// import SpecializedServices from './components/SpecializedServices';
// import WhatSetsMeApart from './components/WhatSetsMeApart';
// import InnerTransformation from './components/InnerTransformation';
// import ProofBeyondPromises from './components/ProofBeyondPromises';
// import FAQ from './components/FAQ';
// import ReadyToTransform from './components/ReadyToTransform';
// import BookingAndContact from './components/BookingAndContact';
// import Footer from './components/Footer';

// // Views Import
// import ManifestationTrainingView from './components/ManifestationTrainingView';
// import RelationshipCounsellingView from './components/RelationshipCounsellingView';
// import StudentCounsellingView from './components/StudentCounsellingView';
// import PersonalCounsellingView from './components/PersonalCounsellingView';
// import ParentingCounsellingView from './components/ParentingCounsellingView';
// import StressAnxietyCounsellingView from './components/StressAnxietyCounsellingView';

// // Scroll to top helper on route change
// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);
//   return null;
// }

// export default function App() {
//   const navigate = useNavigate();

//   const handleBackToHome = () => {
//     navigate('/');
//   };

//   const handleViewChange = (viewId: string) => {
//     navigate(`/${viewId}`);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 antialiased selection:bg-purple-500 selection:text-white">
//       <ScrollToTop />
//       <Navbar />
      
//       <Routes>
//         {/* Home Route */}
//         <Route path="/" element={
//           <main>
//             <Hero />
//             <FeaturedCounters />
//             <ManifestationTraining />
//             <About />
            
//             <CounsellingSpecializations onViewChange={handleViewChange} />

//             <SpecializedServices />
//             <WhatSetsMeApart />
//             <InnerTransformation />
//             <ProofBeyondPromises />
//             <FAQ />
//             <ReadyToTransform />
//             <BookingAndContact />
//           </main>
//         } />

//         {/* 1. Manifestation Training View */}
//         <Route path="/manifestation-training" element={
//           <div className="pt-20">
//             <ManifestationTrainingView onBack={handleBackToHome} />
//           </div>
//         } />

//         {/* 2. Relationship Counselling View */}
//         <Route path="/relationship-counselling" element={
//           <div className="pt-20">
//             <RelationshipCounsellingView onBack={handleBackToHome} />
//           </div>
//         } />

//         {/* 3. Student Counselling View */}
//         <Route path="/student-counselling" element={
//           <div className="pt-20">
//             <StudentCounsellingView onBack={handleBackToHome} />
//           </div>
//         } />

//         {/* 4. Personal Counselling View */}
//         <Route path="/personal-counselling" element={
//           <div className="pt-20">
//             <PersonalCounsellingView onBack={handleBackToHome} />
//           </div>
//         } />

//         {/* 5. Parenting Counselling View */}
//         <Route path="/parenting-counselling" element={
//           <div className="pt-20">
//             <ParentingCounsellingView onBack={handleBackToHome} />
//           </div>
//         } />

//         {/* 6. Stress & Anxiety Counselling View */}
//         <Route path="/stress-anxiety-counselling" element={
//           <div className="pt-20">
//             <StressAnxietyCounsellingView onBack={handleBackToHome} />
//           </div>
//         } />
//       </Routes>

//       <Footer />

//       {/* Floating WhatsApp Quick-action anchor */}
//       <a 
//         href="https://wa.me/919924999666" 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
//         aria-label="Chat on WhatsApp"
//       >
//         <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
//           <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.296 1.48 4.905 1.481 5.482 0 9.94-4.461 9.943-9.945.002-2.657-1.03-5.155-2.906-7.033A9.855 9.855 0 0 0 11.992 1.34C6.51 1.34 2.055 5.795 2.052 11.28c-.001 1.706.469 3.371 1.36 4.86l-.995 3.637 3.73-.978zm11.365-4.435c-.29-.145-1.711-.844-1.976-.94-.266-.097-.461-.145-.655.145-.194.29-.752.94-.922 1.133-.169.194-.339.218-.63.073-.29-.145-1.223-.45-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.508.145-.169.194-.29.29-.483.097-.194.048-.363-.024-.508-.073-.145-.655-1.579-.897-2.16-.236-.569-.477-.491-.655-.5l-.56-.011c-.194 0-.508.073-.774.363-.266.29-1.017.994-1.017 2.42 0 1.425 1.038 2.801 1.183 2.994.145.194 2.041 3.117 4.945 4.371.69.299 1.229.478 1.649.612.695.221 1.329.19 1.83.114.558-.085 1.712-.7 1.953-1.378.242-.677.242-1.258.17-1.378-.073-.121-.266-.194-.556-.339z"/>
//         </svg>
//       </a>
//     </div>
//   );
// }

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCounters from './components/FeaturedCounters';
import ManifestationTraining from './components/ManifestationTraining';
import About from './components/About';
import CounsellingSpecializations from './components/CounsellingSpecializations';
import SpecializedServices from './components/SpecializedServices';
import WhatSetsMeApart from './components/WhatSetsMeApart';
import InnerTransformation from './components/InnerTransformation';
import ProofBeyondPromises from './components/ProofBeyondPromises';
import FAQ from './components/FAQ';
import ReadyToTransform from './components/ReadyToTransform';
import BookingAndContact from './components/BookingAndContact';
import Footer from './components/Footer';

// Views Import
import ManifestationSinglePage from './components/ManifestationSinglePage';
import ManifestationTrainingView from './components/ManifestationTrainingView';
import RelationshipCounsellingView from './components/RelationshipCounsellingView';
import StudentCounsellingView from './components/StudentCounsellingView';
import PersonalCounsellingView from './components/PersonalCounsellingView';
import ParentingCounsellingView from './components/ParentingCounsellingView';
import StressAnxietyCounsellingView from './components/StressAnxietyCounsellingView';
import BlogView from './components/BlogView';
import BlogPostView from './components/BlogPostView';

// Scroll to top helper on route change & hash handling
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const navigate = useNavigate();

  // const handleBackToHome = () => {
  //   navigate('/');
  // };

  const handleViewChange = (viewId: string) => {
    navigate(`/${viewId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-purple-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <main>
            <Hero />
            <FeaturedCounters />
            <ManifestationTraining />
            <About />
            
            <CounsellingSpecializations onViewChange={handleViewChange} />

            <SpecializedServices />
            <WhatSetsMeApart />
            <InnerTransformation />
            <ProofBeyondPromises />
            <FAQ />
            <ReadyToTransform />
            <BookingAndContact />
          </main>
        } />

        {/* Dedicated Single Page for Featured Service: Manifestation Training */}
        <Route path="/manifestation" element={
          <ManifestationSinglePage />
        } />

        {/* 1. Manifestation Training View (First counselling specialization service) */}
        <Route path="/manifestation-training" element={
          <ManifestationTrainingView />
        } />

        {/* 2. Relationship Counselling View */}
        <Route path="/relationship-counselling" element={
          <RelationshipCounsellingView />
        } />

        {/* 3. Student Counselling View */}
        <Route path="/student-counselling" element={
          <StudentCounsellingView />
        } />

        {/* 4. Personal Counselling View */}
        <Route path="/personal-counselling" element={
          <PersonalCounsellingView />
        } />

        {/* 5. Parenting Counselling View */}
        <Route path="/parenting-counselling" element={
          <ParentingCounsellingView />
        } />

        {/* 6. Stress & Anxiety Counselling View */}
        <Route path="/stress-anxiety-counselling" element={
          <StressAnxietyCounsellingView />
        } />

        {/* 7. Blog Directory View */}
        <Route path="/blog" element={
          <BlogView />
        } />
        <Route path="/blogs" element={
          <BlogView />
        } />

        {/* 8. Individual Blog Article View */}
        <Route path="/blog/:slug" element={
          <BlogPostView />
        } />
      </Routes>

      <Footer />

      {/* Floating WhatsApp Quick-action anchor */}
      <a 
        href="https://wa.me/919924999666" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.296 1.48 4.905 1.481 5.482 0 9.94-4.461 9.943-9.945.002-2.657-1.03-5.155-2.906-7.033A9.855 9.855 0 0 0 11.992 1.34C6.51 1.34 2.055 5.795 2.052 11.28c-.001 1.706.469 3.371 1.36 4.86l-.995 3.637 3.73-.978zm11.365-4.435c-.29-.145-1.711-.844-1.976-.94-.266-.097-.461-.145-.655.145-.194.29-.752.94-.922 1.133-.169.194-.339.218-.63.073-.29-.145-1.223-.45-2.33-1.439-.862-.77-1.443-1.721-1.612-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.508.145-.169.194-.29.29-.483.097-.194.048-.363-.024-.508-.073-.145-.655-1.579-.897-2.16-.236-.569-.477-.491-.655-.5l-.56-.011c-.194 0-.508.073-.774.363-.266.29-1.017.994-1.017 2.42 0 1.425 1.038 2.801 1.183 2.994.145.194 2.041 3.117 4.945 4.371.69.299 1.229.478 1.649.612.695.221 1.329.19 1.83.114.558-.085 1.712-.7 1.953-1.378.242-.677.242-1.258.17-1.378-.073-.121-.266-.194-.556-.339z"/>
        </svg>
      </a>
    </div>
  );
}