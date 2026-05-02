import Link from "next/link";

import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="font-heading text-base font-semibold tracking-tight"
          aria-label="Mascots Bracelets home"
        >
          Mascots Bracelets
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>

        <Button asChild>
          <Link href="/shop">Shop now</Link>
        </Button>
      </nav>
    </header>
  );
}
