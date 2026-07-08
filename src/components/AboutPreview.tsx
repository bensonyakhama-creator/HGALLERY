import { Link } from "@tanstack/react-router";
import { Award, Building2, Users, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image */}

        <div className="relative">
          <img
            src="/images/about/about-company.jpg"
            alt="HGALLERY Installation Team"
            className="h-[650px] w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute bottom-8 left-8 rounded-2xl bg-[#5B1F1F] p-8 text-white shadow-xl">
            <h2 className="text-5xl font-black text-amber-400">10+</h2>
            <p className="mt-2">Years of Experience</p>
          </div>
        </div>

        {/* Content */}

        <div>
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#8C5A3C]">
            About HGALLERY
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-[#5B1F1F]">
            Kenya's Trusted Glass & Aluminium Specialists
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            HGALLERY supplies premium glass products and provides professional
            installation services for residential, commercial and corporate
            projects across Kenya.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From frameless shower cubicles, aluminium windows, office partitions
            and mirrors to decorative wall panels, we combine quality materials
            with expert workmanship to deliver lasting results.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                <Building2 className="h-8 w-8 text-[#5B1F1F]" />
              </div>

              <div>
                <h3 className="text-xl font-bold">Residential & Commercial</h3>

                <p className="mt-2 text-gray-600">
                  Complete supply and installation services for homes, offices,
                  apartments and institutions.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                <Award className="h-8 w-8 text-[#5B1F1F]" />
              </div>

              <div>
                <h3 className="text-xl font-bold">Premium Quality</h3>

                <p className="mt-2 text-gray-600">
                  Every installation is completed using durable, high-quality
                  materials backed by professional workmanship.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                <Users className="h-8 w-8 text-[#5B1F1F]" />
              </div>

              <div>
                <h3 className="text-xl font-bold">Customer Satisfaction</h3>

                <p className="mt-2 text-gray-600">
                  We believe every project deserves attention to detail,
                  precision and exceptional customer service.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="mt-12 inline-flex items-center gap-3 rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#431616]"
          >
            Learn More About Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
