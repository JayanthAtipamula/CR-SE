import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Quiz from './components/Quiz';
import Courses from './components/Courses';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationRefund from './pages/CancellationRefund';
import CoursePage from './pages/CoursePage';
import Certificate from './pages/Certificate';
import QuizFlow from './pages/QuizFlow';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Quiz />
      <Courses />
      <Achievements />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const isCertificatePath = location.pathname.startsWith('/certificate') || location.pathname.startsWith('/quiz/');

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {!isCertificatePath && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/quiz/:skillId" element={<QuizFlow />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/failure" element={<PaymentFailure />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-refund-policy" element={<CancellationRefund />} />
        </Routes>
        {!isCertificatePath && <Footer />}
      </div>
    </>
  );
}

export default App;