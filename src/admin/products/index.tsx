import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Pencil, Trash2, Search, Package } from "lucide-react";
import { products } from "@/lib/products";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/admin/products/")({
  component: ProductsAdmin,
});

function ProductsAdmin() {
  return (
    <PageShell>
      <section className="bg-[#5B1F1F] py-14 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div>
            <h1 className="text-4xl font-black">Product Manager</h1>

            <p className="mt-2 text-gray-200">
              Manage all products in your online store.
            </p>
          </div>

          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white"
          >
            <Plus size={18} />
            Add Product
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Search */}

        <div className="mb-8 flex items-center gap-3 rounded-xl border bg-white px-5 py-4">
          <Search className="text-gray-400" />

          <input
            placeholder="Search products..."
            className="w-full outline-none"
          />
        </div>

        {/* Empty */}

        {products.length === 0 ? (
          <div className="rounded-3xl border border-dashed py-24 text-center">
            <Package size={70} className="mx-auto text-gray-300" />

            <h2 className="mt-6 text-3xl font-bold">No Products Yet</h2>

            <p className="mt-3 text-gray-500">
              Start building your online store by adding your first product.
            </p>

            <Link
              to="/admin/products/new"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white"
            >
              <Plus size={18} />
              Add First Product
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border bg-white shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left">Image</th>

                  <th className="px-6 py-4 text-left">Product</th>

                  <th className="px-6 py-4 text-left">Category</th>

                  <th className="px-6 py-4 text-left">Price</th>

                  <th className="px-6 py-4 text-left">Stock</th>

                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                    </td>

                    <td className="px-6 py-4 font-semibold">{product.name}</td>

                    <td className="px-6 py-4">{product.category}</td>

                    <td className="px-6 py-4">
                      KSh {product.price.toLocaleString()}
                    </td>

                    <td className="px-6 py-4">{product.stock}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button className="rounded-lg bg-blue-100 p-2 text-blue-700">
                          <Pencil size={18} />
                        </button>

                        <button className="rounded-lg bg-red-100 p-2 text-red-700">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </PageShell>
  );
}
