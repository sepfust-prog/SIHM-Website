import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import { facilities } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Facilities() {
  return (
    <>
      <SEO seo={pageSeo('Facilities', 'Multi-cuisine kitchen, computer lab, front office, restaurant and mock bar, classrooms, and hostel at SIHM Dimapur.', '/facilities')} />
      <PageHero
        eyebrow="Our Facilities"
        title="Real hospitality environments for practical learning"
        text="Training spaces are arranged like working hotel environments, from kitchens and restaurants to front office, housekeeping, laundry, and classrooms."
        image="/campus/kitchen-training.png"
      />
      <section className="page-band bg-[#f7f3eb]">
        <div className="container-editorial">
        <div className="grid gap-10">
          {facilities.map(([name, text, image], index) => (
            <article className={`scroll-reveal grid overflow-hidden bg-white shadow-[0_24px_80px_rgba(16,19,26,.08)] lg:grid-cols-2 ${index % 2 ? 'lg:[&>.image-lift]:order-2' : ''}`} key={name}>
              <div className="image-lift min-h-[22rem]"><img className="h-full w-full object-cover" src={image} alt={name} /></div>
              <div className="flex min-h-[22rem] flex-col justify-center p-8 lg:p-14">
                <p className="lr-eyebrow text-slate-500">Facility 0{index + 1}</p>
                <h2 className="mt-3 font-editorial text-4xl font-semibold leading-tight text-ink">{name}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
