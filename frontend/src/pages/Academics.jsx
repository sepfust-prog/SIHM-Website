import { ChevronDown, Download } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Academics() {
  return (
    <>
      <SEO seo={pageSeo('Academic and Programs', 'B.Sc. HHA, Diploma in Food Production, and Diploma in Food & Beverage Service at SIHM Dimapur.', '/academic-and-programs')} />
      <section className="navy-gradient pb-24 pt-40 text-white">
        <div className="container-premium">
          <SectionHeader eyebrow="Academic and Programs" title="Programs that combine NCHMCT standards with practical hospitality training" light />
        </div>
      </section>
      <section className="container-premium py-16">
        <div className="grid gap-6 lg:grid-cols-3">{courses.map((course) => <CourseCard course={course} key={course.title} />)}</div>
      </section>
      <section className="bg-mist py-16">
        <div className="container-premium grid gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <SectionHeader eyebrow="Curriculum" title="Eligibility, benefits, fees, hostel, and career scope" />
            <div className="mt-8 grid gap-4">
              {courses.map((course) => (
                <details className="group rounded bg-white p-6 shadow-sm" key={course.title}>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-xl font-black text-navy">{course.title}<ChevronDown className="transition group-open:rotate-180" /></summary>
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
              <button className="inline-flex items-center gap-2 rounded bg-navy px-5 py-3 font-bold text-white"><Download size={18} /> Download Brochure</button>
              <button className="inline-flex items-center gap-2 rounded border border-navy px-5 py-3 font-bold text-navy"><Download size={18} /> Registration Form</button>
            </div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
      <CTASection />
    </>
  );
}
