import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ShoppingCart, Search } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Shop", to: "/shop" },
  { name: "Contact", to: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5B1F1F] text-white font-bold text-2xl shadow-lg">
            H
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#5B1F1F]">
              HGALLERY
            </h2>

            <p className="text-xs text-gray-500">
              Glass • Aluminium • Shower Cubicles
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              activeProps={{
                className:
                  "text-[#8C5A3C] font-semibold border-b-2 border-[#8C5A3C]",
              }}
              className="text-gray-700 hover:text-[#5B1F1F] transition pb-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="rounded-full bg-gray-100 p-3 hover:bg-[#5B1F1F] hover:text-white transition">
            <Search size={18} />
          </button>

          <Link
            to="/cart"
            className="relative rounded-full bg-gray-100 p-3 hover:bg-[#5B1F1F] hover:text-white transition"
          >
            <ShoppingCart size={18} />

            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {count}
              </span>
            )}
          </Link>

          <a
            href="tel:+254726335283"
            className="rounded-xl bg-[#5B1F1F] px-5 py-3 text-white font-semibold hover:bg-[#8C5A3C] transition flex items-center gap-2"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-4">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 border-b hover:text-[#5B1F1F]"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:+254726335283"
              className="mt-5 rounded-xl bg-[#5B1F1F] py-3 text-center text-white font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
