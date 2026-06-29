import NewsCard from '../components/NewsCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { faculty, news } from '../data/siteData';
import { pageSeo } from '../lib/seo';
import FacultyCard from '../components/FacultyCard';

export default function SimplePage({ title, type, path }) {
  return (
    <>
      <SEO seo={pageSeo(title, `${title} from State Institute of Hotel Management, Dimapur. View current institutional information and resources.`, path)} />
      <PageHero eyebrow="SIHM Dimapur" title={title} image="/campus/optimized/campus-building-wide-lg.jpg" />
      <section className="container-editorial page-band">
        {type === 'team' && <div className="grid gap-6 md:grid-cols-3">{faculty.map((person, index) => <div className="scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }} key={person.name}><FacultyCard person={person} /></div>)}</div>}
        {type === 'updates' && <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{news.concat(news).map((item, index) => <div className="scroll-reveal" style={{ transitionDelay: `${(index % 3) * 70}ms` }} key={`${item.title}-${index}`}><NewsCard item={item} /></div>)}</div>}
        {type === 'downloads' && <div className="grid gap-4 md:grid-cols-2">{['Admission Form', 'Fee Structure', 'Brochure', 'Hostel Rules'].map((item) => <button className="theme-panel p-7 text-left font-editorial text-3xl font-semibold text-ink transition hover:-translate-y-1" key={item}>{item}</button>)}</div>}
      </section>
    </>
  );
}
