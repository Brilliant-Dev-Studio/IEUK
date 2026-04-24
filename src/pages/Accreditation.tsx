import PageShell from "./PageShell";
import { Check } from "lucide-react";
import ParallaxImage from "../components/ParallaxImage";
import PatternCard from "../components/PatternCard";
import { images } from "../data/images";
import Seo from "../components/Seo";

export default function Accreditation() {
  const card = "ieuk-reveal py-2 [--ieuk-delay:120ms]";

  return (
    <PageShell title="">
      <Seo
        title="Accreditation"
        description="IEUK accreditation is a transparent, evidence-based process that evaluates curriculum, faculty expertise, student support, and operational standards."
        path="/accreditation"
      />
      <section
        className={`${card} space-y-6 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-10 lg:space-y-0`}
      >
        <div className="space-y-5 lg:col-start-1 lg:row-start-1">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
              Accreditation at IEUK: The Global Mark of Quality
            </h2>
            <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          </div>

          <div className="space-y-4 text-neutral-700">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
              Why Seek IEUK Accreditation?
            </h3>
            <p>
              In the global landscape of English language education, trust is
              paramount. IEUK accreditation provides institutions with an
              internationally recognized seal of approval, signaling to
              students, parents, and partners that your organization adheres to
              the highest standards of British pedagogical excellence.
            </p>
          </div>
        </div>

        <figure className="ieuk-frame mx-auto w-full max-w-[560px] overflow-hidden shadow-[0_12px_40px_rgba(93,20,32,0.10)] lg:col-start-2 lg:row-span-2 lg:self-center lg:justify-self-center lg:max-w-none">
          <ParallaxImage
            src={images.accreditationHero}
            alt="IEUK accreditation review process and global quality standards"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            strength={10}
          />
        </figure>

        <div className="lg:col-start-1 lg:row-start-2">
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              <span className="font-semibold text-neutral-950">
                Credibility:
              </span>{" "}
              Gain &quot;IEUK Accredited&quot; seal, a globally recognized mark
              of quality.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                Networking:
              </span>{" "}
              Connect with top-tier educators and institutions worldwide.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">Resources:</span>{" "}
              Access exclusive teaching materials, research, and
              industry-standard guidelines.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                Global Recognition:
              </span>{" "}
              Elevate your brand by aligning with British pedagogical standards.
            </li>
          </ul>
        </div>
      </section>

      <section className={`${card} mt-10 space-y-4 [--ieuk-delay:160ms]`}>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/80">
            Four Foundational Pillars
          </p>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Our Standards
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
        </div>

        <p className="text-neutral-700">
          Accreditation is not merely a formality; it is a commitment to
          continuous improvement. We evaluate institutions against four
          foundational pillars:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {(
            [
              {
                title: "Academic Integrity",
                body: "Curriculum design that is evidence-based, rigorous, and culturally responsive.",
                pattern: "stripes",
              },
              {
                title: "Educational Quality",
                body: "Qualified faculty, modern teaching methodologies, and high student engagement.",
                pattern: "dots",
              },
              {
                title: "Institutional Stewardship",
                body: "Transparent management, ethical business practices, and sound financial health.",
                pattern: "grid",
              },
              {
                title: "Student Experience",
                body: "Robust student support, inclusive welfare policies, and a safe learning environment.",
                pattern: "aurora",
              },
            ] as const
          ).map(({ title, body, pattern }) => (
            <PatternCard
              key={title}
              title={title}
              body={body}
              pattern={pattern}
              icon={<Check className="h-4 w-4 text-white" aria-hidden />}
            />
          ))}
        </div>
      </section>

      <section
        className={`${card} mt-10 space-y-5 lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10 lg:space-y-0 [--ieuk-delay:200ms]`}
      >
        <div className="space-y-3 lg:col-start-2 lg:row-start-1">
        
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            IEUK Accreditation Journey
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="text-neutral-700">
            Achieving IEUK accreditation is a testament to an institution&apos;s
            commitment to quality. Our process is designed to be transparent,
            thorough, and supportive and a collaborative peer-review experience.
            We support institutions as they demonstrate their commitment to
            excellence.
          </p>
        </div>

        <figure className="ieuk-frame overflow-hidden shadow-[0_12px_40px_rgba(93,20,32,0.10)] lg:col-start-1 lg:row-span-3 lg:mt-1 lg:justify-self-center">
          <ParallaxImage
            src={images.accreditationJourney}
            alt="Map of the IEUK accreditation process steps"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            strength={8}
          />
        </figure>

        <ol className="space-y-4 text-neutral-700 lg:col-start-2 lg:row-start-2">
          {(
            [
              {
                title: "Inquiry & Application",
                body: "Institutions submit an initial profile to determine eligibility.",
              },
              {
                title: "Self-Assessment Report",
                body: "A comprehensive internal study where the institution evaluates its own performance against IEUK standards.",
              },
              {
                title: "Peer Review (On-Site or Virtual Visit)",
                body: "A team of independent experts conducts an objective evaluation, including interviews with staff, faculty, and students.",
              },
              {
                title: "Quality Panel Review",
                body: "An independent panel reviews the findings and makes an impartial recommendation.",
              },
              {
                title: "Status Awarded",
                body: 'Successful institutions are granted IEUK accreditation and the right to display our seal of logo "IEUK Accredited".',
              },
            ] as const
          ).map(({ title, body }, idx, arr) => (
            <li key={title} className="relative pl-12">
              {idx !== arr.length - 1 && (
                <span
                  className="absolute left-[18px] top-9 h-[calc(100%-18px)] w-px bg-[#5d1420]/18"
                  aria-hidden
                />
              )}
              <span
                className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#5d1420] text-sm font-bold text-white shadow-sm"
                aria-hidden
              >
                {idx + 1}
              </span>
              <p className="font-semibold text-neutral-950">
                Step {idx + 1}: {title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                {body}
              </p>
            </li>
          ))}
        </ol>

        <div className="space-y-4 text-neutral-700 lg:col-start-2 lg:row-start-3">
          <p className="text-sm leading-relaxed text-neutral-700">
            Quality assurance is the foundation of IEUK. Through our transparent,
            evidence-based accreditation process, we evaluate institutions on their
            curriculum, faculty expertise, student support systems, and operational
            standards.
          </p>
          <p className="text-sm leading-relaxed text-neutral-700">
            When an institution earns accreditation from IEUK, they are not just
            receiving a certificate; they are joining a select group of providers
            committed to the highest level of academic rigor. We provide the
            oversight necessary to maintain confidence in the English language
            training sector, ensuring that every learner experiences the best of
            British-inspired education.
          </p>
        </div>
      </section>

      <section
        className={`${card} mt-10 space-y-5 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-10 lg:space-y-0 [--ieuk-delay:240ms]`}
      >
        <div className="space-y-3 lg:col-start-1 lg:row-start-1">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Standards &amp; Quality Assurance: IEUK Benchmark
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <p className="text-neutral-700">
            At International English UK (IEUK), we believe that high-quality
            English education is not an accident and it is the result of
            intentional, rigorous, and consistent standards. Our Quality
            Assurance (QA) framework ensures that every institution displaying
            IEUK seal of logo provides a learning environment that is effective,
            ethical, and empowering.
          </p>
        </div>

        <figure className="ieuk-frame overflow-hidden shadow-[0_12px_40px_rgba(93,20,32,0.10)] lg:col-start-2 lg:row-span-2 lg:mt-1">
          <ParallaxImage
            src={images.accreditationBenchmark}
            alt="IEUK standards and quality assurance leadership"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            strength={9}
          />
        </figure>

        <blockquote className="text-neutral-700 lg:col-start-1 lg:row-start-2">
          <p className="italic">
            &quot;Excellence is not an act, but a habit. At IEUK, we make
            excellence the standard for English language education
            everywhere.&quot;
          </p>
        </blockquote>
      </section>

      <section className={`${card} mt-10 space-y-5 [--ieuk-delay:280ms]`}>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            IEUK Quality Framework
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {(
            [
              {
                n: 1,
                title: "Curriculum and Pedagogy",
                points: [
                  {
                    k: "Evidence-Based Learning",
                    v: "Curricula must be developed using research-backed methodologies that prioritize functional communication and linguistic accuracy.",
                  },
                  {
                    k: "Learner-Centric Design",
                    v: "Programs must be tailored to meet the specific proficiency goals of students, ranging from IELTS/academic preparation to Business English.",
                  },
                  {
                    k: "Continuous Assessment",
                    v: "Regular monitoring of student progress to ensure learning outcomes are being met.",
                  },
                ],
              },
              {
                n: 2,
                title: "Faculty Qualifications and Development",
                points: [
                  {
                    k: "Expert Instruction",
                    v: "Educators must hold recognized teaching qualifications (e.g., CELTA, DELTA, or equivalent).",
                  },
                  {
                    k: "Ongoing Growth",
                    v: "Institutions must provide structured Professional Development (PD) opportunities to ensure faculty stay updated on the latest trends in English language teaching (ELT).",
                  },
                  {
                    k: "Cultural Competency",
                    v: "Teachers must demonstrate an ability to engage a diverse, international student body.",
                  },
                ],
              },
              {
                n: 3,
                title: "Student Welfare and Support",
                points: [
                  {
                    k: "Comprehensive Care",
                    v: "Institutions are required to provide robust induction programs, pastoral support, and clear pathways for student feedback.",
                  },
                  {
                    k: "Safe Learning Environment",
                    v: "All accredited centers must maintain physical and digital safety standards, including clear safeguarding policies.",
                  },
                  {
                    k: "Student Satisfaction",
                    v: "Regular feedback cycles are required to ensure the student voice is heard and acted upon.",
                  },
                ],
              },
              {
                n: 4,
                title: "Institutional Governance",
                points: [
                  {
                    k: "Operational Transparency",
                    v: "Financial stability and clear management structures are essential for the long-term success of an educational provider.",
                  },
                  {
                    k: "Ethical Marketing",
                    v: "All promotional materials must be accurate, transparent, and representative of the actual student experience.",
                  },
                  {
                    k: "Compliance",
                    v: "Adherence to all local and international laws, including data protection and equality legislation.",
                  },
                ],
              },
            ] as const
          ).map(({ n, title, points }) => (
            <section
              key={title}
              className="overflow-hidden rounded-2xl bg-white/70 p-4 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10"
            >
              <header className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5d1420] text-sm font-bold text-white shadow-sm">
                  {n}
                </span>
                <div>
                  <p className="font-semibold text-neutral-950">{title}</p>
                </div>
              </header>

              <div className="mt-4 text-neutral-700">
                <ul className="space-y-3">
                  {points.map(({ k, v }) => (
                    <li key={k} className="text-sm leading-relaxed">
                      <span className="font-semibold text-neutral-950">
                        {k}:
                      </span>{" "}
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className={`${card} mt-10 space-y-4 [--ieuk-delay:320ms]`}>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
          Our Quality Assurance Process
          </h3>
          <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
        </div>

        <p className="max-w-prose text-neutral-700">
        We utilize a multi-stage approach to ensure these standards are not just written on paper, but practiced every day.
        </p>

        <ul className="grid gap-3 pt-2 sm:grid-cols-3">
          {(
            [
              {
                k: "Internal Self-Assessment:",
                v: "Institutions perform a rigorous internal audit of their operations against our published Standards Manual.",
              },
              {
                k: "Independent Peer Review:",
                v: "Expert reviewers conduct site visits (or remote evaluations) to assess the reality of classroom performance and student services.",
              },
              {
                k: "Continuous Improvement Loop:",
                v: "Accreditation is subject to annual reviews, ensuring that members continue to evolve with the changing needs of the global education market.",
              },
            ] as const
          ).map(({ k, v }) => (
            <li
              key={k}
              className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-[0_10px_30px_rgba(93,20,32,0.06)] ring-1 ring-[#5d1420]/10"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#5d1420] text-white shadow-sm"
                aria-hidden
              >
                <Check className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <p className="text-sm leading-relaxed text-neutral-700">
                <span className="font-semibold text-neutral-950">{k}</span>{" "}
                {v}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ieuk-reveal relative mt-10 overflow-hidden rounded-2xl bg-[#60101d] px-5 py-10 text-white shadow-[0_14px_48px_rgba(93,20,32,0.22)] sm:px-6 sm:py-12 [--ieuk-delay:360ms]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1.2px)] [background-size:22px_22px]"
          aria-hidden
        />

        <div className="relative space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Maintaining Excellence
          </h3>
          <div className="h-px w-12 bg-white/25" aria-hidden />
        </div>

        <div className="relative mt-5 grid gap-6 lg:grid-cols-[1.3fr_auto] lg:items-end">
          <div className="space-y-4 text-white/85">
            <p>
              Accreditation is a continuous cycle, not a one-time status. IEUK
              accredited institutions undergo periodic re-evaluation to ensure
              that they remain at the forefront of the English language sector.
              This commitment to ongoing quality assurance is what keeps
              &quot;IEUK Accredited&quot; seal of logo prestigious.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-white">
                Ready to elevate your institution?
              </p>
              <p>
                Join the global network of institutions committed to the future
                of English language education.
              </p>
            </div>
          </div>

        </div>

        <div className="relative mt-8 border-t border-white/15 pt-5 text-sm text-white/80">
          <p>
            © International English UK (IEUK) Committed to Quality, Empowering
            Educators, Inspiring Learners. Accreditation Inquiries:{" "}
            <a
              href="mailto:contact@ieuk.org"
              className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white/70"
            >
              contact@ieuk.org
            </a>
          </p>
       
        </div>
      </section>
    </PageShell>
  );
}
