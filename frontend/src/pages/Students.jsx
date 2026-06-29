import { useEffect, useState } from 'react';
import { Download, FileText } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { fetchCollection, fileUrl } from '../lib/cms';
import { pageSeo } from '../lib/seo';

function noteAttachment(note) {
  return fileUrl(note.file || note.attachment || note.document);
}

export default function Students() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchCollection('notes', 'populate=file&sort=createdAt:desc').then(setNotes);
  }, []);

  return (
    <>
      <SEO seo={pageSeo('Students', 'Student notes and learning resources for SIHM Dimapur.', '/students')} />
      <PageHero
        eyebrow="Students"
        title="Notes and learning resources for SIHM students"
        text="Access class notes, handouts, and academic resources shared by the institute."
        image="/campus/housekeeping-training.png"
      />
      <section className="page-band bg-[#f7f3eb]">
        <div className="container-editorial">
          <SectionHeader eyebrow="Student Resources" title="Latest Notes" text="Resources published by the admin team from the SIHM CMS." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note, index) => {
              const attachment = noteAttachment(note);
              return (
                <article className="theme-panel flex min-h-[16rem] flex-col p-7" key={note.id || note.heading}>
                  <div className="grid h-12 w-12 place-items-center rounded-sm bg-[#10131a] text-white">
                    <FileText size={22} />
                  </div>
                  <h2 className="mt-6 font-editorial text-3xl font-semibold leading-tight text-ink">{note.heading}</h2>
                  {note.subHeading && <p className="mt-4 flex-1 leading-7 text-slate-600">{note.subHeading}</p>}
                  {attachment ? (
                    <a className="lr-button mt-7 w-full" href={attachment} target="_blank" rel="noreferrer">
                      <Download size={18} /> Download Note
                    </a>
                  ) : (
                    <p className="mt-7 border border-dashed border-black/20 px-4 py-3 text-sm font-semibold text-slate-500">File will be available after admin upload.</p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
