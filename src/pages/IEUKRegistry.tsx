import PageShell from './PageShell'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'

export default function IEUKRegistry() {
  const accreditedRegions = [
    {
      title: 'Europe & UK (40 Centers)',
      items: [
        'London Academy of English (London, UK)',
        'Oxford Bridge International (Oxford, UK)',
        'Cambridge Excellence Centre (Cambridge, UK)',
        'Imperial English Study Centre (Birmingham, UK)',
        'Edinburgh Language Hub (Edinburgh, Scotland)',
        'Dublin City English Institute (Dublin, Ireland)',
        'Manchester International College (Manchester, UK)',
        'St. Andrews Language School (St. Andrews, Scotland)',
        'Bristol Global Education (Bristol, UK)',
        'Belfast British Academy (Belfast, NI)',
        'Paris Elite English (Paris, France)',
        'Berlin Language Hub (Berlin, Germany)',
        'Madrid Business English (Madrid, Spain)',
        'Rome International Scholars (Rome, Italy)',
        'Amsterdam English House (Amsterdam, Netherlands)',
        'Brighton Seafront School (Brighton, UK)',
        'Cardiff Elite Academy (Cardiff, Wales)',
        'Lisbon Language Park (Lisbon, Portugal)',
        'Vienna British Academy (Vienna, Austria)',
        'Prague Excellence Centre (Prague, Czech Rep)',
        'Liverpool Language Scholars (Liverpool, UK)',
        'Newcastle British Institute (Newcastle, UK)',
        'Sheffield Global English (Sheffield, UK)',
        'Glasgow West End English (Glasgow, Scotland)',
        'Stockholm British Institute (Stockholm, Sweden)',
        'Oslo Language Hub (Oslo, Norway)',
        'Copenhagen Elite English (Copenhagen, Denmark)',
        'Helsinki Global Scholars (Helsinki, Finland)',
        'Brussels International Academy (Brussels, Belgium)',
        'Zurich Language Park (Zurich, Switzerland)',
        'Athens British House (Athens, Greece)',
        'Warsaw Excellence Centre (Warsaw, Poland)',
        'Budapest English School (Budapest, Hungary)',
        'Milan Business Academy (Milan, Italy)',
        'Barcelona Language Hub (Barcelona, Spain)',
        'Lyon International Scholars (Lyon, France)',
        'Munich Global English (Munich, Germany)',
        'Geneva British Institute (Geneva, Switzerland)',
        'Reykjavik Language House (Reykjavik, Iceland)',
        'Luxembourg Elite Academy (Luxembourg City)',
      ],
    },
    {
      title: 'Middle East & Africa (30 Centers)',
      items: [
        'Dubai Global Education (Dubai, UAE)',
        'Riyadh Elite English (Riyadh, KSA)',
        'Cairo British Institute (Cairo, Egypt)',
        'Doha Excellence Academy (Doha, Qatar)',
        'Abu Dhabi Language Park (Abu Dhabi, UAE)',
        'Kuwait City Language House (Kuwait City, Kuwait)',
        'Muscat English Scholars (Muscat, Oman)',
        'Amman British Academy (Amman, Jordan)',
        'Istanbul Global English (Istanbul, Turkey)',
        'Cape Town Language Centre (Cape Town, South Africa)',
        'Johannesburg Elite Academy (Johannesburg, SA)',
        'Nairobi English Hub (Nairobi, Kenya)',
        'Lagos Excellence Academy (Lagos, Nigeria)',
        'Casablanca Language School (Casablanca, Morocco)',
        'Accra British Institute (Accra, Ghana)',
        'Beirut Language Hub (Beirut, Lebanon)',
        'Manama Global English (Manama, Bahrain)',
        'Jeddah Excellence Centre (Jeddah, KSA)',
        'Algiers British House (Algiers, Algeria)',
        'Tunis Language Park (Tunis, Tunisia)',
        'Dar es Salaam Academy (Tanzania)',
        'Luanda British Institute (Luanda, Angola)',
        'Kampala Global English (Kampala, Uganda)',
        'Addis Ababa Elite Academy (Ethiopia)',
        'Dakar Language Hub (Dakar, Senegal)',
        'Kigali British House (Kigali, Rwanda)',
        'Windhoek Language Park (Namibia)',
        'Maputo Excellence Centre (Mozambique)',
        'Harare British Institute (Harare, Zimbabwe)',
        'Mauritius Global Education (Port Louis)',
      ],
    },
    {
      title: 'Asia & Oceania (29 Centers)',
      items: [
        'Singapore Excellence Centre (Singapore)',
        'Tokyo British Academy (Tokyo, Japan)',
        'Seoul Global English (Seoul, South Korea)',
        'Sydney Excellence Academy (Sydney, Australia)',
        'Melbourne British School (Melbourne, Australia)',
        'Auckland Language Hub (Auckland, NZ)',
        'Hong Kong Elite English (Hong Kong, SAR)',
        'Kuala Lumpur Language Park (Malaysia)',
        'Cornerstone English Language Academy (Yangon, Myanmar)',
        'Bangkok English House (Bangkok, Thailand)',
        'Jakarta British School (Jakarta, Indonesia)',
        'Ho Chi Minh Global English (Vietnam)',
        'New Delhi Modern Academy (Delhi, India)',
        'Mumbai British Institute (Mumbai, India)',
        'Shanghai International Scholars (Shanghai, China)',
        'Beijing Excellence Academy (Beijing, China)',
        'Manila Elite English (Manila, Philippines)',
        'Taipei Global House (Taipei, Taiwan)',
        'Bangalore Language Park (Bangalore, India)',
        'Islamabad British Academy (Pakistan)',
        'Dhaka Excellence Centre (Bangladesh)',
        'Perth International Scholars (Australia)',
        'Brisbane Global English (Australia)',
        'Wellington English House (New Zealand)',
        'Colombo Language Hub (Sri Lanka)',
        'Hanoi British Institute (Vietnam)',
        'Osaka Elite Academy (Japan)',
        'Busan Global English (South Korea)',
        'Chennai Excellence Centre (India)',
      ],
    },
  ] as const

  const associateAndCorporateMembers = [
    'Abertay University (UK)',
    'Anglia Ruskin University (UK)',
    'Birmingham City University (UK)',
    'Coventry University (UK)',
    'Middlesex University London (UK)',
    'ELT Global Resources Ltd',
    'British TESOL Association',
    'UK Tours & Conferences Ltd',
    'Global Education Agents Network (GEAN)',
    'Hult International Business School',
    'Oxford Brookes University',
    'King’s College London (Affiliate)',
    'University of Reading (Affiliate)',
    'Leeds Beckett University',
    'University of Portsmouth',
    'Salford University',
    'Sheffield Hallam University',
    'Queen Mary University London',
    'University of Bristol (Affiliate)',
    'Swansea University',
    'Bangor University',
    'University of Glasgow (Affiliate)',
    'Goldsmiths, University of London',
    'Ravensbourne University London',
    'Birkbeck, University of London',
    'Global Apprenticeship Network',
    'International Organisation of Employers',
    'Confédération Générale des Entreprises Algériennes',
    'Ghana Employers’ Association',
    'Federation of Kenya Employers',
    'World 50 Group (Executive Partner)',
    'Procurement Leaders Network',
    'English UK News Syndicate',
    'BONARD Global Research',
    'British Council Accredited Partners Hub',
    'International Internal Communication Institute',
    'Global Migration & Development Mechanism',
    'Academic Integrity Watchdog (Global)',
    'Digital Credential Security Alliance',
    'AI in ELT Research Group',
    'Sustainable Education Network',
    'Aviation English Regulatory Body',
    'Maritime English Global Group',
    'Business Mauritius (Corporate Member)',
    'Confederation of Ethiopian Employers',
    'Lagos Business School Alumni',
    'Dubai Knowledge Park Affiliates',
    'Singapore Education Hub Council',
    'Australian International Education Association',
    'IEUK Global Alumni Leadership Board',
  ] as const

  return (
    <PageShell title="">
      <section className="ieuk-reveal space-y-6 py-2 [--ieuk-delay:120ms] lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-10 lg:space-y-0">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            Registry of IEUK Accredited Institutions and Members
          </h2>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            As International English UK (IEUK) continues its rapid global
            expansion worldwide, our registry now encompasses a diverse
            ecosystem of elite teaching centers, university partners, and
            corporate members by reflecting our commitment to the highest
            British pedagogical standards around the world.
          </p>
        </div>

        <figure className="ieuk-frame overflow-hidden bg-white shadow-[0_12px_40px_rgba(93,20,32,0.10)] lg:justify-self-end">
          <ParallaxImage
            src={images.registryHero}
            alt="IEUK Registry — secure record keeping and services"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            strength={0}
          />
        </figure>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:160ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            List of IEUK Accredited Institutions
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
        </div>

        <p className="max-w-prose text-neutral-700">
          ​These institutions listed here below have successfully completed IEUK
          full inspection and accreditation process. They meet the highest
          standards for curriculum, faculty qualifications, student welfare, and
          management.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
              Status
            </p>
            <p className="mt-2 text-base font-semibold text-neutral-950">
              ​Fully Validated
            </p>
          </section>

          <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
              Privileges
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              ​Authorized to use IEUK logo and display IEUK Accredited logo for
              self-branding and advertisement under permission
            </p>
          </section>
        </div>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:200ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Europe, Middle East, Africa, Asia & Oceania
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            Browse the accredited institutions by region. Each list is numbered
            for easy reference.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {accreditedRegions.map(({ title, items }) => (
            <section
              key={title}
              className="bg-white/70 p-4 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10"
            >
              <p className="mb-3 font-semibold text-neutral-950">{title}</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="w-14 border border-[#5d1420]/15 bg-white/60 px-3 py-2 font-semibold text-neutral-950">
                        #
                      </th>
                      <th className="border border-[#5d1420]/15 bg-white/60 px-3 py-2 font-semibold text-neutral-950">
                        Center
                      </th>
                      <th className="hidden border border-[#5d1420]/15 bg-white/60 px-3 py-2 font-semibold text-neutral-950 sm:table-cell">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    {items.map((raw, idx) => {
                      const match = raw.match(/^(.*)\s\((.*)\)$/)
                      const center = match?.[1] ?? raw
                      const location = match?.[2] ?? ''
                      return (
                        <tr key={raw}>
                          <td className="border border-[#5d1420]/15 px-3 py-2 align-top text-neutral-600">
                            {idx + 1}
                          </td>
                          <td className="border border-[#5d1420]/15 px-3 py-2 align-top">
                            <p className="font-medium text-neutral-950">
                              {center}
                            </p>
                            {location ? (
                              <p className="mt-0.5 text-xs text-neutral-600 sm:hidden">
                                {location}
                              </p>
                            ) : null}
                          </td>
                          <td className="hidden border border-[#5d1420]/15 px-3 py-2 align-top sm:table-cell">
                            {location}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:240ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            List of IEUK Associate and Corporate Members
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
        </div>

        <p className="max-w-prose text-neutral-700">
          ​These educational organizations and service providers listed here
          below that support IEUK mission globally and are in &quot;Good
          Standing&quot;, but they do not provide direct English language tuition
          under IEUK accreditation framework.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
              Status
            </p>
            <p className="mt-2 text-base font-semibold text-neutral-950">
              ​Member in &quot;Good Standing&quot;
            </p>
          </section>

          <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
              Privileges
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Authorized to use IEUK logo for self-branding and advertisement
              under permission
            </p>
          </section>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
          <ol className="list-decimal space-y-1 pl-5 text-sm text-neutral-700 lg:columns-2 lg:gap-10">
            {associateAndCorporateMembers.map((name) => (
              <li key={name} className="break-inside-avoid">
                {name}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:280ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Security &amp; Anti-Fraud Protection
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
        </div>

        <p className="max-w-prose text-neutral-700">
          ​IEUK Registry is designed to protect institutional reputations and
          prevent the circulation of fraudulent credentials for educational
          verification.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
              Encrypted Database
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              ​IEUK Registry is hosted on a secure, encrypted cloud
              infrastructure with <span className="font-semibold">AES-256</span>{' '}
              standard data protection.
            </p>
          </section>

          <section className="rounded-2xl bg-white/70 p-5 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/70">
              Real-Time Sync
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Real-Time Sync: IEUK Registry is up to date instantly as soon as
              IEUK Authorities finalize a status change, ensuring no &quot;lag&quot;
              between a revocation and its public visibility.
            </p>
          </section>
        </div>

        <section className="rounded-2xl border border-[#5d1420]/15 bg-[#5d1420]/[0.035] p-5 text-sm text-neutral-800">
          <p className="font-semibold text-neutral-950">
            ⚠ Notice to Stakeholders:
          </p>
          <p className="mt-2 leading-relaxed text-neutral-700">
            ​If an institution claims IEUK accreditation or membership, but does
            not appear in this registry, please report it immediately to{' '}
            <a
              href="mailto:contact@ieuk.org"
              className="font-semibold text-[#5d1420] underline decoration-[#5d1420]/30 underline-offset-4 hover:decoration-[#5d1420]/60"
            >
              contact@ieuk.org
            </a>
            . All reports are handled with strict confidentiality.
          </p>
        </section>
      </section>
    </PageShell>
  )
}
