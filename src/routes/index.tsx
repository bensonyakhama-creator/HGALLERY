import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/Layout";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedProducts from "@/components/FeaturedProducts";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* Hero Section */}
      <Hero />

      {/* Statistics */}
      <Stats />

      {/* Services */}
      <Services />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Recent Projects */}
      <Projects />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Call To Action */}
      <CTA />
    </PageShell>
  );
}
