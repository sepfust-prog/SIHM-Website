import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { pageSeo } from '../lib/seo';

export default function NotFound() {
  return (
    <>
      <SEO seo={pageSeo(
        'Page Not Found',
        'The requested page could not be found on the SIHM Dimapur website.',
        '/404',
        { noIndex: true }
      )} />
      <section className="grid min-h-[72vh] place-items-center bg-[#f7f3eb] px-5 pb-20 pt-36 text-center">
        <div>
          <p className="lr-eyebrow text-slate-500">Error 404</p>
          <h1 className="mt-5 font-editorial text-5xl font-semibold text-ink md:text-7xl">This page could not be found.</h1>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">The address may have changed, or the page may no longer be available.</p>
          <Link className="lr-button mt-8" to="/">Return to Home</Link>
        </div>
      </section>
    </>
  );
}
