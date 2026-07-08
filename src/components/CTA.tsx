import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#5B1F1F] py-24">
      {/* Decorative Background */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#C9A227]/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#C9A227]">
          Ready to Transform Your Space?
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
          Premium Glass & Aluminium Solutions
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
          Whether you're renovating your home, fitting out an office, or looking
          for quality shower cubicles, wall panels, mirrors or aluminium works,
          HGALLERY is ready to deliver professional products and expert
          installation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#C9A227] px-8 py-4 text-lg font-semibold text-[#5B1F1F] transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Request a Free Quote
            <ArrowRight size={20} />
          </Link>

          <a
            href="tel:+254726335283"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/20"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            href="https://wa.me/254726335283"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#25D366]/30 bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-black text-[#C9A227]">500+</h3>

            <p className="mt-2 text-white/70">Successful Installations</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#C9A227]">1000+</h3>

            <p className="mt-2 text-white/70">Products Available</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#C9A227]">10+</h3>

            <p className="mt-2 text-white/70">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
