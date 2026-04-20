import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, Shield, Sparkles, Users } from 'lucide-react'
import { images } from '../data/images'

const coreValues = [
  {
    title: 'Integrity',
    body:
      'We act with transparency and hold ourselves, IEUK accredited institutions, and IEUK affiliated members to the highest ethical standards in every academic and professional interaction.',
    Icon: Shield,
  },
  {
    title: 'Inclusivity',
    body:
      'We celebrate linguistic and cultural diversity. We welcome members from all backgrounds and believe that a global perspective is essential to effective communication.',
    Icon: Users,
  },
  {
    title: 'Innovation',
    body:
      'We embrace modern technology and contemporary research to ensure our methodologies remain relevant, engaging, and effective.',
    Icon: Sparkles,
  },
  {
    title: 'Quality',
    body:
      'Excellence is non-negotiable. From our certification processes to our professional events, we strive for the highest possible quality in everything we do.',
    Icon: Award,
  },
] as const

const industryCards = [
  {
    n: '01',
    title: 'Accreditation',
    body:
      'We rigorously assess and certify English language schools and programs against high-quality benchmarks.',
    to: '/accreditation',
    img: images.homeHero,
    imgClass: 'object-center',
  },
  {
    n: '02',
    title: 'Membership',
    body:
      'We provide a network for educators and institutions to share resources, best practices, and industry updates.',
    to: '/membership',
    img: images.homeSecondary,
    imgClass: 'object-center',
  },
  {
    n: '03',
    title: 'Quality Assurance',
    body:
      'We enforce standards that ensure learners receive consistent, world-class English instruction.',
    to: '/accreditation',
    img: images.homeSpotlight,
    imgClass: 'object-[center_30%]',
  },
  {
    n: '04',
    title: 'Advocacy',
    body: "We represent our members' interests in the global educational landscape.",
    to: '/about',
    img: images.homeSecondary,
    imgClass: 'object-[center_70%]',
  },
] as const

/** Bleed to main horizontal padding (px-4 / sm:px-5) */
const bleed =
  'relative -mx-4 w-[calc(100%+2rem)] sm:-mx-5 sm:w-[calc(100%+2.5rem)]'

