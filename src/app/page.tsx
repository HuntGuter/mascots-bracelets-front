import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gem,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Mascots Bracelets | Handmade Rune Bracelets",
  description:
    "Shop handcrafted rune bracelets made with genuine leather cords, stainless steel details, and symbolic Elder Futhark meanings.",
  openGraph: {
    title: "Mascots Bracelets | Handmade Rune Bracelets",
    description:
      "Minimal handcrafted rune bracelets inspired by ancient symbols, elemental power, and personal intention.",
    url: "https://mascotsbracelets.com/",
    siteName: "Mascots Bracelets",
    images: [
      {
        url: products[0]?.images[0] ?? "/logo_new.avif",
        width: 1200,
        height: 1200,
        alt: "Handcrafted rune bracelet by Mascots Bracelets",
      },
    ],
  },
};

const featuredProducts = products.filter((product) => product.isFeatured);

const collections = [
  {
    title: "Single Rune Bracelets",
    description:
      "Clean everyday bracelets centered on one Elder Futhark rune and its personal meaning.",
    image: products[1]?.images[0] ?? products[0]?.images[0],
  },
  {
    title: "Mascot & 2 Staves",
    description:
      "Symbol-rich designs combining a mascot with two runic staves for layered intention.",
    image: products[0]?.images[0],
  },
  {
    title: "Protection Staves",
    description:
      "Bracelets inspired by shield, boundary, and resilience symbolism.",
    image: products[0]?.images[0],
  },
  {
    title: "Prosperity Staves",
    description:
      "Runic compositions associated with growth, business energy, and forward movement.",
    image: products[1]?.images[0] ?? products[0]?.images[0],
  },
];

const handmadeReasons = [
  {
    icon: Gem,
    title: "Genuine leather cords",
    description:
      "Natural texture keeps each bracelet tactile, simple, and easy to wear every day.",
  },
  {
    icon: Shield,
    title: "Stainless steel details",
    description:
      "Hypoallergenic, corrosion-resistant hardware keeps the finish clean over time.",
  },
  {
    icon: Sparkles,
    title: "Made with intention",
    description:
      "Every design pairs material restraint with symbols chosen for meaning, not decoration alone.",
  },
];

const runeMeanings = [
  {
    rune: "ᚠ",
    name: "Fehu",
    meaning: "Resources, momentum, and prosperity.",
  },
  {
    rune: "ᚢ",
    name: "Uruz",
    meaning: "Strength, vitality, and grounded will.",
  },
  {
    rune: "ᚷ",
    name: "Gebo",
    meaning: "Gift, exchange, and meaningful connection.",
  },
];

const trustItems = [
  "Handcrafted bracelet construction",
  "Custom designs available by request",
  "Materials chosen for comfort and durability",
  "Rune guide content for symbolic context",
];

const faqItems = [
  {
    question: "What are rune bracelets?",
    answer:
      "Rune bracelets are wearable pieces built around Elder Futhark symbols or runic staves. Each design is selected for meaning, intention, and everyday use.",
  },
  {
    question: "Can I customize a bracelet?",
    answer:
      "Yes. Mascots Bracelets offers custom bracelet work, including personalized rune and stave combinations.",
  },
  {
    question: "What materials are used?",
    answer:
      "The bracelets use genuine leather cords with hypoallergenic, corrosion-resistant stainless steel details.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <main className="homepage-gradient">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.02fr_0.98fr] md:pt-20 md:pb-16">
        <div className="max-w-2xl space-y-7">
          <Badge variant="secondary" className="h-7 px-3 text-sm">
            Handcrafted rune bracelets
          </Badge>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Symbols you can wear with intention.
          </h1>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Mascots Bracelets creates minimal leather rune bracelets inspired by
            ancient wisdom, elemental power, and personal meaning.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/shop">Shop bracelets</Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/faq">Read FAQ</Link>
            </Button>
          </div>

          <dl className="grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-2xl font-semibold">100%</dt>
              <dd className="text-sm text-muted-foreground">handcrafted</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold">24</dt>
              <dd className="text-sm text-muted-foreground">Elder runes</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold">$60+</dt>
              <dd className="text-sm text-muted-foreground">core pieces</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-lg bg-primary/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <Image
              src={featuredProducts[0]?.images[0] ?? "/logo_new.avif"}
              alt="Handcrafted leather rune bracelet with stainless steel details"
              width={900}
              height={900}
              priority
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <SectionIntro
          eyebrow="Collections"
          title="Choose by symbol, stave, or intention."
          description="The live collection includes single runes, mascot bracelets, protection staves, prosperity staves, love staves, luck staves, custom bracelets, and keychains."
          actionHref="/shop"
          actionLabel="Explore shop"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <Link href="/shop" key={collection.title} className="group block">
              <Card className="h-full overflow-hidden py-0 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="space-y-2 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-base font-medium">
                      {collection.title}
                    </h3>
                    <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {collection.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border/50 bg-background/45 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Badge variant="secondary" className="h-7 px-3 text-sm">
              Why handmade?
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              Small details make the bracelet feel personal.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              The brand is built around materials you can touch and symbols you
              can return to. The result is quiet, durable, and intentional.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {handmadeReasons.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="space-y-4 p-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/25">
                    <item.icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-medium">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5">
          <Badge variant="secondary" className="h-7 px-3 text-sm">
            Rune guide
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight">
            A quick guide to the symbols.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            The Elder Futhark is a runic alphabet often used as a symbolic
            language for strength, movement, exchange, protection, and growth.
            Choose the meaning that fits the road you are walking.
          </p>
          <Button variant="outline" asChild>
            <Link href="/faq">Learn about runes</Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {runeMeanings.map((item) => (
            <Card key={item.name}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary/25 text-3xl">
                  {item.rune}
                </div>
                <div>
                  <h3 className="font-heading font-medium">
                    {item.name} rune
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.meaning}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-5 rounded-lg border-2 border-foreground bg-primary p-6 text-foreground shadow-[10px_10px_0_0_var(--foreground)] md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="space-y-4">
            <div className="flex size-11 items-center justify-center rounded-lg bg-background text-foreground">
              <Heart className="size-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Built for trust, not impulse.
            </h2>
            <p className="leading-7 text-foreground/75">
              Product choices are grounded in clear materials, symbolic context,
              and custom support when you need something more personal.
            </p>
          </div>

          <div className="grid content-center gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-background text-foreground">
                  <Check className="size-4" />
                </div>
                <span className="text-sm text-foreground/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <Badge variant="secondary" className="h-7 px-3 text-sm">
            FAQ
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight">
            Before you choose a bracelet.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Quick answers about meaning, materials, and custom bracelet work.
          </p>
          <Button variant="ghost" asChild>
            <Link href="/faq">Open full FAQ</Link>
          </Button>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border bg-card px-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <Badge variant="secondary" className="h-7 px-3 text-sm">
          {eyebrow}
        </Badge>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <Button variant="ghost" asChild>
        <Link href={actionHref}>{actionLabel}</Link>
      </Button>
    </div>
  );
}
