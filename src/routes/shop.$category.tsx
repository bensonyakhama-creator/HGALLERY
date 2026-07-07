import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, getProductsByCategory, type Product } from "@/lib/catalog";

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category, products: getProductsByCategory(params.category) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category not found — H.Gallery" }, { name: "robots", content: "noindex" }] };
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} — H.Gallery` },
        { name: "description", content: category.description },
        { property: "og:title", content: `${category.name} — H.Gallery` },
        { property: "og:description", content: category.description },
        { property: "og:image", content: category.image },
      ],
    };
  },
  notFoundComponent: CategoryNotFound,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <Link to="/shop" className="mt-6 inline-block rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground">Back to shop</Link>
    </div>
  ),
  component: CategoryPage,
});

function CategoryNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Category not found</h1>
      <p className="mt-3 text-muted-foreground">The category you requested doesn't exist.</p>
      <Link to="/shop" className="mt-6 inline-block rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground">All categories</Link>
    </div>
  );
}

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero text-brand-foreground">
        <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-xs text-white/70">
            <Link to="/" className="hover:text-brand-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/shop" className="hover:text-brand-foreground">Shop</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-foreground">{category.name}</span>
          </nav>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-white/85">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p: Product) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold">Other categories</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.filter((c) => c.slug !== category.slug).map((c) => (
            <Link key={c.slug} to="/shop/$category" params={{ category: c.slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand">
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
