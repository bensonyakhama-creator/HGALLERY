import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const projects = [
  {
    title: "Corporate Office Glass Partitions",
    image: "/images/projects/glass-office-partition.jpg",
    location: "Nairobi",
    category: "Glass Installation",
  },
  {
    title: "Luxury Frameless Shower Cubicle",
    image: "/images/projects/frameless-shower-installation.jpg",
    location: "Karen",
    category: "Bathroom Renovation",
  },
  {
    title: "Modern Aluminium Windows",
    image: "/images/projects/modern-aluminium-windows.jpg",
    location: "Rongai",
    category: "Aluminium",
  },
  {
    title: "Premium Decorative Wall Panels",
    image: "/images/projects/luxury-wall-panels.jpg",
    location: "Westlands",
    category: "Interior Design",
  },
  {
    title: "Glass Balustrade Installation",
    image: "/images/projects/glass-balustrade.jpg",
    location: "Kiambu",
    category: "Glass",
  },
  {
    title: "Luxury Picture Framing",
    image: "/images/projects/custom-picture-framing.jpg",
    location: "Nairobi CBD",
    category: "Picture Framing",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f7f5f3] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-[#5B1F1F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#5B1F1F]">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            Recent Installation Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every project reflects our commitment to quality workmanship,
            precision and premium finishing.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-5 top-5 rounded-full bg-[#C9A227] px-4 py-2 text-xs font-bold uppercase text-[#5B1F1F]">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                  {project.location}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#5B1F1F]">
                  {project.title}
                </h3>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5B1F1F] transition hover:gap-4"
                >
                  Request Similar Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
