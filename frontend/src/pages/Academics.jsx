import { ChevronDown, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import InquiryForm from '../components/InquiryForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { courses as fallbackCourses } from '../data/siteData';
import { loadCourses, normalizeCourseList } from '../lib/courses';
import { pageSeo } from '../lib/seo';

function CourseDetails({ course }) {
  return (
    <details className="group editorial-card p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-editorial text-2xl font-semibold text-ink">
        {course.title}
        <ChevronDown className="shrink-0 transition group-open:rotate-180" />
      </summary>
      <div className="mt-5 grid gap-5 text-slate-600 md:grid-cols-2">
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Eligibility:</strong> {course.eligibility}</p>
        <p><strong>Affiliated to:</strong> {course.affiliation}</p>
        <p><strong>Award:</strong> {course.award}</p>
        <p><strong>Total Course Fee:</strong> {course.fee}</p>
        <p><strong>Career Opportunities:</strong> {course.careers.join(', ')}</p>
        <div className="md:col-span-2">
          <strong>Program Benefits:</strong>
          <ul className="mt-2 grid list-inside list-disc gap-1 sm:grid-cols-2">
            {course.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </div>
      </div>
    </details>
  );
}

export default function Academics() {
  const [courses, setCourses] = useState(() => normalizeCourseList(fallbackCourses));

  useEffect(() => {
    let active = true;

    loadCourses().then((items) => {
      if (active) {
        setCourses(items);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const programSections = [
    {
      id: 'degree-programs',
      eyebrow: 'Degree Program',
      title: 'Degree Program',
      description: 'A comprehensive undergraduate pathway combining hospitality management theory, practical training, and industry exposure.',
      courses: courses.filter((course) => course.type === 'Degree Program')
    },
    {
      id: 'diploma-programs',
      eyebrow: 'Diploma Programs',
      title: 'Diploma Programs',
      description: 'Focused professional programs that build job-ready operational skill through intensive practical learning.',
      courses: courses.filter((course) => course.type === 'Diploma Course')
    },
    {
      id: 'short-term-certificate-courses',
      eyebrow: 'Skill Development',
      title: 'Short-Term and Certificate Courses',
      description: 'Accessible, skill-led courses for learners seeking focused hospitality training and faster entry into the industry.',
      courses: courses.filter((course) => ['Short Term Course', 'Certificate Program'].includes(course.type))
    }
  ];

  return (
    <>
      <SEO seo={pageSeo(
        'Hospitality Degree, Diploma and Certificate Programs',
        'Explore B.Sc. Hospitality and Hotel Administration, diploma programs, short-term courses, and certificate programs at SIHM Dimapur.',
        '/academic-and-programs'
      )} />
      <PageHero
        eyebrow="Academic Programs"
        title="Programs that combine academic standards with practical hospitality training"
        text="Choose a degree, diploma, short-term, or certificate pathway built around hands-on labs, professional grooming, and career readiness."
        image="/campus/restaurant-training.png"
      />

      <nav className="sticky top-[66px] z-30 border-y border-black/10 bg-white/95 shadow-sm backdrop-blur-md" aria-label="Academic program categories">
        <div className="container-editorial flex gap-2 overflow-x-auto py-3">
          {programSections.map((section) => (
            <a
              className="whitespace-nowrap border border-black/14 px-4 py-3 text-xs font-extrabold uppercase tracking-[.13em] text-ink transition hover:border-ink hover:bg-ink hover:text-white"
              href={`#${section.id}`}
              key={section.id}
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-[#f7f3eb]">
        <div className="container-editorial grid min-w-0 gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,410px)] lg:items-start">
          <div className="min-w-0 divide-y divide-black/12">
            {programSections.map((section, sectionIndex) => (
              <section
                id={section.id}
                className={`scroll-mt-36 ${sectionIndex === 0 ? 'pb-20' : 'py-20'}`}
                key={section.id}
              >
                <SectionHeader eyebrow={section.eyebrow} title={section.title} text={section.description} />
                <div className={`mt-10 grid gap-6 ${section.courses.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl'}`}>
                  {section.courses.map((course, index) => (
                    <div className="scroll-reveal" style={{ transitionDelay: `${index * 90}ms` }} key={course.id || course.title}>
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid gap-4">
                  {section.courses.map((course) => <CourseDetails course={course} key={course.id || course.title} />)}
                </div>
              </section>
            ))}

            <div className="flex flex-wrap gap-3 pt-10">
              <button className="lr-button"><Download size={18} /> Download Brochure</button>
              <button className="lr-button bg-transparent text-ink"><Download size={18} /> Registration Form</button>
            </div>
          </div>

          <aside className="min-w-0 lg:sticky lg:top-40">
            <InquiryForm compact />
          </aside>
        </div>
      </div>
      <CTASection />
    </>
  );
}
