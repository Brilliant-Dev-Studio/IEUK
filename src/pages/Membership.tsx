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
import Seo from '../components/Seo'

export default function Membership() {
  const benefits = [
    {
      n: '1',
      title: 'Global Credibility & Brand Prestige',
      Icon: Globe,
      body: 'Membership is a testament to your commitment to quality. As an IEUK member, you gain the right to feature our branding across your marketing materials, signaling to students, parents, and partners worldwide that your institution upholds the highest standards of English language education.',
      bullets: [],
    },
    {
      n: '2',
      title: 'Networking & Collaboration',
      Icon: Handshake,
      body: 'Join a vibrant, international community of educators, language school owners, and industry leaders.',
      bullets: [
        'Exclusive Events: Attend member-only conferences, workshops, and networking sessions.',
        'Knowledge Exchange: Share best practices, solve common challenges, and foster partnerships with institutions across five continents.',
      ],
    },
    {
      n: '3',
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
      n: '4',
      title: 'Industry Advocacy & Insights',
      Icon: BadgeCheck,
      body: 'Stay ahead of the curve. IEUK monitors global education trends, legislative changes, and market shifts to keep our members informed.',
      bullets: [
        'Market Research: Receive periodic industry reports, statistical analyses, and trend forecasts to help you make data-driven decisions.',
        'Advocacy: We represent our members’ collective interests to national and international education bodies, ensuring your voice is heard where it matters most.',
      ],
    },
    {
      n: '5',
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
      <Seo
        title="Membership"
        description="Join IEUK’s professional membership network to gain global credibility, collaboration opportunities, and resources designed to help your institution thrive."
        path="/membership"
      />
      <section className="">
        <div className="ieuk-reveal grid gap-5 py-2 [--ieuk-delay:120ms] md:grid-cols-2 md:items-start md:gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
              Elevate Your Institution: The Benefits of IEUK Membership
            </h2>
            <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
            <p className="w-full max-w-none text-neutral-700">
              At International English UK (IEUK), we believe that education is
              stronger when we work together. By joining our professional
              membership network, you align your organisation with a global
              standard of British academic quality and gain access to a suite of
              professional resources designed to help your institution thrive.
            </p>
          </div>

          <figure className="ieuk-frame overflow-hidden shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
            <ParallaxImage
              src={images.membershipHero}
              alt="IEUK membership benefits and professional development network"
              className="h-[240px] w-full !bg-transparent object-cover object-center sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px]"
              width={1200}
              height={720}
              loading="lazy"
              decoding="async"
              strength={0}
            />
          </figure>
        </div>

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
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-950">
                    {bullets.map((item) => {
                      const colonIndex = item.indexOf(':')
                      const hasPrefix = colonIndex !== -1
                      const prefix = hasPrefix ? item.slice(0, colonIndex + 1) : ''
                      const rest = hasPrefix ? item.slice(colonIndex + 1).trimStart() : item

                      return (
                        <li key={item} className="flex gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950/70"
                            aria-hidden
                          />
                          <span>
                            {hasPrefix ? (
                              <>
                                <span className="font-semibold">{prefix}</span>{' '}
                                {rest}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </li>
                      )
                    })}
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

          <section
            className="ieuk-reveal mt-8 space-y-8 text-sm leading-relaxed text-neutral-700 [--ieuk-delay:220ms]"
            aria-labelledby="membership-policy-heading"
          >
            <div className="space-y-2">
              <h3
                id="membership-policy-heading"
                className="text-lg font-semibold tracking-tight text-neutral-950"
              >
                IEUK Membership Policy
              </h3>
              <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
            </div>

            <section aria-labelledby="membership-policy-admission">
              <h4
                id="membership-policy-admission"
                className="flex items-baseline gap-2 text-base font-semibold tracking-tight text-neutral-950"
              >
                <span className="shrink-0 text-[#5d1420]" aria-hidden>
                  ◆
                </span>
                Admission Requirements
              </h4>
              <p className="mt-2">
                To qualify for membership, applicants must provide:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                <li>
                  <span className="font-semibold text-neutral-950">
                    Evidence of Status:
                  </span>{' '}
                  Proof of legal registration as an educational or professional
                  entity.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    Quality Commitment:
                  </span>{' '}
                  A signed statement agreeing to uphold IEUK Code of Practice.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    Reference Checks:
                  </span>{' '}
                  At least two professional references from within English Language
                  Teaching (ELT) sector.
                </li>
              </ul>
            </section>

            <section aria-labelledby="membership-policy-standards">
              <h4
                id="membership-policy-standards"
                className="flex items-baseline gap-2 text-base font-semibold tracking-tight text-neutral-950"
              >
                <span className="shrink-0 text-[#5d1420]" aria-hidden>
                  ◆
                </span>
                Core Standards &amp; Quality Assurance
              </h4>
              <p className="mt-2">
                All members must adhere to the following pillars:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                <li>
                  <span className="font-semibold text-neutral-950">
                    Management &amp; Administration:
                  </span>{' '}
                  Transparent governance and ethical business practices.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    Teaching &amp; Learning:
                  </span>{' '}
                  Curriculums must meet international frameworks (CEFR).
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    Student Welfare:
                  </span>{' '}
                  Safe environments and clear grievance procedures for all learners.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    Professionalism:
                  </span>{' '}
                  Staff must hold recognized qualifications for their respective roles.
                </li>
              </ul>
            </section>

            <section aria-labelledby="membership-policy-rights">
              <h4
                id="membership-policy-rights"
                className="flex items-baseline gap-2 text-base font-semibold tracking-tight text-neutral-950"
              >
                <span className="shrink-0 text-[#5d1420]" aria-hidden>
                  ◆
                </span>
                Rights and Benefits
              </h4>
              <div className="mt-3 grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1fr)_220px] md:gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
                <ul className="list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                  <li>
                    <span className="font-semibold text-neutral-950">
                      IEUK Member Logo:
                    </span>{' '}
                    IEUK affiliated members may display our seal or logo &quot;IEUK
                    Member&quot; on marketing materials to signify quality.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-950">
                      Global Networking:
                    </span>{' '}
                    Access to members-only forums, webinars, and international
                    conferences.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-950">
                      Professional Development:
                    </span>{' '}
                    Discounted rates for IEUK-led training and certification programs.
                  </li>
                  <li>
                    <span className="font-semibold text-neutral-950">Advocacy:</span>{' '}
                    Representation in global discussions regarding language education
                    policy.
                  </li>
                </ul>
                <div className="mx-auto w-full max-w-[240px] md:mx-0 md:max-w-none md:justify-self-end">
                  <img
                    src={images.membershipMemberSeal}
                    alt="IEUK Member gold seal — official mark for approved marketing use"
                    width={240}
                    height={240}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="membership-policy-termination">
              <h4
                id="membership-policy-termination"
                className="flex items-baseline gap-2 text-base font-semibold tracking-tight text-neutral-950"
              >
                <span className="shrink-0 text-[#5d1420]" aria-hidden>
                  ◆
                </span>
                Termination of Membership
              </h4>
              <p className="mt-2">
                Membership may be suspended or revoked if a member:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                <li>
                  Fails to maintain the required quality standards during a
                  re-inspection.
                </li>
                <li>Engages in unethical marketing or fraudulent activities.</li>
                <li>
                  Fails to pay annual membership dues within 60 days of the invoice
                  date.
                </li>
              </ul>
            </section>

            <figure className="ieuk-frame mt-8 overflow-hidden shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
              <ParallaxImage
                src={images.membershipPolicyOffice}
                alt="IEUK office — team working with IEUK branding and modern workspace"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                strength={0}
              />
            </figure>
          </section>

          <section
            className="ieuk-reveal mt-10 space-y-8 text-sm leading-relaxed text-neutral-700 [--ieuk-delay:240ms]"
            aria-labelledby="code-of-ethics-heading"
          >
            <div className="space-y-2">
              <h3
                id="code-of-ethics-heading"
                className="text-lg font-semibold tracking-tight text-neutral-950"
              >
                IEUK International Code of Ethics
              </h3>
              <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
            </div>

            <section aria-labelledby="code-ethics-part1">
              <h4
                id="code-ethics-part1"
                className="flex items-baseline gap-2 text-base font-semibold tracking-tight text-neutral-950"
              >
                <span className="shrink-0 text-[#5d1420]" aria-hidden>
                  ◆
                </span>
                Part 1: Professional Code of Conduct
              </h4>
              <p className="mt-2">
                IEUK focuses on the character and ethical behavior of the institution
                and its staff:
              </p>
              <div className="mt-5 space-y-6">
                <div>
                  <p className="font-semibold text-neutral-950">
                    1. Integrity and Transparency
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Honest Marketing:
                      </span>{' '}
                      All promotional materials must be accurate and not to mislead
                      students regarding course outcomes, costs, or visa success rates.
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Conflict of Interest:
                      </span>{' '}
                      All IEUK members must disclose any relationships that could
                      compromise the impartiality of student assessments or business
                      dealings.
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Financial Probity:
                      </span>{' '}
                      Maintain clear financial records and provide students with
                      transparent refund and cancellation policies.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">2. Mutual Respect</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Non-Discrimination:
                      </span>{' '}
                      Foster an environment free from harassment, bullying, and
                      discrimination.
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Professionalism:
                      </span>{' '}
                      Staff must interact with students and colleagues with the highest
                      level of courtesy and professional boundaries.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">3. Compliance</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                    <li>
                      <span className="font-semibold text-neutral-950">Local Laws:</span>{' '}
                      Abide by all national regulations, including labor laws, data
                      protection, and health and safety requirements.
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">Brand Usage:</span>{' '}
                      Use &quot;IEUK Member&quot; logo only as permitted and immediately
                      ceases use if membership is suspended or terminated.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="code-ethics-part2">
              <h4
                id="code-ethics-part2"
                className="flex items-baseline gap-2 text-base font-semibold tracking-tight text-neutral-950"
              >
                <span className="shrink-0 text-[#5d1420]" aria-hidden>
                  ◆
                </span>
                Part 2: Code of Practice
              </h4>
              <p className="mt-2">
                IEUK focuses on the operational standards for delivering quality
                education:
              </p>
              <div className="mt-5 space-y-6">
                <div>
                  <p className="font-semibold text-neutral-950">
                    1. Teaching and Learning
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Qualified Staff:
                      </span>{' '}
                      Teachers must hold a minimum recognized qualification (e.g.,
                      CELTA, Trinity CertTESOL, or equivalent to any relevant degree in
                      education).
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Syllabus Standards:
                      </span>{' '}
                      Courses must be mapped to CEFR (Common European Framework of
                      Reference for Languages).
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Assessment Integrity:
                      </span>{' '}
                      Implement rigorous, secure testing protocols to ensure certificates
                      accurately reflect a student&apos;s proficiency.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    2. Student Support and Welfare
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                    <li>
                      <span className="font-semibold text-neutral-950">Induction:</span>{' '}
                      Provide every student with a comprehensive orientation regarding
                      their course, school rules, and local emergency procedures.
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Feedback Loops:
                      </span>{' '}
                      Maintain a formal system for gathering student feedback and a
                      clear, documented grievance procedure for complaints.
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">Safeguarding:</span>{' '}
                      For institutions enrolling minors (under 18), a robust Child
                      Protection Policy and background checks for all staff are mandatory.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    3. Continuous Improvement
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                    <li>
                      <span className="font-semibold text-neutral-950">
                        Staff Development:
                      </span>{' '}
                      Provide teachers with at least 10 hours of CPD (Continuous
                      Professional Development) annually.
                    </li>
                    <li>
                      <span className="font-semibold text-neutral-950">Resources:</span>{' '}
                      Regularly update learning materials, digital libraries, and
                      classroom technology to meet modern educational standards.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="code-ethics-part3">
              <h4
                id="code-ethics-part3"
                className="flex items-baseline gap-2 text-base font-semibold tracking-tight text-neutral-950"
              >
                <span className="shrink-0 text-[#5d1420]" aria-hidden>
                  ◆
                </span>
                Part 3: Monitoring and Enforcement
              </h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-neutral-950/60">
                <li>
                  <span className="font-semibold text-neutral-950">
                    Self-Assessment:
                  </span>{' '}
                  All IEUK members must submit an annual &quot;Statement of
                  Compliance.&quot;
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">Spot Checks:</span>{' '}
                  IEUK reserves the right to conduct unannounced virtual or physical
                  inspections if a breach is reported.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">Sanctions:</span>{' '}
                  Minor breaches result in a &quot;Notice to Improve.&quot; Serious or
                  repeated violations lead to immediate membership revocation.
                </li>
              </ul>
            </section>
          </section>

          <figure className="ieuk-frame mt-8 overflow-hidden shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
            <ParallaxImage
              src={images.membershipTiers}
              alt="Membership tiers overview table"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
              strength={0}
            />
          </figure>

          <p className="text-center text-base italic leading-relaxed text-neutral-700">
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

            <div className="relative mt-8 border-t border-white/15 pt-5 text-sm text-white/80">
              <p>
                © International English UK (IEUK) Committed to Quality, Empowering
                Educators, Inspiring Learners. Membership Inquiries:{' '}
                <a
                  href="mailto:contact@ieuk.org"
                  className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white/70"
                >
                  contact@ieuk.org
                </a>
              </p>
              
            </div>
          </section>
        </section>
      </section>
    </PageShell>
  )
}
