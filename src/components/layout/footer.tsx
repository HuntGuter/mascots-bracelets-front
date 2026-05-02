import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Image
            src="/logo_new.avif"
            alt="Mascots Bracelets"
            width={118}
            height={37}
            className="h-8 w-auto"
          />
          <p className="max-w-sm text-sm text-muted-foreground">
            Minimal rune bracelets crafted for everyday rituals and personal
            meaning.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href="/shop" className="transition hover:text-foreground">
            Shop
          </Link>
          <Link href="/about" className="transition hover:text-foreground">
            About
          </Link>
          <Link href="/faq" className="transition hover:text-foreground">
            FAQ
          </Link>
          <Link href="/contact" className="transition hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

const navigationLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
