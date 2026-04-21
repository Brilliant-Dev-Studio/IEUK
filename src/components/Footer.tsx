import { Link } from "react-router-dom";
import { navLinks } from "./Header";
import { images } from "../data/images";

export default function Footer() {
  return (
    <footer className="relative mt-4 w-full overflow-hidden py-10 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B2F73] via-[#08285f] to-[#061d45]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1.2px)] [background-size:22px_22px]"
        aria-hidden
      />
      <div className="relative w-full px-4 sm:px-5 md:px-10 lg:px-[50px]">
        <div className="overflow-hidden rounded-none sm:rounded-2xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-5">
              <img
                src={images.logo}
                alt="IEUK Logo"
                className="mx-auto mb-4 hidden w-[150px] rounded bg-white p-2 shadow-sm sm:block lg:mx-0"
                loading="lazy"
                decoding="async"
              />
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/80 lg:text-left">
                International English UK
              </p>
              <p className="text-center text-sm leading-relaxed text-white/85 lg:text-left">
                Committed to quality, empowering educators, and inspiring learners worldwide.
              </p>
              <div className="mx-auto mt-5 h-px w-16 bg-white/15 lg:mx-0" aria-hidden />
              <p className="mt-4 hidden text-center text-[12px] leading-relaxed text-white/70 sm:block lg:text-left">
                Registered in England &amp; Wales: <span className="font-semibold text-white/80">05120951</span>
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="mb-3 hidden text-center text-xs font-bold uppercase tracking-[0.18em] text-white/85 sm:block lg:text-left">
                Quick Links
              </p>
              <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-10 gap-y-2 text-sm">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                    to={to}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="mt-7 hidden lg:block">
                <div className="mt-6 grid grid-cols-12 items-start gap-6">
                 
               
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 border-t border-white/20 pt-6 text-center text-[11px] leading-relaxed text-white/65">
            © International English UK (IEUK). All Rights Reserved.
          </p>

         
        </div>
      </div>
    </footer>
  );
}

