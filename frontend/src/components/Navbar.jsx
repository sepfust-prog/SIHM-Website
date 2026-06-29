import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/siteData';

const desktopNavItems = navItems.map((item) => ({
  ...item,
  label:
    item.label === 'Academic Programs' ? 'Academic' :
    item.label === 'About SIHM' ? 'About' :
    item.label === 'News & Events' ? 'News' :
    item.label
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? 'border-black/10 bg-white/96 text-ink shadow-[0_12px_34px_rgba(0,0,0,.08)] backdrop-blur-[10px]' : 'border-white/12 bg-[linear-gradient(to_bottom,rgba(3,6,12,.72),rgba(3,6,12,.12))] text-white backdrop-blur-[6px]'}`}>
      <div className={`hidden border-b py-1.5 text-[10px] font-semibold uppercase tracking-[.28em] transition xl:block ${scrolled ? 'border-black/10 text-ink/58' : 'border-white/10 text-white/68'}`}>
        <div className="container-nav flex justify-end gap-8">
          <span>Dimapur, Nagaland</span>
          <Link to="/contact-us" className="hover:opacity-70">Contact</Link>
          <Link to="/admissions" className="hover:opacity-70">Admissions</Link>
        </div>
      </div>
      <nav className={`container-nav flex items-center gap-3 transition-all duration-500 ${scrolled ? 'min-h-[66px]' : 'min-h-[74px]'}`}>
        <Link to="/" className="group flex min-w-0 flex-1 items-center gap-3 py-2 xl:w-[390px] xl:flex-none 2xl:w-[450px]" onClick={() => setOpen(false)} aria-label="SIHM Dimapur home">
          <span className="grid h-12 w-[86px] shrink-0 place-items-center bg-white px-2 py-1 md:h-14 md:w-[104px]">
            <img className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.03]" src="/sihm-logo.svg" alt="SIHM Dimapur logo" />
          </span>
          <span className="min-w-0 flex-1">
            <span className={`block font-heading text-[15px] font-bold uppercase leading-[1.05] tracking-[0.08em] sm:hidden ${scrolled ? 'text-ink' : 'text-white'}`}>
              SIHM Dimapur
            </span>
              <span className={`hidden text-wrap font-heading text-[12px] font-extrabold uppercase leading-[1.18] tracking-[0.09em] sm:block md:text-[14px] xl:text-[15px] 2xl:text-[16px] ${scrolled ? 'text-ink' : 'text-white'}`}>
              State Institute of<br className="hidden min-[420px]:block" /> Hotel Management
            </span>
            <span className={`mt-1 block truncate text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] xl:mt-1.5 ${scrolled ? 'text-ink/56' : 'text-logoOrange'}`}>
              Learn to Serve
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex 2xl:gap-1">
          {desktopNavItems.map((item) => (
            <div className="group relative" key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `relative flex items-center gap-1 whitespace-nowrap px-1.5 py-3 text-[10px] font-extrabold uppercase tracking-[0.12em] transition hover:opacity-70 2xl:px-2.5 2xl:text-[11px] ${isActive ? 'text-gold' : ''}`}
              >
                {item.label}
                {item.children && <ChevronDown className="transition group-hover:rotate-180" size={14} />}
                <span className={`absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${scrolled ? 'bg-ink' : 'bg-white'}`} />
              </NavLink>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-[min(560px,calc(100vw-48px))] -translate-x-1/2 translate-y-4 border border-black/10 bg-white p-5 text-ink opacity-0 shadow-[0_24px_60px_rgba(0,0,0,.18)] transition duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                  <p className="lr-eyebrow mb-4 text-slate-500">About SIHM</p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.children.map((child) => (
                      <Link className="group/link border border-black/10 bg-white px-4 py-4 text-sm font-semibold text-ink transition hover:border-ink" key={child.path} to={child.path}>
                        {child.label}
                        <span className="mt-2 block h-px w-8 bg-ink transition group-hover/link:w-16" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ml-auto hidden w-[190px] shrink-0 items-center justify-end gap-3 xl:flex 2xl:w-[230px]">
          <button className={`grid h-10 w-10 place-items-center border transition hover:opacity-70 ${scrolled ? 'border-black/20 text-ink' : 'border-white/28 text-white'}`} aria-label="Search">
            <Search size={17} />
          </button>
          <Link className={`border px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.22em] transition hover:-translate-y-0.5 2xl:px-6 ${scrolled ? 'border-ink bg-ink text-white hover:bg-transparent hover:text-ink' : 'border-white bg-white text-ink hover:bg-transparent hover:text-white'}`} to="/admissions">
            Apply Now
          </Link>
        </div>

        <button className={`ml-auto grid h-11 w-11 shrink-0 place-items-center border xl:hidden ${scrolled ? 'border-black/20 text-ink' : 'border-white/24 text-white'}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[76px] z-40 bg-white px-5 py-8 text-ink backdrop-blur-[8px] xl:hidden">
          <div className="mx-auto grid max-w-xl gap-2">
            {navItems.map((item) => (
              <div key={item.path} className="border-b border-black/10 py-3">
                <Link className="block font-editorial text-3xl font-semibold" to={item.path} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-3 grid gap-2 pl-3">
                    {item.children.map((child) => (
                      <Link className="py-1 text-sm font-semibold uppercase tracking-[0.14em] text-ink/62" key={child.path} to={child.path} onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-8 grid grid-cols-[auto_1fr] gap-3">
              <button className="grid h-12 w-12 place-items-center border border-black/16 text-ink" aria-label="Search"><Search size={18} /></button>
              <Link className="grid place-items-center bg-ink px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white" to="/admissions" onClick={() => setOpen(false)}>Apply Now</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
