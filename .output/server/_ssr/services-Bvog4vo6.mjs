import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Building2, C as DoorOpen, N as ArrowRight, b as Hammer, c as ShowerHead, n as Wrench, s as Square } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Layout-HnWCtImy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Bvog4vo6.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		title: "Shower Cubicle Installation",
		description: "Modern frameless and framed shower cubicles professionally measured and installed.",
		icon: ShowerHead,
		image: "/images/services/shower-cubicle.jpg"
	},
	{
		title: "Glass Partitions",
		description: "Elegant office and residential glass partition systems for modern interiors.",
		icon: Building2,
		image: "/images/services/glass-partition.jpg"
	},
	{
		title: "Aluminium Windows & Doors",
		description: "Premium aluminium fabrication with durable finishes and precision installation.",
		icon: DoorOpen,
		image: "/images/services/aluminium.jpg"
	},
	{
		title: "Mirrors & Decorative Glass",
		description: "Custom mirrors, feature walls and decorative glass solutions for homes and businesses.",
		icon: Square,
		image: "/images/services/mirror.jpg"
	},
	{
		title: "Glass Fabrication",
		description: "Cutting, polishing and fabrication of premium architectural glass.",
		icon: Hammer,
		image: "/images/services/fabrication.jpg"
	},
	{
		title: "Maintenance & Repairs",
		description: "Repair and maintenance of existing glass and aluminium installations.",
		icon: Wrench,
		image: "/images/services/repair.jpg"
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		style: {
			backgroundImage: "url('/images/services/services-hero.jpg')",
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#2F1111]/85" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300",
					children: "Our Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-8 text-5xl font-black text-white md:text-6xl",
					children: [
						"Professional Installation",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"You Can Trust"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-3xl text-lg leading-8 text-gray-200",
					children: "We provide complete supply, fabrication and installation services for residential, commercial and industrial projects throughout Kenya."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-10 md:grid-cols-2 lg:grid-cols-3",
			children: services.map((service) => {
				const Icon = service.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group overflow-hidden rounded-3xl border bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service.image,
							alt: service.title,
							className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B1F1F]/10 text-[#5B1F1F]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 28 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-7 text-gray-600",
								children: service.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "mt-6 inline-flex items-center gap-2 font-semibold text-[#5B1F1F]",
								children: ["Request Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 18,
									className: "transition group-hover:translate-x-1"
								})]
							})
						]
					})]
				}, service.title);
			})
		})
	})] });
}
//#endregion
export { ServicesPage as component };
