import FacultyCard from '../components/FacultyCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { faculty } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Faculty() {
  return (
    <>
      <SEO seo={pageSeo('Faculty', 'Faculty profile cards, academic achievements, and hospitality expertise at SIHM Dimapur.', '/faculty')} />
      <PageHero
        eyebrow="Faculty"
        title="Mentors for academic depth and industry readiness"
        text="Faculty and trainers guide students through practical skill, hospitality discipline, service culture, and professional confidence."
        image="/campus/optimized/restaurant-lg.jpg"
      />
      <section className="page-band bg-[#f7f3eb]">
        <div className="container-editorial">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{faculty.map((person, index) => <div className="scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }} key={person.name}><FacultyCard person={person} /></div>)}</div>
        </div>
      </section>
    </>
  );
}
