import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'

type IndustryCardPattern = 'stripes' | 'dots' | 'grid' | 'aurora'

const industryCards = [
  {
    n: '01',
    title: 'Accreditation',
    body:
      'We rigorously assess and certify English language schools and programs against high-quality benchmarks.',
    to: '/accreditation',
    pattern: 'stripes' satisfies IndustryCardPattern,
  },
  {
    n: '02',
    title: 'Membership',
    body:
      'We provide a network for educators and institutions to share resources, best practices, and industry updates.',
    to: '/membership',
    pattern: 'dots' satisfies IndustryCardPattern,
  },
  {
    n: '03',
    title: 'Quality Assurance',
    body:
      'We enforce standards that ensure learners receive consistent, world-class English instruction.',
    to: '/accreditation',
    pattern: 'grid' satisfies IndustryCardPattern,
  },
  {
    n: '04',
    title: 'Advocacy',
    body: "We represent our members' interests in the global educational landscape.",
    to: '/about',
    pattern: 'aurora' satisfies IndustryCardPattern,
  },
] as const

const industryCardSkin: Record<IndustryCardPattern, string> = {
  stripes: 'bg-gradient-to-br from-[#651420] via-[#4a1018] to-[#2c080e]',
  dots: 'bg-gradient-to-bl from-[#5a121f] via-[#45121a] to-[#24080d]',
  grid: 'bg-gradient-to-tr from-[#681828] via-[#4e1420] to-[#300c14]',
  aurora: 'bg-gradient-to-br from-[#5c1420] via-[#3a0e16] to-[#180608]',
}

/** Bleed to main horizontal padding (px-4 / sm:px-5) */
const bleed =
  'relative -mx-4 w-[calc(100%+2rem)] sm:-mx-5 sm:w-[calc(100%+2.5rem)]'

