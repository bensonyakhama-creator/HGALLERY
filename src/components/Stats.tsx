import { Package, Hammer, Award, Users } from "lucide-react";

const stats = [
  {
    icon: Package,
    number: "1000+",
    title: "Products",
  },
  {
    icon: Hammer,
    number: "500+",
    title: "Installations",
  },
  {
    icon: Award,
    number: "10+",
    title: "Years Experience",
  },
  {
    icon: Users,
    number: "100%",
    title: "Customer Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="-mt-16 relative z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 rounded-3xl bg-white p-10 shadow-2xl md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B1F1F]/10 text-[#5B1F1F]">
                  <Icon size={30} />
                </div>

                <h2 className="mt-5 text-4xl font-black text-[#5B1F1F]">
                  {item.number}
                </h2>

                <p className="mt-2 font-medium text-gray-500">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
