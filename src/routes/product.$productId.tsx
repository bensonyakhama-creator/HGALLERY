import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, ShoppingCart, Check, Phone } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import {
  formatKES,
  getCategory,
  getProduct,
  getProductsByCategory,
  type Product,
} from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    const category = getCategory(product.category)!;
    const related = getProductsByCategory(product.category)
      .filter((p) => p.id !== product.id)
      .slice(0, 4);
    return { product, category, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Product not found — H.Gallery" }, { name: "robots", content: "noindex" }] };
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — H.Gallery` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — H.Gallery` },
        { property: "og:description", content: product.description },
        { property: "og:image", content: product.image },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Product not found</h1>
        <p className="mt-3 text-muted-foreground">The product you're looking for doesn't exist.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground">
          Back to shop
        </Link>
      </div>
    </PageShell>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <PageShell>
      <div className="border-b border-border bg-muted/40">
        <nav className="mx-auto flex max-w-7xl items-center gap-1 px-4 py-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <Link to="/" className="hover:text-brand">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-brand">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop/$category" params={{ category: category.slug }} className="hover:text-brand">
            {category.name}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="aspect-square bg-muted">
              <img
                src={product.image}
                alt={product.name}
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">{category.name}</p>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{product.name}</h1>
            <div className="mt-4 text-3xl font-bold text-brand">{formatKES(product.price)}</div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{product.description}</p>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Quality-checked in our Nairobi showroom</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Delivery available across Kenya</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Installation & custom fitting on request</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-md border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-lg font-semibold text-muted-foreground hover:text-brand"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="min-w-8 text-center text-sm font-semibold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2 text-lg font-semibold text-muted-foreground hover:text-brand"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
              >
                {added ? <><Check className="h-4 w-4" /> Added to cart</> : <><ShoppingCart className="h-4 w-4" /> Add to cart</>}
              </button>

              <a
                href="tel:+254726335283"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" /> Enquire
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Prices in Kenyan Shillings. Contact us for bulk orders and trade pricing.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold">You may also like</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p: Product) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </PageShell>
  );
}
