import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection({ title = 'Begin Your Hospitality Career at SIHM Dimapur', text = 'Speak with the admissions team, understand eligibility, and choose the right program for your goals.' }) {
  return (
    <section className="container-premium py-16">
      <div className="navy-gradient grid gap-8 rounded p-8 text-white shadow-premium md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-gold">Admission Enquiry</p>
          <h2 className="font-heading text-3xl font-black md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-white/72">{text}</p>
        </div>
        <Link className="gold-gradient inline-flex items-center justify-center gap-2 rounded px-7 py-4 font-black text-navy" to="/admissions">Apply Now <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
