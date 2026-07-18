import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Hammer,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "HGALLERY | Glass, Aluminium, Wall Panels, Home Décor & DIY Store Kenya",
      },
      {
        name: "description",
        content:
          "HGALLERY is Kenya's premium supplier of glass, aluminium, shower cubicles, picture framing, wall panels, home décor, Swiss products, DIY power & hand tools and camping equipment with professional installation services.",
      },
    ],
  }),
  component: HomePage,
});

const categories = [
  {
    title: "Glass & Aluminium",
    image: "/images/categories/glass.jpg",
    href: "/shop/glass-aluminium",
  },
  {
    title: "Shower Cubicles",
    image: "/images/categories/shower.jpg",
    href: "/shop/shower-cubicles",
  },
  {
    title: "Picture Framing",
    image: "/images/categories/framing.jpg",
    href: "/shop/picture-framing",
  },
  {
    title: "Wall Panels",
    image: "/images/categories/wall-panels.jpg",
    href: "/shop/wall-panels",
  },
  {
    title: "Home Décor",
    image: "/images/categories/decor.jpg",
    href: "/shop/home-decor",
  },
  {
    title: "DIY Tools",
    image: "/images/categories/tools.jpg",
    href: "/shop/diy-tools",
  },
  {
    title: "Camping Gear",
    image: "/images/categories/camping.jpg",
    href: "/shop/camping",
  },
  {
    title: "Swiss Collection",
    image: "/images/categories/swiss.jpg",
    href: "/shop/swiss",
  },
];

const services = [
  "Glass Installation",
  "Aluminium Fabrication",
  "Shower Cubicle Installation",
  "Picture Framing",
  "Wall Panel Installation",
  "Repairs & Maintenance",
  "Site Survey & Measurements",
  "Custom Projects",
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}

      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: "url('/images/home/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2F1111]/80" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Kenya's Premium Home Improvement Showroom
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
              Premium Glass,
              <br />
              Aluminium &
              <br />
              Interior Solutions
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
              Discover premium glass, aluminium, shower cubicles, picture
              framing, decorative wall panels, home décor, Swiss products,
              professional DIY tools and camping equipment—all under one roof.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                Shop Products
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#5B1F1F]"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
            OUR CATEGORIES
          </span>

          <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
            Everything You Need In One Place
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-2"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>

                <ChevronRight className="text-[#5B1F1F]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4">
          {[
            {
              icon: Award,
              title: "Premium Quality",
              text: "Quality products sourced from trusted manufacturers.",
            },
            {
              icon: ShieldCheck,
              title: "Trusted Installers",
              text: "Experienced professionals delivering precision workmanship.",
            },
            {
              icon: Hammer,
              title: "Complete Solutions",
              text: "Supply, fabrication, installation and maintenance.",
            },
            {
              icon: Sparkles,
              title: "Modern Designs",
              text: "Elegant finishes for residential and commercial spaces.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                <Icon className="h-8 w-8 text-[#5B1F1F]" />
              </div>

              <h3 className="text-xl font-bold">{title}</h3>

              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/home/services.jpg"
            alt="HGALLERY Services"
            className="h-[650px] w-full rounded-3xl object-cover shadow-2xl"
          />

          <div>
            <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
              WHAT WE DO
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              Professional Supply &
              <br />
              Installation Services
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our experienced team provides complete solutions from consultation
              and measurements to fabrication, installation and after-sales
              support.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#441515]"
            >
              Explore Services
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#5B1F1F] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-5xl font-black">
            Let's Build Something Exceptional
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-200">
            Whether you're renovating your home, fitting out an office or
            starting a new construction project, HGALLERY has the products,
            expertise and professional team to deliver outstanding results.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white hover:bg-amber-600"
            >
              Get a Free Quote
            </Link>

            <Link
              to="/shop"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-[#5B1F1F]"
            >
              Visit Shop
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
