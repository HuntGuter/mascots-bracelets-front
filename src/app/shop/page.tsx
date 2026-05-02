import { ProductCard } from "@/components/products/product-card";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center rounded-lg border border-primary/35 bg-primary/20 px-3 py-1 text-sm text-foreground">
              Shop
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Bracelets with meaning, made to wear daily.
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              A curated selection of handcrafted rune bracelets with natural
              textures, calm details, and a minimal silhouette.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            {products.length} pieces available
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
