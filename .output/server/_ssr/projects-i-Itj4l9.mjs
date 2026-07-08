import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { k as CalendarDays, v as MapPin } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Layout-HnWCtImy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-i-Itj4l9.js
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		title: "Luxury Shower Cubicle",
		location: "Karen, Nairobi",
		year: "2025",
		image: "/images/projects/project1.jpg",
		category: "Residential"
	},
	{
		title: "Office Glass Partitions",
		location: "Westlands",
		year: "2025",
		image: "/images/projects/project2.jpg",
		category: "Commercial"
	},
	{
		title: "Aluminium Windows",
		location: "Syokimau",
		year: "2024",
		image: "/images/projects/project3.jpg",
		category: "Residential"
	},
	{
		title: "Frameless Office Doors",
		location: "Upper Hill",
		year: "2024",
		image: "/images/projects/project4.jpg",
		category: "Commercial"
	},
	{
		title: "Modern Balcony Glass",
		location: "Kilimani",
		year: "2025",
		image: "/images/projects/project5.jpg",
		category: "Residential"
	},
	{
		title: "Reception Glass Wall",
		location: "CBD Nairobi",
		year: "2025",
		image: "/images/projects/project6.jpg",
		category: "Commercial"
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		style: {
			backgroundImage: "url('/images/projects/projects-hero.jpg')",
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#2F1111]/85" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-amber-500/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300",
					children: "Our Portfolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 text-5xl font-black text-white md:text-6xl",
					children: "Completed Projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-3xl text-lg leading-8 text-gray-200",
					children: "Discover some of the premium glass, aluminium and shower cubicle installations completed by HGALLERY across Kenya."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-10 md:grid-cols-2 lg:grid-cols-3",
			children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: project.title,
						className: "h-72 w-full object-cover transition duration-700 group-hover:scale-110"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase text-amber-700",
							children: project.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-2xl font-bold",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3 text-gray-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), project.location]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-3 text-gray-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 18 }), project.year]
						})
					]
				})]
			}, project.title))
		})
	})] });
}
//#endregion
export { ProjectsPage as component };
