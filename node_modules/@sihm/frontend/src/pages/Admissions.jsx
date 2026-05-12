import { ChevronDown } from 'lucide-react';
import AnimatedTimeline from '../components/AnimatedTimeline';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { faqs } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Admissions() {
  return (
    <>
      <SEO seo={pageSeo('Admissions', 'Admission enquiry, eligibility process, FAQs, scholarships, and program guidance for SIHM Dimapur.', '/admissions')} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="Admissions" title="Apply for hospitality programs with clear guidance at every step" light /></div></section>
      <section className="container-premium grid gap-10 py-16 lg:grid-cols-[1fr_460px]">
        <div>
          <SectionHeader eyebrow="Process" title="Eligibility and admission process" />
          <div className="mt-8"><AnimatedTimeline items={[
            { year: 'Step 01', title: 'Choose Program', text: 'Select B.Sc. HHA, Diploma in Food Production, or Diploma in Food & Beverage Service.' },
            { year: 'Step 02', title: 'Check Eligibility', text: 'Confirm Class 12 or Class 10 eligibility according to the selected program.' },
            { year: 'Step 03', title: 'Submit Enquiry', text: 'Share contact details and speak to the admissions team for forms, fees, hostel, and counselling.' }
          ]} /></div>
          <div className="mt-10 rounded bg-champagne p-7">
            <h3 className="font-heading text-2xl font-black text-navy">Scholarship Highlights</h3>
            <p className="mt-3 leading-8 text-slate-700">Scholarship and fee-support communication can be managed through Strapi notices and admission content sections as policies are announced.</p>
          </div>
          <div className="mt-10">
            <SectionHeader eyebrow="FAQ" title="Common admission questions" />
            <div className="mt-6 grid gap-3">
              {faqs.map(([q, a]) => <details className="group rounded bg-white p-5 shadow-sm" key={q}><summary className="flex cursor-pointer list-none items-center justify-between font-bold text-navy">{q}<ChevronDown className="transition group-open:rotate-180" /></summary><p className="mt-3 text-slate-600">{a}</p></details>)}
            </div>
          </div>
        </div>
        <InquiryForm compact />
      </section>
    </>
  );
}
