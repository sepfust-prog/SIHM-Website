import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function PageHero({ eyebrow, title, text, image, align = 'left' }) {
  return (
    <section className="page-hero relative min-h-[60vh] overflow-hidden bg-ink pb-12 pt-28 text-white sm:min-h-[66vh] sm:pb-20 sm:pt-36 md:pt-44">
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        data-parallax
        className="absolute inset-0 h-[112%] w-full object-cover opacity-78"
        src={image}
        alt=""
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,.92)_0%,rgba(5,7,10,.72)_42%,rgba(5,7,10,.20)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/72 to-transparent sm:h-48" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),#f7f3eb)] sm:h-36" />
      <div className="container-editorial relative flex min-h-[44vh] items-end sm:min-h-[48vh]">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} align={align} light />
      </div>
      <div className="absolute bottom-6 right-4 hidden items-center gap-4 text-xs font-bold uppercase tracking-[.24em] text-white/58 sm:bottom-8 sm:right-6 md:flex">
        <span>Scroll</span>
        <span className="h-px w-16 bg-white/46" />
      </div>
    </section>
  );
}
