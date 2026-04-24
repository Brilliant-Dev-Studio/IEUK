import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import ParallaxLayer from "../components/ParallaxLayer";
import ParallaxImage from "../components/ParallaxImage";
import { images } from "../data/images";
import Seo from "../components/Seo";

type IndustryCardPattern = "stripes" | "dots" | "grid" | "aurora";

const industryCards = [
  {
    n: "01",
    title: "Accreditation",
    body: "We rigorously assess and certify English language schools and programs against high-quality benchmarks.",
    to: "/accreditation",
    pattern: "stripes" satisfies IndustryCardPattern,
    cta: true,
  },
  {
    n: "02",
    title: "Membership",
    body: "We provide a network for educators and institutions to share resources, best practices, and industry updates.",
    to: "/membership",
    pattern: "dots" satisfies IndustryCardPattern,
    cta: true,
  },
  {
    n: "03",
    title: "Quality Assurance",
    body: "We enforce standards that ensure learners receive consistent, world-class English instruction.",
    pattern: "grid" satisfies IndustryCardPattern,
    cta: false,
  },
  {
    n: "04",
    title: "Advocacy",
    body: "We represent our members' interests in the global educational landscape.",
    pattern: "aurora" satisfies IndustryCardPattern,
    cta: false,
  },
] as const;

const industryCardSkin: Record<IndustryCardPattern, string> = {
  stripes: "bg-gradient-to-br from-[#651420] via-[#4a1018] to-[#2c080e]",
  dots: "bg-gradient-to-bl from-[#5a121f] via-[#45121a] to-[#24080d]",
  grid: "bg-gradient-to-tr from-[#681828] via-[#4e1420] to-[#300c14]",
  aurora: "bg-gradient-to-br from-[#5c1420] via-[#3a0e16] to-[#180608]",
};

/** Bleed to main horizontal padding (px-4 / sm:px-5) */
const bleed =
  "relative -mx-4 w-[calc(100%+2rem)] sm:-mx-5 sm:w-[calc(100%+2.5rem)] md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-[50px] lg:w-[calc(100%+100px)]";

/** Full-bleed only on laptop+ (lg) */
const bleedLg =
  "lg:relative lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:w-screen";

