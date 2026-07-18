import { createFileRoute } from "@tanstack/react-router";
import { Save, Upload } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/admin/blog/new")({
  component: NewBlog,
});

function NewBlog() {
  return (
    <PageShell>
      <section className="bg-[#5B1F1F] py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-black">Create Blog Article</h1>

          <p className="mt-2 text-gray-200">
            Publish SEO articles without writing code.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-8 rounded-3xl bg-white p-10 shadow-lg">
          <input
            placeholder="Article Title"
            className="w-full rounded-xl border p-4"
          />

          <input placeholder="Slug" className="w-full rounded-xl border p-4" />

          <input
            placeholder="SEO Title"
            className="w-full rounded-xl border p-4"
          />

          <textarea
            rows={3}
            placeholder="SEO Description"
            className="w-full rounded-xl border p-4"
          />

          <select className="w-full rounded-xl border p-4">
            <option>Glass</option>

            <option>Aluminium</option>

            <option>Shower Cubicles</option>

            <option>Wall Panels</option>

            <option>Picture Framing</option>

            <option>Mirrors</option>

            <option>Home Décor</option>

            <option>DIY</option>

            <option>Camping</option>

            <option>Swiss Collection</option>
          </select>

          <textarea
            rows={20}
            placeholder="Write article..."
            className="w-full rounded-xl border p-4"
          />

          <input type="file" className="w-full rounded-xl border p-4" />

          <div className="flex gap-4">
            <button className="rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white">
              <Save className="mr-2 inline" size={18} />
              Publish
            </button>

            <button className="rounded-xl bg-gray-200 px-8 py-4 font-semibold">
              <Upload className="mr-2 inline" size={18} />
              Save Draft
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
