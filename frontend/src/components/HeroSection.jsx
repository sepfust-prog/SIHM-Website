import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection({ banners }) {
  const banner = banners[0];
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-navy text-white">
      <img className="absolute inset-0 h-full w-full object-cover" src={banner.image} alt="" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-black/25" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
      <div className="container-premium relative flex min-h-[92vh] items-center pt-28">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex rounded-full border border-white/25 px-5 py-2 text-sm font-bold uppercase tracking-[.22em] text-gold">{banner.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="font-heading text-5xl font-black leading-[1.02] md:text-7xl">{banner.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-7 max-w-2xl text-lg leading-8 text-white/80">{banner.description}</motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-9 flex flex-wrap gap-4">
            <Link to="/admissions" className="gold-gradient inline-flex items-center gap-2 rounded px-6 py-4 font-black text-navy shadow-premium">{banner.cta} <ArrowRight size={18} /></Link>
            <Link to="/gallery" className="glass inline-flex items-center gap-2 rounded px-6 py-4 font-bold text-white"><PlayCircle size={19} /> View Campus</Link>
          </motion.div>
        </div>
      </div>
      <div className="container-premium relative -mt-24 hidden grid-cols-3 gap-4 pb-10 lg:grid">
        {banners.concat(banners).slice(0, 3).map((item, index) => (
          <div className="glass rounded p-5" key={`${item.title}-${index}`}>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-gold">0{index + 1}</span>
            <p className="mt-2 font-heading text-lg font-bold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
