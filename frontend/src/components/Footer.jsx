import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact, navItems } from '../data/siteData';

const programs = ['B.Sc. in Hospitality & Hotel Administration', 'Diploma in Food Production', 'Diploma in Food & Beverage Service', 'Short Term Courses'];

export default function Footer() {
  return (
    <footer className="bg-[#061a27] text-white">
      <div className="relative overflow-hidden border-b border-white/10 py-12">
        <img className="absolute inset-0 h-full w-full object-cover opacity-18" src="/campus/optimized/campus-building-wide-md.jpg" alt="" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-[#061a27]/78" />
        <div className="container-editorial relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-editorial text-4xl font-semibold leading-tight md:text-5xl">Begin Your Journey In Hospitality</h2>
            <p className="mt-2 text-gold">Admissions open for the academic session</p>
          </div>
          <Link className="lr-button lr-button-gold" to="/admissions">Apply Now <ArrowRight size={17} /></Link>
        </div>
      </div>

      <div className="container-editorial grid gap-10 py-14 md:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid h-20 w-32 place-items-center rounded-2xl bg-white/95 px-2 py-1 shadow-sm">
              <img className="max-h-full max-w-full object-contain" src="/sihm-logo.png" alt="SIHM Dimapur" loading="lazy" decoding="async" />
            </span>
            <div>
              <strong className="block font-heading text-sm font-extrabold uppercase leading-tight tracking-[.08em]">State Institute of<br />Hotel Management, Dimapur</strong>
              <span className="mt-2 block text-xs text-gold">Hospitality. Service. Excellence.</span>
            </div>
          </div>
          <p className="mt-7 max-w-sm text-sm leading-7 text-white/64">An initiative focused on hospitality skill development and career opportunities for students in Nagaland and the North East.</p>
          <div className="mt-7 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <button className="grid h-9 w-9 place-items-center rounded-full border border-white/18 text-white/72 transition hover:border-gold hover:text-gold" aria-label="Social link" key={index}><Icon size={16} /></button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="lr-eyebrow mb-5 text-white/48">Quick Links</h3>
          <div className="grid gap-3">
            {navItems.slice(1).map((item) => <Link className="text-sm text-white/68 hover:text-gold" key={item.path} to={item.path}>{item.label}</Link>)}
          </div>
        </div>

        <div>
          <h3 className="lr-eyebrow mb-5 text-white/48">Programs</h3>
          <div className="grid gap-3">
            {programs.map((item) => <Link className="text-sm text-white/68 hover:text-gold" key={item} to="/academic-and-programs">{item}</Link>)}
          </div>
        </div>

        <div>
          <h3 className="lr-eyebrow mb-5 text-white/48">Contact Us</h3>
          <p className="text-sm leading-7 text-white/68">{contact.campus}</p>
          <p className="mt-4 text-sm text-white/68">{contact.phone}</p>
          <p className="mt-3 text-sm text-white/68">{contact.email}</p>
        </div>
      </div>

      <div className="container-editorial border-t border-white/10 py-6">
        <div className="flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© 2026 SIHM Dimapur. All Rights Reserved.</span>
          <span className="flex gap-7"><Link to="/downloads">Privacy Policy</Link><Link to="/downloads">Terms & Conditions</Link><Link to="/downloads">Sitemap</Link></span>
        </div>
      </div>
    </footer>
  );
}
