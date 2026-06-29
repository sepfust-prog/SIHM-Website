import AnimatedTimeline from '../components/AnimatedTimeline';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { pageSeo } from '../lib/seo';

export default function Overview() {
  return (
    <>
      <SEO seo={pageSeo(
        'Institute Overview',
        'Learn about SIHM Dimapur, its hospitality education approach, institutional partnership, practical training, and student career focus.',
        '/about/overview'
      )} />
      <PageHero
        eyebrow="About SIHM"
        title="An institute built around skill, service, and opportunity"
        text="State Institute of Hotel Management, Dimapur combines academic learning with practical hospitality training for students from Nagaland and across the North East."
        image="/campus/optimized/campus-building-wide-lg.jpg"
      />

      <section className="page-band bg-[#f7f3eb]">
        <div className="container-editorial grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="scroll-reveal">
            <SectionHeader
              eyebrow="Institute Overview"
              title="Hospitality education connected to real working environments"
              text="SIHM Dimapur develops professional knowledge, practical confidence, grooming, and a service mindset through classrooms and purpose-built training facilities."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>The institute is operated by Saksham Education Foundation as part of the CSR objectives of the Trade Promotion Council of India, with the Department of Tourism, Government of Nagaland as a key partner.</p>
              <p>Its academic pathways serve students seeking degree, diploma, short-term, and certificate-level preparation for careers in hotels, restaurants, resorts, tourism, catering, cruises, and allied service sectors.</p>
            </div>
          </div>

          <div className="scroll-reveal bg-ink p-8 text-white lg:p-10">
            <p className="lr-eyebrow text-gold">Learning Approach</p>
            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight">Learn the standard. Practise the craft. Build the confidence.</h2>
            <ul className="mt-8 grid gap-4 text-white/74">
              <li className="border-t border-white/15 pt-4">Industry-aligned hospitality curriculum</li>
              <li className="border-t border-white/15 pt-4">Practical training in professional labs</li>
              <li className="border-t border-white/15 pt-4">Communication, grooming, and service discipline</li>
              <li className="border-t border-white/15 pt-4">Career guidance and placement preparation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-band bg-white">
        <div className="container-editorial">
          <SectionHeader eyebrow="Our Journey" title="A focused pathway for hospitality talent" />
          <div className="mt-10 max-w-4xl">
            <AnimatedTimeline items={[
              { year: 'Partnership', title: 'A Collaborative Foundation', text: 'An institutional initiative supported by hospitality, tourism, education, and public-sector partnership.' },
              { year: 'Training', title: 'Practice-led Education', text: 'Students learn through kitchens, restaurant service, front office, housekeeping, laundry, and classroom environments.' },
              { year: 'Careers', title: 'Professional Readiness', text: 'Programs build the technical ability, confidence, discipline, and service attitude expected by hospitality employers.' }
            ]} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
