import RecruiterCarousel from '../components/RecruiterCarousel';
import SectionHeader from '../components/SectionHeader';
import TestimonialSlider from '../components/TestimonialSlider';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { recruiters, stats, testimonials } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Placements() {
  return (
    <>
      <SEO seo={pageSeo('Placements', 'Placement support, recruiters, hotel chains, restaurant brands, alumni outcomes, and career opportunities at SIHM Dimapur.', '/placements')} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="Placements" title="Career support for hotels, restaurants, resorts, cruises, and service brands" light /></div></section>
      <section className="container-premium py-16">
        <SectionHeader eyebrow="Top Recruiters" title="Leading hotel and restaurant chains where SIHM students receive opportunities" />
        <div className="mt-10"><RecruiterCarousel items={recruiters} /></div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {stats.map((item) => <div className="rounded bg-mist p-7 text-center" key={item.label}><strong className="font-heading text-4xl text-navy">{item.value}{item.suffix}</strong><p className="mt-2 text-sm font-bold uppercase tracking-[.14em] text-slate-500">{item.label}</p></div>)}
        </div>
      </section>
      <section className="bg-champagne py-16"><div className="container-premium"><SectionHeader eyebrow="Alumni Stories" title="Success shaped by skill, grooming, and exposure" /><div className="mt-10"><TestimonialSlider items={testimonials} /></div></div></section>
      <CTASection />
    </>
  );
}
