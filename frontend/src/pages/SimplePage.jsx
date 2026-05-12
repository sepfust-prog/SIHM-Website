import NewsCard from '../components/NewsCard';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { faculty, news } from '../data/siteData';
import { pageSeo } from '../lib/seo';
import FacultyCard from '../components/FacultyCard';

export default function SimplePage({ title, type }) {
  return (
    <>
      <SEO seo={pageSeo(title, `${title} at State Institute of Hotel Management, Dimapur.`)} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="SIHM Dimapur" title={title} light /></div></section>
      <section className="container-premium py-16">
        {type === 'team' && <div className="grid gap-6 md:grid-cols-3">{faculty.map((person) => <FacultyCard person={person} key={person.name} />)}</div>}
        {type === 'updates' && <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{news.concat(news).map((item, index) => <NewsCard item={item} key={`${item.title}-${index}`} />)}</div>}
        {type === 'downloads' && <div className="grid gap-4 md:grid-cols-2"><button className="rounded bg-mist p-6 text-left font-heading text-xl font-black text-navy">Admission Form</button><button className="rounded bg-mist p-6 text-left font-heading text-xl font-black text-navy">Fee Structure</button><button className="rounded bg-mist p-6 text-left font-heading text-xl font-black text-navy">Brochure</button><button className="rounded bg-mist p-6 text-left font-heading text-xl font-black text-navy">Hostel Rules</button></div>}
      </section>
    </>
  );
}
