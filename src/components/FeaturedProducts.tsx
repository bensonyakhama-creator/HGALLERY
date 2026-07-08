import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";

const featuredProducts = [
  {
    title: "Frameless Shower Cubicle",
    image: "/images/products/frameless-shower-cubicle.jpg",
    category: "Shower Cubicles",
  },
  {
    title: "Sliding Shower Cubicle",
    image: "/images/products/sliding-shower-cubicle.jpg",
    category: "Shower Cubicles",
  },
  {
    title: "Aluminium Windows",
    image: "/images/products/aluminium-window.jpg",
    category: "Aluminium",
  },
  {
    title: "Glass Office Partition",
    image: "/images/products/office-glass-partition.jpg",
    category: "Glass",
  },
  {
    title: "Luxury Wall Panels",
    image: "/images/products/wall-panel.jpg",
    category: "Wall Panels",
  },
  {
    title: "Bathroom Mirrors",
    image: "/images/products/bathroom-mirror.jpg",
    category: "Mirrors",
  },
  {
    title: "Custom Picture Frames",
    image: "/images/products/picture-frame.jpg",
    category: "Picture Framing",
  },
  {
    title: "Professional Power Tools",
    image: "/images/products/angle-grinder.jpg",
    category: "Hardware",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-[#5B1F1F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#5B1F1F]">
            Featured Collection
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            Best Selling Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Discover our premium range of glass, aluminium, shower cubicles,
            wall panels, mirrors, picture framing and professional tools.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <span className="rounded-full bg-[#C9A227]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                  {product.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#5B1F1F]">
                  {product.title}
                </h3>

                <Link
                  to="/shop"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5B1F1F] transition hover:gap-4"
                >
                  View Product
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#401111]"
          >
            <ShoppingBag size={20} />
            Browse Full Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
