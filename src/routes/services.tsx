import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/Layout";
import {
  ArrowRight,
  ShowerHead,
  Building2,
  DoorOpen,
  Square,
  Hammer,
  Wrench,
  Image,
  Paintbrush2,
  Drill,
  Tent,
  Home,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Professional Glass, Aluminium & Home Improvement Services | HGALLERY Kenya",
      },
      {
        name: "description",
        content:
          "HGALLERY offers professional supply and installation of glass, aluminium, shower cubicles, picture framing, wall panels, home décor, DIY power tools, hand tools and camping equipment across Kenya.",
      },
      {
        name: "keywords",
        content:
          "glass installation Kenya, aluminium windows Nairobi, shower cubicles Kenya, picture framing Nairobi, wall panels Kenya, mirrors, office partitions, home décor, DIY tools, camping gear",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Glass Solutions",
    description:
      "Premium architectural glass for homes, offices, hotels and commercial buildings including partitions, balustrades, doors and custom glass work.",
    icon: Square,
    image: "/images/services/glass-solutions.jpg",
  },
  {
    title: "Shower Cubicles",
    description:
      "Frameless and framed shower cubicles professionally measured, fabricated and installed with premium hardware.",
    icon: ShowerHead,
    image: "/images/services/shower-cubicle.jpg",
  },
  {
    title: "Aluminium Windows",
    description:
      "Modern aluminium windows manufactured with precision to provide durability, security and elegant finishes.",
    icon: Building2,
    image: "/images/services/aluminium-window.jpg",
  },
  {
    title: "Aluminium Doors",
    description:
      "Sliding, folding, hinged and commercial aluminium door systems supplied and installed to the highest standards.",
    icon: DoorOpen,
    image: "/images/services/aluminium-door.jpg",
  },
  {
    title: "Office Partitions",
    description:
      "Transform your workplace with stylish glass and aluminium office partition systems that maximize natural lighting.",
    icon: Building2,
    image: "/images/services/office-partition.jpg",
  },
  {
    title: "Mirrors",
    description:
      "Custom mirrors for bathrooms, gyms, salons, hotels, offices and luxury residential interiors.",
    icon: Square,
    image: "/images/services/mirror.jpg",
  },
  {
    title: "Picture Framing",
    description:
      "Professional custom picture framing for artwork, certificates, family portraits and corporate displays.",
    icon: Image,
    image: "/images/services/picture-framing.jpg",
  },
  {
    title: "Wall Panels",
    description:
      "Supply and installation of decorative wall panels for modern residential and commercial interiors.",
    icon: Paintbrush2,
    image: "/images/services/wall-panel.jpg",
  },
  {
    title: "Home Décor",
    description:
      "Elegant décor accessories carefully selected to elevate homes, apartments, offices and hospitality spaces.",
    icon: Home,
    image: "/images/services/home-decor.jpg",
  },
  {
    title: "DIY Power Tools",
    description:
      "Reliable professional-grade power tools suitable for construction, fabrication and home improvement projects.",
    icon: Drill,
    image: "/images/services/power-tools.jpg",
  },
  {
    title: "DIY Hand Tools",
    description:
      "Quality hand tools for professionals, contractors, technicians and DIY enthusiasts.",
    icon: Hammer,
    image: "/images/services/hand-tools.jpg",
  },
  {
    title: "Camping Equipment",
    description:
      "Durable outdoor and camping gear designed for adventure, travel and recreational activities.",
    icon: Tent,
    image: "/images/services/camping.jpg",
  },
];


function ServicesPage() {
  return (
    <PageShell>
      {/* HERO */}

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/services/services-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2F1111]/85" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">
          <span className="rounded-full bg-amber-500/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Professional Services
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
            Complete Glass, Aluminium &
            <br />
            Home Improvement Solutions
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-200">
            HGALLERY supplies, fabricates and installs premium glass,
            aluminium, shower cubicles, wall panels, picture framing,
            home décor products, DIY tools and camping equipment for
            residential, commercial and institutional projects across Kenya.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Request a Quote
            </Link>

            <Link
              to="/shop"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
            What We Do
          </span>

          <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
            Quality Products Backed by Professional Installation
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Whether you're building a new home, renovating an office,
            upgrading your bathroom or looking for quality tools and
            home improvement products, HGALLERY delivers complete
            solutions under one roof. Our experienced team focuses on
            craftsmanship, quality materials and customer satisfaction
            from consultation to project completion.
          </p>
        </div>
      </section>

      {/* SERVICES */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                    <Icon className="h-8 w-8 text-[#5B1F1F]" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5B1F1F]"
                  >
                    Request Service

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

            {/* WHY CHOOSE HGALLERY */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
              Why Choose HGALLERY
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
              Excellence Built Into Every Project
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              We combine premium products, skilled workmanship and outstanding
              customer service to deliver solutions that stand the test of time.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CheckCircle2,
                title: "Premium Materials",
                text: "We source quality products from trusted manufacturers to ensure durability and long-lasting performance.",
              },
              {
                icon: Wrench,
                title: "Professional Installation",
                text: "Experienced installers ensure every project is completed with precision and attention to detail.",
              },
              {
                icon: Building2,
                title: "Residential & Commercial",
                text: "From homes and apartments to offices, hotels and institutions, we deliver reliable solutions.",
              },
              {
                icon: Home,
                title: "Complete Solutions",
                text: "Supply, fabrication, installation, repairs and after-sales support all under one roof.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                  <Icon className="h-8 w-8 text-[#5B1F1F]" />
                </div>

                <h3 className="text-2xl font-bold">{title}</h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
              Our Process
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
              From Consultation to Completion
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Every project follows a structured process that guarantees quality,
              transparency and customer satisfaction.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Consultation",
              "Site Visit",
              "Measurements",
              "Quotation",
              "Fabrication",
              "Professional Installation",
              "Quality Inspection",
              "Project Handover",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#5B1F1F] text-2xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="rounded-full bg-amber-500/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Trusted Across Kenya
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
              Our products and installation services are trusted by homeowners,
              developers, architects, contractors and businesses throughout
              Kenya.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Residential Homes",
              "Apartments",
              "Hotels & Resorts",
              "Office Buildings",
              "Hospitals",
              "Schools",
              "Retail Shops",
              "Commercial Developments",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <CheckCircle2 className="mx-auto mb-4 h-8 w-8 text-amber-400" />

                <h3 className="font-semibold">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/services/cta.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center">
          <span className="rounded-full bg-amber-500/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Ready to Get Started?
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Let's Build Something Exceptional Together
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Whether you need glass and aluminium installations, shower
            cubicles, picture framing, wall panels, home décor, DIY tools or
            camping equipment, HGALLERY is ready to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Request a Free Quote
            </Link>

            <a
              href="tel:+254726335283"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Call +254 726 335 283
            </a>
          </div>
        </div>
      </section>

    </PageShell>
  );
}