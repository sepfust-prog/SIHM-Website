import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { facilities } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Facilities() {
  return (
    <>
      <SEO seo={pageSeo('Facilities', 'Multi-cuisine kitchen, computer lab, front office, restaurant and mock bar, classrooms, and hostel at SIHM Dimapur.', '/facilities')} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="Our Facilities" title="Real hospitality environments for practical learning" light /></div></section>
      <section className="container-premium py-16">
        <div className="grid gap-8">
          {facilities.map(([name, text, image], index) => (
            <article className={`grid overflow-hidden rounded bg-white shadow-premium lg:grid-cols-2 ${index % 2 ? 'lg:[&>img]:order-2' : ''}`} key={name}>
              <img className="h-80 w-full object-cover lg:h-full" src={image} alt={name} />
              <div className="p-8 lg:p-12">
                <p className="text-sm font-black uppercase tracking-[.18em] text-gold">Facility 0{index + 1}</p>
                <h2 className="mt-3 font-heading text-3xl font-black text-navy">{name}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
