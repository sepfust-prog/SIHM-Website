import NewsCard from '../components/NewsCard';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { news } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function NewsEvents() {
  return (
    <>
      <SEO seo={pageSeo('News & Events', 'Latest SIHM Dimapur news, events, circulars, admission updates, notices, and examination announcements.', '/news-events')} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="News & Events" title="Stay informed about the latest campus activity" light /></div></section>
      <section className="container-premium py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{news.concat(news).map((item, index) => <NewsCard item={item} key={`${item.title}-${index}`} />)}</div>
      </section>
    </>
  );
}
