import PageShell from './PageShell'
import {
  BadgeCheck,
  BookOpenCheck,
  Globe,
  Handshake,
  LayoutPanelLeft,
} from 'lucide-react'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'

export default function Membership() {
  const bleed =
    'relative -mx-4 w-[calc(100%+2rem)] sm:-mx-5 sm:w-[calc(100%+2.5rem)] md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-[50px] lg:w-[calc(100%+100px)]'

  const bleedLg =
    'lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:w-screen'

  const benefits = [
    {
      n: '01',
      title: 'Global Credibility & Brand Prestige',
      Icon: Globe,
      body: 'Membership is a testament to your commitment to quality. As an IEUK member, you gain the right to feature our branding across your marketing materials, signaling to students, parents, and partners worldwide that your institution upholds the highest standards of English language education.',
      bullets: [],
    },
    {
      n: '02',
      title: 'Networking & Collaboration',
      Icon: Handshake,
      body: 'Join a vibrant, international community of educators, language school owners, and industry leaders.',
      bullets: [
        'Exclusive Events: Attend member-only conferences, workshops, and networking sessions.',
        'Knowledge Exchange: Share best practices, solve common challenges, and foster partnerships with institutions across five continents.',
      ],
    },
    {
      n: '03',
      title: 'Professional Development',
      Icon: BookOpenCheck,
      body: 'We are committed to the growth of our members. Our platform provides:',
      bullets: [
        'Training Resources: Access to exclusive webinars, teaching modules, and pedagogical resources.',
        'Workshops: Discounted entry to industry-leading professional development seminars.',
        'Certification: Opportunities for staff to earn recognition under IEUK professional framework.',
      ],
    },
    {
      n: '04',
      title: 'Industry Advocacy & Insights',
      Icon: BadgeCheck,
      body: 'Stay ahead of the curve. IEUK monitors global education trends, legislative changes, and market shifts to keep our members informed.',
      bullets: [
        'Market Research: Receive periodic industry reports, statistical analyses, and trend forecasts to help you make data-driven decisions.',
        'Advocacy: We represent our members’ collective interests to national and international education bodies, ensuring your voice is heard where it matters most.',
      ],
    },
    {
      n: '05',
      title: 'Operational Support & Resources',
      Icon: LayoutPanelLeft,
      body: 'Running an educational institution is complex. IEUK members benefit from:',
      bullets: [
        'Best-Practice Templates: Access to contract templates, policy guidelines, and administrative tools.',
        'Member Directory: A prominent listing in our official online directory, increasing your visibility to prospective students globally.',
        'Specialized Guidance: Direct access to consultation on quality assurance and operational compliance.',
      ],
    },
  ] as const

  return (
    <PageShell title="">
      <section className="">
        <section className="ieuk-reveal space-y-4 py-2 [--ieuk-delay:120ms]">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            Elevate Your Institution: The Benefits of IEUK Membership
          </h2>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            At International English UK (IEUK), we believe that education is
            stronger when we work together. By joining our professional
            membership network, you align your organisation with a global
            standard of British academic quality and gain access to a suite of
            professional resources designed to help your institution thrive.
          </p>
        </section>

        <figure className={`${bleed} ${bleedLg} relative mt-6 overflow-hidden bg-white`}>
          <ParallaxImage
            src={images.membershipHero}
            alt="IEUK membership benefits and professional development network"
            className="w-full h-auto object-contain bg-white"
            width={1200}
            height={720}
            loading="lazy"
            decoding="async"
            strength={0}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent"
            aria-hidden
          />
        </figure>

        <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:160ms]">
          <div className="space-y-2">
            
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
              Why Become an IEUK Member?
            </h3>
            <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {benefits.map(({ n, title, body, bullets, Icon }) => (
              <section
                key={n}
                className="relative overflow-hidden rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10"
                aria-label={title}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5d1420]/20 to-transparent"
                  aria-hidden
                />
                <header className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#5d1420] text-sm font-bold text-white shadow-sm">
                    {n}
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold tracking-tight text-neutral-950">
                      {title}
                    </p>
                  </div>
                  <span
                    className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#5d1420]/10 text-[#5d1420] ring-1 ring-[#5d1420]/15"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </header>

                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  {body}
                </p>

                {bullets.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
                    {bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5d1420]/60" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </section>

        <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:200ms]">
          <div className="space-y-2">
          
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
              Membership Tiers
            </h3>
            <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
            <p className="max-w-prose text-neutral-700">
              We offer tailored membership categories to suit the needs of different providers:
            </p>
          </div>

          <div className="bg-white/70 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="whitespace-nowrap border border-[#5d1420]/15 bg-white/60 px-5 py-4 text-sm font-semibold text-neutral-950">
                      Tier
                    </th>
                    <th className="whitespace-nowrap border border-[#5d1420]/15 bg-white/60 px-5 py-4 text-sm font-semibold text-neutral-950">
                      Best For
                    </th>
                    <th className="whitespace-nowrap border border-[#5d1420]/15 bg-white/60 px-5 py-4 text-sm font-semibold text-neutral-950">
                      Key Features
                    </th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  {(
                    [
                      {
                        tier: 'Institutional',
                        bestFor: 'Language Schools & Universities',
                        features:
                          'Full accreditation support, directory listing, voting rights, and market data.',
                      },
                      {
                        tier: 'Professional',
                        bestFor: 'Individual Educators & Consultants',
                        features:
                          'Access to training, events, and a network of peers.',
                      },
                      {
                        tier: 'Associate',
                        bestFor: 'Industry Suppliers & Partners',
                        features:
                          'Opportunities to engage with our network and promote relevant services.',
                      },
                    ] as const
                  ).map(({ tier, bestFor, features }) => (
                    <tr key={tier}>
                      <td className="border border-[#5d1420]/15 px-5 py-4 align-top font-semibold text-neutral-950">
                        {tier}
                      </td>
                      <td className="border border-[#5d1420]/15 px-5 py-4 align-top">
                        {bestFor}
                      </td>
                      <td className="border border-[#5d1420]/15 px-5 py-4 align-top">
                        {features}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="ieuk-frame overflow-hidden shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
            <ParallaxImage
              src={images.membershipTiers}
              alt="Membership tiers overview table"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
              strength={0}
            />
          </figure>

          <p className="text-base leading-relaxed text-neutral-700">
            &quot;Our strength lies in our community. Join IEUK and connect with
            the world’s most dedicated English language professionals.&quot;
          </p>

          <section className="relative overflow-hidden rounded-2xl bg-[#60101d] px-5 py-8 text-white shadow-[0_14px_48px_rgba(93,20,32,0.22)] sm:px-6 sm:py-9">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1.2px)] [background-size:22px_22px]"
              aria-hidden
            />

            <div className="relative space-y-3">
              <p className="text-lg font-semibold tracking-tight text-white">
                Join IEUK Community Today!
              </p>
              <p className="text-sm leading-relaxed text-white/85">
                Ready to invest in your institution’s future and be part of a
                global movement for excellence in English language education!
              </p>
            </div>
          </section>
        </section>
      </section>
    </PageShell>
  )
}
