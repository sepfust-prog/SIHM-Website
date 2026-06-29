import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Download, Clock, GraduationCap, Award, DollarSign } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import InquiryForm from '../components/InquiryForm';
import { loadCourseBySlug } from '../lib/courses';
import { pageSeo } from '../lib/seo';

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    loadCourseBySlug(slug).then((foundCourse) => {
      if (active) {
        setCourse(foundCourse);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <>
        <SEO seo={pageSeo('Course Details', 'Loading course information...', '/courses')} />
        <PageHero
          eyebrow="Loading"
          title="Loading course details..."
          text=""
          image="/campus/restaurant-training.png"
        />
      </>
    );
  }

  if (!course) {
    return (
      <>
        <SEO seo={pageSeo('Course Not Found', 'The course you are looking for does not exist.', '/courses')} />
        <PageHero
          eyebrow="404"
          title="Course not found"
          text="The course you are looking for does not exist."
          image="/campus/restaurant-training.png"
        />
        <section className="page-band">
          <div className="container-editorial text-center">
            <Link to="/academic-and-programs" className="lr-button">Back to Courses</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO seo={pageSeo(course.title, `Learn more about ${course.title} at SIHM Dimapur.`, `/courses/${slug}`)} />
      
      <button
        onClick={() => navigate(-1)}
        className="fixed left-6 top-24 z-40 flex items-center gap-2 rounded bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg transition hover:bg-ink hover:text-white md:left-auto md:right-6"
        aria-label="Go back"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <PageHero
        eyebrow={course.type}
        title={course.title}
        text={`Explore comprehensive details about this ${course.type.toLowerCase()} program at SIHM Dimapur.`}
        image={course.image}
      />

      <div className="bg-[#f7f3eb]">
        <div className="container-editorial grid min-w-0 gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,410px)] lg:items-start">
          <div className="min-w-0">
            {/* Course Overview */}
            <section className="mb-12 border-b border-black/12 pb-12">
              <SectionHeader eyebrow="Program Overview" title="Course Information" />
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="theme-panel p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 shrink-0 text-gold" size={24} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Duration</p>
                      <p className="mt-1 text-lg font-semibold text-ink">{course.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="theme-panel p-6">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-1 shrink-0 text-gold" size={24} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Eligibility</p>
                      <p className="mt-1 text-lg font-semibold text-ink">{course.eligibility}</p>
                    </div>
                  </div>
                </div>

                <div className="theme-panel p-6">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0 text-gold" size={24} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Award</p>
                      <p className="mt-1 text-lg font-semibold text-ink">{course.award}</p>
                    </div>
                  </div>
                </div>

                <div className="theme-panel p-6">
                  <div className="flex items-start gap-3">
                    <DollarSign className="mt-1 shrink-0 text-gold" size={24} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Fee</p>
                      <p className="mt-1 text-lg font-semibold text-ink">{course.fee}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Affiliation</p>
                <p className="mt-2 text-base text-slate-600">{course.affiliation}</p>
              </div>
            </section>

            {/* Program Benefits */}
            {course.benefits && course.benefits.length > 0 && (
              <section className="mb-12 border-b border-black/12 pb-12">
                <h2 className="font-editorial text-3xl font-semibold text-ink">Program Benefits</h2>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3 text-slate-600">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Career Opportunities */}
            {course.careers && course.careers.length > 0 && (
              <section className="mb-12 border-b border-black/12 pb-12">
                <h2 className="font-editorial text-3xl font-semibold text-ink">Career Opportunities</h2>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {course.careers.map((career, index) => (
                    <li key={index} className="flex gap-3 text-slate-600">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Curriculum */}
            {course.curriculum && (
              <section className="mb-12">
                <h2 className="font-editorial text-3xl font-semibold text-ink">Curriculum</h2>
                <div className="mt-6 prose-sm max-w-none text-slate-600">
                  {course.curriculum}
                </div>
              </section>
            )}

            <div className="flex flex-wrap gap-3 pt-10">
              {course.brochure && (
                <a href={course.brochure} target="_blank" rel="noreferrer" className="lr-button">
                  <Download size={18} /> Download Brochure
                </a>
              )}
              <Link to="/admissions" className="lr-button bg-transparent text-ink">
                Apply Now
              </Link>
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
