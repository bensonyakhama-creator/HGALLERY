import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/Layout";
import { Award, Users, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — H.Gallery" },
      { name: "description", content: "H.Gallery Ltd is a Nairobi-based showroom on Magadi Road offering glass & aluminium, framing, panels, decor and tools." },
      { property: "og:title", content: "About H.Gallery" },
      { property: "og:description", content: "Craftsmanship, quality and service — since day one." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">About</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">A gallery for your everyday.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          H.Gallery Ltd is a Nairobi showroom built around a simple idea: bring beautifully-made things for the home and workspace under one roof, and back them with real craftsmanship. From a custom aluminium door to a framed family photo, we help you finish spaces you love.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          { icon: Award, title: "Craftsmanship", copy: "In-house framing and fabrication with careful attention to finish." },
          { icon: Wrench, title: "Reliable tools", copy: "We stock only what we'd use ourselves." },
          { icon: Users, title: "Personal service", copy: "Visit us on Magadi Road for advice on your project." },
        ].map(({ icon: Icon, title, copy }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-brand/10 text-brand"><Icon className="h-5 w-5" /></div>
            <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{copy}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
