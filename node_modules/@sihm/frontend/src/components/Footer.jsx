import { Link } from 'react-router-dom';
import { contact, facilities, navItems } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-premium grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-24 w-44 place-items-center rounded bg-white px-2 py-1">
              <img className="max-h-full max-w-full object-contain" src="/sihm-logo.svg" alt="SIHM Dimapur" />
            </span>
            <strong className="font-heading text-xl">SIHM Dimapur</strong>
          </div>
          <p className="text-sm leading-7 text-white/68">A joint initiative focused on hospitality skill development and career opportunities in Nagaland and the North East.</p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-lg">Contact Us</h3>
          <p className="text-sm leading-7 text-white/68">{contact.headOffice}</p>
          <p className="mt-3 text-sm text-white/68">{contact.phone}, {contact.alternatePhone}</p>
          <p className="mt-2 text-sm text-white/68">{contact.email}</p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-lg">Quick Link</h3>
          <div className="grid gap-2">
            {navItems.map((item) => <Link className="text-sm text-white/68 hover:text-gold" key={item.path} to={item.path}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-lg">Facilities</h3>
          <div className="grid gap-2">
            {facilities.map(([name]) => <Link className="text-sm text-white/68 hover:text-gold" key={name} to="/facilities">{name}</Link>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-premium flex flex-col gap-3 py-5 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
          <span>Copyright SIHM. All Right Reserved.</span>
          <span>NCHMCT | THIMS | Ministry of Tourism</span>
        </div>
      </div>
    </footer>
  );
}