export default function Home() {
  return (
    <div className="w-full max-w-4xl text-pretty">
      {/* Hero — blush background from layout */}
      <section className="">
        <figure className={`${bleed} relative -mt-8 mb-7 overflow-hidden bg-white`}>
          <ParallaxImage
            src={images.homeHero}
            alt="Learners and educators collaborating, representing IEUK’s global English community"
            className="h-[min(58vw,320px)] w-full object-cover object-center sm:h-[360px]"
            width={1200}
            height={720}
            fetchPriority="high"
            decoding="async"
            strength={12}
          />
        </figure>

        <p className="mb-3 inline-block border-b-2 border-[#5d1420] pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5d1420]">
          International English UK
        </p>
        <h1 className="mb-4 text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl sm:leading-[1.12]">
          Empowering Global Communication through Excellence in{' '}
          <span className="text-[#5d1420]">English</span>
        </h1>
        <div className="mb-6 space-y-4 text-[15px] leading-relaxed text-neutral-700 sm:text-base">
          <p>
            International English UK (IEUK) is an international organisation dedicated to bridging cultures and opening
            doors through the mastery of English language around the world. Our organisation provides professional
            membership and world-class accreditation services to a global network of educators and institutions
            worldwide by upholding the global standard of British academic excellence.
          </p>
          <p>
            Our mission is to raise the bar for English language teaching and assessment through rigorous standards,
            continuous professional development, and a commitment to global educational integrity.
          </p>
          <p>
            English is more than just a language — it is a gateway to opportunity. We act as a guardian of quality so
            students, parents, and professionals can trust in the institutions and individuals that collaborate with
            IEUK. At IEUK, we are committed to <span className="font-semibold text-neutral-900">Quality</span>,{' '}
            <span className="font-semibold text-neutral-900">Empowering Educators</span>, and{' '}
            <span className="font-semibold text-neutral-900">Inspiring Learners</span>.
          </p>
        </div>
        <Link
          to="/membership"
          className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-[#5d1420] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-[background-color,transform] hover:bg-[#4a1019] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
        >
          Join IEUK
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>

        <figure className={`${bleed} mt-8 overflow-hidden bg-white`}>
          <ParallaxImage
            src={images.homeSecondary}
            alt="Academic excellence and quality learning environment"
            className="h-[min(60vw,320px)] w-full object-cover object-center sm:h-[400px]"
            width={1200}
            height={400}
            loading="lazy"
            decoding="async"
            strength={10}
          />
        </figure>
      </section>

      {/* Why IEUK — maroon band */}
      <div className={`${bleed} mb-10`}>
        <section
          className="rounded-none bg-[#60101d] px-5 py-10 text-white sm:rounded-2xl sm:px-8 sm:py-12"
          aria-labelledby="why-heading"
        >

          <div className="mt-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Our Core Values</p>
            <ul className="grid gap-5 sm:grid-cols-2">
              {(
                [
                  {
                    title: 'Integrity',
                    body:
                      'We act with transparency and hold ourselves, IEUK accredited institutions, and IEUK affiliated members to the highest ethical standards in every academic and professional interaction.',
                  },
                  {
                    title: 'Inclusivity',
                    body:
                      'We celebrate linguistic and cultural diversity. We welcome members from all backgrounds and believe that a global perspective is essential to effective communication.',
                  },
                  {
                    title: 'Innovation',
                    body:
                      'We embrace modern technology and contemporary research to ensure our methodologies remain relevant, engaging, and effective.',
                  },
                  {
                    title: 'Quality',
                    body:
                      'Excellence is non-negotiable. From our certification processes to our professional events, we strive for the highest possible quality in everything we do.',
                  },
                ] as const
              ).map(({ title, body }) => (
                <li key={title} className="relative pl-5">
                  <span className="absolute left-0 top-1 h-3.5 w-0.5 bg-white/85" aria-hidden />
                  <h3 className="mb-2 text-base font-bold tracking-tight text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/80">{body}</p>
                  <div className="mt-5 h-px w-full bg-white/10" aria-hidden />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Departments-style overlay cards */}
      <section
        className={`${bleed} mb-10 rounded-2xl border border-[#5d1420]/10 bg-white px-4 py-10 shadow-[0_12px_40px_rgba(93,20,32,0.06)] sm:px-6`}
        aria-labelledby="serve-heading"
      >
        <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#5d1420]">
          How we serve the industry
        </p>
        <h2 id="serve-heading" className="mb-8 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
          Excellence in <span className="text-[#5d1420]">every pillar</span>
        </h2>
        <div className="flex flex-col gap-5">
          {industryCards.map(({ n, title, body, to, pattern }) => (
            <Link
              key={n}
              to={to}
              className={[
                'group relative block min-h-[220px] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(93,20,32,0.15)] ring-1 ring-white/10 transition-[box-shadow,transform] duration-300 hover:shadow-[0_12px_36px_rgba(93,20,32,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]',
                industryCardSkin[pattern],
              ].join(' ')}
            >
              {pattern === 'stripes' && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.4] bg-[repeating-linear-gradient(125deg,rgba(255,255,255,0.07)_0,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_14px)]"
                  aria-hidden
                />
              )}
              {pattern === 'dots' && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1px,transparent_1.5px)] bg-[length:20px_20px]"
                  aria-hidden
                />
              )}
              {pattern === 'grid' && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.3] bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:28px_28px]"
                  aria-hidden
                />
              )}
              {pattern === 'aurora' && (
                <>
                  <div
                    className="pointer-events-none absolute -left-1/4 top-0 h-[120%] w-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,200,200,0.12)_0%,transparent_65%)] blur-2xl"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -right-1/4 bottom-0 h-[90%] w-[55%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(180,140,200,0.1)_0%,transparent_60%)] blur-2xl"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[repeating-conic-gradient(from_0deg_at_50%_50%,transparent_0_25deg,rgba(255,255,255,0.04)_25deg_26deg)]"
                    aria-hidden
                  />
                </>
              )}
              <div className="relative flex h-full min-h-[220px] flex-col justify-between p-5 text-white">
                <div className="flex items-start justify-between">
                  <span className="font-light tabular-nums text-5xl leading-none text-white/90 drop-shadow-sm">
                    {n}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#60101d] shadow-md transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold drop-shadow-sm">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/90">{body}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust — text-first; light structure only */}
      <section className="mb-10 mt-12 max-w-prose" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="mb-1 text-xl font-bold text-neutral-900">
          Building trust in a global market
        </h2>
        <div className="mb-6 h-px w-10 bg-[#5d1420]/35" aria-hidden />
        <div className="space-y-5 text-base leading-relaxed text-neutral-600">
          <p>
            In a crowded global English language education sector, IEUK functions as a primary reference for excellence,
            integrity, quality, and innovation.
          </p>
          <div className="space-y-4 border-l-2 border-[#5d1420]/20 pl-4">
            <p>
              <span className="font-semibold text-neutral-900">For Institutions:</span> Gain international recognition and
              competitive advantage by aligning with established British educational standards.
            </p>
            <p>
              <span className="font-semibold text-neutral-900">For Educators:</span> Access exclusive professional
              development, research, and collaborative networking opportunities.
            </p>
            <p>
              <span className="font-semibold text-neutral-900">For Students:</span> Feel confident choosing an IEUK
              accredited institution, knowing it meets our stringent quality benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative mb-10 overflow-hidden rounded-2xl border border-[#5d1420]/12 bg-gradient-to-b from-[var(--ieuk-blush)]/50 via-white to-white px-5 py-10 text-center shadow-[0_10px_36px_rgba(93,20,32,0.07)] sm:px-12 sm:py-11"
        aria-labelledby="cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5d1420]/20 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-lg">
          <h2 id="cta-heading" className="mb-2 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
            Elevate your professional journey today
          </h2>
          <div className="mx-auto mb-5 h-px w-12 bg-[#5d1420]/30" aria-hidden />
          <p className="mb-8 text-base leading-relaxed text-neutral-600">
            Join thousands of educators and institutions across the globe. Take the next step in your career and become
            part of the IEUK standard.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-[#5d1420]/28 bg-white/80 px-7 text-sm font-bold text-[#5d1420] backdrop-blur-[2px] transition-colors hover:border-[#5d1420]/45 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer band — maroon */}
      <div className={`${bleed} mt-4`}>
        <footer className="relative overflow-hidden rounded-none px-5 py-10 text-white sm:rounded-2xl sm:px-8">
          <ParallaxImage
            src={images.homeSpotlight}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
            loading="lazy"
            decoding="async"
            strength={24}
          />
          <div className="absolute inset-0 bg-[#60101d]/93" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              International English UK
            </p>
            <p className="mb-8 text-center text-sm leading-relaxed text-white/85">
              Committed to quality, empowering educators, and inspiring learners worldwide.
            </p>

            <div className="mb-8 flex justify-center gap-2">
              {(
                [
                  { href: 'https://facebook.com', label: 'Facebook', mark: 'f' },
                  { href: 'https://linkedin.com', label: 'LinkedIn', mark: 'in' },
                  { href: 'https://twitter.com', label: 'Twitter', mark: 'X' },
                  { href: 'https://youtube.com', label: 'YouTube', mark: '▶' },
                ] as const
              ).map(({ href, label, mark }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 min-w-10 items-center justify-center rounded border border-white/25 bg-white/10 px-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  aria-label={label}
                >
                  {mark}
                </a>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/90">Essential</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <Link className="text-white/85 hover:text-white" to="/about">
                  About Us
                </Link>
                <Link className="text-white/85 hover:text-white" to="/team">
                  Our Team
                </Link>
                <Link className="text-white/85 hover:text-white" to="/accreditation">
                  Accreditation
                </Link>
                <Link className="text-white/85 hover:text-white" to="/membership">
                  Membership
                </Link>
                <Link className="text-white/85 hover:text-white" to="/contact">
                  Contact
                </Link>
                <Link className="text-white/85 hover:text-white" to="/registry">
                  IEUK Registry
                </Link>
              </div>
            </div>

            <p className="border-t border-white/20 pt-6 text-center text-[11px] leading-relaxed text-white/65">
              © International English UK (IEUK). Registered in England &amp; Wales: 05120951. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
