import PageShell from './PageShell'
import ParallaxImage from '../components/ParallaxImage'
import { images } from '../data/images'
import Seo from '../components/Seo'

export default function AboutUs() {
  return (
    <PageShell title="">
      <Seo
        title="About Us"
        description="Learn who we are, our mission, and our vision for raising standards in English language education worldwide."
        path="/about-us"
      />
      <div className="space-y-10">
        <section className="space-y-5">
          <div className="grid gap-5 md:grid-cols-[1fr_1.08fr] md:items-start md:gap-8 lg:grid-cols-[1fr_1.16fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d1420]/80">
                About Us
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
                Who We Are?
              </h2>
              <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
              <p>
                International English UK (IEUK) is the hallmark of quality in
                the international English language education sector. Our
                organization is committed to the advancement of global English
                language teaching and learning under the banner of British
                academic standard. Based in the heart of United Kingdom, we
                serve as a bridge for global educators and institutions that are
                looking to engage with professional membership and accreditation
                services in English language teaching community all over the
                world. While our roots are deeply grounded in the traditions of
                British educational excellence, our outlook is inherently
                global. We believe that we can transform how English is taught
                and experienced worldwide by setting high standards and fostering
                a collaborative community.
              </p>
            </div>

            <figure className="ieuk-frame shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
              <ParallaxImage
                src={images.aboutHero}
                alt="IEUK community and international educators gathering"
                className="h-auto w-full max-w-full object-contain object-center"
                loading="lazy"
                decoding="async"
                strength={0}
              />
            </figure>
          </div>
        </section>

        <section className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2 md:items-start md:gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <figure className="ieuk-frame order-2 -mx-5 w-[calc(100%+2.5rem)] overflow-hidden shadow-[0_12px_28px_rgba(15,23,42,0.08)] sm:-mx-6 sm:w-[calc(100%+3rem)] md:mx-0 md:w-full lg:order-1 lg:justify-self-start">
              <ParallaxImage
                src={images.aboutVision}
                alt="IEUK vision of global English learning with the United Kingdom as a hub"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                strength={8}
              />
            </figure>

            <div className="order-1 space-y-3 lg:order-2">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
                Our Vision
              </h2>
              <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
              <p>
                IEUK envisions a world where language barriers do not hinder
                potential, and where educators and institutions are empowered to
                deliver world-class learning experiences to be the global
                benchmark for excellence, integrity, quality, and innovation in
                English language education around the world.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2 md:items-start md:gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
                Our Mission
              </h2>
              <div className="h-px w-12 bg-[#5d1420]/25" aria-hidden />
              <ul className="space-y-3 border-l-2 border-[#5d1420]/15 pl-4 text-neutral-700">
                <li>
                  <span className="font-semibold text-neutral-950">
                    To Elevate Standards:
                  </span>{" "}
                  We establish and maintain rigorous pedagogical benchmarks,
                  ensuring that IEUK accredited institutions and IEUK affiliated
                  members are recognized as leaders in the field.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    To Champion Excellence:
                  </span>{" "}
                  We ensure that the quality of British pedagogical excellence
                  is accessible and recognized across the globe by setting
                  rigorous standards and fostering professional collaboration in
                  English language education worldwide.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    To Cultivate Community:
                  </span>{" "}
                  We provide a platform for educators and institutions to
                  connect, share best practices, and engage in meaningful
                  dialogue that shapes the future of the industry.
                </li>
                <li>
                  <span className="font-semibold text-neutral-950">
                    To Empower Growth:
                  </span>{" "}
                  Through continuous professional development (CPD), research,
                  and resource sharing, we support our members in navigating the
                  complexities of a changing educational landscape.
                </li>
              </ul>
            </div>

            <figure className="ieuk-frame -mx-5 w-[calc(100%+2.5rem)] overflow-hidden shadow-[0_12px_28px_rgba(15,23,42,0.08)] sm:-mx-6 sm:w-[calc(100%+3rem)] md:mx-0 md:w-full">
              <ParallaxImage
                src={images.aboutMission}
                alt="IEUK mission in action through global learning communities"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                strength={0}
              />
            </figure>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--ieuk-blush)]/35 via-transparent to-transparent py-2">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
            A Global Network of IEUK
          </h2>
          <div className="mt-3 h-px w-12 bg-[#5d1420]/25" aria-hidden />
          <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_auto] md:items-end md:gap-6">
            <div className="space-y-4">
              <p>
                IEUK is more than just an organization; it is a movement.
                Whether you are a dedicated teacher striving to inspire your
                students, or an institution aiming to provide top-tier English
                language instruction, you are part of a vibrant ecosystem.
                By joining IEUK, you align yourself with a community that
                prioritizes professional growth, academic excellence, and the
                transformative power of language. Let’s build the future of English language education together.
              </p>
              <p>
                
              </p>
            </div>

          </div>
        </section>
      </div>
    </PageShell>
  )
}
