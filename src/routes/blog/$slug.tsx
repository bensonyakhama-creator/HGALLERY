import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogArticle,
});

const articles = {
  "choosing-the-right-shower-cubicle": {
    title: "How to Choose the Right Shower Cubicle for Your Bathroom",
    category: "Shower Cubicles",
    author: "HGALLERY",
    date: "12 July 2026",
    readTime: "5 min read",
    image: "/images/blog/blog-1.jpg",
    content: [
      {
        heading: "Introduction",
        body: "A shower cubicle is one of the most important features of a modern bathroom. Choosing the right design improves appearance, saves space and increases property value.",
      },
      {
        heading: "Consider Your Bathroom Size",
        body: "Measure your available space before selecting a frameless, sliding or hinged shower enclosure. Proper measurements ensure a perfect installation.",
      },
      {
        heading: "Glass Thickness",
        body: "Tempered safety glass offers strength, durability and safety. Premium installations commonly use thicker glass for improved stability and appearance.",
      },
      {
        heading: "Hardware Finish",
        body: "Choose finishes that complement your bathroom such as matte black, chrome, brushed gold or stainless steel.",
      },
      {
        heading: "Professional Installation",
        body: "Professional installation guarantees waterproof sealing, accurate alignment and long-term durability.",
      },
      {
        heading: "Why HGALLERY",
        body: "HGALLERY supplies premium shower cubicles, provides accurate site measurements and delivers professional installation throughout Kenya.",
      },
    ],
  },
};

function BlogArticle() {
  const { slug } = Route.useParams();

  const article =
    articles[slug as keyof typeof articles] ??
    articles["choosing-the-right-shower-cubicle"];

  return (
    <PageShell>
      {/* Hero */}

      <section className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="h-[500px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-5xl px-6 text-white">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              {article.category}
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              {article.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {article.date}
              </div>

              <div className="flex items-center gap-2">
                <User size={18} />
                {article.author}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}

      <section className="mx-auto max-w-4xl px-6 py-24">
        {article.content.map((section) => (
          <div key={section.heading} className="mb-16">
            <h2 className="text-3xl font-black text-[#5B1F1F]">
              {section.heading}
            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              {section.body}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}

      <section className="bg-[#5B1F1F] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-5xl font-black">Need Professional Advice?</h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Our experts are ready to help you choose the right products,
            measurements and installation services for your project.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
          >
            Contact HGALLERY
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
