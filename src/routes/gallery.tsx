import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Gallery | HGALLERY Kenya",
      },
      {
        name: "description",
        content:
          "Browse HGALLERY completed glass, aluminium, shower cubicle, mirror, wall panel, picture framing and home décor installations across Kenya.",
      },
    ],
  }),
  component: GalleryPage,
});

const gallery = [
  {
    id: "1",
    title: "Luxury Shower Cubicle",
    category: "Shower Cubicles",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    id: "2",
    title: "Glass Partition",
    category: "Glass",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    id: "3",
    title: "Aluminium Windows",
    category: "Aluminium",
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    id: "4",
    title: "Wall Panels",
    category: "Wall Panels",
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    id: "5",
    title: "Picture Framing",
    category: "Picture Frames",
    image: "/images/gallery/gallery-5.jpg",
  },
  {
    id: "6",
    title: "Mirror Installation",
    category: "Mirrors",
    image: "/images/gallery/gallery-6.jpg",
  },
  {
    id: "7",
    title: "Home Décor",
    category: "Home Décor",
    image: "/images/gallery/gallery-7.jpg",
  },
  {
    id: "8",
    title: "Swiss Products",
    category: "Swiss Items",
    image: "/images/gallery/gallery-8.jpg",
  },
];

function GalleryPage() {
  return (
    <PageShell>
      {/* HERO */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
            <Camera size={38} />
          </div>

          <span className="mt-8 inline-block rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Project Gallery
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Inspiration From
            <br />
            Our Completed Work
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Browse real installations completed by HGALLERY. From shower
            cubicles and glass partitions to aluminium fabrication, wall panels,
            mirrors, home décor and premium Swiss products.
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Our Work
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              Designed. Built. Installed.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Every installation showcased below represents HGALLERY's
              dedication to quality workmanship, premium materials and attention
              to detail.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F9F7F5] p-10">
            <h3 className="text-2xl font-bold">Gallery Includes</h3>

            <div className="mt-8 grid gap-4 text-gray-700">
              <div>✓ Glass Installations</div>

              <div>✓ Aluminium Fabrication</div>

              <div>✓ Shower Cubicles</div>

              <div>✓ Mirrors</div>

              <div>✓ Picture Framing</div>

              <div>✓ Wall Panels</div>

              <div>✓ Home Décor</div>

              <div>✓ Swiss Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}

      <section className="border-y bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6 py-8">
          {[
            "All",
            "Glass",
            "Aluminium",
            "Shower Cubicles",
            "Mirrors",
            "Picture Frames",
            "Wall Panels",
            "Home Décor",
            "Swiss Items",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border bg-white px-6 py-3 text-sm font-semibold transition hover:bg-[#5B1F1F] hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gallery.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 translate-y-8 transition duration-500 group-hover:translate-y-0">
                  <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black">{item.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Premium installation completed by HGALLERY using quality
                  workmanship and carefully selected materials.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY OUR WORK STANDS OUT */}

      <section className="bg-[#F9F7F5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Why HGALLERY
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              Every Project Reflects Excellence
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Every image in our gallery represents our dedication to precision,
              premium materials and outstanding craftsmanship. We believe every
              project deserves the same attention regardless of its size.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">Premium Materials</h3>

              <p className="mt-4 leading-7 text-gray-600">
                We source quality glass, aluminium, accessories and décor from
                trusted suppliers.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">Expert Craftsmanship</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Every installation is handled by skilled technicians with years
                of experience.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">Modern Designs</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Elegant finishes tailored for modern homes, offices and
                commercial developments.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>

              <p className="mt-4 leading-7 text-gray-600">
                We work closely with every client to ensure the finished project
                exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-[#5B1F1F] px-10 py-20 text-white">
            <div className="text-center">
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                OUR IMPACT
              </span>

              <h2 className="mt-6 text-5xl font-black">Trusted Across Kenya</h2>
            </div>

            <div className="mt-16 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-6xl font-black text-amber-300">500+</h3>

                <p className="mt-4 text-lg">Completed Projects</p>
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

                <p className="mt-4 text-lg">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
            LET'S BUILD YOUR NEXT PROJECT
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            Inspired By What You've Seen?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're installing shower cubicles, aluminium windows, glass
            partitions, decorative mirrors, wall panels, picture framing, home
            décor, Swiss products or complete architectural glass solutions, our
            experienced team is ready to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#471818]"
            >
              Request Free Quote
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

      {/* SEO CONTENT */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border bg-white p-12">
          <h2 className="text-4xl font-black text-[#5B1F1F]">
            Premium Glass & Aluminium Projects Across Kenya
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            HGALLERY has successfully completed residential, commercial and
            institutional installations throughout Kenya. Our portfolio includes
            frameless shower cubicles, office glass partitions, aluminium
            windows and doors, shopfronts, mirrors, decorative wall panels,
            picture framing, home décor installations, Swiss products and
            complete architectural glass solutions.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every project is executed using premium materials, modern
            fabrication techniques and professional installation to ensure
            lasting quality, safety and exceptional aesthetics. Browse our
            gallery for inspiration and contact our team for a tailored
            quotation for your next residential or commercial project.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
