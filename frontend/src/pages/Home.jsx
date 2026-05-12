import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BriefcaseBusiness, ChefHat, CirclePlay, GraduationCap, Leaf, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecruiterCarousel from '../components/RecruiterCarousel';
import SEO from '../components/SEO';
import { contact, courses, facilities, gallery, news, recruiters, stats, testimonials } from '../data/siteData';
import { pageSeo } from '../lib/seo';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const accents = ['bg-logoRed', 'bg-logoOrange', 'bg-logoBlue', 'bg-logoGreen'];

function EditorialHeader({ eyebrow, title, text, light = false, center = false }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className={`${center ? 'mx-auto text-center' : ''} max-w-4xl`}>
      <p className={`mb-5 text-xs font-bold uppercase tracking-[0.34em] ${light ? 'text-white/58' : 'text-slate-500'}`}>{eyebrow}</p>
      <h2 className={`font-editorial text-4xl font-semibold leading-[1.05] md:text-6xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-6 max-w-2xl text-lg leading-8 ${center ? 'mx-auto' : ''} ${light ? 'text-white/68' : 'text-slate-600'}`}>{text}</p>}
    </motion.div>
  );
}

function MinimalStat({ value, suffix, label, index }) {
  return (
    <motion.div variants={reveal} className="border-t border-slate-200 pt-6">
      <span className={`mb-5 block h-1 w-12 ${accents[index % accents.length]}`} />
      <p className="font-heading text-4xl font-semibold tracking-tight text-ink">{value}{suffix}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <SEO seo={pageSeo('State Institute of Hotel Management, Dimapur', 'A cinematic, premium hospitality institute experience for SIHM Dimapur admissions, academics, campus life, and placements.')} />

      <section className="relative min-h-screen w-full overflow-hidden bg-ink text-white">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover opacity-72"
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2200&q=88"
          alt="Hospitality students preparing culinary service"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/46 via-navy/24 to-black/0" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/46 via-navy/14 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.08)_40%,rgba(255,255,255,0.04)_75%,#f8f6f2_100%)]" />

        <div className="container-editorial relative flex min-h-screen items-center pt-28 sm:pt-32 md:pt-40">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }} className="relative max-w-5xl">
            <div className="absolute -inset-x-4 -inset-y-8 -z-10 max-w-4xl rounded-[2px] bg-[linear-gradient(90deg,rgba(3,10,20,.48),rgba(3,10,20,.24),rgba(3,10,20,0))] blur-[1px] md:-inset-x-8 md:-inset-y-10" />
            <motion.p variants={reveal} className="mb-6 max-w-lg border-l-2 border-logoOrange pl-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/72 sm:text-xs md:mb-8 md:pl-5 md:tracking-[0.34em]">The beginning of hospitality leadership</motion.p>
            <motion.h1 variants={reveal} className="max-w-[9ch] font-editorial text-[50px] font-semibold leading-[0.98] text-white drop-shadow-[0_6px_28px_rgba(0,0,0,.34)] min-[390px]:text-[58px] sm:max-w-none sm:text-7xl md:text-8xl lg:text-9xl">
              Learn to Serve. Lead the World.
            </motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/90 drop-shadow-[0_3px_18px_rgba(0,0,0,.28)] sm:text-xl sm:leading-9">
              At SIHM Dimapur, service becomes discipline, craft becomes confidence, and hospitality becomes a way to lead with grace.
            </motion.p>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-4">
              <Link className="group inline-flex items-center gap-3 rounded-full bg-[#fffaf0] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-navy shadow-[0_18px_46px_rgba(0,0,0,.28)] transition hover:-translate-y-0.5 hover:bg-logoOrange hover:shadow-[0_22px_56px_rgba(246,167,34,.28)] sm:text-sm" to="/admissions">
                Begin Admissions <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </Link>
              <Link className="inline-flex items-center gap-3 rounded-full border border-white/72 bg-black/18 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_42px_rgba(0,0,0,.22)] backdrop-blur-[3px] transition hover:-translate-y-0.5 hover:border-white hover:bg-white/14" to="/gallery">
                <CirclePlay size={18} /> View Life at SIHM
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 md:flex">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <motion.span animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="h-12 w-px bg-white/50" />
        </div>
      </section>

      <section className="w-full bg-white py-24 md:py-32">
        <div className="container-editorial grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <EditorialHeader
            eyebrow="Institute Legacy"
            title="A focused institute for a region ready to welcome the world."
            text="Established through a public-private initiative with the Department of Tourism, Nagaland, SIHM Dimapur exists to open professional hospitality pathways for students across Nagaland and the North East."
          />
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
            <img className="h-[520px] w-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=88" alt="Premium hotel lobby training environment" />
            <div className="absolute -bottom-8 -left-6 max-w-sm bg-ink p-7 text-white md:-left-10">
              <p className="font-editorial text-3xl leading-tight">Hospitality is not only a career. It is a standard of presence.</p>
            </div>
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="container-editorial mt-24 grid gap-8 md:grid-cols-4">
          {stats.map((item, index) => <MinimalStat key={item.label} index={index} {...item} />)}
        </motion.div>
      </section>

      <section className="w-full bg-[#f7f7f4] py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <EditorialHeader eyebrow="Academic Excellence" title="Programs shaped around skill, exposure, and professional confidence." text="The academic experience is intentionally practical: kitchens, service environments, front office training, grooming, industry discipline, and career direction." />
            <div className="grid gap-5">
              {courses.map((course, index) => (
                <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="group grid gap-6 border-t border-slate-300 py-7 md:grid-cols-[130px_1fr_auto] md:items-center" key={course.title}>
                  <img className="h-28 w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 md:w-32" src={course.image} alt={course.title} />
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{course.type} | {course.duration}</p>
                    <h3 className="font-heading text-2xl font-semibold text-ink">{course.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{course.eligibility}</p>
                  </div>
                  <span className={`h-10 w-10 rounded-full border ${index === 0 ? 'border-logoRed' : index === 1 ? 'border-logoBlue' : 'border-logoGreen'} grid place-items-center text-ink transition group-hover:bg-ink group-hover:text-white`}>
                    <ArrowRight size={17} />
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24 md:py-32">
        <div className="container-editorial">
          <EditorialHeader eyebrow="Experience & Campus Life" title="The campus is a living laboratory of service." text="Every space is part of the story: the kitchen teaches precision, the restaurant teaches rhythm, the front office teaches composure, and student life teaches confidence." center />
          <div className="mt-16 grid gap-5 md:grid-cols-6 md:grid-rows-[260px_220px_260px]">
            {gallery.slice(0, 6).map((image, index) => (
              <motion.div
                key={image}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`group overflow-hidden bg-slate-100 ${index === 0 ? 'md:col-span-3 md:row-span-2' : index === 1 ? 'md:col-span-3' : index === 2 ? 'md:col-span-2' : index === 3 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2'}`}
              >
                <img className="h-full min-h-72 w-full object-cover transition duration-1000 group-hover:scale-105" src={image} alt={`SIHM Dimapur hospitality experience ${index + 1}`} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {facilities.slice(0, 3).map(([name, text], index) => (
              <article className="border-t border-slate-200 pt-6" key={name}>
                <span className={`mb-5 block h-1 w-10 ${accents[index]}`} />
                <h3 className="font-heading text-xl font-semibold text-ink">{name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-ink py-28 text-white md:py-40">
        <img data-parallax className="absolute inset-0 h-[115%] w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=88" alt="" />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="container-editorial relative">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-5xl text-center">
            <Quote className="mx-auto mb-8 text-logoOrange" size={42} />
            <h2 className="font-editorial text-5xl font-semibold leading-tight md:text-7xl">Learn to serve is a promise: to carry discipline quietly, to lead with humility, and to make every guest feel seen.</h2>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-sm font-bold uppercase tracking-[0.22em] text-white/58 md:grid-cols-4">
              <span className="text-logoRed">Passion</span>
              <span className="text-logoOrange">Creativity</span>
              <span className="text-logoBlue">Trust</span>
              <span className="text-logoGreen">Growth</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-white py-24 md:py-32">
        <div className="container-editorial grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <EditorialHeader eyebrow="Industry & Placement" title="From classroom poise to professional opportunity." text="Placement preparation at SIHM Dimapur connects training with hotel, restaurant, resort, cruise, and service-sector possibilities." />
          <div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                [ChefHat, 'Practical grooming', 'Service, culinary, and front office confidence.'],
                [BriefcaseBusiness, 'Recruiter access', 'Leading hospitality brands and service employers.'],
                [Leaf, 'Sustainable growth', 'Careers built with discipline and adaptability.']
              ].map(([Icon, title, text], index) => (
                <article className="border border-slate-200 p-7 transition hover:border-ink" key={title}>
                  <Icon className={index === 0 ? 'text-logoOrange' : index === 1 ? 'text-logoBlue' : 'text-logoGreen'} />
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10"><RecruiterCarousel items={recruiters} /></div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f7f4] py-24 md:py-32">
        <div className="container-editorial">
          <EditorialHeader eyebrow="Student Stories" title="Human stories, professional futures." center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white p-8" key={item.name}>
                <Sparkles className={index === 0 ? 'text-logoRed' : index === 1 ? 'text-logoBlue' : 'text-logoGreen'} />
                <p className="mt-8 min-h-40 font-editorial text-2xl leading-9 text-ink">"{item.quote}"</p>
                <p className="mt-8 font-heading font-semibold text-ink">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24 md:py-32">
        <div className="container-editorial grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <EditorialHeader eyebrow="News & Events" title="The institute in motion." text="Academic updates, circulars, admissions news, examinations, and stories from campus life." />
          <div className="grid gap-1">
            {news.map((item, index) => (
              <motion.article variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="group grid gap-5 border-t border-slate-200 py-7 md:grid-cols-[150px_1fr_auto] md:items-center" key={item.title}>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">{item.category}<br />{item.date}</p>
                <h3 className="font-heading text-2xl font-semibold leading-tight text-ink">{item.title}</h3>
                <span className={`h-3 w-3 rounded-full ${accents[index % accents.length]}`} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-ink py-24 text-white md:py-32">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-white/50">Admissions</p>
            <h2 className="font-editorial text-5xl font-semibold leading-tight md:text-7xl">Your first act of leadership can begin here.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">Speak with SIHM Dimapur admissions and find the program that fits your ambition, discipline, and future in hospitality.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-ink hover:bg-logoGreen/90" to="/admissions">Apply Now <ArrowRight size={18} /></Link>
              <a className="inline-flex items-center gap-3 rounded-full border border-white/24 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-white/10" href={`tel:${contact.phone}`}>Call Admissions</a>
            </div>
          </div>
          <div className="border border-white/12 p-8">
            <BookOpen className="text-logoOrange" />
            <p className="mt-8 font-editorial text-3xl leading-tight">B.Sc. HHA, Food Production, and Food & Beverage Service pathways for students ready to enter a global service profession.</p>
            <div className="mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/56">
              <GraduationCap size={18} /> Admissions Open
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
