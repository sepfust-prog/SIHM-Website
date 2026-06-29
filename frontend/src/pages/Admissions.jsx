import { ChevronDown } from 'lucide-react';
import AnimatedTimeline from '../components/AnimatedTimeline';
import InquiryForm from '../components/InquiryForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { faqs } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Admissions() {
  return (
    <>
      <SEO seo={pageSeo('Admissions', 'Admission enquiry, eligibility process, FAQs, scholarships, and program guidance for SIHM Dimapur.', '/admissions')} />
      <PageHero
        eyebrow="Admissions"
        title="Apply for hospitality programs with clear guidance at every step"
        text="Find the right program, understand eligibility, and connect with the admissions team for forms, fees, counselling, and hostel guidance."
        image="/campus/optimized/front-office-lg.jpg"
      />
      <section className="container-editorial grid min-w-0 gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] lg:items-start">
        <div className="min-w-0">
          <SectionHeader eyebrow="Process" title="Eligibility and admission process" />
          <div className="mt-8"><AnimatedTimeline items={[
            { year: 'Step 01', title: 'Choose Program', text: 'Select B.Sc. HHA, Diploma in Food Production, or Diploma in Food & Beverage Service.' },
            { year: 'Step 02', title: 'Check Eligibility', text: 'Confirm Class 12 or Class 10 eligibility according to the selected program.' },
            { year: 'Step 03', title: 'Submit Enquiry', text: 'Share contact details and speak to the admissions team for forms, fees, hostel, and counselling.' }
          ]} /></div>
          <div className="scroll-reveal mt-10 bg-ink p-7 text-white">
            <h3 className="font-editorial text-3xl font-semibold">Scholarship Highlights</h3>
            <p className="mt-3 leading-8 text-white/70">Scholarship and fee-support communication can be managed through Strapi notices and admission content sections as policies are announced.</p>
          </div>
          <div className="mt-10">
            <SectionHeader eyebrow="FAQ" title="Common admission questions" />
            <div className="mt-6 grid gap-3">
              {faqs.map(([q, a]) => <details className="group editorial-card p-5" key={q}><summary className="flex cursor-pointer list-none items-center justify-between font-bold text-ink">{q}<ChevronDown className="transition group-open:rotate-180" /></summary><p className="mt-3 text-slate-600">{a}</p></details>)}
            </div>
          </div>
        </div>
        <div className="min-w-0 lg:sticky lg:top-28">
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
