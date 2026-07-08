import { Link } from "@tanstack/react-router";
import { PhoneCall, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-24">
      {/* Background Image */}
      <img
        src="/images/hero/hero.jpg"
        alt="HGALLERY Glass and Aluminium"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D1715]/90 via-[#2D1715]/75 to-[#2D1715]/90"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <span className="inline-flex items-center rounded-full border border-[#B8860B]/40 bg-[#5B1F1F]/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300 backdrop-blur">
          Trusted Glass • Aluminium • Shower Cubicle Experts
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
          Premium Glass,
          <br />
          Aluminium & Shower
          <br />
          Cubicle Solutions
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 lg:text-xl">
          HGALLERY supplies and installs premium glass, aluminium, shower
          cubicles, mirrors, wall panels, picture framing, home décor, DIY
          products, power tools, hand tools and camping gear. We provide
          professional installation services for residential and commercial
          projects across Kenya.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            to="/shop"
            className="rounded-xl bg-[#B8860B] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#9d7208]"
          >
            Shop Products
          </Link>

          <a
            href="tel:+254726335283"
            className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/20"
          >
            <PhoneCall size={20} />
            Request Installation
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227] text-[#2D1715] shadow-lg">
              <CheckCircle className="h-6 w-6" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Free Site Visit</h4>

              <p className="mt-1 text-sm text-gray-300">
                Measurements & consultation
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227] text-[#2D1715] shadow-lg">
              <CheckCircle className="h-6 w-6" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Expert Installation</h4>

              <p className="mt-1 text-sm text-gray-300">
                Certified installation team
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227] text-[#2D1715] shadow-lg">
              <CheckCircle className="h-6 w-6" />
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Residential & Commercial
              </h4>

              <p className="mt-1 text-sm text-gray-300">
                Homes, offices & institutions
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227] text-[#2D1715] shadow-lg">
              <CheckCircle className="h-6 w-6" />
            </div>

            <div>
              <h4 className="font-semibold text-white">Quality Guarantee</h4>

              <p className="mt-1 text-sm text-gray-300">
                Premium materials & workmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
