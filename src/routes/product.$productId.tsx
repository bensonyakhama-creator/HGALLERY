import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

import { PageShell } from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/lib/cart";
import { formatKES } from "@/lib/catalog";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);

    if (!product) {
      throw notFound();
    }

    return product;
  },

  head: () => ({
    meta: [
      {
        title: "HGALLERY Product",
      },
      {
        name: "description",
        content: "Premium products from HGALLERY.",
      },
    ],
  }),

  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const { add } = useCart();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <PageShell>
      {/* Breadcrumb */}

      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#5B1F1F]">
            Home
          </Link>

          <span>/</span>

          <Link to="/shop" className="hover:text-[#5B1F1F]">
            Shop
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#5B1F1F]">{product.name}</span>
        </div>
      </section>

      {/* Product */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-[650px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <Link
              to="/shop"
              className="mb-6 inline-flex items-center gap-2 text-[#5B1F1F]"
            >
              <ArrowLeft size={18} />
              Back to Shop
            </Link>

            <span className="rounded-full bg-[#5B1F1F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#5B1F1F]">
              {product.category}
            </span>

            <h1 className="mt-6 text-5xl font-black text-[#5B1F1F]">
              {product.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 text-4xl font-black text-amber-600">
              {formatKES(product.price)}
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Premium Quality Materials
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Professional Installation Available
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Residential & Commercial Use
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Nationwide Delivery
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                onClick={() => add(product.id, 1)}
                className="flex items-center gap-3 rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#431515]"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <a
                href={`https://wa.me/254726335283?text=Hello HGALLERY, I'm interested in ${product.name}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#5B1F1F] px-8 py-4 font-semibold text-[#5B1F1F] transition hover:bg-[#5B1F1F] hover:text-white"
              >
                Request Quotation
              </a>
            </div>

            <div className="mt-14 grid gap-6 rounded-3xl bg-gray-50 p-8 md:grid-cols-3">
              <div className="text-center">
                <Truck className="mx-auto mb-4 h-10 w-10 text-[#5B1F1F]" />
                <h3 className="font-bold">Fast Delivery</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Delivery across Kenya.
                </p>
              </div>

              <div className="text-center">
                <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-[#5B1F1F]" />
                <h3 className="font-bold">Quality Products</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Premium brands and materials.
                </p>
              </div>

              <div className="text-center">
                <PhoneCall className="mx-auto mb-4 h-10 w-10 text-[#5B1F1F]" />
                <h3 className="font-bold">Expert Support</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Speak with our specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}

      {related.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-black text-[#5B1F1F]">
              Related Products
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to="/product/$productId"
                  params={{ productId: item.id }}
                  className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="h-60 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold">{item.name}</h3>

                    <p className="mt-2 font-semibold text-amber-600">
                      {formatKES(item.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
