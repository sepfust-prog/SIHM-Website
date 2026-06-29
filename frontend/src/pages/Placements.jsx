import RecruiterCarousel from '../components/RecruiterCarousel';
import SectionHeader from '../components/SectionHeader';
import TestimonialSlider from '../components/TestimonialSlider';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import { recruiters, stats, testimonials } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Placements() {
  return (
    <>
      <SEO seo={pageSeo('Placements', 'Placement support, recruiters, hotel chains, restaurant brands, alumni outcomes, and career opportunities at SIHM Dimapur.', '/placements')} />
      <PageHero
        eyebrow="Placements"
        title="Career support for hotels, restaurants, resorts, cruises, and service brands"
        text="Students prepare for opportunities through professional grooming, practical confidence, recruiter exposure, and internship guidance."
        image="/campus/optimized/restaurant-lg.jpg"
      />
      <section className="container-editorial page-band">
        <SectionHeader eyebrow="Top Recruiters" title="Leading hotel and restaurant chains where SIHM students receive opportunities" />
        <div className="mt-10"><RecruiterCarousel items={recruiters} /></div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {stats.map((item, index) => <div className="scroll-reveal border-t border-black/20 bg-[#fffaf2] p-7 text-center" style={{ transitionDelay: `${index * 70}ms` }} key={item.label}><strong className="font-heading text-4xl text-ink">{item.value}{item.suffix}</strong><p className="mt-2 text-sm font-bold uppercase tracking-[.14em] text-slate-500">{item.label}</p></div>)}
        </div>
      </section>
      <section className="page-band bg-[#f7f3eb]"><div className="container-editorial"><SectionHeader eyebrow="Alumni Stories" title="Success shaped by skill, grooming, and exposure" /><div className="mt-10"><TestimonialSlider items={testimonials} /></div></div></section>
      <CTASection />
    </>
  );
}
