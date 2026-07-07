import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { formatKES, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-brand">
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="block aspect-[4/3] overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link to="/product/$productId" params={{ productId: product.id }} className="hover:text-brand">
          <h3 className="font-display text-lg font-semibold text-card-foreground">{product.name}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-bold text-brand">{formatKES(product.price)}</span>
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="text-xs font-semibold text-secondary hover:text-brand"
          >
            View →
          </Link>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            add(product.id, 1);
          }}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
        >
          <ShoppingCart className="h-3.5 w-3.5" /> Add to cart
        </button>
      </div>
    </article>
  );
}
