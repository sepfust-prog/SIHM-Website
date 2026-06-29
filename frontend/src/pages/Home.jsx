import { motion } from 'framer-motion';
import { ArrowRight, Award, BriefcaseBusiness, ChefHat, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecruiterCarousel from '../components/RecruiterCarousel';
import SEO from '../components/SEO';
import { courses, gallery, news, recruiters } from '../data/siteData';
import { pageSeo } from '../lib/seo';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const heroStats = [
  [Award, '25+', 'Years of Excellence'],
  [Users, '1000+', 'Students Trained'],
  [BriefcaseBusiness, '500+', 'Industry Recruiters'],
  [ShieldCheck, '98%', 'Placement Assistance']
];

const placementStats = [
  ['₹ 6 LPA', 'Average Package'],
  ['₹ 18 LPA', 'Highest Package'],
  ['100%', 'Placement Assistance'],
  ['20+', 'Countries']
];

const programImages = [
  '/campus/kitchen-training.png',
  '/campus/restaurant-training.png',
  '/campus/front-office-training.png',
  '/campus/housekeeping-training.png',
  '/campus/restaurant-training.png',
  '/campus/mock-bar-training.png'
];
const newsImages = [
  '/campus/students-front-campus.jpg',
  '/campus/campus-front-wide.jpg',
  '/campus/restaurant-training.png'
];

function Eyebrow({ children, light = false }) {
  return <p className={`text-[11px] font-bold uppercase tracking-[0.28em] ${light ? 'text-white/66' : 'text-slate-500'}`}>{children}</p>;
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f7f3eb]">
      <SEO seo={pageSeo('State Institute of Hotel Management, Dimapur', 'Premium hospitality education at SIHM Dimapur with programs, campus life, admissions, and placements.')} />

      <section className="relative min-h-[620px] overflow-hidden bg-ink text-white md:min-h-[760px] xl:min-h-screen">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover opacity-78"
          src="/campus/students-front-campus.jpg"
          alt="Hospitality service training"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,10,.94)_0%,rgba(3,7,10,.76)_38%,rgba(3,7,10,.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#061a27] to-transparent" />
        <div className="container-editorial relative flex min-h-[620px] items-center pt-24 md:min-h-[760px] md:pt-28 xl:min-h-screen">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="max-w-3xl">
            <motion.div variants={reveal}><Eyebrow light>Learn to serve. Lead the world.</Eyebrow></motion.div>
            <motion.h1 variants={reveal} className="mt-6 font-editorial text-[42px] font-semibold leading-[.96] text-white min-[390px]:text-[48px] md:text-[76px] xl:text-[96px]">
              Where Passion Becomes Hospitality Leadership.
            </motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-xl text-base leading-8 text-white/78">
              Nurturing future hospitality professionals with practical exposure, professional grooming, and a spirit of service.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4">
              <Link className="lr-button lr-button-gold group" to="/academic-and-programs">Explore Programs <ArrowRight className="transition group-hover:translate-x-1" size={17} /></Link>
              <Link className="lr-button border-white/58 bg-transparent text-white hover:bg-white hover:text-ink" to="/gallery">Life at SIHM <ArrowRight size={17} /></Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/58 md:flex">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/38 text-xs">i</span>
          <span className="text-xs">Scroll to explore</span>
        </div>
      </section>

      <section className="bg-[#061a27] py-8 text-white md:py-10">
        <div className="container-editorial grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map(([Icon, value, label], index) => (
            <article className="scroll-reveal flex items-center gap-5 md:border-r md:border-white/12 md:last:border-r-0" style={{ transitionDelay: `${index * 70}ms` }} key={label}>
              <Icon className="text-gold" size={34} />
              <div>
                <p className="font-editorial text-5xl font-semibold leading-none text-gold">{value}</p>
                <p className="mt-1 text-xs font-semibold text-white/78">{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <Eyebrow>Academic Excellence</Eyebrow>
            <h2 className="mt-5 max-w-sm font-editorial text-4xl font-semibold leading-tight text-ink md:text-5xl">Programs Designed For Global Careers</h2>
            <p className="mt-6 max-w-sm leading-8 text-slate-600">Industry-aligned programs with immersive learning, expert faculty, and placement-focused exposure.</p>
            <Link className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-ink" to="/academic-and-programs">View All Programs <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course, index) => (
              <Link className="scroll-reveal group overflow-hidden rounded-md bg-white shadow-[0_14px_42px_rgba(16,19,26,.14)]" style={{ transitionDelay: `${index * 90}ms` }} to="/academic-and-programs" key={course.title}>
                <div className="image-lift h-48 sm:h-52">
                  <img className="h-full w-full object-cover" src={programImages[index] || course.image} alt={course.title} loading="lazy" decoding="async" />
                </div>
                <div className="p-5">
                  <h3 className="min-h-20 font-editorial text-xl font-semibold leading-tight text-ink">{course.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{course.duration} Program</p>
                  <span className="mt-5 inline-flex text-ink transition group-hover:translate-x-1"><ArrowRight size={17} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#f7f3eb] lg:grid-cols-2">
        <div className="image-lift min-h-[320px] md:min-h-[390px] lg:min-h-[490px]">
          <img data-parallax className="h-[112%] w-full object-cover" src="/campus/campus-front-wide.jpg" alt="Students at SIHM Dimapur campus" loading="lazy" decoding="async" />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 md:px-16 md:py-16">
          <Eyebrow>Beyond Classrooms</Eyebrow>
          <h2 className="mt-5 max-w-lg font-editorial text-4xl font-semibold leading-tight text-ink md:text-5xl">A Campus That Feels Like Home</h2>
          <p className="mt-6 max-w-md leading-8 text-slate-600">From training labs to vibrant student life, SIHM offers an environment where students learn, grow, and create memories for life.</p>
          <Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink" to="/gallery">Explore Campus Life <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="bg-[#061a27] py-16 text-white md:py-20">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow light>Careers That Take Off</Eyebrow>
            <h2 className="mt-5 font-editorial text-4xl font-semibold leading-tight md:text-5xl">Strong Industry Connections. Global Opportunities.</h2>
            <p className="mt-6 max-w-sm leading-8 text-white/68">Our placement network helps students step into successful careers across India and abroad.</p>
            <Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold" to="/placements">Placement Highlights <ArrowRight size={16} /></Link>
          </div>
          <div className="min-w-0">
            <Eyebrow light>Our Top Recruiters</Eyebrow>
            <div className="mt-8"><RecruiterCarousel items={recruiters} dark /></div>
            <div className="mt-10 grid gap-5 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,.18)] sm:grid-cols-2 lg:grid-cols-4">
              {placementStats.map(([value, label], index) => (
                <article className="scroll-reveal md:border-r md:border-white/10 md:last:border-r-0" style={{ transitionDelay: `${index * 70}ms` }} key={label}>
                  <p className="font-editorial text-4xl font-semibold text-gold">{value}</p>
                  <p className="mt-2 text-xs text-white/70">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-editorial">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Latest Updates</Eyebrow>
              <h2 className="mt-5 font-editorial text-4xl font-semibold leading-tight text-ink md:text-5xl">News & Events</h2>
            </div>
            <Link className="inline-flex items-center gap-2 text-sm font-bold text-ink" to="/news-events">View All News <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {news.slice(0, 3).map((item, index) => (
              <article className="scroll-reveal overflow-hidden rounded-md bg-white shadow-[0_14px_42px_rgba(16,19,26,.12)]" style={{ transitionDelay: `${index * 90}ms` }} key={item.title}>
                <div className="image-lift h-52">
                  <img className="h-full w-full object-cover" src={newsImages[index]} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-400">{item.date}</p>
                  <h3 className="mt-3 min-h-16 font-editorial text-2xl font-semibold leading-tight text-ink">{item.title}</h3>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">Read More <ArrowRight size={15} /></button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {[0, 1, 2, 3].map((dot) => <span className={`h-2 w-2 rounded-full ${dot === 0 ? 'bg-gold' : 'bg-slate-300'}`} key={dot} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
