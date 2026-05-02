import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/format-price";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="h-full overflow-hidden py-0 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>

        <CardContent className="space-y-3 p-4">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="secondary">{product.category}</Badge>
            <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-foreground" />
          </div>

          <div>
            <h3 className="font-heading text-base font-medium">
              {product.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>

          <p className="font-semibold">{formatPrice(product.price)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
