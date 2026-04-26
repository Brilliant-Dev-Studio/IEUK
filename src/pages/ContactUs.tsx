import { type FormEvent, useState } from 'react'
import { Send } from 'lucide-react'
import PageShell from './PageShell'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'
import Seo from '../components/Seo'

const CONTACT_INBOX = 'thuranyi64@gmail.com'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [formState, setFormState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim() || !description.trim()) return
    setFormState('sending')
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_INBOX)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            description: description.trim(),
            _subject: `IEUK website contact: ${name.trim()}`,
            _gotcha: '',
          }),
        }
      )
      const data = (await res.json()) as {
        success?: boolean | string
        ok?: boolean
      }
      const isSuccess =
        res.ok &&
        (data.ok === true ||
          data.success === true ||
          data.success === 'true')
      if (!isSuccess) throw new Error('Submit failed')
      setFormState('success')
      setName('')
      setDescription('')
    } catch {
      setFormState('error')
    }
  }
  const bleed =
    'relative -mx-4 w-[calc(100%+2rem)] sm:-mx-5 sm:w-[calc(100%+2.5rem)] md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-[50px] lg:w-[calc(100%+100px)]'

  const bleedLg =
    'lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:w-screen'

  return (
    <PageShell title="">
      <Seo
        title="Contact Us"
        description="Get in touch with IEUK for accreditation, membership, and standards inquiries. We aim to respond promptly."
        path="/contact"
      />
      <section className="">
        <figure className={`${bleed} ${bleedLg} relative -mt-8 mb-7 overflow-hidden bg-neutral-100`}>
          <ParallaxImage
            src={images.contactHero}
            alt="Contact International English UK (IEUK)"
            className="h-auto w-full object-contain object-center"
            width={1200}
            height={720}
            fetchPriority="high"
            decoding="async"
            strength={8}
          />
        </figure>

        <section className="ieuk-reveal space-y-4 py-2 [--ieuk-delay:120ms]">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            Get in Touch with International English UK (IEUK)
          </h2>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
          <p className="w-full max-w-none text-neutral-700">
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
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />

          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(90,12,22,0.06)] ring-1 ring-[#5a0c16]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0c16]/70">
                Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                80 Brunswick Court, Tanner Street, London SE1 3LJ, United Kingdom
              </p>
            </section>

            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(90,12,22,0.06)] ring-1 ring-[#5a0c16]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0c16]/70">
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
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
          <p className="w-full max-w-none text-neutral-700">
            We pride ourselves on accessibility and transparency. For general
            inquiries regarding IEUK international standards, accreditation and
            membership, please feel free to contact us via phone during our
            business hours or direct your email inquiry to:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(90,12,22,0.06)] ring-1 ring-[#5a0c16]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0c16]/70">
                Email Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                <a
                  href="mailto:contact@ieuk.org"
                  className="font-semibold text-[#5a0c16] underline decoration-[#5a0c16]/30 underline-offset-4 hover:decoration-[#5a0c16]/60"
                >
                  contact@ieuk.org
                </a>
              </p>
            </section>

            <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(90,12,22,0.06)] ring-1 ring-[#5a0c16]/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0c16]/70">
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
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
          <p className="w-full max-w-none text-neutral-700">
            We are open Monday through Friday, 09:00 – 17:00 (GMT/BST). We are
            closed on UK Public Holidays.
          </p>
        </section>

        <section
          className="ieuk-reveal relative mt-10 min-h-[28rem] overflow-hidden sm:mt-12 sm:min-h-0 [--ieuk-delay:280ms]"
          aria-labelledby="contact-form-heading"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: '#3a0909',
              backgroundImage: `url(${images.contactFormSectionBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/15 via-transparent to-black/25"
            aria-hidden
          />
          {/* Maroon + navy corner glows (IEUK) */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: `
                radial-gradient(ellipse 88% 62% at 0% 0%, rgba(90, 12, 22, 0.28) 0%, transparent 55%),
                radial-gradient(ellipse 72% 50% at 100% 100%, rgba(11, 47, 115, 0.2) 0%, transparent 52%)
              `,
            }}
            aria-hidden
          />
          {/* Diagonal line grid */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-35"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 10px)',
            }}
            aria-hidden
          />
          {/* Fine dot grain */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40 [background-size:4px_4px] [background-image:radial-gradient(rgba(255,255,255,0.12)_0.45px,transparent_0.45px)]"
            aria-hidden
          />
          <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 md:py-12">
            <div className="mx-auto max-w-3xl text-left">
            <h3
              id="contact-form-heading"
              className="text-xl font-semibold tracking-tight text-white sm:text-2xl"
            >
              Contact Form
            </h3>
            <div className="mt-3 h-px w-12 bg-white/30" aria-hidden />
            <p className="mt-4 max-w-2xl text-sm text-stone-200/90">
              Please complete the form below, and a member of our team will
              reach out within 24–48 business hours.
            </p>
            </div>

          <form
            onSubmit={handleContactSubmit}
            className="relative z-10 mt-6 rounded-2xl border border-white/10 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:mx-auto sm:max-w-3xl sm:rounded-3xl sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0c16]/70"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (formState === 'success' || formState === 'error') {
                      setFormState('idle')
                    }
                  }}
                  className="mt-2 min-h-[2.75rem] w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#5a0c16]/40 focus:ring-2 focus:ring-[#5a0c16]/10 placeholder:text-neutral-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-description"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a0c16]/70"
                >
                  Message
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  required
                  rows={6}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value)
                    if (formState === 'success' || formState === 'error') {
                      setFormState('idle')
                    }
                  }}
                  className="mt-2 min-h-[10rem] w-full resize-y rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#5a0c16]/40 focus:ring-2 focus:ring-[#5a0c16]/10 placeholder:text-neutral-400"
                  placeholder="How can we help?"
                />
              </div>
            </div>
            <p className="sr-only" aria-live="polite">
              {formState === 'sending' ? 'Sending message…' : null}
            </p>
            {formState === 'success' ? (
              <div
                className="mt-5 rounded-2xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-3 text-left text-sm font-medium text-emerald-900"
                role="status"
              >
                Thank you — your message was sent. We will get back to you
                when we can.
              </div>
            ) : null}
            {formState === 'error' ? (
              <div
                className="mt-5 rounded-2xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-left text-sm font-medium text-red-800"
                role="alert"
              >
                Something went wrong. Please try again in a moment or email
                us directly.
              </div>
            ) : null}
            <div className="mt-6">
              <button
                type="submit"
                disabled={
                  formState === 'sending' || !name.trim() || !description.trim()
                }
                className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#5a0c16] px-8 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition enabled:hover:bg-[#3d0a0f] enabled:focus-visible:outline enabled:focus-visible:outline-2 enabled:focus-visible:outline-offset-2 enabled:focus-visible:outline-[#5a0c16] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {formState === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden />
                    Send message
                  </>
                )}
              </button>
            </div>
          </form>
          </div>
        </section>
      </section>
    </PageShell>
  )
}
