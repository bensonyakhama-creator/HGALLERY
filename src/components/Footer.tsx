import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock3, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* CTA SECTION */}

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/footer/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#5B1F1F]/90" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Ready To Start?
          </span>

          <h2 className="mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Premium Glass & Aluminium
            <br />
            Solutions for Every Space
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
            HGALLERY supplies and installs premium shower cubicles, frameless
            glass, aluminium windows, office partitions, mirrors, wall panels
            and bespoke glass solutions for residential and commercial projects
            throughout Kenya.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-amber-600"
            >
              Request a Quote
            </Link>

            <a
              href="tel:+254726335283"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#2F1111] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-5">
          {/* COMPANY */}

          <div>
            <img
              src="/images/logos/footer-logo.png"
              alt="HGALLERY"
              className="mb-6 h-14"
            />

            <p className="leading-8 text-gray-300">
              HGALLERY is your trusted supplier and installer of premium glass,
              aluminium and shower cubicle solutions for residential and
              commercial projects throughout Kenya.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110"
              >
                <FaFacebookF className="text-[#1877F2]" size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110"
              >
                <FaInstagram className="text-[#E4405F]" size={20} />
              </a>

              <a
                href="https://wa.me/254726335283"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110"
              >
                <FaWhatsapp className="text-[#25D366]" size={20} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110"
              >
                <FaYoutube className="text-[#FF0000]" size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110"
              >
                <FaLinkedinIn className="text-[#0A66C2]" size={20} />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110"
              >
                <FaTiktok className="text-black" size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-amber-400">
              Quick Links
            </h3>

            <div className="space-y-4">
              <Link to="/" className="block hover:text-amber-400">
                Home
              </Link>
              <Link to="/about" className="block hover:text-amber-400">
                About
              </Link>
              <Link to="/shop" className="block hover:text-amber-400">
                Shop
              </Link>
              <Link to="/contact" className="block hover:text-amber-400">
                Contact
              </Link>
            </div>
          </div>

          {/* PRODUCTS */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-amber-400">Products</h3>

            <div className="space-y-3 text-gray-300">
              <p>✓ Shower Cubicles</p>
              <p>✓ Frameless Glass</p>
              <p>✓ Aluminium Windows</p>
              <p>✓ Aluminium Doors</p>
              <p>✓ Office Partitions</p>
              <p>✓ Mirrors</p>
              <p>✓ Wall Panels</p>
              <p>✓ Glass Railings</p>
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-amber-400">Services</h3>

            <div className="space-y-3 text-gray-300">
              <p>✓ Site Survey</p>
              <p>✓ Professional Installation</p>
              <p>✓ Glass Fabrication</p>
              <p>✓ Aluminium Fabrication</p>
              <p>✓ Repairs & Maintenance</p>
              <p>✓ Custom Projects</p>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-amber-400">Contact</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 text-amber-400" />
                <div className="text-gray-300">
                  Our Mall
                  <br />
                  Magadi Road
                  <br />
                  Nairobi, Kenya
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-amber-400" />
                <a href="tel:+254726335283" className="hover:text-amber-400">
                  +254 726 335 283
                </a>
              </div>

              <div className="flex gap-4">
                <Mail className="text-amber-400" />
                <a
                  href="mailto:hgalleryltd@gmail.com"
                  className="hover:text-amber-400"
                >
                  hgalleryltd@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <Clock3 className="text-amber-400" />
                <div>
                  Mon – Sat
                  <br />
                  8:00 AM – 6:00 PM
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-gray-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} HGALLERY LTD. All Rights Reserved.
            </p>

            <div className="flex gap-8">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms & Conditions</Link>
              <Link to="/">Sitemap</Link>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="rounded-full bg-amber-500 p-3 text-white transition hover:bg-amber-600"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