export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = !!window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    // Enable reveal animations only when motion is allowed.
    const rootEl = document.documentElement;
    if (!reduceMotion) rootEl.classList.add("ieuk-animate");
    else rootEl.classList.remove("ieuk-animate");

    const root = rootRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".ieuk-reveal"));
    if (nodes.length === 0) return;

    if (reduceMotion) {
      for (const el of nodes) el.classList.add("ieuk-inview");
      return;
    }

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            el.classList.add("ieuk-inview");
            observer?.unobserve(el);
          }
        },
        {
          root: null,
          threshold: 0.18,
          rootMargin: "0px 0px -10% 0px",
        }
      );
    }

    if (!observer) {
      for (const el of nodes) el.classList.add("ieuk-inview");
      return;
    }

    for (const el of nodes) observer.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="w-full text-pretty">
      <Seo
        title="IEUK"
        description="International English UK (IEUK) — accreditation, membership, and a global network of English language education providers."
      />
      {/* Hero — blush background from layout */}
      <section className="">
        <figure
          className={`${bleed} ${bleedLg} relative -mt-8 mb-7 overflow-hidden bg-white`}
        >
          <ParallaxImage
            src={images.homeHero}
            alt="Learners and educators collaborating, representing IEUK’s global English community"
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

        <p className="ieuk-reveal mb-3 inline-block border-b-2 border-[#5d1420] pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5d1420] [--ieuk-delay:40ms]">
          International English UK
        </p>
        <h1 className="ieuk-reveal mb-4 text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl sm:leading-[1.12] [--ieuk-delay:120ms]">
          Empowering Global Communication through Excellence in{" "}
          <span className="text-[#5d1420]">English</span>
        </h1>
        <div className="ieuk-reveal mb-6 space-y-4 text-[15px] leading-relaxed text-neutral-700 sm:text-base md:text-[17px] md:leading-relaxed [--ieuk-delay:200ms]">
          <p>
            International English UK (IEUK) is an international organisation
            dedicated to bridging cultures and opening doors through the mastery
            of English language around the world. Our organisation provides
            professional membership and world-class accreditation services to a
            global network of educators and institutions worldwide by upholding
            the global standard of British academic excellence.
          </p>
          <p>
            Our mission is to raise the bar for English language teaching and
            assessment through rigorous standards, continuous professional
            development, and a commitment to global educational integrity.
          </p>
          <p>
            English is more than just a language — it is a gateway to
            opportunity. We act as a guardian of quality so students, parents,
            and professionals can trust in the institutions and individuals that
            collaborate with IEUK. At IEUK, we are committed to{" "}
            <span className="font-semibold text-neutral-900">Quality</span>,{" "}
            <span className="font-semibold text-neutral-900">
              Empowering Educators
            </span>
            , and{" "}
            <span className="font-semibold text-neutral-900">
              Inspiring Learners
            </span>
            .
          </p>
        </div>
        <Link
          to="/about"
          className="ieuk-reveal inline-flex min-h-12 items-center gap-2 rounded-sm bg-[#5d1420] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-[background-color,transform] hover:bg-[#4a1019] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420] [--ieuk-delay:160ms]"
        >
          Explore Information
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <figure className="overflow-hidden rounded-2xl bg-white">
            <ParallaxImage
              src={images.homeSecondary}
              alt="Academic excellence and quality learning environment"
              className="h-[min(60vw,320px)] w-full object-cover object-center sm:h-[400px] md:h-[460px] lg:h-full lg:min-h-[520px]"
              width={1200}
              height={400}
              loading="lazy"
              decoding="async"
              strength={10}
            />
          </figure>

          {/* Why IEUK — maroon band */}
          <section
            className="rounded-2xl bg-[#60101d] px-5 py-10 text-white sm:py-12 md:px-10 lg:px-[50px]"
            aria-labelledby="why-heading"
          >
            <div className="mt-6">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Our Core Values
              </p>
              <ul className="grid gap-5 sm:grid-cols-2">
                {(
                  [
                    {
                      title: "Integrity",
                      body: "We act with transparency and hold ourselves, IEUK accredited institutions, and IEUK affiliated members to the highest ethical standards in every academic and professional interaction.",
                    },
                    {
                      title: "Inclusivity",
                      body: "We celebrate linguistic and cultural diversity. We welcome members from all backgrounds and believe that a global perspective is essential to effective communication.",
                    },
                    {
                      title: "Innovation",
                      body: "We embrace modern technology and contemporary research to ensure our methodologies remain relevant, engaging, and effective.",
                    },
                    {
                      title: "Quality",
                      body: "Excellence is non-negotiable. From our certification processes to our professional events, we strive for the highest possible quality in everything we do.",
                    },
                  ] as const
                ).map(({ title, body }) => (
                  <li key={title} className="relative pl-5">
                    <span
                      className="absolute left-0 top-1 h-3.5 w-0.5 bg-white/85"
                      aria-hidden
                    />
                    <h3 className="mb-2 text-base font-bold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      {body}
                    </p>
                    <div className="mt-5 h-px w-full bg-white/10" aria-hidden />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>

      {/* Departments-style overlay cards */}
      <section
        className={`ieuk-reveal ${bleed} mb-10 rounded-2xl border border-[#5d1420]/10 bg-white px-4 py-10 shadow-[0_12px_40px_rgba(93,20,32,0.06)] sm:px-6 [--ieuk-delay:120ms]`}
        aria-labelledby="serve-heading"
      >
        {" "}
        <h2
          id="serve-heading"
          className="mb-8 text-center text-2xl font-bold text-neutral-900 sm:text-3xl"
        >
          How We Serve the Industry
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {industryCards.map((card) => {
            const { n, title, body, pattern, cta } = card;
            const to = "to" in card ? card.to : undefined;
            const cardClass = [
              "group relative block min-h-[220px] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(93,20,32,0.15)] ring-1 ring-white/10 transition-[box-shadow,transform] duration-300",
              cta
                ? "hover:shadow-[0_12px_36px_rgba(93,20,32,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
                : "cursor-default",
              industryCardSkin[pattern],
            ].join(" ");

            const inner = (
              <>
              {pattern === "stripes" && (
                <ParallaxLayer
                  strength={8}
                  className="pointer-events-none absolute inset-0 opacity-[0.4] bg-[repeating-linear-gradient(125deg,rgba(255,255,255,0.07)_0,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_14px)]"
                  aria-hidden
                />
              )}
              {pattern === "dots" && (
                <ParallaxLayer
                  strength={7}
                  className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1px,transparent_1.5px)] bg-[length:20px_20px]"
                  aria-hidden
                />
              )}
              {pattern === "grid" && (
                <ParallaxLayer
                  strength={6}
                  className="pointer-events-none absolute inset-0 opacity-[0.3] bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:28px_28px]"
                  aria-hidden
                />
              )}
              {pattern === "aurora" && (
                <>
                  <ParallaxLayer
                    strength={10}
                    className="pointer-events-none absolute -left-1/4 top-0 h-[120%] w-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,200,200,0.12)_0%,transparent_65%)] blur-2xl"
                    aria-hidden
                  />
                  <ParallaxLayer
                    strength={8}
                    className="pointer-events-none absolute -right-1/4 bottom-0 h-[90%] w-[55%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(180,140,200,0.1)_0%,transparent_60%)] blur-2xl"
                    aria-hidden
                  />
                  <ParallaxLayer
                    strength={5}
                    className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[repeating-conic-gradient(from_0deg_at_50%_50%,transparent_0_25deg,rgba(255,255,255,0.04)_25deg_26deg)]"
                    aria-hidden
                  />
                </>
              )}
              <ParallaxLayer
                strength={4}
                className="relative flex h-full min-h-[220px] flex-col justify-between p-5 text-white"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15"
                    aria-hidden
                  >
                    <BadgeCheck
                      className="h-6 w-6 text-white/95"
                      strokeWidth={1.75}
                    />
                  </span>
                  {cta && (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#60101d] shadow-md transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-5 w-5" aria-hidden />
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold drop-shadow-sm">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/90">
                    {body}
                  </p>
                </div>
              </ParallaxLayer>
              </>
            );

            return cta && to ? (
              <Link key={n} to={to} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <div key={n} className={cardClass} aria-label={title}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <div className="ieuk-reveal mb-10 mt-12 grid gap-8 md:mt-14 lg:grid-cols-2 lg:items-stretch [--ieuk-delay:160ms]">
        {/* Trust — original text layout */}
        <section
          className="max-w-prose lg:max-w-none lg:rounded-2xl lg:border lg:border-[#5d1420]/10 lg:bg-white/65 lg:p-8 lg:shadow-[0_10px_30px_rgba(93,20,32,0.05)]"
          aria-labelledby="trust-heading"
        >
          <h2
            id="trust-heading"
            className="mb-1 text-xl font-bold text-neutral-900"
          >
            Building Trust in a Global Market
          </h2>
          <div className="mb-6 h-px w-10 bg-[#5d1420]/35" aria-hidden />
          <div className="space-y-5 text-base leading-relaxed text-neutral-600">
            <p>
              In a crowded global English language education sector, IEUK
              functions as a primary reference for excellence, integrity,
              quality, and innovation.
            </p>
            <div className="space-y-4 border-l-2 border-[#5d1420]/20 pl-4">
              <p>
                <span className="font-semibold text-neutral-900">
                  For Institutions:
                </span>{" "}
                Gain international recognition and competitive advantage by
                aligning with established British educational standards.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">
                  For Educators:
                </span>{" "}
                Access exclusive professional development, research, and
                collaborative networking opportunities.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">
                  For Students:
                </span>{" "}
                Feel confident choosing an IEUK accredited institution, knowing
                it meets our stringent quality benchmarks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="ieuk-reveal relative overflow-hidden rounded-2xl border border-[#5d1420]/12 bg-gradient-to-b from-[var(--ieuk-blush)]/50 via-white to-white px-5 py-10 text-center shadow-[0_10px_36px_rgba(93,20,32,0.07)] sm:px-12 sm:py-11 md:px-14 md:py-12 lg:mb-0 lg:mt-0 lg:px-12 lg:text-left [--ieuk-delay:240ms]"
          aria-labelledby="cta-heading"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5d1420]/20 to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto max-w-lg md:max-w-xl lg:mx-0 lg:max-w-none">
            <h2
              id="cta-heading"
              className="mb-2 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl"
            >
              Elevate Your Professional Journey Today
            </h2>
            <div
              className="mx-auto mb-5 h-px w-12 bg-[#5d1420]/30 lg:mx-0"
              aria-hidden
            />
            <p className="mb-8 text-base leading-relaxed text-neutral-600">
              Join thousands of educators and institutions across the globe.
              Take the next step in your career and become part of the IEUK
              standard.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-[#5d1420]/28 bg-[linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)),repeating-linear-gradient(135deg,rgba(93,20,32,0.12)_0,rgba(93,20,32,0.12)_1px,transparent_1px,transparent_10px)] px-7 text-sm font-bold text-[#5d1420] backdrop-blur-[2px] transition-colors hover:border-[#5d1420]/45 hover:bg-[linear-gradient(rgba(255,255,255,0.95),rgba(255,255,255,0.95)),repeating-linear-gradient(135deg,rgba(93,20,32,0.14)_0,rgba(93,20,32,0.14)_1px,transparent_1px,transparent_10px)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d1420]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
