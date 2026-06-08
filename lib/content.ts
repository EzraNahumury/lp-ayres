import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  Gem,
  HeartHandshake,
  Rocket,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";
import type { StaticImageData } from "next/image";
// Background-removed (transparent) versions so logos sit cleanly on the dark page.
import pertamina from "@/public/logo_partner/clean/pertamina.png";
import kai from "@/public/logo_partner/clean/kai.png";
import honda from "@/public/logo_partner/clean/HONDA.png";
import paxel from "@/public/logo_partner/clean/paxel.png";
import qhome from "@/public/logo_partner/clean/QHOME.png";
import aau from "@/public/logo_partner/clean/AAU.png";
import gembiraloka from "@/public/logo_partner/clean/GEMBIRALOKA.png";
import dikpora from "@/public/logo_partner/clean/DIKPORA.png";
import rsud from "@/public/logo_partner/clean/RSUD.png";

/**
 * Ayres — a playful savings app. This file is the single source of truth for
 * every piece of marketing copy on the page. Colors are stored semantically
 * ("accent", "secondary", ...) and mapped to styles inside components, so the
 * content stays decoupled from the design layer.
 */

export type Tone = "accent" | "secondary" | "tertiary" | "quaternary";

export const brand = {
  name: "Ayres",
  tagline: "Money that feels like a win.",
} as const;

export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: "About", href: "#features" },
  { label: "Why Ayres", href: "#how" },
  { label: "Catalog", href: "#pricing" },
  { label: "Reviews", href: "#stories" },
];

export const hero = {
  badge: "Custom jersey & apparel",
  titleLead: "Home of",
  titleHighlight: "custom jerseys",
  titleTrail: "that feel truly Indonesian",
  description:
    "Starting at Rp 70,000, no minimum order, guaranteed deadlines. Trusted by Pertamina, BNI, Honda, and hundreds of teams across Indonesia.",
  primaryCta: {
    label: "Order Now",
    href: "https://api.whatsapp.com/send/?phone=6287818310416&text&type=phone_number&app_absent=0",
  },
  secondaryCta: { label: "View Collection", href: "https://ayreslab.id/" },
  socialProof: { count: "500+ jerseys", label: "delivered this month" },
} as const;

export type Partner = { name: string; logo: StaticImageData };

export const partners: Partner[] = [
  { name: "Pertamina", logo: pertamina },
  { name: "KAI Logistik", logo: kai },
  { name: "Honda Tugu", logo: honda },
  { name: "Paxel", logo: paxel },
  { name: "QHomeMart", logo: qhome },
  { name: "Akademi Angkatan Udara", logo: aau },
  { name: "Gembira Loka Zoo", logo: gembiraloka },
  { name: "Dinas Dikpora DIY", logo: dikpora },
  { name: "RSUD Prambanan", logo: rsud },
];

export const whoWeAre = {
  eyebrow: "Who we are",
  titleLead: "Guaranteed deadline!",
  titleHighlight: "Ayres pattern",
  titleTrail: "a cut above.",
  cta: {
    label: "Order Your Jersey",
    href: "https://api.whatsapp.com/send/?phone=6287818310416&text&type=phone_number&app_absent=0",
  },
  points: [
    {
      n: "01",
      title: "Starting Price",
      body: "Rp 70,000 per jersey with no setup fee and no minimum order.",
    },
    {
      n: "02",
      title: "Pattern Lab Technology",
      body: "Patterns crafted with specialized lab technology — high precision, comfortable fit, a different class of result.",
    },
    {
      n: "03",
      title: "International Quality",
      body: "Thousands of jerseys per month, every stitch held to a premium standard.",
    },
  ],
} as const;

