import GalleryGrid from '../components/GalleryGrid';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { gallery } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Gallery() {
  return (
    <>
      <SEO seo={pageSeo('Gallery', 'Campus, kitchen, classroom, student life, and hospitality learning gallery at SIHM Dimapur.', '/gallery')} />
      <PageHero
        eyebrow="Gallery"
        title="A visual walk through campus life and training spaces"
        text="Explore the spaces where students learn kitchen craft, service standards, front office confidence, and campus discipline."
        image="/campus/students-front-campus.jpg"
      />
      <section className="container-editorial page-band"><GalleryGrid images={gallery.concat(gallery)} /></section>
      <section className="page-band bg-white">
        <div className="container-editorial">
          <SectionHeader eyebrow="Video Gallery" title="Campus stories, student activities, and event highlights" />
          <div className="mt-10 aspect-video overflow-hidden bg-ink shadow-premium">
            <iframe className="h-full w-full" title="SIHM Dimapur video placeholder" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
          </div>
        </div>
      </section>
    </>
  );
}
