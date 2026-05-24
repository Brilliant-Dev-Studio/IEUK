import PageShell from './PageShell'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'
import Seo from '../components/Seo'

export default function DiplomaProgram() {
  return (
    <PageShell title="">
      <Seo
        title="Diploma Program"
        description="Explore IEUK Diploma Programs — professional English communication, academic integrity, and education policy — delivered under British pedagogical standards."
        path="/diploma-program"
      />

      <section className="ieuk-reveal space-y-6 py-2 [--ieuk-delay:120ms] lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-10 lg:space-y-0">
        <div className="space-y-4 lg:col-start-1 lg:row-start-1">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            IEUK Partnership Opportunity: Diploma in Professional English
            Communication
          </h2>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            ​Accredited institutions can now deliver the comprehensive{' '}
            <strong className="font-semibold text-neutral-950">
              Diploma in Professional English Communication
            </strong>{' '}
            in partnership with{' '}
            <strong className="font-semibold text-neutral-950">IEUK</strong>. To
            qualify for this program, institutions must select and deliver{' '}
            <strong className="font-semibold text-neutral-950">
              five specialized courses
            </strong>{' '}
            from the following core areas:
          </p>
        </div>

        <figure className="ieuk-frame overflow-hidden bg-white shadow-[0_12px_40px_rgba(90,12,22,0.10)] lg:col-start-2 lg:row-span-2 lg:self-center lg:justify-self-end">
          <ParallaxImage
            src={images.diplomaDpec}
            alt="IEUK Diploma in Professional English Communication"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            strength={0}
          />
        </figure>

        <div className="lg:col-start-1 lg:row-start-2">
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              <span className="font-semibold text-neutral-950">
                ​General English:
              </span>{' '}
              Focused on everyday communication, improving vocabulary, grammar,
              reading, writing, listening, and speaking across all levels
              (Beginner to Advanced).
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                ​Business English:
              </span>{' '}
              Tailored for professional settings. Courses cover writing
              professional emails, participating in meetings, negotiating,
              networking, and public speaking.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                Conversational English / Fluency:
              </span>{' '}
              Low-pressure courses focused primarily on building confidence,
              improving pronunciation, reducing accents, and mastering casual
              small talk.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                English for Academic Purposes (EAP):
              </span>{' '}
              Prepares international students for the rigor of university
              lectures, academic reading, essay writing, grammar, and research
              citations.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                English for Specific Purposes (ESP):
              </span>{' '}
              Highly targeted language training for specific industries, such as
              English for Medicine, English for Law, English for Aviation, or
              English for Tourism.
            </li>
          </ul>
        </div>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:160ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Curriculum Evaluation &amp; Official Approval
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
        </div>

        <p className="w-full max-w-none text-neutral-700">
          ​IEUK will review and accredit the specific curriculum and chosen
          textbooks proposed by your institution. Once this quality assurance
          and accreditation process is successfully finalized, we will formally
          notify you that your institute is officially authorized and qualified
          to launch and deliver the diploma program in partnership with IEUK.
          Upon approval, accredited institutions will be permitted to feature
          the official IEUK&rsquo;s logo alongside their own institute&rsquo;s
          logo on the diploma certificate.
        </p>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:200ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            Course Duration, Assessment, and Fees
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
        </div>

        <p className="w-full max-w-none text-neutral-700">
          Each individual course spans a duration of two months. To successfully
          complete a module, students must take an individual examination
          administered directly by their accredited institute for each course.
          Additionally, a total registration fee of £25 is required per student
          to cover the examination, official diploma certificate, and academic
          transcript.
        </p>
      </section>

      <section className="ieuk-reveal mt-10 space-y-6 py-2 [--ieuk-delay:240ms] lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10 lg:space-y-0">
        <figure className="ieuk-frame overflow-hidden bg-white shadow-[0_12px_40px_rgba(90,12,22,0.10)] lg:order-1 lg:justify-self-start">
          <ParallaxImage
            src={images.diplomaAcademicIntegrity}
            alt="IEUK Academic Integrity Policy"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            strength={0}
          />
        </figure>

        <div className="space-y-4 lg:order-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            ​IEUK Academic Integrity Policy
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            International English UK and its accredited partner institutes
            follow a clear policy on{' '}
            <strong className="font-semibold text-neutral-950">
              Academic Integrity
            </strong>{' '}
            ensures that the qualification maintains its high international
            standards, prestige, and credibility to meet high expectation to
            students and faculty.
          </p>
        </div>
      </section>

      <section className="ieuk-reveal mt-10 space-y-6 [--ieuk-delay:280ms]">
        <article className="space-y-3">
          <h4 className="flex items-baseline gap-3 text-base font-semibold tracking-tight text-neutral-950">
            <span className="text-[#5a0c16]">1.</span>
            <span>Core Philosophy</span>
          </h4>
          <p className="text-neutral-700">
            ​Academic integrity is the foundation of honest, ethical, and
            authentic learning. At IEUK and our partner institutes, we expect
            all students to act with{' '}
            <strong className="font-semibold text-neutral-950">
              honesty, trust, and fairness
            </strong>{' '}
            in all academic work. This ensures that the diploma you earn truly
            reflects your skills, knowledge, and dedication.
          </p>
        </article>

        <article className="space-y-3">
          <h4 className="flex items-baseline gap-3 text-base font-semibold tracking-tight text-neutral-950">
            <span className="text-[#5a0c16]">2.</span>
            <span>Definitions of Academic Misconduct</span>
          </h4>
          <p className="text-neutral-700">
            ​Any behavior that gives a student an unfair or unearned academic
            advantage is strictly prohibited. Violations include, but are not
            limited to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              <span className="font-semibold text-neutral-950">
                ​Plagiarism:
              </span>{' '}
              Presenting someone else&rsquo;s words, ideas, research, data, or
              media as your own without providing proper credit or citation.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                ​AI Misuse &amp; Over-reliance:
              </span>{' '}
              Using Generative AI tools (like text generators or unauthorized
              translation software) to create content and submitting it as your
              own original work.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">​Collusion:</span>{' '}
              Collaborating with other students on an assessment or assignment
              that is intended to be completed individually.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">
                ​Duplication (Self-Plagiarism):
              </span>{' '}
              Submitting a piece of work or a significant portion of it that you
              have already submitted for another course or assignment.
            </li>
            <li>
              <span className="font-semibold text-neutral-950">​Cheating:</span>{' '}
              Using unauthorized materials, notes, or communicating with others
              during examinations or formal assessments.
            </li>
          </ul>
        </article>

        <article className="space-y-3">
          <h4 className="flex items-baseline gap-3 text-base font-semibold tracking-tight text-neutral-950">
            <span className="text-[#5a0c16]">3.</span>
            <span>Student Responsibilities</span>
          </h4>
          <p className="text-neutral-700">
            ​As an enrolled student in the IEUK Diploma program, you are
            expected to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              ​Ensure that all work submitted for evaluation is entirely your
              own authentic work.
            </li>
            <li>
              ​Acknowledge all external sources accurately using the designated
              formatting and referencing style (e.g., Harvard or APA).
            </li>
            <li>
              ​Understand that{' '}
              <strong className="font-semibold text-neutral-950">
                close paraphrasing
              </strong>{' '}
              (merely rearranging or changing a few words from a source) still
              requires a proper citation.
            </li>
            <li>
              ​Manage your time effectively to reduce the temptation to take
              shortcuts or cheat.
            </li>
          </ul>
        </article>

        <article className="space-y-3">
          <h4 className="flex items-baseline gap-3 text-base font-semibold tracking-tight text-neutral-950">
            <span className="text-[#5a0c16]">4.</span>
            <span>Institutional &amp; Faculty Role</span>
          </h4>
          <p className="text-neutral-700">
            ​Our accredited partner institutes will support students by:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              ​Providing guidance and training on proper citation, referencing,
              and effective note-taking.
            </li>
            <li>
              ​Utilizing advanced plagiarism and AI-detection tools (such as
              Turnitin) to guarantee authentic grading.
            </li>
            <li>
              ​Approaching suspected cases of misconduct fairly and
              transparently.
            </li>
          </ul>
        </article>

        <article className="space-y-3">
          <h4 className="flex items-baseline gap-3 text-base font-semibold tracking-tight text-neutral-950">
            <span className="text-[#5a0c16]">5.</span>
            <span>Consequences of Misconduct</span>
          </h4>
          <p className="text-neutral-700">
            ​IEUK maintains a zero-tolerance policy toward deliberate academic
            dishonesty. If a student is found guilty of academic misconduct,
            penalties may vary depending on severity and can include:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              ​Mandatory resubmission of the assignment with a capped grade.
            </li>
            <li>
              ​A mark of{' '}
              <strong className="font-semibold text-neutral-950">zero</strong>{' '}
              for the affected module or assessment component.
            </li>
            <li>
              ​Disqualification from the module or immediate expulsion from the{' '}
              <strong className="font-semibold text-neutral-950">
                Diploma in Professional English Communication
              </strong>{' '}
              program.
            </li>
          </ul>
        </article>
      </section>

      <section className="ieuk-reveal mt-10 space-y-6 py-2 [--ieuk-delay:320ms] lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-10 lg:space-y-0">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            IEUK Policy of Advertising and Marketing
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
          <p className="max-w-prose text-neutral-700">
            International English UK maintains a strict stance against any
            unauthorized or misleading marketing to protect the integrity of the
            qualification. It has come to light that certain unaccredited and
            completely unrelated institutes may be deceptively
            advertising or offering the{' '}
            <strong className="font-semibold text-neutral-950">
              Diploma in Professional English Communication
            </strong>
            . ​To maintain transparency and assist partners, students, and
            stakeholders in identifying these unauthorized entities, here is an
            official breakdown of how to identify and report this suspicious
            activity.
          </p>
        </div>

        <figure className="ieuk-frame overflow-hidden bg-white shadow-[0_12px_40px_rgba(90,12,22,0.10)] lg:justify-self-end">
          <ParallaxImage
            src={images.diplomaPolicy}
            alt="IEUK Policy of Advertising and Marketing"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
            strength={0}
          />
        </figure>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:360ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            ​How to Spot Fraudulent &amp; Unaccredited Advertisements
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
        </div>

        <p className="text-neutral-700">
          ​Unaccredited or unauthorized institutes often use deceptive
          marketing to attract students. Watch out for these red flags:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-neutral-700">
          <li>
            <span className="font-semibold text-neutral-950">
              ​Absence of Verified Partner Status:
            </span>{' '}
            Legitimate partners will always have an active accreditation status
            directly verifiable through the official IEUK Registry:{' '}
            <a
              href="https://www.ieuk.org/ieuk-registry"
              className="font-semibold text-[#5a0c16] underline decoration-[#5a0c16]/30 underline-offset-4 hover:decoration-[#5a0c16]/60"
            >
              https://www.ieuk.org/ieuk-registry
            </a>
            .
          </li>
          <li>
            <span className="font-semibold text-neutral-950">
              ​Misuse of Branding:
            </span>{' '}
            Suspicious entities may use low-quality, altered, or outdated
            versions of the IEUK logo without the required accredited institute
            co-branding.
          </li>
          <li>
            <span className="font-semibold text-neutral-950">
              ​Unrealistic Durations or Shortcuts:
            </span>{' '}
            Advertisements promising the diploma in significantly less than the
            mandatory{' '}
            <strong className="font-semibold text-neutral-950">
              10 months total timeline (2 months per course for 5 courses)
            </strong>{' '}
            are fraudulent.
          </li>
          <li>
            <span className="font-semibold text-neutral-950">
              ​Alternative Fee Structures:
            </span>{' '}
            Any institute bypassing the mandatory{' '}
            <strong className="font-semibold text-neutral-950">
              £25 registration, exam, and transcript fee
            </strong>{' '}
            or charging arbitrary, unvetted prices should be treated with
            suspicion.
          </li>
          <li>
            <span className="font-semibold text-neutral-950">
              ​Skipping the Quality Assurance Process:
            </span>{' '}
            IEUK strictly evaluates all curricula and textbooks before our
            accredited institute is qualified to teach. If an institute claims
            that they can launch the program immediately without this vetting
            process, they are not officially accredited by IEUK.
          </li>
        </ul>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:400ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            ​IEUK Actions Against Academic and Brand Misrepresentation
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
        </div>

        <p className="text-neutral-700">
          ​IEUK takes brand infringement and academic fraud seriously to protect
          our legal partners. When unauthorized advertising is detected:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-neutral-700">
          <li>
            <span className="font-semibold text-neutral-950">
              ​Cease and Desist Issuance:
            </span>{' '}
            IEUK&rsquo;s legal team immediately issues formal notices to the
            offending institutes to remove all intellectual property and
            references to our programs.
          </li>
          <li>
            <span className="font-semibold text-neutral-950">
              ​Public Blacklisting:
            </span>{' '}
            Unauthorized institutes operating under the guise of an &ldquo;IEUK
            partner&rdquo; will be publicly listed on our official channels to
            warn prospective students.
          </li>
          <li>
            <span className="font-semibold text-neutral-950">
              ​Reporting to Local Authorities:
            </span>{' '}
            IEUK collaborates with local educational ministries and consumer
            protection bureaus to take action against fraudulent operations.
          </li>
        </ul>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:440ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            What You Should Do
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
        </div>

        <p className="text-neutral-700">
          ​If you encounter an unaccredited institution or a suspicious online
          advertisement claiming to offer the IEUK Diploma program, please
          report it immediately to our compliance team.
        </p>
      </section>

      <section className="ieuk-reveal mt-10 space-y-5 [--ieuk-delay:480ms]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
            ​How to Report
          </h3>
          <div className="h-px w-12 bg-[#5a0c16]/25" aria-hidden />
        </div>

        <section className="rounded-2xl border border-[#5a0c16]/15 bg-[#5a0c16]/[0.035] p-5 text-sm text-neutral-800">
          <p className="leading-relaxed text-neutral-700">
            Please forward the unaccredited or unauthorized institute&rsquo;s
            website link, social media post, or promotional flyer to{' '}
            <a
              href="mailto:contact@ieuk.org"
              className="font-semibold text-[#5a0c16] underline decoration-[#5a0c16]/30 underline-offset-4 hover:decoration-[#5a0c16]/60"
            >
              contact@ieuk.org
            </a>
            .
          </p>
          <p className="mt-3 leading-relaxed text-neutral-700">
            By working together, we can safeguard the immense value of your
            institution&rsquo;s valid accreditation and ensure the{' '}
            <strong className="font-semibold text-neutral-950">
              Diploma in Professional English Communication
            </strong>{' '}
            remains a highly respected global standard.
          </p>
        </section>
      </section>
    </PageShell>
  )
}
