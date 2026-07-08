import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/Layout";
import { MapPin, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Projects | HGALLERY",
      },
      {
        name: "description",
        content:
          "Browse our completed glass, aluminium and shower cubicle installation projects across Kenya.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Luxury Shower Cubicle",
    location: "Karen, Nairobi",
    year: "2025",
    image: "/images/projects/project1.jpg",
    category: "Residential",
  },
  {
    title: "Office Glass Partitions",
    location: "Westlands",
    year: "2025",
    image: "/images/projects/project2.jpg",
    category: "Commercial",
  },
  {
    title: "Aluminium Windows",
    location: "Syokimau",
    year: "2024",
    image: "/images/projects/project3.jpg",
    category: "Residential",
  },
  {
    title: "Frameless Office Doors",
    location: "Upper Hill",
    year: "2024",
    image: "/images/projects/project4.jpg",
    category: "Commercial",
  },
  {
    title: "Modern Balcony Glass",
    location: "Kilimani",
    year: "2025",
    image: "/images/projects/project5.jpg",
    category: "Residential",
  },
  {
    title: "Reception Glass Wall",
    location: "CBD Nairobi",
    year: "2025",
    image: "/images/projects/project6.jpg",
    category: "Commercial",
  },
];

function ProjectsPage() {
  return (
    <PageShell>
      {/* Hero */}

      <section
        className="relative"
        style={{
          backgroundImage: "url('/images/projects/projects-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2F1111]/85" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
          <span className="rounded-full bg-amber-500/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Our Portfolio
          </span>

          <h1 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Completed Projects
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Discover some of the premium glass, aluminium and shower cubicle
            installations completed by HGALLERY across Kenya.
          </p>
        </div>
      </section>

      {/* Portfolio */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase text-amber-700">
                  {project.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold">{project.title}</h2>

                <div className="mt-6 flex items-center gap-3 text-gray-500">
                  <MapPin size={18} />
                  {project.location}
                </div>

                <div className="mt-3 flex items-center gap-3 text-gray-500">
                  <CalendarDays size={18} />
                  {project.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
