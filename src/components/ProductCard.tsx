import type { Product } from "@/types";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="rounded-3xl border bg-white overflow-hidden">
      <img
        src={product.images[0]}

        alt={product.name}

        className="aspect-square w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">{product.name}</h3>

        <p className="mt-3 text-gray-600">{product.shortDescription}</p>
      </div>
    </div>
  );
}
