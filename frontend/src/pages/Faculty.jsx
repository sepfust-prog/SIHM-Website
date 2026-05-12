import FacultyCard from '../components/FacultyCard';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { faculty } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Faculty() {
  return (
    <>
      <SEO seo={pageSeo('Faculty', 'Faculty profile cards, academic achievements, and hospitality expertise at SIHM Dimapur.', '/faculty')} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="Faculty" title="Mentors for academic depth and industry readiness" light /></div></section>
      <section className="container-premium py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{faculty.map((person) => <FacultyCard person={person} key={person.name} />)}</div>
      </section>
    </>
  );
}
