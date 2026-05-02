import { products } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.isFeatured);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Handcrafted rune bracelets
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Meaningful bracelets made for everyday wear.
          </h1>

          <p className="text-lg text-muted-foreground">
            Explore handcrafted bracelets inspired by runic symbols, natural
            materials, and personal meaning.
          </p>

          <div className="flex gap-3">
            <Button asChild>
              <Link href="/shop">Shop bracelets</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/about">About the brand</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Featured bracelets</h2>
            <p className="text-muted-foreground">
              A first look at the core collection.
            </p>
          </div>

          <Button variant="ghost" asChild>
            <Link href="/shop">View all</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
