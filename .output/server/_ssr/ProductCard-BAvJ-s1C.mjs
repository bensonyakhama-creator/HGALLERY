import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useCart } from "./cart-CbnreYHO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ShoppingCart } from "../_libs/lucide-react.mjs";
import { n as formatKES } from "./catalog-Bp65tuzt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-BAvJ-s1C.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { add } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-brand",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/product/$productId",
			params: { productId: product.id },
			className: "block aspect-[4/3] overflow-hidden bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				loading: "lazy",
				width: 800,
				height: 600,
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$productId",
					params: { productId: product.id },
					className: "hover:text-brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-card-foreground",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-bold text-brand",
						children: formatKES(product.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$productId",
						params: { productId: product.id },
						className: "text-xs font-semibold text-secondary hover:text-brand",
						children: "View →"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: (e) => {
						e.preventDefault();
						add(product.id, 1);
					},
					className: "mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-brand px-4 py-2 text-xs font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-3.5 w-3.5" }), " Add to cart"]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
