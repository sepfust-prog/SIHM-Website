import { motion } from 'framer-motion';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  const courseSlug = course.slug || course.title?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/courses/${courseSlug}`}>
      <motion.article whileHover={{ y: -6 }} className="theme-panel group overflow-hidden">
        <div className="image-lift relative h-64">
          <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={course.image} alt={course.title} loading="lazy" decoding="async" />
          <span className="absolute left-5 top-5 rounded-sm bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[.18em] text-ink">{course.type}</span>
        </div>
        <div className="p-7">
          <h3 className="font-editorial text-3xl font-semibold leading-tight text-ink">{course.title}</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-600">
            <p className="flex gap-2"><Clock className="mt-1 shrink-0 text-gold" size={17} /> {course.duration}</p>
            <p className="flex gap-2"><GraduationCap className="mt-1 shrink-0 text-gold" size={17} /> {course.eligibility}</p>
          </div>
          <button className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-xs font-black uppercase tracking-[.18em] text-ink">View Details <ArrowRight size={17} /></button>
        </div>
      </motion.article>
    </Link>
  );
}
