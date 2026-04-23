import PageShell from './PageShell'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'

export default function ContactUs() {
  const bleed =
    'relative -mx-4 w-[calc(100%+2rem)] sm:-mx-5 sm:w-[calc(100%+2.5rem)] md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-[50px] lg:w-[calc(100%+100px)]'

  const bleedLg =
    'lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:w-screen'

  return (
    <PageShell title="">
      <section className="">
        <figure className={`${bleed} ${bleedLg} relative -mt-8 mb-7 overflow-hidden bg-white`}>
          <ParallaxImage
            src={images.contactHero}
            alt="Contact International English UK (IEUK)"
            className="h-[min(58vw,320px)] w-full object-cover object-center sm:h-[360px] md:h-[420px] lg:h-[460px]"
            width={1200}
            height={720}
            fetchPriority="high"
            decoding="async"
            strength={12}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent"
            aria-hidden
          />
        </figure>

        <section className="ieuk-reveal space-y-4 py-2 [--ieuk-delay:120ms]">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            Get in Touch with International English UK (IEUK)
          </h2>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            ​We are here to support your institution&apos;s journey toward
            excellence. Whether you are seeking accreditation, looking to become
            a member, or have questions about our global standards, our team is
            ready to help you. We strive to respond to all inquiries as promptly
            as possible. Thank you for your interest in International English UK.
          </p>
        </section>

        <section className="ieuk-reveal mt-10 space-y-4 [--ieuk-delay:160ms]">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            IEUK Office Location
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />

          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
                Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                80 Brunswick Court, Tanner Street, London SE1 3LJ, United Kingdom
              </p>
            </section>

            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
                Registered in England &amp; Wales
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                05120951
              </p>
            </section>
          </div>
        </section>

        <section className="ieuk-reveal mt-10 space-y-4 [--ieuk-delay:200ms]">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Direct Communication
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            We pride ourselves on accessibility and transparency. For general
            inquiries regarding IEUK international standards, accreditation and
            membership, please feel free to contact us via phone during our
            business hours or direct your email inquiry to:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
                Email Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                <a
                  href="mailto:contact@ieuk.org"
                  className="font-semibold text-[#5d1420] underline decoration-[#5d1420]/30 underline-offset-4 hover:decoration-[#5d1420]/60"
                >
                  contact@ieuk.org
                </a>
              </p>
            </section>

            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
                Phone
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                +44 (0) 20 8123 4568 | +44 (0) 20 8123 8794
              </p>
            </section>
          </div>
        </section>

        <section className="ieuk-reveal mt-10 space-y-4 [--ieuk-delay:240ms]">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Business Hours
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            We are open Monday through Friday, 09:00 – 17:00 (GMT/BST). We are
            closed on UK Public Holidays.
          </p>
        </section>
      </section>
    </PageShell>
  )
}
