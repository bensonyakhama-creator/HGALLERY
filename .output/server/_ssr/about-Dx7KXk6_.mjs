import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Wrench, r as Users, v as Award } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Layout-Mog03DKz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Dx7KXk6_.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-brand",
				children: "About"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-bold sm:text-5xl",
				children: "A gallery for your everyday."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-muted-foreground",
				children: "H.Gallery Ltd is a Nairobi showroom built around a simple idea: bring beautifully-made things for the home and workspace under one roof, and back them with real craftsmanship. From a custom aluminium door to a framed family photo, we help you finish spaces you love."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:grid-cols-3 sm:px-6 lg:px-8",
		children: [
			{
				icon: Award,
				title: "Craftsmanship",
				copy: "In-house framing and fabrication with careful attention to finish."
			},
			{
				icon: Wrench,
				title: "Reliable tools",
				copy: "We stock only what we'd use ourselves."
			},
			{
				icon: Users,
				title: "Personal service",
				copy: "Visit us on Magadi Road for advice on your project."
			}
		].map(({ icon: Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 place-items-center rounded-md bg-brand/10 text-brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-lg font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: copy
				})
			]
		}, title))
	})] });
}
//#endregion
export { About as component };
