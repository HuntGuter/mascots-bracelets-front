export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  collectionSlug: string;
  category: string;
  isFeatured: boolean;
  isAvailable: boolean;
};
