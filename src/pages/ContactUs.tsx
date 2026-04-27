import { type FormEvent, useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import PageShell from './PageShell'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'
import Seo from '../components/Seo'

const CONTACT_INBOX = 'cornerstoneenglishacademy@yahoo.com'

const fieldBase =
  'w-full rounded-lg border border-stone-200 bg-white text-[0.9375rem] text-neutral-900 antialiased shadow-sm outline-none transition [font-family:inherit] placeholder:text-stone-400 focus-visible:border-[#5a0c16]/50 focus-visible:ring-2 focus-visible:ring-[#5a0c16]/15'

const inputClassName = `min-h-11 px-3.5 py-2.5 ${fieldBase}`
const textAreaClassName = `min-h-[10rem] resize-y px-3.5 py-3 leading-relaxed ${fieldBase}`

function RequiredMark() {
  return (
    <span className="text-red-600" title="Required" aria-hidden>
      *
    </span>
  )
}

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [formState, setFormState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return
    }
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
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
            _subject: `IEUK website: ${subject.trim()}`,
            _replyto: email.trim(),
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
      setEmail('')
      setSubject('')
      setMessage('')
    } catch {
      setFormState('error')
    }
  }
  const bleed =
    'relative -mx-4 w-[calc(100%+2rem)] sm:-mx-5 sm:w-[calc(100%+2.5rem)] md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-[50px] lg:w-[calc(100%+100px)]'

  return (
    <PageShell title="">
      <Seo
        title="Contact Us"
        description="Get in touch with IEUK for accreditation, membership, and standards inquiries. We aim to respond promptly."
        path="/contact-us"
      />
      <section className="">
        <figure className={`${bleed} relative -mt-8 mb-7 bg-neutral-100`}>
          <ParallaxImage
            src={images.contactHero}
            alt="Contact International English UK (IEUK)"
            className="block h-auto w-full max-w-full object-contain object-center"
            width={1200}
            height={720}
            fetchPriority="high"
            decoding="async"
            strength={0}
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
          className="ieuk-reveal mt-10 min-h-0 sm:mt-12 [--ieuk-delay:280ms]"
          aria-labelledby="contact-form-title"
        >
          <div className="w-full max-w-full sm:max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04]">
          <form
            id="ieuk-contact-form"
            onSubmit={handleContactSubmit}
            className="w-full p-4 text-left text-neutral-800 sm:p-6 md:p-8"
            aria-describedby="contact-form-desc contact-form-required"
          >
            <header className="border-b border-stone-100 pb-5">
          
            <h2
              id="contact-form-title"
              className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-[1.65rem] sm:leading-snug"
            >
              Contact Form
            </h2>
            <p
              id="contact-form-desc"
              className="mt-2 max-w-prose text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]"
            >
              Please complete the form below. A member of our team will
              usually respond within 24–48 business hours.
            </p>
            <p id="contact-form-required" className="mt-2 text-xs text-neutral-500">
              All fields are required.
            </p>
            </header>

            <fieldset className="m-0 mt-6 min-w-0 border-0 p-0 sm:mt-7">
              <legend className="sr-only">Your enquiry</legend>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
              <div className="min-w-0 sm:col-span-1">
                <label
                  htmlFor="contact-name"
                  className="flex items-baseline gap-0.5 text-sm font-medium text-neutral-800"
                >
                  Name
                  <RequiredMark />
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
                  className={`mt-2 ${inputClassName}`}
                />
              </div>
              <div className="min-w-0 sm:col-span-1">
                <label
                  htmlFor="contact-email"
                  className="flex items-baseline gap-0.5 text-sm font-medium text-neutral-800"
                >
                  Email
                  <RequiredMark />
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (formState === 'success' || formState === 'error') {
                      setFormState('idle')
                    }
                  }}
                  className={`mt-2 ${inputClassName}`}
                />
              </div>
              <div className="min-w-0 sm:col-span-2">
                <label
                  htmlFor="contact-subject"
                  className="flex items-baseline gap-0.5 text-sm font-medium text-neutral-800"
                >
                  Subject
                  <RequiredMark />
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value)
                    if (formState === 'success' || formState === 'error') {
                      setFormState('idle')
                    }
                  }}
                  className={`mt-2 ${inputClassName}`}
                />
              </div>
              <div className="min-w-0 sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="flex items-baseline gap-0.5 text-sm font-medium text-neutral-800"
                >
                  Message
                  <RequiredMark />
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (formState === 'success' || formState === 'error') {
                      setFormState('idle')
                    }
                  }}
                  className={`mt-2 ${textAreaClassName}`}
                />
              </div>
            </div>
            </fieldset>
            <p className="sr-only" aria-live="polite">
              {formState === 'sending' ? 'Sending message…' : null}
            </p>
            {formState === 'success' ? (
              <div
                className="mt-6 flex gap-3 rounded-xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/95 to-emerald-50/80 px-4 py-3.5 text-left text-sm text-emerald-900 not-italic shadow-sm"
                role="status"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                <span className="leading-snug">
                Thank you — your message was sent. We will get back to you
                when we can.
                </span>
              </div>
            ) : null}
            {formState === 'error' ? (
              <div
                className="mt-6 flex gap-3 rounded-xl border border-red-200/90 bg-gradient-to-b from-red-50/95 to-red-50/80 px-4 py-3.5 text-left text-sm text-red-800 not-italic shadow-sm"
                role="alert"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500/90" aria-hidden />
                <span className="leading-snug">
                Something went wrong. Please try again in a moment or email
                us directly.
                </span>
              </div>
            ) : null}
            <div className="mt-7 flex flex-col gap-3 border-t border-stone-100/90 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={
                  formState === 'sending' ||
                  !name.trim() ||
                  !email.trim() ||
                  !subject.trim() ||
                  !message.trim()
                }
                className="inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#5a0c16] to-[#420a0f] px-7 text-sm font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_2px_8px_rgba(90,12,22,0.3)] transition enabled:hover:brightness-105 enabled:active:brightness-95 enabled:focus-visible:outline enabled:focus-visible:outline-2 enabled:focus-visible:outline-offset-2 enabled:focus-visible:outline-[#5a0c16] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {formState === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  'Submit'
                )}
              </button>
             
            </div>
          </form>
            </div>
          </div>
        </section>
      </section>
    </PageShell>
  )
}
