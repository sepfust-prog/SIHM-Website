import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.button initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }} className="image-lift mb-5 block w-full bg-slate-100 text-left shadow-[0_20px_60px_rgba(16,19,26,.13)]" key={`${image}-${index}`} onClick={() => setActive(image)}>
            <img className={`w-full object-cover transition duration-700 hover:scale-105 ${index % 2 ? 'h-80' : 'h-56'}`} src={image} alt={`SIHM campus gallery ${index + 1}`} loading="lazy" decoding="async" />
          </motion.button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/86 p-5" onClick={() => setActive(null)}>
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center bg-white text-ink" aria-label="Close"><X /></button>
          <img className="max-h-[86vh] max-w-full object-contain" src={active} alt="Expanded SIHM gallery" loading="eager" decoding="async" />
        </div>
      )}
    </>
  );
}