export const guarantee = {
  heading: "Leave your jersey production to Ayres",
  subheading: "You may have concerns like these when ordering a jersey:",
  intro:
    "We don't give you PROMISES — we give you PROOF. Customer satisfaction is our priority. At AYRES, we guarantee you get:",
  items: [
    {
      label: "Best Quality",
      concerns: [
        "Poor quality fabric — hot, rough, easily torn, shrinks fast.",
        "Print fades / bleeds quickly, high price, low quality.",
        "Untidy stitching that falls apart after a few washes.",
        "Colors don't match the ordered design.",
        "No warranty or responsibility when items are defective.",
      ],
    },
    {
      label: "Best Shipping",
      concerns: [
        "Untrustworthy sellers — orders don't match what was promised.",
        "No timeline certainty or deadlines are missed.",
        "Slow shipping, packages often lost or damaged in transit.",
        "No clear tracking after the order ships.",
        "No confirmation when production is finished.",
      ],
    },
    {
      label: "Best Pricing",
      concerns: [
        "Non-transparent pricing with hidden fees after ordering.",
        "Expensive price but quality doesn't match.",
        "No bulk pricing for large orders.",
        "Expensive design fees, even for simple designs.",
        "Price changes after negotiations and a deal.",
      ],
    },
    {
      label: "Best Service",
      concerns: [
        "Unresponsive CS, slow to reply to messages.",
        "No design consultation — just told to send the file.",
        "Design revisions come with extra fees.",
        "Complaints ignored, no solutions when problems arise.",
        "No after-sales support once the goods are received.",
      ],
    },
  ],
} as const;

export type Step = {
  icon: LucideIcon;
  tone: Tone;
  title: string;
  body: string;
};

export const values: Step[] = [
  {
    icon: Gem,
    tone: "accent",
    title: "Uncompromising Quality",
    body: "Every jersey is produced with premium fabric and strict QC. The result must be perfect before reaching you.",
  },
  {
    icon: Wallet,
    tone: "accent",
    title: "Honest Pricing",
    body: "No hidden fees. The price you see is the price you pay — transparent from the start.",
  },
  {
    icon: Rocket,
    tone: "accent",
    title: "Fast Production",
    body: "Order today, ready tomorrow. We understand time is a priority, especially before a tournament.",
  },
  {
    icon: HeartHandshake,
    tone: "accent",
    title: "Personal Service",
    body: "From design consultation to after-sales, we're with you every step of the way.",
  },
];

export type Catalog = {
  slug: string;
  name: string;
  tier: "Classic" | "Pro";
  pkg: string;
  tagline: string;
  cover: string;
  pages: string[];
};

