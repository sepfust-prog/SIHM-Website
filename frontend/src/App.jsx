import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Placements = lazy(() => import('./pages/Placements'));
const NewsEvents = lazy(() => import('./pages/NewsEvents'));
const Contact = lazy(() => import('./pages/Contact'));
const Faculty = lazy(() => import('./pages/Faculty'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Students = lazy(() => import('./pages/Students'));
const SimplePage = lazy(() => import('./pages/SimplePage'));

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
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: section, scrub: true }
      });
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [location.pathname]);

  useEffect(() => {
    const observedItems = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    const observeRevealItems = (root = document) => {
      const items = root.matches?.('.scroll-reveal')
        ? [root, ...root.querySelectorAll('.scroll-reveal')]
        : root.querySelectorAll('.scroll-reveal');

      items.forEach((item) => {
        if (!observedItems.has(item)) {
          observedItems.add(item);
          observer.observe(item);
        }
      });
    };

    observeRevealItems();

    // Route components are lazy-loaded, so their reveal elements can be added
    // after this effect first runs. Observe later DOM additions as well.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeRevealItems(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
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
            <Route path="/students" element={<Students />} />
            <Route path="/our-team" element={<SimplePage title="Our Team" type="team" />} />
            <Route path="/latest-updates" element={<SimplePage title="Latest Updates" type="updates" />} />
            <Route path="/circulars" element={<SimplePage title="Circulars" type="updates" />} />
            <Route path="/downloads" element={<SimplePage title="Downloads" type="downloads" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
