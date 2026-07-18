import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "shower-cubicle-001",

    name: "Premium Frameless Shower Cubicle",

    slug: "premium-frameless-shower-cubicle",

    category: "Shower Cubicles",

    brand: "HGALLERY",

    price: 85000,

    images: ["/images/products/shower.jpg"],

    shortDescription:
      "Modern frameless shower cubicle designed for luxury bathrooms.",

    description:
      "Custom fabricated glass shower cubicles supplied and installed for residential and commercial projects.",

    specifications: [
      {
        name: "Glass thickness",
        value: "10mm Toughened Glass",
      },

      {
        name: "Frame",
        value: "Aluminium finishing",
      },
    ],

    features: [
      "Custom measurements",

      "Professional installation",

      "Premium finishing",
    ],

    tags: ["glass", "bathroom", "shower"],

    seo: {
      title: "Premium Shower Cubicles Kenya | HGALLERY",

      description:
        "Supply and installation of modern shower cubicles across Kenya.",
    },

    status: "active",
  },
];
