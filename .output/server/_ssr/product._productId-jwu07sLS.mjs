import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./Layout-HnWCtImy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._productId-jwu07sLS.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-4 py-24 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-bold",
			children: "Product not found"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted-foreground",
			children: "The product you're looking for doesn't exist."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "mt-6 inline-block rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground",
			children: "Back to shop"
		})
	]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
