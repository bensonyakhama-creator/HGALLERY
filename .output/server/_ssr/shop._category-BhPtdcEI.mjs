import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as categories } from "./catalog-Bp65tuzt.mjs";
import { t as ProductCard } from "./ProductCard-BAvJ-s1C.mjs";
import { t as Route } from "./shop._category-99fvX7bv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._category-BhPtdcEI.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category, products } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero text-brand-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: category.image,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-1 text-xs text-white/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-brand-foreground",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									className: "hover:text-brand-foreground",
									children: "Shop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand-foreground",
									children: category.name
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl font-bold sm:text-5xl",
							children: category.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-white/85",
							children: category.description
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold",
				children: "Other categories"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: categories.filter((c) => c.slug !== category.slug).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop/$category",
					params: { category: c.slug },
					className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand",
					children: c.name
				}, c.slug))
			})]
		})
	] });
}
//#endregion
export { CategoryPage as component };
