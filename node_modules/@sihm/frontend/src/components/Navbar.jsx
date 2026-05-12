import { ChevronDown, Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/siteData';

const desktopNavItems = navItems.map((item) => ({
  ...item,
  label: item.label === 'Academic and Programs' ? 'Academics' : item.label === 'News & Events' ? 'News' : item.label === 'Contact Us' ? 'Contact' : item.label
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
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? 'border-white/10 bg-[rgba(5,15,25,.82)] shadow-[0_12px_34px_rgba(0,0,0,.18)] backdrop-blur-[8px]' : 'border-white/8 bg-[linear-gradient(to_bottom,rgba(3,10,20,.72),rgba(3,10,20,.28))] backdrop-blur-[8px]'}`}>
      <nav className={`container-editorial flex items-center gap-3 transition-all duration-500 xl:grid xl:grid-cols-[35%_45%_20%] xl:gap-5 ${scrolled ? 'min-h-[72px] xl:min-h-[76px]' : 'min-h-[78px] xl:min-h-[82px]'}`}>
        <Link to="/" className="group flex min-w-0 flex-1 items-center gap-3 py-2 xl:gap-4 xl:py-3" onClick={() => setOpen(false)} aria-label="SIHM Dimapur home">
          <img className={`shrink-0 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,.24)] transition duration-500 group-hover:scale-[1.03] ${scrolled ? 'h-11 w-[58px] sm:h-12 sm:w-16 xl:h-16 xl:w-[84px]' : 'h-12 w-16 sm:h-14 sm:w-[74px] xl:h-[72px] xl:w-24'}`} src="/sihm-logo.svg" alt="SIHM Dimapur logo" />
          <span className="min-w-0 flex-1">
            <span className="block font-heading text-[15px] font-bold uppercase leading-[1.05] tracking-[0.08em] text-white sm:hidden">
              SIHM Dimapur
            </span>
            <span className="hidden text-wrap font-heading text-[14px] font-bold uppercase leading-[1.22] tracking-[0.06em] text-white sm:block md:text-[16px] xl:text-[18px] 2xl:text-[20px]">
              State Institute of<br className="hidden min-[420px]:block" /> Hotel Management, Dimapur
            </span>
            <span className="mt-1 block truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-logoOrange sm:text-[11px] xl:mt-1.5">
              Dimapur, Nagaland
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 justify-center gap-1 xl:flex 2xl:gap-2">
          {desktopNavItems.map((item) => (
            <div className="group relative" key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `relative flex items-center gap-1 px-2.5 py-3 text-[14px] font-medium tracking-[0.02em] text-white transition hover:text-white/82 2xl:px-3 2xl:text-[15px] ${isActive ? 'text-white' : ''}`}
              >
                {item.label}
                {item.children && <ChevronDown className="transition group-hover:rotate-180" size={14} />}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-logoOrange transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 translate-y-4 rounded-md border border-white/10 bg-[rgba(7,21,43,.94)] p-5 opacity-0 shadow-[0_24px_60px_rgba(0,0,0,.24)] backdrop-blur-[8px] transition duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/42">About SIHM</p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.children.map((child) => (
                      <Link className="group/link rounded-sm border border-white/8 px-4 py-4 text-sm font-semibold text-white/72 transition hover:border-logoOrange/50 hover:bg-white/5 hover:text-white" key={child.path} to={child.path}>
                        {child.label}
                        <span className="mt-2 block h-px w-8 bg-logoOrange/70 transition group-hover/link:w-16" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ml-auto hidden items-center justify-end gap-3 xl:flex">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/22 text-white transition hover:border-white/50 hover:bg-white/8 hover:text-white" aria-label="Search">
            <Search size={17} />
          </button>
          <Link className="rounded-sm border border-logoOrange bg-logoOrange px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-[0_0_0_rgba(246,167,34,0)] transition hover:-translate-y-0.5 hover:bg-[#ffd47a] hover:shadow-[0_14px_38px_rgba(246,167,34,.3)]" to="/admissions">
            Apply Now
          </Link>
        </div>

        <button className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/24 text-white xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[76px] z-40 bg-[rgba(7,21,43,.96)] px-5 py-8 text-white backdrop-blur-[8px] xl:hidden">
          <div className="mx-auto grid max-w-xl gap-2">
            {navItems.map((item) => (
              <Link className="border-b border-white/10 py-4 font-heading text-2xl font-semibold" key={item.path} to={item.path} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mt-8 grid grid-cols-[auto_1fr] gap-3">
              <button className="grid h-12 w-12 place-items-center rounded-full border border-white/16 text-white" aria-label="Search"><Search size={18} /></button>
              <Link className="grid place-items-center rounded-sm bg-logoOrange px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-ink" to="/admissions" onClick={() => setOpen(false)}>Apply Now</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
