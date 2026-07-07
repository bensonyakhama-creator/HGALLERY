export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  category: string; // category slug
  price: number; // KES
  image: string;
  description: string;
};

// Placeholder imagery via picsum (stable seeds).
const img = (seed: string) => `https://picsum.photos/seed/${seed}/800/600`;

export const categories: Category[] = [
  {
    slug: "glass-aluminium",
    name: "Glass & Aluminium",
    tagline: "Windows, doors & partitions",
    description:
      "Custom-fabricated glass and aluminium solutions for homes and offices — sliding doors, shopfronts, shower cubicles and glass railings.",
    image: img("glass-alu"),
  },
  {
    slug: "picture-framing",
    name: "Picture Framing",
    tagline: "Custom frames for every memory",
    description:
      "Bespoke framing service with a wide selection of mouldings, mats and glazing for photographs, art and certificates.",
    image: img("frames"),
  },
  {
    slug: "wall-panels",
    name: "Wall Panels",
    tagline: "Textured surfaces that transform rooms",
    description:
      "PVC, WPC and 3D acoustic wall panels — quick to install and available in dozens of finishes.",
    image: img("panels"),
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    tagline: "Finishing touches for every space",
    description:
      "Mirrors, wall art, lamps and accents curated to complete your interior.",
    image: img("decor"),
  },
  {
    slug: "diy-tools",
    name: "DIY Power & Hand Tools",
    tagline: "Reliable tools for every project",
    description:
      "Drills, grinders, saws, measuring tools and hand tools from trusted brands.",
    image: img("tools"),
  },
  {
    slug: "camping-gear",
    name: "Camping Gear",
    tagline: "Ready for the outdoors",
    description:
      "Tents, sleeping bags, cookers and outdoor essentials for weekend adventurers.",
    image: img("camping"),
  },
];

export const products: Product[] = [
  // Glass & Aluminium
  { id: "ga1", name: "Sliding Glass Door", category: "glass-aluminium", price: 45000, image: img("ga1"), description: "Double-track sliding door with tempered glass." },
  { id: "ga2", name: "Aluminium Window Frame", category: "glass-aluminium", price: 12500, image: img("ga2"), description: "Powder-coated aluminium casement window." },
  { id: "ga3", name: "Shower Cubicle Enclosure", category: "glass-aluminium", price: 32000, image: img("ga3"), description: "8mm tempered glass shower enclosure." },
  { id: "ga4", name: "Glass Partition Panel", category: "glass-aluminium", price: 18500, image: img("ga4"), description: "Frameless office partition, per panel." },
  // Picture Framing
  { id: "pf1", name: "Classic Oak Frame A3", category: "picture-framing", price: 2800, image: img("pf1"), description: "Solid oak moulding with matte finish." },
  { id: "pf2", name: "Gilded Baroque Frame", category: "picture-framing", price: 6500, image: img("pf2"), description: "Ornate gold-leaf finish, hand-detailed." },
  { id: "pf3", name: "Minimal Black Frame A4", category: "picture-framing", price: 1500, image: img("pf3"), description: "Clean matte black with anti-glare glazing." },
  { id: "pf4", name: "Certificate Frame Set", category: "picture-framing", price: 3200, image: img("pf4"), description: "Set of three matching A4 frames." },
  // Wall Panels
  { id: "wp1", name: "3D Acoustic Wood Panel", category: "wall-panels", price: 4500, image: img("wp1"), description: "Slatted walnut acoustic panel, 60x240cm." },
  { id: "wp2", name: "PVC Marble-look Panel", category: "wall-panels", price: 2200, image: img("wp2"), description: "Waterproof marble-effect wall cladding." },
  { id: "wp3", name: "WPC Interior Panel", category: "wall-panels", price: 3100, image: img("wp3"), description: "Wood-plastic composite, easy click-fit." },
  { id: "wp4", name: "Textured Brick Panel", category: "wall-panels", price: 1800, image: img("wp4"), description: "Lightweight faux brick, self-adhesive." },
  // Home Decor
  { id: "hd1", name: "Round Wall Mirror", category: "home-decor", price: 5400, image: img("hd1"), description: "Brass-rim round mirror, 70cm diameter." },
  { id: "hd2", name: "Ceramic Table Lamp", category: "home-decor", price: 3900, image: img("hd2"), description: "Handmade ceramic base with linen shade." },
  { id: "hd3", name: "Abstract Canvas Print", category: "home-decor", price: 4800, image: img("hd3"), description: "Framed canvas, 60x90cm." },
  { id: "hd4", name: "Woven Wall Basket Set", category: "home-decor", price: 2600, image: img("hd4"), description: "Set of three natural fibre baskets." },
  // DIY Tools
  { id: "dt1", name: "Cordless Drill 18V", category: "diy-tools", price: 8900, image: img("dt1"), description: "Two-battery kit with charger and case." },
  { id: "dt2", name: "Angle Grinder 4.5\"", category: "diy-tools", price: 4200, image: img("dt2"), description: "850W grinder with side handle." },
  { id: "dt3", name: "Toolbox 22-piece Set", category: "diy-tools", price: 3500, image: img("dt3"), description: "Essential hand tools in a steel case." },
  { id: "dt4", name: "Digital Laser Measure", category: "diy-tools", price: 5600, image: img("dt4"), description: "Range up to 40m with backlight." },
  // Camping
  { id: "cg1", name: "4-Person Dome Tent", category: "camping-gear", price: 7800, image: img("cg1"), description: "Waterproof polyester with taped seams." },
  { id: "cg2", name: "Sleeping Bag -5°C", category: "camping-gear", price: 3400, image: img("cg2"), description: "Mummy-cut, compressible stuff sack." },
  { id: "cg3", name: "Portable Gas Cooker", category: "camping-gear", price: 2200, image: img("cg3"), description: "Single-burner with carry case." },
  { id: "cg4", name: "LED Camping Lantern", category: "camping-gear", price: 1400, image: img("cg4"), description: "Rechargeable, 400 lumens." },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductsByCategory = (slug: string) => products.filter((p) => p.category === slug);
export const getProduct = (id: string) => products.find((p) => p.id === id);
export const formatKES = (n: number) => `KSh ${n.toLocaleString("en-KE")}`;
