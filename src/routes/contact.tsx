import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT } from "@/data/contact";
import { Phone, MessageSquare, Mail, Instagram, Youtube, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Get a Quote | Good Looks Media Group" },
      { name: "description", content: "Get pricing or check availability for video production in Rhode Island. Quick lead form, call, text, or email." },
      { property: "og:title", content: "Contact — Good Looks Media Group" },
      { property: "og:description", content: "Tell us about your project. We'll come back fast with next steps." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const PROJECT_TYPES = [
  "Wedding",
  "Baby shower",
  "Birthday/party",
  "Business promo",
  "Commercial",
  "Music video",
  "Live show",
  "Event recap",
  "Reels & social content",
  "Pet video",
  "Documentary",
  "Custom project",
];

const BUDGETS = [
  "Under $600",
  "$600–$1,200",
  "$1,200–$2,500",
  "$2,500–$4,500",
  "$4,500+",
  "Not sure yet",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [preset, setPreset] = useState<{ projectType?: string; pkg?: string }>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    setPreset({
      projectType: sp.get("projectType") || undefined,
      pkg: sp.get("package") || undefined,
    });
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // NOTE: Wire this up to your form backend (Formspree, Resend, Supabase, etc.).
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <SiteLayout>
        <section className="min-h-[60vh] flex items-center justify-center text-center px-4 py-24">
          <div className="max-w-xl">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl uppercase">Thanks!</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              We got your project request. We will review the details and reach out as soon as possible with next steps.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <a href={CONTACT.telHref} className="border border-foreground/30 px-5 py-3 rounded-md uppercase tracking-widest text-sm font-semibold">Call us</a>
              <a href={CONTACT.smsHref} className="border border-foreground/30 px-5 py-3 rounded-md uppercase tracking-widest text-sm font-semibold">Text us</a>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● BOOKING · INQUIRIES</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Tell us about your <span className="text-primary">project.</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Fill this out and we'll come back with next steps. Prefer call or text? Use the direct options below.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid md:grid-cols-3 gap-4">
            <a href={CONTACT.telHref} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition" data-analytics="click_call">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Call</p>
                <p className="text-sm text-muted-foreground">{CONTACT.phoneDisplay}</p>
              </div>
            </a>
            <a href={CONTACT.smsHref} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition" data-analytics="click_text">
              <MessageSquare className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Text</p>
                <p className="text-sm text-muted-foreground">{CONTACT.textDisplay}</p>
                <p className="text-sm text-muted-foreground">{CONTACT.textResponseNote}</p>
              </div>
            </a>
            <a href={CONTACT.emailHref} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{CONTACT.email}</p>
              </div>
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <form
              onSubmit={onSubmit}
              data-analytics="form_start"
              className="order-2 lg:order-1 lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-10 grid gap-5"
            >
              {preset.pkg && (
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm">
                  Requesting: <strong className="text-primary">{preset.pkg}</strong>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Select label="Preferred contact method" name="contactPref" options={["Call", "Text", "Email"]} required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Select label="Project type" name="projectType" options={PROJECT_TYPES} defaultValue={preset.projectType} required />
                <Field label="Event date / deadline" name="date" placeholder="Date, deadline, or not sure yet" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Location" name="location" placeholder="City, venue, or service area" required />
                <Select label="Budget range" name="budget" options={BUDGETS} required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Short project description<span className="text-primary"> *</span></label>
                <textarea
                  name="description"
                  rows={5}
                  required
                  className="w-full bg-background border border-input rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What are you imagining? Vibe, vision, references — anything helps."
                />
              </div>
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" name="helpChoose" className="mt-1 w-4 h-4 accent-[oklch(0.55_0.21_25)]" />
                <span>I want help choosing the right package.</span>
              </label>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
                data-analytics="form_submit"
              >
                Send My Project
              </button>
            </form>

            <aside className="order-1 lg:order-2 space-y-4">
              <SectionHeading eyebrow="Social" title="See more." />
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition">
                <Instagram className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-muted-foreground">{CONTACT.instagramLabel}</p>
                </div>
              </a>
              <a href={CONTACT.youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary transition">
                <Youtube className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">YouTube</p>
                  <p className="text-sm text-muted-foreground">{CONTACT.youtubeLabel}</p>
                </div>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-input rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}{required && <span className="text-primary"> *</span>}</label>
      <select
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="w-full bg-background border border-input rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
