import { useMemo, useState } from 'react'
import PageShell from './PageShell'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'
import Seo from '../components/Seo'

export default function OurTeam() {
  const sections = useMemo(
    () =>
      [
        {
          title: 'Executive Representatives',
          src: images.ourTeamExecutive,
          alt: 'Our Team — Executive Representatives',
        },
        {
          title: 'Linguistic Representatives',
          src: images.ourTeamLinguistic,
          alt: 'Our Team — Linguistic Representatives',
        },
        {
          title: 'Creative Representatives',
          src: images.ourTeamCreative,
          alt: 'Our Team — Creative: Music, Design & Illustration Representatives',
        },
      ] as const,
    []
  )

  const [openKey, setOpenKey] = useState<(typeof sections)[number]['alt'] | null>(
    null
  )

  const open = sections.find((s) => s.alt === openKey) ?? null

  return (
    <PageShell title="">
      <Seo
        title="Our Team"
        description="Meet our representatives across executive leadership, linguistic expertise, and creative disciplines."
        path="/our-team"
      />
      <section className="ieuk-reveal space-y-4 py-2 [--ieuk-delay:120ms]">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            Our Team
          </h2>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
        </div>
        <p className="w-full max-w-none text-neutral-700">
        International English UK is defined by a curated leadership circle, dedicated to preserving the "Gold Standard" of English language education. Our assembly of executive, linguistic, and creative specialists reflects the deep-rooted professionalism and distinction that our organization represents.
        </p>
      </section>

      <section className="ieuk-reveal mt-8 grid gap-4 lg:grid-cols-3 [--ieuk-delay:160ms]">
        {sections.map(({ title, src, alt }) => (
          <section
            key={alt}
            className="overflow-hidden rounded-2xl bg-white/70 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10"
          >
            <div className="px-4 py-3">
              <p className="font-semibold text-neutral-950">{title}</p>
            </div>
            <figure className="ieuk-frame flex items-center justify-center overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setOpenKey(alt)}
                className="w-full"
                aria-label={`Open preview: ${title}`}
              >
                <ParallaxImage
                  src={src}
                  alt={alt}
                  className="max-h-[340px] w-full object-contain bg-white"
                  loading="lazy"
                  decoding="async"
                  strength={0}
                />
              </button>
            </figure>
          </section>
        ))}
      </section>

      {open ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Team image preview"
          onClick={() => setOpenKey(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-neutral-200 px-4 py-3">
              <p className="font-semibold text-neutral-950">{open.title}</p>
              <button
                type="button"
                onClick={() => setOpenKey(null)}
                className="rounded-xl bg-neutral-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              >
                Close
              </button>
            </div>
            <div className="bg-white p-3">
              <img
                src={open.src}
                alt={open.alt}
                className="max-h-[78vh] w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      ) : null}
    </PageShell>
  )
}
