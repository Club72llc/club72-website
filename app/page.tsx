"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// TODO: replace with the real payment/signup link once it exists
const JOIN_NOW_URL = "https://replace-with-join-now-link.example.com";

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */

const IconDumbbell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <rect x="1.5" y="9.5" width="3" height="5" rx="1" />
    <rect x="19.5" y="9.5" width="3" height="5" rx="1" />
    <rect x="4.5" y="7.5" width="2.5" height="9" rx="1" />
    <rect x="17" y="7.5" width="2.5" height="9" rx="1" />
    <line x1="7" y1="12" x2="17" y2="12" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M12 2L3.5 6v6c0 5 3.5 9.7 8.5 11 5-1.3 8.5-6 8.5-11V6L12 2z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinejoin="round" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <circle cx="9" cy="7" r="4" />
    <path d="M1 21v-2a7 7 0 0 1 14 0v2" strokeLinecap="round" />
    <path d="M22 21v-2a5 5 0 0 0-4-4.9" strokeLinecap="round" />
    <path d="M16 3.1a5 5 0 0 1 0 7.8" strokeLinecap="round" />
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─────────────────────────────────────────────
   SCROLL ANIMATION HOOK
───────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-black/30">
      <div className="max-w-6xl mx-auto px-5 md:px-6 flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Club 72"
            width={240}
            height={72}
            className="h-14 md:h-16 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Facility", "Amenities", "Membership"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold tracking-wide neon-text hover:opacity-80 transition-opacity"
            >
              {item}
            </a>
          ))}
          <a
            href={JOIN_NOW_URL}
            className="btn-primary px-5 py-2.5 rounded-md text-sm font-semibold"
          >
            Join Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-brand-neon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                <line x1="3" y1="17" x2="21" y2="17" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-black/30">
          <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col gap-4">
            {["Facility", "Amenities", "Membership"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="neon-text font-semibold tracking-wide py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={JOIN_NOW_URL}
              onClick={() => setMenuOpen(false)}
              className="neon-text font-semibold tracking-wide py-1"
            >
              Join Now
            </a>
            <a
              href="#membership"
              onClick={() => setMenuOpen(false)}
              className="btn-primary px-5 py-3.5 rounded-md text-sm text-center mt-1"
            >
              <span>Click Here To Save Your Spot</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────────────────────
   NOTIFY ME MODAL
───────────────────────────────────────────── */
function NotifyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-brand-surface border border-black/40 rounded-2xl p-7 md:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-brand-cream transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        <>
            <h3 className="text-2xl font-bold text-brand-cream mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Click Here To Save Your Spot
            </h3>
            <p className="text-brand-muted text-sm mb-6">Only 150 spots available. Be first in line.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs text-brand-muted mb-1.5 font-semibold uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="John"
                    className="w-full px-3.5 py-3 rounded-md bg-black/20 border border-black/40 text-brand-cream placeholder:text-brand-muted/50 text-sm focus:outline-none focus:border-brand-cream/40"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-brand-muted mb-1.5 font-semibold uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Smith"
                    className="w-full px-3.5 py-3 rounded-md bg-black/20 border border-black/40 text-brand-cream placeholder:text-brand-muted/50 text-sm focus:outline-none focus:border-brand-cream/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-brand-muted mb-1.5 font-semibold uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-3 rounded-md bg-black/20 border border-black/40 text-brand-cream placeholder:text-brand-muted/50 text-sm focus:outline-none focus:border-brand-cream/40"
                />
              </div>

              <div>
                <label className="block text-xs text-brand-muted mb-1.5 font-semibold uppercase tracking-wide">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(541) 555-0100"
                  className="w-full px-3.5 py-3 rounded-md bg-black/20 border border-black/40 text-brand-cream placeholder:text-brand-muted/50 text-sm focus:outline-none focus:border-brand-cream/40"
                />
              </div>

              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 rounded-md text-sm font-bold flex items-center gap-2 justify-center mt-1 disabled:opacity-60"
              >
                <span>{loading ? "Submitting..." : "Click Here To Save Your Spot"}</span>
                {!loading && <IconArrow />}
              </button>
            </form>
          </>
      </div>
    </div>
  );
}

