import { ProductCard } from "@/components/products/product-card";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Shop</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Handcrafted rune bracelets
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Browse the current collection of meaningful bracelets designed for
          everyday wear.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
