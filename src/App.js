import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Common Components
import Navbar from './components/Navbar';
import Footer from './components/footer'; // Ensure correct case
import ScrollToTop from './components/Scroll'; // Reset scroll on route change

// Homepage Components
import Hero from './components/Hero';
import Home from './components/home';
import Country from './components/Country';
import Abroad from './components/Abroad';
import Vedio from './components/Vedio';
import Testimonials from './components/Testimonials';

// Main Pages
import { About } from './components/about'; 
import Services from './components/Servics'; // Fixed typo
import Contact from './components/contact';
import Highlights from './components/assets/Highlights'




import Signin from './components/OtherPages/signin';

// Country Pages
import UK from './components/Countries/Uk';
import Cyprus from './components/Countries/Cyprus';
import USA from './components/Countries/USA';
import Australia from './components/Countries/Australia';
import Canada from './components/Countries/Canada';
import Finland from './components/Countries/Finland';

// Study Pages
import WhyStudyAbroad from './components/Studypages/WhyStudyAbroad';
import Study from './components/Studypages/Study';
import HowToApply from './components/Studypages/HowToApply';
import AfterReceivingOffer from './components/Studypages/AfterReceivingOffer';
import PrepareToDepart from './components/Studypages/PrepareToDepart';
import ArriveAndThrive from './components/Studypages/ArriveAndThrive';
import TitleUpdater from './components/assets/TitleUpdater'

import WhatsAppButton from './components/WhatsappButton'; // Import the button


export default function App() {
  return (
    <Router>
      <TitleUpdater />
      <ScrollToTop />
      <Navbar />
      <div style={{ paddingTop: '0px' }}>
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
                <Country />
                <Abroad />
                <Vedio />
                
              </>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Testimonials />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />


          
          <Route path="/signin" element={<Signin />} />
          <Route path="/Highlights" element={<Highlights />} />

          {/* Country Pages */}
          <Route path="/uk" element={<UK />} />
          <Route path="/cyprus" element={<Cyprus />} />
          <Route path="/usa" element={<USA />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/finland" element={<Finland />} />

          {/* Study Pages */}
          <Route path="/why-study-abroad" element={<WhyStudyAbroad />} />
          <Route path="/Study" element={<Study />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/After-Receiving-Offer" element={<AfterReceivingOffer />} />
          <Route path="/prepare-to-depart" element={<PrepareToDepart />} />
          <Route path="/arrive-and-thrive" element={<ArriveAndThrive />} />
        </Routes>

      </div>
      <WhatsAppButton />

      <Footer />
    </Router>
  );
}






// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// // Common Components
// import Navbar from './components/Navbar';
// import Footer from './components/footer';
// import ScrollToTop from './components/Scroll';

// // Lazy Load Components
// const Hero = lazy(() => import('./components/Hero'));
// const Home = lazy(() => import('./components/home'));
// const Country = lazy(() => import('./components/Country'));
// const Abroad = lazy(() => import('./components/Abroad'));
// const Vedio = lazy(() => import('./components/Vedio'));
// const Testimonials = lazy(() => import('./components/Testimonials'));
// const About = lazy(() => import('./components/about'));
// const Services = lazy(() => import('./components/Servics'));
// const Contact = lazy(() => import('./components/contact'));
// const News = lazy(() => import('./components/assets/News'));
// const Signin = lazy(() => import('./components/OtherPages/signin'));

// // Country Pages
// const UK = lazy(() => import('./components/Countries/Uk'));
// const Cyprus = lazy(() => import('./components/Countries/Cyprus'));
// const USA = lazy(() => import('./components/Countries/USA'));
// const Australia = lazy(() => import('./components/Countries/Australia'));
// const Canada = lazy(() => import('./components/Countries/Canada'));
// const Finland = lazy(() => import('./components/Countries/Finland'));

// // Study Pages
// const WhyStudyAbroad = lazy(() => import('./components/Studypages/WhyStudyAbroad'));
// const Study = lazy(() => import('./components/Studypages/Study'));
// const HowToApply = lazy(() => import('./components/Studypages/HowToApply'));
// const AfterReceivingOffer = lazy(() => import('./components/Studypages/AfterReceivingOffer'));
// const PrepareToDepart = lazy(() => import('./components/Studypages/PrepareToDepart'));
// const ArriveAndThrive = lazy(() => import('./components/Studypages/ArriveAndThrive'));

// // WhatsApp Button
// import WhatsAppButton from './components/WhatsappButton';

// export default function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Navbar />
//       <div style={{ paddingTop: '0px' }}>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             {/* Homepage */}
//             <Route path="/" element={
//               <>
//                 <Hero />
//                 <Home />
//                 <Country />
//                 <Abroad />
//                 <Vedio />
//               </>
//             } />

//             {/* About Page */}
//             <Route path="/about" element={
//               <>
//                 <About />
//                 <Testimonials />
//               </>
//             } />

//             {/* Other Pages */}
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/signin" element={<Signin />} />
//             <Route path="/news" element={<News />} />

//             {/* Country Pages */}
//             <Route path="/uk" element={<UK />} />
//             <Route path="/cyprus" element={<Cyprus />} />
//             <Route path="/usa" element={<USA />} />
//             <Route path="/australia" element={<Australia />} />
//             <Route path="/canada" element={<Canada />} />
//             <Route path="/finland" element={<Finland />} />

//             {/* Study Pages */}
//             <Route path="/why-study-abroad" element={<WhyStudyAbroad />} />
//             <Route path="/Study" element={<Study />} />
//             <Route path="/how-to-apply" element={<HowToApply />} />
//             <Route path="/After-Receiving-Offer" element={<AfterReceivingOffer />} />
//             <Route path="/prepare-to-depart" element={<PrepareToDepart />} />
//             <Route path="/arrive-and-thrive" element={<ArriveAndThrive />} />
//           </Routes>
//         </Suspense>
//       </div>
//       <WhatsAppButton />
//       <Footer />
//     </Router>
//   );
// }
