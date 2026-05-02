import Image from "next/image";
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
          className="flex items-center gap-3"
          aria-label="Mascots Bracelets home"
        >
          <Image
            src="/logo_new.avif"
            alt="Mascots Bracelets"
            width={128}
            height={40}
            priority
            className="h-9 w-auto"
          />
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
