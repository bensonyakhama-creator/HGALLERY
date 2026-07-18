import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Package,
  Images,
  FolderTree,
  FileText,
  MessageSquare,
  Settings,
  PlusCircle,
  ShoppingBag,
} from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const cards = [
  {
    title: "Products",
    description: "Add, edit and delete products.",
    icon: Package,
    link: "/admin/products",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Categories",
    description: "Manage shop categories.",
    icon: FolderTree,
    link: "/admin/categories",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Gallery",
    description: "Upload completed projects.",
    icon: Images,
    link: "/admin/gallery",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Blog",
    description: "Publish articles.",
    icon: FileText,
    link: "/admin/blog",
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Reviews",
    description: "Manage customer reviews.",
    icon: MessageSquare,
    link: "/admin/reviews",
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Website",
    description: "Homepage & settings.",
    icon: Settings,
    link: "/admin/settings",
    color: "bg-gray-100 text-gray-700",
  },
];

function AdminDashboard() {
  return (
    <PageShell>
      <section className="bg-[#5B1F1F] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-300">
            HGALLERY CMS
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Content Management Dashboard
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Manage products, gallery, blogs, reviews and website content from
            one place.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black text-[#5B1F1F]">Dashboard</h2>

            <p className="mt-2 text-gray-600">
              Choose what you want to manage.
            </p>
          </div>

          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-2 rounded-xl bg-[#5B1F1F] px-6 py-3 font-semibold text-white"
          >
            <PlusCircle size={20} />
            New Product
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                to={card.link}
                className="group rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">{card.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {card.description}
                </p>

                <span className="mt-8 inline-flex items-center font-semibold text-[#5B1F1F]">
                  Open →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-[#F9F6F2] p-10">
          <div className="flex items-center gap-4">
            <ShoppingBag className="text-[#5B1F1F]" size={40} />

            <div>
              <h3 className="text-3xl font-black">Store Overview</h3>

              <p className="text-gray-600">Quick summary of your website.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow">
              <h4 className="text-4xl font-black text-[#5B1F1F]">0</h4>
              <p className="mt-2 text-gray-500">Products</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow">
              <h4 className="text-4xl font-black text-[#5B1F1F]">0</h4>
              <p className="mt-2 text-gray-500">Categories</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow">
              <h4 className="text-4xl font-black text-[#5B1F1F]">0</h4>
              <p className="mt-2 text-gray-500">Blog Posts</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow">
              <h4 className="text-4xl font-black text-[#5B1F1F]">0</h4>
              <p className="mt-2 text-gray-500">Gallery Images</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