const catalogPages = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/catalog/${slug}/p${i + 1}.jpg`);

export const catalogs: Catalog[] = [
  {
    slug: "adi-vira",
    name: "Adi Vira",
    tier: "Classic",
    pkg: "Classic Package",
    tagline: "Makes your team look neater and more professional.",
    cover: "/catalog/adi-vira/cover.jpg",
    pages: catalogPages("adi-vira", 3),
  },
  {
    slug: "cakra-vega",
    name: "Cakra Vega",
    tier: "Classic",
    pkg: "Classic Package",
    tagline: "A sharp classic pattern that lifts any kit a class above.",
    cover: "/catalog/cakra-vega/cover.jpg",
    pages: catalogPages("cakra-vega", 6),
  },
  {
    slug: "bima-sena",
    name: "Bima Sena",
    tier: "Pro",
    pkg: "Pro Package",
    tagline: "Pro-grade detailing for teams that mean business.",
    cover: "/catalog/bima-sena/cover.jpg",
    pages: catalogPages("bima-sena", 4),
  },
  {
    slug: "garuda-vastra",
    name: "Garuda Vastra",
    tier: "Pro",
    pkg: "Pro Package",
    tagline: "Bold, premium patterns that stand out on the pitch.",
    cover: "/catalog/garuda-vastra/cover.jpg",
    pages: catalogPages("garuda-vastra", 4),
  },
];

export type Review = { name: string; meta: string; text: string };

export const customerReviews = {
  videoId: "Rh99xrExmxA",
  videoUrl: "https://youtu.be/Rh99xrExmxA?si=gPkSejqWR0drkrrg",
  googleLabel: "Google Review",
  reviews: [
    {
      name: "Egyadnan Saputra",
      meta: "1 review",
      text: "Wow, making jerseys here is unreal. You get to pick fabric and designs with full satisfaction, plus friendly service, and the result is gorgeous — clean cuts and vivid colors. Thank you Ayres Apparel.",
    },
    {
      name: "Dikky Kusuma Wijaya",
      meta: "5 reviews · 1 photo",
      text: "Comfortable jerseys, fast process, great service. Recommended 👍👍👍",
    },
    {
      name: "Panjerino Setiaji",
      meta: "5 reviews · 20 photos",
      text: "Highly recommended! My jersey order was done quickly. Fabric options are complete and designs are cool. Thanks Ayres Apparel 🤩 TOP 🔥",
    },
    {
      name: "A Priambudi",
      meta: "1 review",
      text: "Recommended to make your jerseys here!!",
    },
    {
      name: "Narendra Irvan",
      meta: "6 reviews · 1 photo",
      text: "Friendly service and can make jerseys incredibly fast 🤙",
    },
    {
      name: "maya fadlilah asthanny",
      meta: "1 review",
      text: "So cool and breathable 🥹🥰 thanks for helping us make the jerseys! Next repeat order for sure! ❤️",
    },
    {
      name: "angger p",
      meta: "Local Guide · 11 reviews · 31 photos",
      text: "Super cool jerseys!!! Fast service, very kind people. Totally worth it — amazing quality at that price.",
    },
  ] satisfies Review[],
};

export const cta = {
  title: "Ready to make your team stand out?",
  body: "Join hundreds of teams across Indonesia ordering custom jerseys with Ayres — premium fabric, honest pricing, and deadlines you can count on.",
  primaryCta: {
    label: "Order Now",
    href: "https://api.whatsapp.com/send/?phone=6287818310416&text&type=phone_number&app_absent=0",
    icon: ArrowRight,
  },
  note: "Guaranteed deadlines",
  badges: ["Starting Rp 70,000", "No minimum order"],
};

export const footer = {
  tagline: "Tempatnya Custom Jersey Yang Indonesia Banget.",
  motto: "Pola Ayres Beda Kelas",
  menu: [
    { label: "Beranda", href: "#top" },
    { label: "Tentang", href: "#features" },
    { label: "Pesan", href: "#pricing" },
    { label: "Berita", href: "#stories" },
    { label: "Kontak", href: "https://wa.me/6287818310416" },
  ] as NavLink[],
  info: {
    address: "Jl Wonocatur No.427,\nBanguntapan, Kotagede,\nD.I. Yogyakarta",
    hours: "Senin – Sabtu: 09.00 – 16.30\nMinggu: Tutup",
    email: "admin@ayresapparel.com",
    phone: "0878-1831-0416",
    phoneHref: "https://wa.me/6287818310416",
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/ayresapparel" },
    { label: "Instagram", href: "https://www.instagram.com/ayresapparel" },
    { label: "YouTube", href: "https://www.youtube.com/@ayresapparel" },
    { label: "TikTok", href: "https://www.tiktok.com/@ayres.apparel" },
  ],
  marketplaces: [
    {
      label: "Shopee",
      href: "https://shopee.co.id/ayresapparel",
      color: "#EE4D2D",
    },
    {
      label: "Tokopedia",
      href: "https://www.tokopedia.com/ayresapparel",
      color: "#03AC0E",
    },
  ],
  copyright: "© 2026 Ayres Apparel. Hak cipta dilindungi.",
  subCopyright: "Custom Jersey · Bantul, Yogyakarta",
};

/** Shared icon handles re-exported for convenience in sections. */
export const icons = { Check, Star, ArrowRight, Sparkles } as const;