export default function Home() {
  return (
    <div className="w-full max-w-4xl text-pretty">
      {/* Hero — blush background from layout */}
      <section className="mb-10">
        <p className="mb-3 inline-block border-b-2 border-[#5d1420] pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5d1420]">
          International English UK
        </p>
        <h1 className="mb-4 max-w-xl text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl sm:leading-[1.12]">
          Empowering Global Communication through Excellence in{' '}
          <span className="text-[#5d1420]">English</span>
        </h1>
        <p className="mb-6 max-w-xl text-base leading-relaxed text-neutral-600">
          International English UK (IEUK) is an international organisation dedicated to bridging cultures and
          opening doors through the mastery of English language around the world. Our organisation provides
          professional membership and world-class accreditation services to a global network of educators and
          institutions worldwide by upholding the global standard of British academic excellence.
        </p>
        <Link
          to="/membership"
          className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-[#5d1420] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-[background-color,transform] hover:bg-[#4a1019] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
        >
          Join IEUK
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>

        <div className="relative mx-auto mt-10 flex max-w-md justify-center pb-4 pt-2">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%]"
            aria-hidden
          >
            <div className="h-[min(78vw,320px)] w-[min(78vw,320px)] rounded-full bg-white shadow-[0_12px_40px_rgba(93,20,32,0.08)]" />
          </div>
          <img
            src={images.homeHero}
            alt="Learners and educators collaborating, representing IEUK’s global English community"
            className="relative z-10 max-h-[min(64vw,300px)] w-auto rounded-2xl object-cover object-center shadow-md sm:max-h-[320px]"
            width={600}
            height={400}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      {/* Why IEUK — maroon band */}
      <div className={`${bleed} mb-10`}>
        <section
          className="rounded-none bg-[#60101d] px-5 py-10 text-white sm:rounded-2xl sm:px-8 sm:py-12"
          aria-labelledby="why-heading"
        >
          <p className="mb-2 inline-block border-b border-white/90 pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95">
            Why choose IEUK
          </p>
          <h2 id="why-heading" className="mb-8 max-w-xl text-2xl font-bold leading-snug sm:text-3xl">
            One trusted standard for English teaching, assessment, and global recognition.
          </h2>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Our mission is to raise the bar for English language teaching and assessment through rigorous standards,
            continuous professional development, and a commitment to global educational integrity. English is more
            than just a language — it is a gateway to opportunity. We act as a guardian of quality so students,
            parents, and professionals can trust IEUK accredited institutions and members.
          </p>
          <p className="mb-10 text-center text-lg font-semibold text-white sm:text-left">
            Quality · Empowering Educators · Inspiring Learners
          </p>

          <ul className="grid gap-4 sm:grid-cols-2">
            {coreValues.map(({ title, body, Icon }) => (
              <li
                key={title}
                className="flex flex-col items-center rounded-xl border border-white/25 bg-white/[0.06] px-5 py-6 text-center sm:items-start sm:text-left"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/40">
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.25} aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{body}</p>
              </li>
            ))}
          </ul>
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
          {industryCards.map(({ n, title, body, to, img, imgClass }) => (
            <Link
              key={n}
              to={to}
              className="group relative block min-h-[220px] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(93,20,32,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
            >
              <img
                src={img}
                alt=""
                className={`absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-500 group-hover:scale-110 ${imgClass}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#60101d]/95 via-[#60101d]/65 to-[#60101d]/35" />
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

      {/* Trust + secondary visual */}
      <section className="mb-10 mt-12 space-y-5" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="text-xl font-bold text-neutral-900">
          Building trust in a global market
        </h2>
        <p className="text-base leading-relaxed text-neutral-600">
          In a crowded global English language education sector, IEUK functions as a primary reference for excellence,
          integrity, quality, and innovation.
        </p>
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {(
            [
              {
                title: 'For Institutions',
                body:
                  'Gain international recognition and competitive advantage by aligning with established British educational standards.',
              },
              {
                title: 'For Educators',
                body:
                  'Access exclusive professional development, research, and collaborative networking opportunities.',
              },
              {
                title: 'For Students',
                body:
                  'Feel confident choosing an IEUK accredited institution, knowing it meets our stringent quality benchmarks.',
              },
            ] as const
          ).map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#5d1420]/12 bg-white/70 p-5 shadow-sm sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#5d1420]" aria-hidden />
                <p className="text-sm font-bold text-neutral-900">{title}</p>
              </div>
              <p className="text-sm leading-relaxed text-neutral-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <figure className="mb-10 overflow-hidden rounded-2xl border border-[#5d1420]/10 bg-white shadow-md">
        <img
          src={images.homeSecondary}
          alt="Books and study materials representing academic quality"
          className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/9]"
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
        />
      </figure>

      {/* CTA */}
      <section
        className="mb-10 rounded-2xl border border-[#5d1420]/15 bg-white px-5 py-9 text-center shadow-[0_8px_30px_rgba(93,20,32,0.08)] sm:px-10"
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="mb-3 text-xl font-bold text-neutral-900 sm:text-2xl">
          Elevate your professional journey today
        </h2>
        <p className="mb-8 text-base leading-relaxed text-neutral-600">
          Join thousands of educators and institutions across the globe. Take the next step in your career and become
          part of the IEUK standard.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/membership"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#5d1420] px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#4a1019] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
          >
            Explore membership
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-[#5d1420]/30 bg-transparent px-6 text-sm font-bold text-[#5d1420] transition-colors hover:bg-[#5d1420]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Footer band — maroon */}
      <div className={`${bleed} mt-4`}>
        <footer className="relative overflow-hidden rounded-none px-5 py-10 text-white sm:rounded-2xl sm:px-8">
          <img
            src={images.homeSpotlight}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
            loading="lazy"
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
