import AnimatedTimeline from '../components/AnimatedTimeline';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { pageSeo } from '../lib/seo';

const values = ['Hospitality', 'Respect', 'Service', 'Sustainability', 'Excellence', 'Equality'];

export default function About() {
  return (
    <>
      <SEO seo={pageSeo('About SIHM Dimapur', 'Overview, vision, mission, history, and core values of State Institute of Hotel Management, Dimapur.', '/about')} />
      <section className="navy-gradient px-4 pb-24 pt-40 text-white">
        <div className="container-premium">
          <SectionHeader eyebrow="About SIHM" title="Built to advance hospitality skill development and career opportunities" text="The institute is operated by Saksham Education Foundation as part of Trade Promotion Council of India CSR objectives, with the Department of Tourism, Nagaland as a key partner." light />
        </div>
      </section>
      <section className="container-premium grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Journey" title="A focused institute for a fast-evolving hospitality economy" />
          <div className="mt-10">
            <AnimatedTimeline items={[
              { year: 'PPP Initiative', title: 'Institute Foundation', text: 'Established as a joint initiative between Trade Promotion Council of India and Department of Tourism, Nagaland.' },
              { year: 'Academic Focus', title: 'NCHMCT Aligned Programs', text: 'Programs designed to connect academic standards with hands-on hospitality practice.' },
              { year: 'Career Aim', title: 'Placement-led Growth', text: 'A campus experience focused on skill, grooming, personality development, and industry readiness.' }
            ]} />
          </div>
        </div>
        <div className="grid gap-5">
          <article className="rounded bg-mist p-8">
            <h3 className="font-heading text-2xl font-black text-navy">Vision</h3>
            <p className="mt-4 leading-8 text-slate-600">To be amongst the top hotel management institutes in the country and provide students with outstanding skills across hotel and hospitality sectors.</p>
          </article>
          <article className="rounded bg-navy p-8 text-white">
            <h3 className="font-heading text-2xl font-black">Mission</h3>
            <p className="mt-4 leading-8 text-white/72">To serve students of Nagaland and other north-eastern states through professional advancement, industry-aligned training, and a conducive learning environment.</p>
          </article>
          <article className="rounded border border-gold/30 p-8">
            <h3 className="font-heading text-2xl font-black text-navy">Director / Principal Message</h3>
            <p className="mt-4 leading-8 text-slate-600">SIHM Dimapur is committed to disciplined hospitality education, real-world practice, and preparing students for opportunities within India and abroad.</p>
          </article>
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="container-premium">
          <SectionHeader eyebrow="Core Values" title="The culture behind professional service" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => <div className="rounded bg-white p-8 text-center shadow-lg" key={value}><h3 className="font-heading text-2xl font-black text-navy">{value}</h3></div>)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
