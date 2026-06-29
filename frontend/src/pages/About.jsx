import AnimatedTimeline from '../components/AnimatedTimeline';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { pageSeo } from '../lib/seo';
import { Link } from 'react-router-dom';

const values = ['Hospitality', 'Respect', 'Service', 'Sustainability', 'Excellence', 'Equality'];

export default function About() {
  return (
    <>
      <SEO seo={pageSeo('About SIHM Dimapur', 'Overview, vision, mission, history, and core values of State Institute of Hotel Management, Dimapur.', '/about')} />
      <PageHero
        eyebrow="About SIHM"
        title="Built to advance hospitality skill development and career opportunities"
        text="The institute is operated by Saksham Education Foundation as part of Trade Promotion Council of India CSR objectives, with the Department of Tourism, Nagaland as a key partner."
        image="/campus/optimized/campus-building-wide-lg.jpg"
      />
      <section className="page-band bg-[#f7f3eb]">
      <div className="container-editorial grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="scroll-reveal">
          <SectionHeader eyebrow="Journey" title="A focused institute for a fast-evolving hospitality economy" />
          <div className="mt-10">
            <AnimatedTimeline items={[
              { year: 'PPP Initiative', title: 'Institute Foundation', text: 'Established as a joint initiative between Trade Promotion Council of India and Department of Tourism, Nagaland.' },
              { year: 'Academic Focus', title: 'NCHMCT Aligned Programs', text: 'Programs designed to connect academic standards with hands-on hospitality practice.' },
              { year: 'Career Aim', title: 'Placement-led Growth', text: 'A campus experience focused on skill, grooming, personality development, and industry readiness.' }
            ]} />
          </div>
        </div>
        <div id="vision-mission" className="grid scroll-mt-32 gap-5 scroll-reveal">
          <article className="editorial-card p-8">
            <h3 className="font-editorial text-3xl font-semibold text-ink">Vision</h3>
            <p className="mt-4 leading-8 text-slate-600">To be amongst the top hotel management institutes in the country and provide students with outstanding skills across hotel and hospitality sectors.</p>
          </article>
          <article className="bg-ink p-8 text-white">
            <h3 className="font-editorial text-3xl font-semibold">Mission</h3>
            <p className="mt-4 leading-8 text-white/72">To serve students of Nagaland and other north-eastern states through professional advancement, industry-aligned training, and a conducive learning environment.</p>
          </article>
          <article className="editorial-card p-8">
            <h3 className="font-editorial text-3xl font-semibold text-ink">Director / Principal Message</h3>
            <p className="mt-4 leading-8 text-slate-600">SIHM Dimapur is committed to disciplined hospitality education, real-world practice, and preparing students for opportunities within India and abroad.</p>
            <Link className="mt-5 inline-block text-sm font-bold uppercase tracking-[.14em] text-ink underline decoration-gold decoration-2 underline-offset-4" to="/about/directors-message">Read the full message</Link>
          </article>
        </div>
      </div>
      </section>
      <section className="page-band bg-white">
        <div className="container-editorial">
          <SectionHeader eyebrow="Core Values" title="The culture behind professional service" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => <div className="scroll-reveal border-t border-black/20 bg-[#fffaf2] p-8 text-center" style={{ transitionDelay: `${index * 70}ms` }} key={value}><h3 className="font-editorial text-3xl font-semibold text-ink">{value}</h3></div>)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
