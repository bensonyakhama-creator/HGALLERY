export interface Product {
  id: string;

  name: string;

  slug: string;

  category: string;

  brand?: string;

  price: number;

  images: string[];

  shortDescription: string;

  description: string;

  specifications: {
    name: string;
    value: string;
  }[];

  features: string[];

  tags: string[];

  seo: {
    title: string;
    description: string;
  };

  status: "active" | "draft";
}

export interface Category {
  id: string;

  name: string;

  slug: string;

  image: string;

  description: string;

  seo: {
    title: string;
    description: string;
  };
}
