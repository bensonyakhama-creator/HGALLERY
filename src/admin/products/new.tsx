import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Upload, Save, ImagePlus } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/admin/products/new")({
  component: NewProductPage,
});

function NewProductPage() {
  return (
    <PageShell>
      <section className="bg-[#5B1F1F] py-14 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div>
            <Link
              to="/admin/products"
              className="mb-5 inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Products
            </Link>

            <h1 className="text-4xl font-black">Add New Product</h1>

            <p className="mt-3 text-gray-200">
              Complete the information below to publish a new product.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold">
            <Save size={18} />
            Save Product
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* LEFT */}

          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="mb-8 text-2xl font-bold">Product Information</h2>

              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full rounded-xl border p-4"
                />

                <textarea
                  rows={6}
                  placeholder="Full Product Description"
                  className="w-full rounded-xl border p-4"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="mb-8 text-2xl font-bold">Product Images</h2>

              <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed">
                <ImagePlus size={60} className="text-gray-400" />

                <p className="mt-5 font-semibold">
                  Click to upload product images
                </p>

                <p className="text-sm text-gray-500">JPG • PNG • WEBP</p>

                <input type="file" multiple className="hidden" />
              </label>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="mb-8 text-2xl font-bold">
                Product Specifications
              </h2>

              <textarea
                rows={8}
                placeholder="Dimensions, Materials, Features, Warranty..."
                className="w-full rounded-xl border p-4"
              />
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold">Pricing</h3>

              <div className="space-y-5">
                <input
                  type="number"
                  placeholder="Selling Price"
                  className="w-full rounded-xl border p-4"
                />

                <input
                  type="number"
                  placeholder="Offer Price"
                  className="w-full rounded-xl border p-4"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold">Inventory</h3>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="SKU"
                  className="w-full rounded-xl border p-4"
                />

                <input
                  type="number"
                  placeholder="Stock Quantity"
                  className="w-full rounded-xl border p-4"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold">Category</h3>

              <select className="w-full rounded-xl border p-4">
                <option>Glass & Aluminium</option>

                <option>Shower Cubicles</option>

                <option>Picture Framing</option>

                <option>Wall Panels</option>

                <option>Mirrors</option>

                <option>Home Décor</option>

                <option>DIY Tools</option>

                <option>Camping Gear</option>

                <option>Swiss Collection</option>
              </select>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold">SEO</h3>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="SEO Title"
                  className="w-full rounded-xl border p-4"
                />

                <textarea
                  rows={4}
                  placeholder="SEO Description"
                  className="w-full rounded-xl border p-4"
                />
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#5B1F1F] py-4 font-semibold text-white transition hover:bg-[#411515]">
              <Upload size={20} />
              Publish Product
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
