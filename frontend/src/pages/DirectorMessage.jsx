import { useEffect, useState } from 'react';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { faculty as fallbackFaculty } from '../data/siteData';
import { getPrincipalFromFaculty, loadFacultyList, normalizeFacultyList } from '../lib/faculty';
import { pageSeo } from '../lib/seo';

export default function DirectorMessage() {
  const [faculty, setFaculty] = useState(() => normalizeFacultyList(fallbackFaculty));

  useEffect(() => {
    let active = true;

    loadFacultyList().then((items) => {
      if (active) {
        setFaculty(items);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const principal = getPrincipalFromFaculty(faculty) || {};

  return (
    <>
      <SEO seo={pageSeo(
        "Director's Message",
        "Read the Director and Principal's message about hospitality education, practical training, student development, and career readiness at SIHM Dimapur.",
        '/about/directors-message'
      )} />
      <PageHero
        eyebrow="About SIHM"
        title="Director's Message"
        text="A commitment to disciplined learning, professional character, and meaningful hospitality careers."
        image="/campus/optimized/classroom-lg.jpg"
      />

      <section className="page-band bg-[#f7f3eb]">
        <div className="container-editorial grid gap-12 lg:grid-cols-[320px_1fr] lg:items-start">
          <aside className="scroll-reveal bg-white p-7 shadow-[0_24px_80px_rgba(16,19,26,.08)]">
            <div className="image-lift aspect-[4/5] overflow-hidden bg-slate-100">
              <img
                className="h-full w-full object-cover"
                src={principal.image || '/faculty/deepak-srivastava.jpeg'}
                alt={principal.name || 'Principal of SIHM Dimapur'}
              />
            </div>
            <h2 className="mt-6 font-editorial text-3xl font-semibold text-ink">{principal.name || 'Deepak Srivastava'}</h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-[.16em] text-slate-500">{principal.designation || principal.title || 'Principal'}</p>
          </aside>

          <article className="scroll-reveal bg-white p-8 shadow-[0_24px_80px_rgba(16,19,26,.08)] md:p-12">
            <p className="font-editorial text-3xl font-semibold leading-relaxed text-ink md:text-4xl">
              "Hospitality education is not only about learning an operation; it is about developing the discipline, confidence, and generosity to serve people well."
            </p>
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>Welcome to the State Institute of Hotel Management, Dimapur. Our purpose is to help students transform their interest in hospitality into professional ability and lasting career confidence.</p>
              <p>Learning at SIHM brings together academic knowledge and continuous practice. In our kitchens, restaurant, front office, housekeeping, laundry, and classroom spaces, students learn to work with precision, communicate with confidence, and understand the standards expected by the hospitality industry.</p>
              <p>We encourage every student to remain curious, disciplined, respectful, and open to learning. These qualities, supported by technical competence and a genuine spirit of service, create professionals who can contribute meaningfully wherever their careers take them.</p>
              <p>I invite students and families to explore our programs, visit our campus, and discover the opportunities that hospitality education can open.</p>
            </div>
            <div className="mt-9 border-t border-black/12 pt-6">
              <p className="font-editorial text-2xl font-semibold text-ink">{principal.name || 'Deepak Srivastava'}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{principal.designation || principal.title || 'Principal'}, SIHM Dimapur</p>
            </div>
          </article>
        </div>
      </section>
      <CTASection />
    </>
  );
}