function NotifyButton({ label = "Click Here To Save Your Spot", className = "" }: { label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      <NotifyModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ─────────────────────────────────────────────
   HERO — video background (mobile + desktop)
   React 19 correctly serialises `muted` in SSR HTML.
   Plain JSX lets hydration reuse the existing DOM node
   so iOS never gets a second autoplay block.
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">

      {/* Content — vertically centered below the fixed nav */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-6 text-center pt-24 pb-10 md:pt-10 md:pb-10">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl border border-black/30 bg-brand-dark/50 text-brand-cream text-xs md:text-sm font-bold tracking-normal mb-6 md:mb-8 backdrop-blur-sm max-w-[340px] md:max-w-none text-center">
          <span className="w-2 h-2 rounded-full bg-brand-cream animate-pulse flex-shrink-0" />
          <span>Southern Oregon&apos;s Only 24/7 Indoor Golf + Full Gym Facility</span>
        </div>

        {/* Headline — logo image */}
        <div className="flex justify-center mb-6 md:mb-8">
          <Image
            src="/images/logo.png"
            alt="Club 72"
            width={600}
            height={200}
            className="w-[88vw] sm:w-[460px] md:w-[680px] h-auto"
            priority
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center w-full px-2">
          <NotifyButton
            label="Click Here To Save Your Spot"
            className="btn-primary px-6 md:px-8 py-4 rounded-md text-sm md:text-base font-bold flex items-center gap-2"
          />
        </div>
      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: "3", label: "Premium Simulator Bays", icon: <IconTarget /> },
    { value: "24/7", label: "Member Access", icon: <IconClock /> },
    { value: "150", label: "Spots Available", icon: <IconUsers /> },
  ];

  return (
    <section className="relative z-10 -mt-10 md:-mt-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="stat-card rounded-xl p-4 md:p-5 text-center animate-on-scroll"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex justify-center mb-2 md:mb-3 text-brand-cream">{s.icon}</div>
            <div
              className="text-2xl md:text-4xl font-bold mb-1 neon-text"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {s.value}
            </div>
            <div className="text-[10px] md:text-xs text-brand-muted tracking-wide uppercase leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FACILITY SECTION
───────────────────────────────────────────── */
function Facility() {
  const photos = [
    { src: "/images/gallery-1.jpg", alt: "Club 72 building exterior at sunset" },
    { src: "/images/gallery-2.jpg", alt: "Club 72 gym floor with barbell racks" },
    { src: "/images/gallery-3.jpg", alt: "Club 72 golf simulator bay" },
    { src: "/images/gallery-4.jpg", alt: "Club 72 gym floor with treadmills" },
    { src: "/images/gallery-5.jpg", alt: "Club 72 golf simulator screen" },
    { src: "/images/gallery-6.jpg", alt: "Club 72 indoor putting green" },
    { src: "/images/gallery-7.jpg", alt: "Club 72 selectorized strength machines" },
    { src: "/images/gallery-8.jpg", alt: "Club 72 strength training area" },
  ];

  return (
    <section id="facility" className="py-16 md:py-28 px-4 md:px-6 max-w-6xl mx-auto">
      <h2
        className="text-3xl md:text-5xl font-bold text-center neon-text mb-8 md:mb-12 animate-on-scroll"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Coming Soon To Southern Oregon...
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {photos.map((p, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden aspect-[3/4] animate-on-scroll"
            style={{ transitionDelay: `${(i % 4) * 100}ms` }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1152px) 280px, (min-width: 768px) 25vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   AMENITIES SECTION
───────────────────────────────────────────── */
function Amenities() {
  const amenities = [
    {
      icon: <IconTarget />,
      title: "3 Premium Simulator Bays",
      desc: "Play 100+ world-famous courses, improve your swing, or just have fun — from Pebble Beach to Augusta, all without leaving Southern Oregon.",
      color: "blue",
    },
    {
      icon: <IconDumbbell />,
      title: "Full Gym Floor",
      desc: "Commercial-grade equipment for every kind of training. Racks, cables, cardio, free weights — it's all here and it never feels crowded.",
      color: "green",
    },
    {
      icon: <IconClock />,
      title: "24/7 Access",
      desc: "Your schedule is your own. Early mornings, late nights, weekends — the doors are always open for members.",
      color: "blue",
    },
    {
      icon: <IconHeart />,
      title: "Recovery & Stretch Room",
      desc: "Dedicated space to stretch, recover, and take care of your body. Because playing and training well means recovering well too.",
      color: "green",
    },
    {
      icon: <IconUsers />,
      title: "Private Community + Events",
      desc: "We are building a community for people that love the game of golf, as well as staying fit. We'll be hosting frequent events, tournaments, meet ups, and more.",
      color: "blue",
    },
    {
      icon: <IconTarget />,
      title: "Indoor Putting Green",
      desc: "A dedicated area for you to work on your short game, pre or post lift.",
      color: "green",
    },
  ];

  return (
    <section id="amenities" className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-black/3 blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll">
          <div className="text-brand-cream text-xs font-semibold tracking-widest uppercase mb-4">
            What&apos;s Inside
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 neon-text"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Golf, Fitness, &amp; Community — All Under One Roof
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="feature-card rounded-xl p-5 md:p-6 animate-on-scroll"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center mb-3 md:mb-4 bg-black/20 text-brand-cream border border-black/30">
                {a.icon}
              </div>
              <h3 className="font-semibold text-brand-text mb-2 text-sm md:text-base">{a.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MEMBERSHIP SECTION
───────────────────────────────────────────── */
function Membership() {
  const included = [
    "24/7 Access",
    "Premium Golf Simulators",
    "Full Gym",
    "Indoor Putting Green",
    "Private Community Events, Tournaments, Giveaways, Etc",
    "6-Month Commitment",
  ];

  return (
    <section id="membership" className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-surface/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll">
          <h2
            className="text-4xl md:text-5xl font-bold neon-text"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Membership
          </h2>
        </div>

        <div className="membership-card rounded-2xl p-6 md:p-12 animate-on-scroll">
          {/* Pre-launch price */}
          <div className="mb-8 md:mb-10 pb-8 md:pb-10 border-b border-black/20">
            <div className="flex items-end gap-2 mb-1">
              <span
                className="text-6xl md:text-7xl font-bold leading-none text-brand-cream"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                $99
              </span>
              <span className="text-brand-muted pb-2 text-base md:text-lg">/month</span>
            </div>
            <p className="text-brand-muted text-xs uppercase tracking-widest font-semibold mb-4">Pre-Launch Pricing</p>
            <p className="text-brand-muted text-sm leading-relaxed">
              We will be doing a pre-launch sale for $99/month. Only 50 spots will be available at this price. Once they are gone, we will jump up to $135/month. Opt in now to save your spot at the $99/month price point. No payment will be collected when you opt in.
            </p>
          </div>

          {/* Included items */}
          <div className="mb-8 md:mb-10">
            <div className="flex flex-col gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-brand-cream flex-shrink-0 mt-0.5">
                    <IconCheck />
                  </div>
                  <span className="text-sm md:text-base text-brand-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3">
            <NotifyButton
              label="Click Here To Save Your Spot"
              className="btn-primary px-8 py-4 rounded-md text-sm font-bold flex items-center gap-2"
            />
            <p className="text-brand-muted text-xs text-center max-w-xs">
              Opting in saves your spot for pre-launch pricing. First come, first serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   FOUNDERS SECTION
───────────────────────────────────────────── */
function Founders() {
  const founders = [
    { name: "Christian Massey", title: "Co-Founder", img: "/images/founder-christian.webp" },
    { name: "Jantz Tostenson", title: "Co-Founder", img: "/images/founder-jantz.jpeg" },
  ];

  return (
    <section className="py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center neon-text mb-12 md:mb-16 animate-on-scroll"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Meet The Founders
        </h2>
        <div className="grid grid-cols-2 gap-8 md:gap-16 max-w-2xl mx-auto">
          {founders.map((f, i) => (
            <div
              key={f.name}
              className="flex flex-col items-center text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative w-36 h-48 md:w-52 md:h-64 rounded-xl overflow-hidden border-2 border-black/30 mb-4 md:mb-5">
                <Image src={f.img} alt={f.name} fill className="object-cover object-top" />
              </div>
              <div className="text-brand-cream font-bold text-lg md:text-xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {f.name}
              </div>
              <div className="text-brand-muted text-sm mt-1">{f.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-dark py-10 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8 md:mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center mb-3">
              <Image
                src="/images/logo.png"
                alt="Club 72"
                width={140}
                height={44}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Southern Oregon&apos;s Only 24/7 Indoor Golf + Full Gym Facility.
            </p>
          </div>

          {/* Links row on mobile */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-2 w-full md:w-auto">
            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1 md:mb-2">Facility</div>
              {["Simulator Bays", "Gym Floor", "Stretch Room", "Membership"].map((l) => (
                <a key={l} href="#" className="text-brand-muted text-sm hover:text-brand-text transition-colors">
                  {l}
                </a>
              ))}
            </div>

            <div>
              <div className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1 md:mb-3">Location</div>
              <p className="text-brand-muted text-sm mb-1">Southern Oregon</p>
              <p className="text-brand-muted text-sm mb-3 md:mb-4">Address coming soon</p>
              <a
                href="mailto:club72llc@gmail.com"
                className="text-brand-cream text-sm hover:text-brand-text transition-colors break-all"
              >
                club72llc@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="h-px divider mb-5 md:mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-muted">
          <span>© 2025 Club 72. All rights reserved.</span>
          <span>Southern Oregon&apos;s Only 24/7 Indoor Golf + Full Gym Facility</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-brand-dark text-brand-text overflow-x-hidden">
      <Nav />
      <Hero />
      <StatsBar />
      <div className="h-px divider my-6 md:my-8" />
      <Facility />
      <div className="h-px divider" />
      <Amenities />
      <Membership />
      <Founders />
      <Footer />
    </main>
  );
}
