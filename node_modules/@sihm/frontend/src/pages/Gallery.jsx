import GalleryGrid from '../components/GalleryGrid';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { gallery } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Gallery() {
  return (
    <>
      <SEO seo={pageSeo('Gallery', 'Campus, kitchen, classroom, student life, and hospitality learning gallery at SIHM Dimapur.', '/gallery')} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="Gallery" title="A visual walk through campus life and training spaces" light /></div></section>
      <section className="container-premium py-16"><GalleryGrid images={gallery.concat(gallery)} /></section>
      <section className="bg-mist py-16">
        <div className="container-premium">
          <SectionHeader eyebrow="Video Gallery" title="Campus stories, student activities, and event highlights" />
          <div className="mt-8 aspect-video overflow-hidden rounded bg-navy shadow-premium">
            <iframe className="h-full w-full" title="SIHM Dimapur video placeholder" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
          </div>
        </div>
      </section>
    </>
  );
}
