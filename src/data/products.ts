// Product data
import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "protection-rune-bracelet",
    title: "Protection Rune Bracelet",
    description:
      "A handcrafted rune bracelet designed as a meaningful everyday accessory.",
    price: 6000,
    images: [
      "https://mascotsbracelets.com/cdn/shop/files/IMG20260331194723_4655da87-f562-480a-880b-fec4d265a0ec.jpg",
    ],
    collectionSlug: "protection",
    category: "Rune Bracelets",
    isFeatured: true,
    isAvailable: true,
  },
  {
    id: "2",
    slug: "prosperity-rune-bracelet",
    title: "Prosperity Rune Bracelet",
    description:
      "A symbolic bracelet inspired by runes associated with growth and prosperity.",
    price: 9500,
    images: [
      "https://mascotsbracelets.com/cdn/shop/files/IMG20260402210708.jpg",
    ],
    collectionSlug: "prosperity",
    category: "Rune Bracelets",
    isFeatured: true,
    isAvailable: true,
  },
];
