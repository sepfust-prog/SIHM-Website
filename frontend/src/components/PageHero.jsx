import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function PageHero({ eyebrow, title, text, image, align = 'left' }) {
  return (
    <section className="page-hero relative min-h-[66vh] overflow-hidden bg-ink pb-20 pt-36 text-white sm:pt-44">
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        data-parallax
        className="absolute inset-0 h-[112%] w-full object-cover opacity-78"
        src={image}
        alt=""
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,.92)_0%,rgba(5,7,10,.72)_42%,rgba(5,7,10,.20)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/72 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),#f7f3eb)]" />
      <div className="container-editorial relative flex min-h-[48vh] items-end">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} align={align} light />
      </div>
      <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-xs font-bold uppercase tracking-[.24em] text-white/58 md:flex">
        <span>Scroll</span>
        <span className="h-px w-16 bg-white/46" />
      </div>
    </section>
  );
}
