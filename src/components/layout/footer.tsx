import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-heading font-semibold">Mascots Bracelets</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Minimal rune bracelets crafted for everyday rituals and personal
            meaning.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
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
