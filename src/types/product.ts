export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  price: number;
  inStock: boolean;
}
