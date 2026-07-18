import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, CalendarDays, Building2 } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Projects | HGALLERY Kenya",
      },
      {
        name: "description",
        content:
          "Explore HGALLERY completed projects including shower cubicles, aluminium windows, glass partitions, mirrors, wall panels, picture framing and commercial installations across Kenya.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    id: "1",
    title: "Luxury Frameless Shower Cubicle",
    category: "Residential",
    location: "Karen, Nairobi",
    year: "2026",
    image: "/images/projects/project-1.jpg",
    description:
      "Supply and installation of premium frameless shower cubicle with black accessories.",
  },
  {
    id: "2",
    title: "Office Glass Partition",
    category: "Commercial",
    location: "Westlands",
    year: "2026",
    image: "/images/projects/project-2.jpg",
    description:
      "Modern office partition system using tempered glass and aluminium framing.",
  },
  {
    id: "3",
    title: "Aluminium Windows",
    category: "Residential",
    location: "Runda",
    year: "2025",
    image: "/images/projects/project-3.jpg",
    description:
      "Fabrication and installation of premium powder-coated aluminium windows.",
  },
  {
    id: "4",
    title: "Feature Mirror Wall",
    category: "Interior",
    location: "Kilimani",
    year: "2025",
    image: "/images/projects/project-4.jpg",
    description:
      "Decorative mirror installation for a luxury residential apartment.",
  },
];

function ProjectsPage() {
  return (
    <PageShell>
      {/* HERO */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Our Portfolio
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Completed Projects
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Browse some of our successfully completed residential, commercial
            and interior projects across Kenya. Every installation reflects our
            commitment to quality, craftsmanship and customer satisfaction.
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-black text-[#5B1F1F]">
              Built With Precision
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              From luxury homes to commercial offices, HGALLERY delivers premium
              glass, aluminium and interior finishing solutions throughout
              Kenya.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every project is planned, fabricated and installed by experienced
              professionals to achieve exceptional quality and durability.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-50 p-10">
            <h3 className="text-2xl font-bold">Project Categories</h3>

            <div className="mt-8 grid gap-4">
              <div>✓ Residential Homes</div>
              <div>✓ Commercial Buildings</div>
              <div>✓ Hotels</div>
              <div>✓ Offices</div>
              <div>✓ Apartments</div>
              <div>✓ Retail Spaces</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Featured Portfolio
            </span>

            <h2 className="mt-3 text-5xl font-black text-[#5B1F1F]">
              Recent Installations
            </h2>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-6 top-6 rounded-full bg-[#5B1F1F] px-5 py-2 text-sm font-semibold text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black">{project.title}</h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />

                    {project.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} />

                    {project.year}
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 size={18} />
                    HGALLERY
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 font-semibold text-[#5B1F1F]"
                >
                  Request Similar Project
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-[#F9F7F5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Our Process
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
              From Consultation To Installation
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#5B1F1F] text-2xl font-black text-white">
                1
              </div>

              <h3 className="text-xl font-bold">Consultation</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Understanding your project requirements, measurements and design
                preferences.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#5B1F1F] text-2xl font-black text-white">
                2
              </div>

              <h3 className="text-xl font-bold">Fabrication</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Precision cutting and fabrication using premium quality
                materials.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#5B1F1F] text-2xl font-black text-white">
                3
              </div>

              <h3 className="text-xl font-bold">Installation</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Professional installation by experienced technicians ensuring a
                perfect finish.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#5B1F1F] text-2xl font-black text-white">
                4
              </div>

              <h3 className="text-xl font-bold">After Sales</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Ongoing support, maintenance guidance and warranty assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-[#5B1F1F] px-10 py-20 text-white">
            <div className="text-center">
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                HGALLERY BY THE NUMBERS
              </span>

              <h2 className="mt-6 text-5xl font-black">
                Delivering Excellence Across Kenya
              </h2>
            </div>

            <div className="mt-16 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-6xl font-black text-amber-300">500+</h3>

                <p className="mt-4 text-lg">Successful Installations</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">1,000+</h3>

                <p className="mt-4 text-lg">Premium Products</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">10+</h3>

                <p className="mt-4 text-lg">Years Experience</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">100%</h3>

                <p className="mt-4 text-lg">Customer Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
            LET'S BUILD TOGETHER
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            Ready To Start Your Project?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're renovating your home, fitting out a commercial
            building, installing shower cubicles, glass partitions, aluminium
            windows, mirrors, wall panels, picture framing, or sourcing premium
            DIY and Swiss products, HGALLERY is ready to deliver exceptional
            quality and professional workmanship.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#461818]"
            >
              Request a Free Quote
            </Link>

            <Link
              to="/shop"
              className="rounded-xl border border-[#5B1F1F] px-8 py-4 font-semibold text-[#5B1F1F] transition hover:bg-[#5B1F1F] hover:text-white"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
