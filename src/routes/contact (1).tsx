import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — H.Gallery" },
      { name: "description", content: "Visit H.Gallery at Our Mall, Magadi Road, Nairobi. Call +254 726 335 283 or email hgalleryltd@gmail.com." },
      { property: "og:title", content: "Contact H.Gallery" },
      { property: "og:description", content: "We'd love to hear about your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Let's talk about your space.</h1>
          <p className="mt-4 text-muted-foreground">Reach out for a quote, a custom order or to visit our showroom.</p>

          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand/10 text-brand"><MapPin className="h-5 w-5" /></div>
              <div className="min-w-0"><p className="font-semibold">Showroom</p><p className="text-muted-foreground">Our Mall, Magadi Road, Nairobi, Kenya</p></div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand/10 text-brand"><Phone className="h-5 w-5" /></div>
              <div className="min-w-0"><p className="font-semibold">Phone</p><a className="text-muted-foreground hover:text-brand" href="tel:+254726335283">+254 726 335 283</a></div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand/10 text-brand"><Mail className="h-5 w-5" /></div>
              <div className="min-w-0"><p className="font-semibold">Email</p><a className="text-muted-foreground hover:text-brand break-all" href="mailto:hgalleryltd@gmail.com">hgalleryltd@gmail.com</a></div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand/10 text-brand"><Clock className="h-5 w-5" /></div>
              <div className="min-w-0"><p className="font-semibold">Hours</p><p className="text-muted-foreground">Mon – Sat · 9:00 – 18:00</p></div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <h2 className="font-display text-2xl font-bold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We reply within one business day.</p>

          {sent ? (
            <div className="mt-6 rounded-md bg-brand/10 p-4 text-sm text-brand">Thanks — we'll be in touch shortly.</div>
          ) : (
            <div className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Name</span>
                <input required className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-brand" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Email or phone</span>
                <input required className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-brand" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">How can we help?</span>
                <textarea required rows={5} className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-brand" />
              </label>
              <button className="mt-2 rounded-md bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand">Send message</button>
            </div>
          )}
        </form>
      </section>
    </PageShell>
  );
}
