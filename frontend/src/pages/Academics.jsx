import { ChevronDown, Download } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import InquiryForm from '../components/InquiryForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Academics() {
  return (
    <>
      <SEO seo={pageSeo('Academic and Programs', 'B.Sc. HHA, Diploma in Food Production, and Diploma in Food & Beverage Service at SIHM Dimapur.', '/academic-and-programs')} />
      <PageHero
        eyebrow="Academic and Programs"
        title="Programs that combine NCHMCT standards with practical hospitality training"
        text="Choose a pathway built around classroom depth, hands-on labs, professional grooming, and hospitality career readiness."
        image="/campus/restaurant-training.png"
      />
      <section className="page-band bg-[#f7f3eb]">
        <div className="container-editorial">
        <div className="grid gap-6 lg:grid-cols-3">{courses.map((course, index) => <div className="scroll-reveal" style={{ transitionDelay: `${index * 90}ms` }} key={course.title}><CourseCard course={course} /></div>)}</div>
        </div>
      </section>
      <section className="page-band bg-white">
        <div className="container-editorial grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <div className="min-w-0">
            <SectionHeader eyebrow="Curriculum" title="Eligibility, benefits, fees, hostel, and career scope" />
            <div className="mt-8 grid gap-4">
              {courses.map((course) => (
                <details className="group editorial-card p-6" key={course.title}>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-editorial text-2xl font-semibold text-ink">{course.title}<ChevronDown className="transition group-open:rotate-180" /></summary>
                  <div className="mt-5 grid gap-5 text-slate-600 md:grid-cols-2">
                    <p><strong>Eligibility:</strong> {course.eligibility}</p>
                    <p><strong>Affiliated to:</strong> {course.affiliation}</p>
                    <p><strong>Award:</strong> {course.award}</p>
                    <p><strong>Total Course Fee:</strong> {course.fee}</p>
                    <p className="md:col-span-2"><strong>Career Opportunities:</strong> {course.careers.join(', ')}</p>
                  </div>
                </details>
                
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="lr-button"><Download size={18} /> Download Brochure</button>
              <button className="lr-button bg-transparent text-ink"><Download size={18} /> Registration Form</button>
            </div>
          </div>
          <div className="min-w-0 lg:sticky lg:top-28">
            <InquiryForm compact />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
