import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, ArrowRight, BadgeCheck } from "lucide-react";
import { PageShell } from "@/components/Layout";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      {
        title: "Customer Reviews | HGALLERY Kenya",
      },
      {
        name: "description",
        content:
          "Read verified customer reviews for HGALLERY. Discover why homeowners, businesses and contractors trust us for premium glass, aluminium, shower cubicles, mirrors, wall panels, picture framing and Swiss products.",
      },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    id: 1,
    name: "James Mwangi",
    location: "Karen",
    rating: 5,
    project: "Frameless Shower Cubicle",
    image: "/images/reviews/client-1.jpg",
    review:
      "Excellent workmanship and very professional installation. The shower cubicle completely transformed our bathroom.",
  },
  {
    id: 2,
    name: "Grace Wanjiku",
    location: "Westlands",
    rating: 5,
    project: "Office Glass Partition",
    image: "/images/reviews/client-2.jpg",
    review:
      "The office now looks modern and spacious. The team delivered on time and exceeded expectations.",
  },
  {
    id: 3,
    name: "David Otieno",
    location: "Runda",
    rating: 5,
    project: "Aluminium Windows",
    image: "/images/reviews/client-3.jpg",
    review:
      "Quality products, professional installers and great communication from quotation to completion.",
  },
];

function ReviewsPage() {
  return (
    <PageShell>
      {/* HERO */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Customer Reviews
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Trusted By Homeowners
            <br />& Businesses Across Kenya
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Customer satisfaction is at the heart of everything we do. Read what
            our clients say about our premium products, professional
            installation and exceptional customer service.
          </p>
        </div>
      </section>

      {/* RATING SUMMARY */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-3xl bg-[#5B1F1F] p-10 text-center text-white">
            <h2 className="text-7xl font-black">4.9</h2>

            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="mt-6 text-lg">
              Based on hundreds of satisfied customers.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border p-8">
              <BadgeCheck className="mb-5 h-10 w-10 text-green-600" />

              <h3 className="text-2xl font-bold">Professional Installation</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Skilled installers delivering precise, clean and durable
                workmanship.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <BadgeCheck className="mb-5 h-10 w-10 text-green-600" />

              <h3 className="text-2xl font-bold">Premium Quality</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Carefully selected products from trusted manufacturers for
                long-lasting performance.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <BadgeCheck className="mb-5 h-10 w-10 text-green-600" />

              <h3 className="text-2xl font-bold">Transparent Pricing</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Honest quotations with no hidden costs and excellent value for
                money.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <BadgeCheck className="mb-5 h-10 w-10 text-green-600" />

              <h3 className="text-2xl font-bold">Reliable Support</h3>

              <p className="mt-4 leading-8 text-gray-600">
                From consultation through installation and after-sales service,
                we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Real Experiences
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              What Our Clients Say
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              We pride ourselves on delivering exceptional workmanship, quality
              materials and outstanding customer service across every project we
              undertake.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Quote className="mb-6 text-[#5B1F1F]" size={42} />

                <div className="mb-6 flex">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="leading-8 text-gray-600">"{review.review}"</p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold">{review.name}</h3>

                    <p className="text-sm text-gray-500">{review.location}</p>

                    <p className="text-sm font-medium text-[#5B1F1F]">
                      {review.project}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED REVIEW */}

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] bg-[#5B1F1F] p-16 text-white">
            <Quote className="text-amber-300" size={60} />

            <h2 className="mt-8 text-4xl font-black">
              "HGALLERY exceeded our expectations from consultation to
              installation. The quality of workmanship, professionalism and
              attention to detail were exceptional."
            </h2>

            <div className="mt-12 flex items-center gap-5">
              <img
                src="/images/reviews/featured-client.jpg"
                alt="Featured Client"
                className="h-20 w-20 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-bold">Sarah Njeri</h3>

                <p className="text-white/80">Residential Client • Karen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO REVIEWS */}

      <section className="bg-[#F9F7F5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              Video Testimonials
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              Hear Directly From Our Clients
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex aspect-video items-center justify-center rounded-3xl bg-gray-300 text-gray-600"
              >
                Video Review {item}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-500">
            Future CMS uploads will automatically replace these placeholders.
          </p>
        </div>
      </section>

      {/* TRUST STATISTICS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] bg-[#5B1F1F] px-10 py-20 text-white">
            <div className="text-center">
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                TRUSTED BY CLIENTS
              </span>

              <h2 className="mt-6 text-5xl font-black">
                Built On Quality & Reputation
              </h2>
            </div>

            <div className="mt-16 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-6xl font-black text-amber-300">500+</h3>

                <p className="mt-4 text-lg">Completed Installations</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">4.9★</h3>

                <p className="mt-4 text-lg">Average Customer Rating</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">10+</h3>

                <p className="mt-4 text-lg">Years Experience</p>
              </div>

              <div>
                <h3 className="text-6xl font-black text-amber-300">98%</h3>

                <p className="mt-4 text-lg">Returning & Referred Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE HGALLERY */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#8C5A3C]">
              WHY PEOPLE RECOMMEND US
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#5B1F1F]">
              More Than Products, We Deliver Confidence
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Honest Advice</h3>

              <p className="mt-4 leading-8 text-gray-600">
                We recommend solutions that fit your project and budget rather
                than simply selling products.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Quality Installation</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Experienced technicians ensure every installation meets
                professional standards.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Reliable Support</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Our relationship continues after delivery with dependable
                customer support.
              </p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Premium Products</h3>

              <p className="mt-4 leading-8 text-gray-600">
                Carefully selected glass, aluminium, mirrors, décor, tools and
                Swiss products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            START YOUR PROJECT TODAY
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Let's Create Something Exceptional
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Join hundreds of satisfied homeowners, businesses and contractors
            who trust HGALLERY for premium products, professional installation
            and reliable service.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-[#5B1F1F] transition hover:bg-gray-100"
            >
              Request a Quote
            </Link>

            <Link
              to="/shop"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#5B1F1F]"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border bg-white p-12">
          <h2 className="text-4xl font-black text-[#5B1F1F]">
            Customer Reviews for Glass & Aluminium Services in Kenya
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            HGALLERY has earned the trust of homeowners, architects, contractors
            and businesses by consistently delivering premium glass, aluminium,
            shower cubicles, mirrors, wall panels, picture framing, home décor,
            Swiss products, DIY supplies and professional installation services
            across Kenya.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every review reflects our commitment to quality craftsmanship,
            reliable service and long-term customer satisfaction. We value every
            client relationship and continually strive to exceed expectations.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
