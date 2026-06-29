import NewsCard from '../components/NewsCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { news } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function NewsEvents() {
  return (
    <>
      <SEO seo={pageSeo('News & Events', 'Latest SIHM Dimapur news, events, circulars, admission updates, notices, and examination announcements.', '/news-events')} />
      <PageHero
        eyebrow="News & Events"
        title="Stay informed about the latest campus activity"
        text="Follow admissions notices, circulars, examination updates, and moments from student life at SIHM Dimapur."
        image="/campus/campus-front-wide.jpg"
      />
      <section className="container-editorial page-band">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{news.concat(news).map((item, index) => <div className="scroll-reveal" style={{ transitionDelay: `${(index % 3) * 70}ms` }} key={`${item.title}-${index}`}><NewsCard item={item} /></div>)}</div>
      </section>
    </>
  );
}
