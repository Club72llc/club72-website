import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "You're In! | Club 72",
  description: "Thanks for saving your spot at Club 72.",
};

export default function ThankYouPage() {
  return (
    <>
      {/* Meta Pixel Lead Event — fires immediately after </head> */}
      <script dangerouslySetInnerHTML={{ __html: "fbq('track', 'Lead');" }} />

      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
        style={{ background: "#1c4231" }}
      >
        {/* Logo */}
        <Link href="/" className="mb-10 block">
          <Image
            src="/images/logo.png"
            alt="Club 72"
            width={160}
            height={80}
            className="mx-auto"
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Check icon */}
        <div className="w-20 h-20 rounded-full border border-black/40 bg-black/20 flex items-center justify-center mx-auto mb-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="#f5f0e8" strokeWidth={2} className="w-10 h-10">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl font-bold text-brand-cream mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          You&apos;re on the list!
        </h1>

        {/* Subtext */}
        <p className="text-brand-muted text-lg max-w-md mb-3 leading-relaxed">
          Your spot at the <strong className="text-brand-cream">$99/month</strong> pre-launch price is saved.
        </p>
        <p className="text-brand-muted text-sm max-w-sm mb-12 leading-relaxed">
          We&apos;ll reach out as soon as Club 72 is ready to open its doors. No payment is collected until we launch.
        </p>

        {/* Back link */}
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold"
        >
          <span>Back to Club 72</span>
        </Link>
      </main>
    </>
  );
}
