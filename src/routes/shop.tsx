import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageShell } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/catalog";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — H.Gallery" },
      { name: "description", content: "Browse glass & aluminium, framing, wall panels, decor, tools and camping gear at H.Gallery, Nairobi." },
      { property: "og:title", content: "Shop — H.Gallery" },
      { property: "og:description", content: "All six categories in one place." },
    ],
  }),
  component: ShopLayout,
});

function ShopLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/shop/$category");
  if (isChild) return <PageShell><Outlet /></PageShell>;

  return (
    <PageShell>
      <section className="border-b border-border bg-gradient-hero py-16 text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-foreground/70">Shop</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Everything for your space</h1>
          <p className="mt-4 max-w-2xl text-white/80">Explore our full range — from architectural glass to weekend camping essentials.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold">Categories</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className="group flex gap-4 rounded-xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-brand"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md">
                <img src={c.image} alt={c.name} loading="lazy" width={160} height={160} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{c.tagline}</p>
                <span className="mt-1 inline-block text-xs font-semibold text-brand">Shop {c.name} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold">All products</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </PageShell>
  );
}
