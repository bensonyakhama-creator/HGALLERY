import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShowerHead,
  Building2,
  DoorOpen,
  Square,
  Hammer,
  Wrench,
} from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services | HGALLERY",
      },
      {
        name: "description",
        content:
          "Professional glass, aluminium and shower cubicle installation services in Kenya.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Shower Cubicle Installation",
    description:
      "Modern frameless and framed shower cubicles professionally measured and installed.",
    icon: ShowerHead,
    image: "/images/services/shower-cubicle.jpg",
  },
  {
    title: "Glass Partitions",
    description:
      "Elegant office and residential glass partition systems for modern interiors.",
    icon: Building2,
    image: "/images/services/glass-partition.jpg",
  },
  {
    title: "Aluminium Windows & Doors",
    description:
      "Premium aluminium fabrication with durable finishes and precision installation.",
    icon: DoorOpen,
    image: "/images/services/aluminium.jpg",
  },
  {
    title: "Mirrors & Decorative Glass",
    description:
      "Custom mirrors, feature walls and decorative glass solutions for homes and businesses.",
    icon: Square,
    image: "/images/services/mirror.jpg",
  },
  {
    title: "Glass Fabrication",
    description:
      "Cutting, polishing and fabrication of premium architectural glass.",
    icon: Hammer,
    image: "/images/services/fabrication.jpg",
  },
  {
    title: "Maintenance & Repairs",
    description:
      "Repair and maintenance of existing glass and aluminium installations.",
    icon: Wrench,
    image: "/images/services/repair.jpg",
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

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Our Services
          </span>

          <h1 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Professional Installation
            <br />
            You Can Trust
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            We provide complete supply, fabrication and installation services
            for residential, commercial and industrial projects throughout
            Kenya.
          </p>
        </div>
      </section>

      {/* SERVICES */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl border bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B1F1F]/10 text-[#5B1F1F]">
                    <Icon size={28} />
                  </div>

                  <h2 className="text-2xl font-bold">{service.title}</h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#5B1F1F]"
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
    </PageShell>
  );
}
