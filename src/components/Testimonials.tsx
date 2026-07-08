import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Homeowner • Karen",
    image: "/images/testimonials/client-1.jpg",
    review:
      "HGALLERY installed our frameless shower cubicle perfectly. The workmanship was outstanding and the team finished on schedule.",
  },
  {
    name: "Grace Wanjiru",
    role: "Interior Designer",
    image: "/images/testimonials/client-2.jpg",
    review:
      "We've partnered with HGALLERY on several projects. Their glass, aluminium and wall panel installations are consistently excellent.",
  },
  {
    name: "David Otieno",
    role: "Business Owner",
    image: "/images/testimonials/client-3.jpg",
    review:
      "Professional service from quotation to installation. Our office glass partitions completely transformed the workspace.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-[#5B1F1F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#5B1F1F]">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#5B1F1F]">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We pride ourselves on delivering quality products, expert installation
            and exceptional customer service.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Quote className="mb-6 h-10 w-10 text-[#C9A227]" />

              <p className="leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex">

                {[1,2,3,4,5].map((star) => (

                  <Star
                    key={star}
                    size={18}
                    className="fill-[#C9A227] text-[#C9A227]"
                  />

                ))}

              </div>

              <div className="mt-8 flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-[#C9A227]/20"
                />

                <div>

                  <h4 className="font-bold text-[#5B1F1F]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-[#5B1F1F] px-10 py-12 text-center text-white">

          <h3 className="text-4xl font-black">
            Trusted Across Kenya
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
            From residential homes to commercial buildings, HGALLERY delivers
            premium glass, aluminium, shower cubicles, wall panels and picture
            framing with professional installation and lasting quality.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10">

            <div>
              <h2 className="text-5xl font-black text-[#C9A227]">
                500+
              </h2>
              <p className="mt-2">Successful Installations</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#C9A227]">
                10+
              </h2>
              <p className="mt-2">Years Experience</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#C9A227]">
                100%
              </h2>
              <p className="mt-2">Customer Satisfaction</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}