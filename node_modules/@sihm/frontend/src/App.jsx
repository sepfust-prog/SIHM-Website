import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Placements from './pages/Placements';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import SimplePage from './pages/SimplePage';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    const sections = gsap.utils.toArray('[data-parallax]');
    sections.forEach((section) => {
      gsap.to(section, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: section, scrub: true }
      });
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic-and-programs" element={<Academics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/our-team" element={<SimplePage title="Our Team" type="team" />} />
          <Route path="/latest-updates" element={<SimplePage title="Latest Updates" type="updates" />} />
          <Route path="/circulars" element={<SimplePage title="Circulars" type="updates" />} />
          <Route path="/downloads" element={<SimplePage title="Downloads" type="downloads" />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
