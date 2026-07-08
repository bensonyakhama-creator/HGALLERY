import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/Layout";
import { Award, Building2, CheckCircle, Users, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About HGALLERY | Glass & Aluminium Experts in Kenya",
      },
      {
        name: "description",
        content:
          "Learn about HGALLERY, Kenya's trusted supplier and installer of glass, aluminium, shower cubicles, mirrors, office partitions and premium architectural glass solutions.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      {/* Hero */}

      <section className="bg-[#5B1F1F] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            About HGALLERY
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Kenya's Trusted Glass &
            <br />
            Aluminium Specialists
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            HGALLERY supplies premium glass products and delivers professional
            installation services for residential, commercial and corporate
            developments throughout Kenya.
          </p>
        </div>
      </section>

      {/* Company */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/about/about-company.jpg"
            alt="HGALLERY Team"
            className="h-[650px] w-full rounded-3xl object-cover shadow-2xl"
          />

          <div>
            <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
              WHO WE ARE
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
              Premium Products.
              <br />
              Professional Installation.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              HGALLERY has built a reputation for delivering high-quality glass
              and aluminium solutions that combine durability, functionality and
              modern aesthetics.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether it's a frameless shower cubicle, aluminium windows, office
              partitions, mirrors or custom architectural glass, every project
              is completed with precision and attention to detail.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-600" />
                Residential Projects
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-600" />
                Commercial Installations
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-600" />
                Supply & Installation Services
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle className="text-green-600" />
                Professional After-Sales Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#5B1F1F]">
              Built Around Quality
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                text: "Only quality materials and trusted brands.",
              },
              {
                icon: Wrench,
                title: "Expert Installation",
                text: "Experienced installers with attention to detail.",
              },
              {
                icon: Building2,
                title: "Commercial Projects",
                text: "Homes, offices, apartments and institutions.",
              },
              {
                icon: Users,
                title: "Customer First",
                text: "Reliable service from consultation to completion.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10">
                  <Icon className="h-8 w-8 text-[#5B1F1F]" />
                </div>

                <h3 className="text-xl font-bold">{title}</h3>

                <p className="mt-4 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
