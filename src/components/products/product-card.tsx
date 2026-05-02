import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/format-price";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
        <div className="relative aspect-square bg-muted">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="space-y-2 p-4">
          <Badge variant="secondary">{product.category}</Badge>

          <div>
            <h3 className="font-medium">{product.title}</h3>
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
