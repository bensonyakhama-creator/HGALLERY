import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, ShoppingBag } from "lucide-react";
import { PageShell } from "@/components/Layout";
import { formatKES, getProduct } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — H.Gallery" },
      { name: "description", content: "Review the items in your H.Gallery cart before enquiring." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, clear, count } = useCart();

  const lines = items
    .map((i) => ({ item: i, product: getProduct(i.id) }))
    .filter((l): l is { item: typeof l.item; product: NonNullable<typeof l.product> } => Boolean(l.product));

  const subtotal = lines.reduce((s, l) => s + l.product.price * l.item.qty, 0);

  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Your cart</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {count === 0 ? "Your cart is empty." : `${count} item${count === 1 ? "" : "s"} ready for enquiry.`}
        </p>

        {lines.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-card p-10 text-center">
            <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Browse the shop and add items to build your enquiry list.</p>
            <Link to="/shop" className="mt-6 inline-block rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground">
              Go to shop
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <ul className="lg:col-span-2 divide-y divide-border rounded-xl border border-border bg-card">
              {lines.map(({ item, product }) => (
                <li key={item.id} className="flex gap-4 p-4">
                  <Link to="/product/$productId" params={{ productId: product.id }} className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link to="/product/$productId" params={{ productId: product.id }} className="font-display text-lg font-semibold hover:text-brand">
                      {product.name}
                    </Link>
                    <p className="text-sm text-brand font-semibold">{formatKES(product.price)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-md border border-border">
                        <button className="px-2 py-1 text-muted-foreground hover:text-brand" onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease">−</button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.qty}</span>
                        <button className="px-2 py-1 text-muted-foreground hover:text-brand" onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase">+</button>
                      </div>
                      <button onClick={() => remove(item.id)} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm font-semibold">{formatKES(product.price * item.qty)}</div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-xl border border-border bg-card p-6 shadow-soft">
              <h2 className="font-display text-lg font-bold">Summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd className="font-semibold">{formatKES(subtotal)}</dd></div>
                <div className="flex justify-between text-xs text-muted-foreground"><dt>Delivery</dt><dd>Quoted on enquiry</dd></div>
              </dl>
              <a href="tel:+254726335283" className="mt-6 block w-full rounded-md bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground shadow-brand">
                Call to place order
              </a>
              <a
                href={`https://wa.me/254726335283?text=${encodeURIComponent(
                  "Hello H.Gallery, I'd like to enquire about:\n" +
                    lines.map((l) => `• ${l.product.name} × ${l.item.qty}`).join("\n"),
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block w-full rounded-md border border-border px-5 py-3 text-center text-sm font-semibold hover:border-brand hover:text-brand"
              >
                Enquire via WhatsApp
              </a>
              <button onClick={clear} className="mt-4 w-full text-xs text-muted-foreground hover:text-destructive">
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </section>
    </PageShell>
  );
}
