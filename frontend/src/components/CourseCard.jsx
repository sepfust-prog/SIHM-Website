import { motion } from 'framer-motion';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <motion.article whileHover={{ y: -8, rotateX: 2, rotateY: -2 }} className="group overflow-hidden rounded bg-white shadow-premium">
      <div className="relative h-64 overflow-hidden">
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={course.image} alt={course.title} />
        <span className="absolute left-5 top-5 rounded bg-navy/90 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-gold">{course.type}</span>
      </div>
      <div className="p-7">
        <h3 className="font-heading text-2xl font-black text-navy">{course.title}</h3>
        <div className="mt-5 grid gap-3 text-sm text-slate-600">
          <p className="flex gap-2"><Clock className="mt-1 shrink-0 text-gold" size={17} /> {course.duration}</p>
          <p className="flex gap-2"><GraduationCap className="mt-1 shrink-0 text-gold" size={17} /> {course.eligibility}</p>
        </div>
        <button className="mt-6 inline-flex items-center gap-2 font-black text-navy">View curriculum <ArrowRight size={17} /></button>
      </div>
    </motion.article>
  );
}
