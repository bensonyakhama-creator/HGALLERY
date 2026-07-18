import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/Layout";
import { Award, Building2, CheckCircle, Users, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About HGALLERY | Glass & Aluminium Experts in Kenya",
      },
      {
        name: "description",
        content:
          "Learn about HGALLERY, Kenya's trusted supplier and installer of glass, aluminium, shower cubicles, mirrors, office partitions and premium architectural glass solutions.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      {/* Hero */}
      {/* Hero */}

      <section
        className="relative overflow-hidden py-32 text-white"
        style={{
          backgroundImage: "url('/images/about/about-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#5B1F1F]/85" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            About HGALLERY
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
            Building Better Spaces
            <br />
            Through Quality & Craftsmanship
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            HGALLERY is a trusted supplier and installer of premium glass,
            aluminium, shower cubicles, picture framing, decorative wall panels,
            home décor, DIY power tools, hand tools and camping equipment. We
            provide complete solutions for residential, commercial and
            institutional projects across Kenya.
          </p>
        </div>
      </section>

      {/* Company Story */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/images/about/about-company.jpg"
              alt="HGALLERY Showroom"
              className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              WHO WE ARE
            </span>

            <h2 className="mt-4 text-5xl font-black leading-tight text-[#5B1F1F]">
              One Destination For
              <br />
              Quality Home Improvement
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              HGALLERY was founded with one goal: to provide quality products
              backed by professional installation and dependable customer
              service. We believe every project deserves products that combine
              durability, functionality and timeless design.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Today we proudly serve homeowners, contractors, architects,
              interior designers, developers and businesses throughout Kenya,
              supplying premium products for both new construction and
              renovation projects.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From modern shower cubicles and frameless glass to decorative wall
              panels, custom picture framing, stylish home décor, DIY tools and
              outdoor camping equipment, HGALLERY brings everything together
              under one roof.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                "Glass & Aluminium",
                "Shower Cubicles",
                "Picture Framing",
                "Wall Panels",
                "Home Décor",
                "DIY Power Tools",
                "Hand Tools",
                "Camping Equipment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission • Vision • Statistics */}

      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}

            <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
                OUR MISSION
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#5B1F1F]">
                Delivering Quality Without Compromise
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our mission is to provide quality products and professional
                installation services that exceed customer expectations while
                offering reliable solutions for homes, offices and commercial
                developments across Kenya.
              </p>
            </div>

            {/* Vision */}

            <div className="rounded-3xl bg-[#5B1F1F] p-10 text-white shadow-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                OUR VISION
              </span>

              <h2 className="mt-4 text-4xl font-black">
                Becoming Kenya's Leading Home Improvement Brand
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-200">
                We aim to become the preferred destination for premium glass,
                aluminium, interior finishing products and DIY solutions through
                innovation, quality workmanship and exceptional customer
                service.
              </p>
            </div>
          </div>

          {/* Statistics */}

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "1000+",
                title: "Products",
                text: "Glass, aluminium, décor, tools and accessories.",
              },
              {
                number: "500+",
                title: "Projects",
                text: "Residential and commercial installations completed.",
              },
              {
                number: "10+",
                title: "Years Experience",
                text: "Serving homes and businesses across Kenya.",
              },
              {
                number: "100%",
                title: "Customer Focus",
                text: "Every project receives personalised attention.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-10 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-5xl font-black text-[#5B1F1F]">
                  {item.number}
                </h3>

                <p className="mt-4 text-xl font-bold">{item.title}</p>

                <p className="mt-3 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
              OUR EXPERTISE
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
              Complete Home Improvement Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              From premium architectural glass to stylish home décor and
              professional installation services, HGALLERY offers everything
              needed to create beautiful, functional and lasting spaces.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-bold">Glass Solutions</h3>
              <p className="mt-4 text-gray-600">
                Frameless glass, mirrors, office partitions, railings and custom
                installations.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-bold">Aluminium Systems</h3>
              <p className="mt-4 text-gray-600">
                Windows, doors, shopfronts, curtain walls and custom
                fabrication.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-bold">Interior Solutions</h3>
              <p className="mt-4 text-gray-600">
                Shower cubicles, picture framing, decorative wall panels and
                home décor.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-bold">DIY & Outdoor</h3>
              <p className="mt-4 text-gray-600">
                Professional power tools, hand tools and quality camping
                equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
              Built Around Quality
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Glass Solutions",
                text: "Frameless glass, mirrors, partitions, balustrades and custom fabrication.",
              },
              {
                title: "Aluminium Systems",
                text: "Windows, doors, shopfronts, curtain walls and architectural systems.",
              },
              {
                title: "Shower Cubicles",
                text: "Premium shower cubicles designed and professionally installed.",
              },
              {
                title: "Picture Framing",
                text: "Custom framing for artwork, certificates, photographs and mirrors.",
              },
              {
                title: "Wall Panels",
                text: "Decorative interior wall panels supplied and installed.",
              },
              {
                title: "Home Décor",
                text: "Modern décor accessories that complete beautiful living spaces.",
              },
              {
                title: "DIY Tools",
                text: "Professional power tools, hand tools and workshop equipment.",
              },
              {
                title: "Camping Gear",
                text: "Outdoor and camping equipment built for adventure and reliability.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-[#5B1F1F]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
