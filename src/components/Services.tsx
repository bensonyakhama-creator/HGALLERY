import {
  GlassWater,
  ShowerHead,
  Building2,
  Wallpaper,
  Frame,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Glass Installation",
    description:
      "Premium residential and commercial glass installation including partitions, office glazing, mirrors and safety glass.",
    icon: GlassWater,
    image: "/images/services/glass-installation.jpg",
  },
  {
    title: "Shower Cubicles",
    description:
      "Supply and installation of modern frameless and framed shower cubicles customised to your bathroom.",
    icon: ShowerHead,
    image: "/images/services/shower-cubicles.jpg",
  },
  {
    title: "Aluminium Fabrication",
    description:
      "High-quality aluminium windows, doors, shopfronts and office partitions built to last.",
    icon: Building2,
    image: "/images/services/aluminium-works.jpg",
  },
  {
    title: "Wall Panels",
    description:
      "Luxury PVC, WPC and decorative wall panels that transform residential and commercial interiors.",
    icon: Wallpaper,
    image: "/images/services/wall-panels.jpg",
  },
  {
    title: "Picture Framing",
    description:
      "Professional custom framing for artwork, certificates, mirrors and photographs.",
    icon: Frame,
    image: "/images/services/picture-framing.jpg",
  },
  {
    title: "Power & Hand Tools",
    description:
      "Quality DIY equipment, hardware and professional tools from trusted brands.",
    icon: Wrench,
    image: "/images/services/hardware-tools.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#5B1F1F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#5B1F1F]">
            What We Do
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            Products & Installation Services
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            HGALLERY supplies premium products and provides expert installation
            services for residential, commercial and institutional projects
            across Kenya.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F] text-[#C9A227]">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#5B1F1F]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5B1F1F] transition hover:gap-4"
                  >
                    Request Service
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
