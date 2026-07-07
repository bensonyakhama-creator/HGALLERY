import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Sparkles, PhoneCall } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { PageShell } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = products.filter((_, i) => i % 4 === 0).slice(0, 8);
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-brand-foreground">
        <img
          src={heroImg}
          alt=""
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Nairobi's design showroom
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Beautiful spaces, <span className="text-brand">crafted</span> for the way you live.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              From bespoke glass & aluminium to custom picture framing, wall panels, decor and reliable tools — everything you need under one roof on Magadi Road.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 text-sm font-semibold shadow-brand transition-transform hover:-translate-y-0.5">
                Browse the shop <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+254726335283" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
                <PhoneCall className="h-4 w-4" /> +254 726 335 283
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
              <div><dt className="text-white/60">Categories</dt><dd className="font-display text-2xl font-bold">6</dd></div>
              <div><dt className="text-white/60">Custom builds</dt><dd className="font-display text-2xl font-bold">100+</dd></div>
              <div><dt className="text-white/60">Happy homes</dt><dd className="font-display text-2xl font-bold">1.2k</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: ShieldCheck, title: "Quality guaranteed", copy: "Trusted brands and skilled craftsmanship." },
            { icon: Truck, title: "Nairobi delivery", copy: "Fast delivery across the city and beyond." },
            { icon: Sparkles, title: "Custom orders", copy: "Bespoke framing and fabrication to spec." },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">What we offer</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Shop by category</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-semibold text-brand hover:underline sm:inline">View all →</Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-brand"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img src={c.image} alt={c.name} loading="lazy" width={800} height={640} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-secondary-foreground">
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-white/80">{c.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-foreground">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Handpicked</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Featured products</h2>
            </div>
            <Link to="/shop" className="hidden text-sm font-semibold text-brand hover:underline sm:inline">All products →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-brand-foreground shadow-brand sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Have a custom project in mind?</h2>
            <p className="mt-4 text-white/80">Tell us about your space or artwork — our team will guide you from measurements to installation.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-md bg-gradient-brand px-6 py-3 text-sm font-semibold shadow-brand">Start a project</Link>
              <a href="mailto:hgalleryltd@gmail.com" className="rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">Email us</a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
