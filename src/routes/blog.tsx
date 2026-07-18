import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock3, User, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "HGALLERY Blog | Glass, Aluminium & Interior Design Tips",
      },
      {
        name: "description",
        content:
          "Read expert articles on glass, aluminium, shower cubicles, mirrors, wall panels, home décor, DIY products and premium interior solutions from HGALLERY Kenya.",
      },
    ],
  }),
  component: BlogPage,
});

const featuredPost = {
  slug: "choosing-the-right-shower-cubicle",
  title: "How to Choose the Right Shower Cubicle for Your Bathroom",
  image: "/images/blog/blog-1.jpg",
  category: "Shower Cubicles",
  author: "HGALLERY",
  date: "12 July 2026",
  readTime: "6 min read",
  excerpt:
    "Discover the different types of shower cubicles, glass thickness, hardware options and installation considerations before renovating your bathroom.",
};

const posts = [
  {
    slug: "modern-glass-partitions",
    title: "Modern Glass Partitions for Offices",
    image: "/images/blog/blog-2.jpg",
    category: "Glass",
    date: "10 July 2026",
    readTime: "5 min read",
  },
  {
    slug: "aluminium-windows-guide",
    title: "Why Aluminium Windows Are the Best Investment",
    image: "/images/blog/blog-3.jpg",
    category: "Aluminium",
    date: "8 July 2026",
    readTime: "4 min read",
  },
  {
    slug: "wall-panels-home",
    title: "Decorative Wall Panels That Transform Interiors",
    image: "/images/blog/blog-4.jpg",
    category: "Wall Panels",
    date: "5 July 2026",
    readTime: "7 min read",
  },
  {
    slug: "picture-framing-guide",
    title: "Professional Picture Framing Guide",
    image: "/images/blog/blog-5.jpg",
    category: "Picture Framing",
    date: "2 July 2026",
    readTime: "4 min read",
  },
];

function BlogPage() {
  return (
    <PageShell>
      {/* HERO */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            HGALLERY BLOG
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Ideas. Inspiration. Expertise.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Stay informed with expert advice on glass, aluminium, shower
            cubicles, mirrors, wall panels, home décor, DIY products and
            interior improvements.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="h-full w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <span className="rounded-full bg-[#5B1F1F]/10 px-4 py-2 text-sm font-semibold text-[#5B1F1F]">
              Featured Article
            </span>

            <h2 className="mt-8 text-5xl font-black text-[#5B1F1F]">
              {featuredPost.title}
            </h2>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />

                {featuredPost.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={16} />

                {featuredPost.readTime}
              </div>

              <div className="flex items-center gap-2">
                <User size={16} />

                {featuredPost.author}
              </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              {featuredPost.excerpt}
            </p>

            <Link
              to="/blog/$slug"
              params={{ slug: featuredPost.slug }}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white"
            >
              Read Full Article
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
                Latest Articles
              </span>

              <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
                Learn From Our Experts
              </h2>
            </div>

            <Link to="/contact" className="font-semibold text-[#5B1F1F]">
              Need Professional Advice?
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <span className="rounded-full bg-[#5B1F1F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#5B1F1F]">
                    {post.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold leading-snug">
                    {post.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>

                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5B1F1F]"
                  >
                    Read Article
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TOPICS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Browse By Topic
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              Popular Categories
            </h2>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              "Glass",
              "Aluminium",
              "Shower Cubicles",
              "Mirrors",
              "Picture Framing",
              "Wall Panels",
              "Home Décor",
              "Swiss Products",
              "DIY",
              "Camping",
            ].map((topic) => (
              <button
                key={topic}
                className="rounded-full border px-6 py-3 font-semibold transition hover:bg-[#5B1F1F] hover:text-white"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Stay Updated
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Get Interior Design Tips & Product Updates
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Receive expert advice, new arrivals, design inspiration, promotions
            and installation tips directly from HGALLERY.
          </p>

          <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl px-6 py-4 text-gray-900 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border bg-white p-12 shadow-sm">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
            Expert Knowledge
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#5B1F1F]">
            Expert Glass, Aluminium & Interior Design Resources
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            The HGALLERY Blog is your trusted resource for glass installations,
            aluminium fabrication, shower cubicles, mirrors, decorative wall
            panels, picture framing, home décor, Swiss products, DIY tools and
            premium architectural solutions.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're building a new home, renovating an office or
            upgrading your commercial property, our articles help you understand
            products, compare options, estimate costs and make informed
            decisions before purchasing.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            New articles are published regularly covering installation guides,
            maintenance tips, design trends, buying guides, project inspiration
            and professional advice from the HGALLERY team.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
            START YOUR PROJECT
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            Need Professional Advice?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Our experienced consultants are ready to help you choose the right
            products for your residential or commercial project. Contact
            HGALLERY today for expert guidance and a free quotation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#461818]"
            >
              Request Free Consultation
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
