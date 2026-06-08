import type { Metadata } from "next";
import { Saira_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteBackground } from "@/components/decoration/site-background";

// Headings: condensed athletic display (slanted to italic via CSS in globals).
const sairaCondensed = Saira_Condensed({
  variable: "--font-heading-sport",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Body: clean, legible humanist geometric sans.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayres",
  description:
    "Ayres Apparel — custom jerseys & apparel made truly Indonesian. Premium fabric, honest pricing, and guaranteed deadlines.",
  keywords: [
    "custom jersey",
    "jersey printing",
    "Ayres Apparel",
    "sublimation jersey",
    "apparel",
    "Yogyakarta",
  ],
  openGraph: {
    title: "Ayres Apparel — Custom Jerseys",
    description:
      "Custom jerseys & apparel made truly Indonesian. Premium fabric, honest pricing, and guaranteed deadlines.",
    siteName: "Ayres Apparel",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ayres Apparel — Custom Jerseys",
    description: "Custom jerseys & apparel made truly Indonesian.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sairaCondensed.variable} ${jakarta.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <a
          href="#main"
          className="sr-only rounded-full focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-btn"
        >
          Skip to content
        </a>
        {/* Mark the document as JS-enabled before paint so scroll-reveals only
            hide their start state when they can actually be animated back in. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
