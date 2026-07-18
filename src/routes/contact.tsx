import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock3, Send, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact HGALLERY | Glass & Aluminium Experts Kenya",
      },
      {
        name: "description",
        content:
          "Contact HGALLERY for premium glass, aluminium, shower cubicles, mirrors, wall panels, picture framing, Swiss products, DIY supplies and professional installation services across Kenya.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      {/* HERO */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Contact HGALLERY
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Let's Discuss
            <br />
            Your Project
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Whether you're planning a residential, commercial or interior
            project, our specialists are ready to assist you with professional
            advice, quality products and expert installation.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* LEFT */}

          <div className="lg:col-span-2">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Get In Touch
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              We'd Love To Hear From You
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Contact our experienced team for quotations, consultations,
              measurements, product enquiries and installation services.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                  <MapPin className="text-[#5B1F1F]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Showroom</h3>

                  <p className="mt-2 text-gray-600">
                    Our Mall, Magadi Road, Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                  <Phone className="text-[#5B1F1F]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Call Us</h3>

                  <p className="mt-2 text-gray-600">+254 726 335 283</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                  <Mail className="text-[#5B1F1F]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Email</h3>

                  <p className="mt-2 text-gray-600">hgalleryltd@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                  <Clock3 className="text-[#5B1F1F]" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Opening Hours</h3>

                  <p className="mt-2 text-gray-600">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="lg:col-span-3">
            <div className="rounded-[32px] border bg-white p-10 shadow-xl">
              <h2 className="text-4xl font-black text-[#5B1F1F]">
                Request a Free Quote
              </h2>

              <p className="mt-4 text-gray-600">
                Complete the form below and our team will contact you shortly.
              </p>

              <form className="mt-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-xl border p-4 outline-none focus:border-[#5B1F1F]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-xl border p-4 outline-none focus:border-[#5B1F1F]"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border p-4 outline-none focus:border-[#5B1F1F]"
                />

                <input
                  type="text"
                  placeholder="Project Location"
                  className="w-full rounded-xl border p-4 outline-none focus:border-[#5B1F1F]"
                />

                <select className="w-full rounded-xl border p-4">
                  <option>Select Service</option>

                  <option>Glass Installation</option>

                  <option>Aluminium Works</option>

                  <option>Shower Cubicles</option>

                  <option>Mirrors</option>

                  <option>Wall Panels</option>

                  <option>Picture Framing</option>

                  <option>Swiss Products</option>

                  <option>DIY Products</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border p-4 outline-none focus:border-[#5B1F1F]"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#461818]"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP & QUICK CONTACT */}

      <section className="bg-[#F9F7F5] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* MAP */}

          <div className="overflow-hidden rounded-[32px] border bg-white shadow-lg">
            <iframe
              title="HGALLERY Location"
              src="https://www.google.com/maps?q=Our+Mall+Magadi+Road+Nairobi&output=embed"
              loading="lazy"
              className="h-[520px] w-full border-0"
            />
          </div>

          {/* QUICK CONTACT */}

          <div className="flex flex-col justify-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Need Immediate Assistance?
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              Talk To Our Team Today
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              We respond quickly to enquiries about shower cubicles, glass
              partitions, aluminium fabrication, mirrors, wall panels, Swiss
              products, home décor, DIY products, hand tools and power tools.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+254726335283"
                className="flex items-center gap-5 rounded-2xl border bg-white p-6 transition hover:border-[#5B1F1F]"
              >
                <Phone className="text-[#5B1F1F]" />

                <div>
                  <h3 className="font-bold">Call Now</h3>

                  <p className="text-gray-600">+254 726 335 283</p>
                </div>
              </a>

              <a
                href="https://wa.me/254726335283"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 rounded-2xl border bg-green-600 p-6 text-white transition hover:bg-green-700"
              >
                <MessageCircle />

                <div>
                  <h3 className="font-bold">WhatsApp</h3>

                  <p>Chat With Our Team</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HGALLERY */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              More Than A Supplier
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Expert Advice</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Product recommendations tailored to your project requirements.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Quality Installation</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Professional installation by experienced technicians across
                Kenya.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Genuine Products</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Premium glass, aluminium, Swiss products, tools and accessories.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Reliable Support</h3>

              <p className="mt-4 leading-8 text-gray-600">
                From consultation through installation and after-sales service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#F9F7F5] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              Common Questions
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-xl font-bold">Do you offer site visits?</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Yes. Our team can visit your site, take measurements and
                recommend the best solution before installation.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-xl font-bold">
                Do you install outside Nairobi?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Yes. We undertake residential and commercial projects throughout
                Kenya.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-xl font-bold">
                How long does installation take?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Timelines vary depending on project size, fabrication
                requirements and product availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STATISTICS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-[#5B1F1F] px-10 py-20 text-white">
            <div className="text-center">
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                HGALLERY IN NUMBERS
              </span>

              <h2 className="mt-6 text-5xl font-black">
                Delivering Excellence Across Kenya
              </h2>
            </div>

            <div className="mt-16 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-6xl font-black text-amber-300">500+</h3>

                <p className="mt-4 text-lg">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">1,000+</h3>

                <p className="mt-4 text-lg">Premium Products</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">10+</h3>

                <p className="mt-4 text-lg">Years Experience</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">98%</h3>

                <p className="mt-4 text-lg">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#F9F7F5] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
            READY TO GET STARTED?
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            Let's Build Something Beautiful Together
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're constructing a new home, renovating an office,
            installing shower cubicles, upgrading windows, sourcing premium
            Swiss products or shopping for quality tools, HGALLERY is your
            trusted partner.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="tel:+254726335283"
              className="rounded-xl bg-[#5B1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#461818]"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/254726335283"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#5B1F1F] px-8 py-4 font-semibold text-[#5B1F1F] transition hover:bg-[#5B1F1F] hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border bg-white p-12">
          <h2 className="text-4xl font-black text-[#5B1F1F]">
            Contact HGALLERY – Kenya's Glass & Aluminium Specialists
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            HGALLERY supplies and installs premium glass, aluminium windows and
            doors, shower cubicles, office partitions, mirrors, decorative wall
            panels, picture framing, home décor, Swiss products, DIY materials,
            power tools, hand tools and camping equipment throughout Kenya.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced consultants help homeowners, architects, interior
            designers, contractors and businesses choose the right products for
            every project. We provide professional site visits, accurate
            measurements, fabrication, installation and after-sales support.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Visit our showroom along Magadi Road, call our team or send us an
            enquiry online. We are committed to delivering premium quality,
            competitive pricing and outstanding customer service.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
