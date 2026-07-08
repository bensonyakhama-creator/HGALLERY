import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as CartProvider } from "./cart-CbnreYHO.mjs";
import { _ as useRouter, c as HeadContent, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as categories } from "./catalog-Bp65tuzt.mjs";
import { t as Route$9 } from "./product._productId-BKjPf_yF.mjs";
import { t as Route$10 } from "./shop._category-99fvX7bv.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CKBT02wX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BhgjVFJG.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-brand",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand",
						children: "Back home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold text-foreground",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "H.Gallery — Glass, Framing, Panels, Decor & Tools in Nairobi" },
			{
				name: "description",
				content: "H.Gallery Ltd — glass & aluminium, custom picture framing, wall panels, home decor, DIY power & hand tools and camping gear on Magadi Road, Nairobi."
			},
			{
				name: "author",
				content: "H.Gallery Ltd"
			},
			{
				property: "og:title",
				content: "H.Gallery — Glass, Framing, Panels, Decor & Tools"
			},
			{
				property: "og:description",
				content: "Your one-stop showroom on Magadi Road, Nairobi."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var BASE_URL = "";
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/shop",
			priority: "0.9",
			changefreq: "weekly"
		},
		{
			path: "/about",
			priority: "0.6",
			changefreq: "monthly"
		},
		{
			path: "/contact",
			priority: "0.6",
			changefreq: "monthly"
		},
		...categories.map((c) => ({
			path: `/shop/${c.slug}`,
			priority: "0.8",
			changefreq: "weekly"
		}))
	].map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./shop-CMQXkdqd.mjs");
var Route$6 = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "Shop — H.Gallery" },
		{
			name: "description",
			content: "Browse glass & aluminium, framing, wall panels, decor, tools and camping gear at H.Gallery, Nairobi."
		},
		{
			property: "og:title",
			content: "Shop — H.Gallery"
		},
		{
			property: "og:description",
			content: "All six categories in one place."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./services-Bvog4vo6.mjs");
var Route$5 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | HGALLERY" }, {
		name: "description",
		content: "Professional glass, aluminium and shower cubicle installation services in Kenya."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./projects-i-Itj4l9.mjs");
var Route$4 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Projects | HGALLERY" }, {
		name: "description",
		content: "Browse our completed glass, aluminium and shower cubicle installation projects across Kenya."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-CCI9UBfk.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — H.Gallery" },
		{
			name: "description",
			content: "Visit H.Gallery at Our Mall, Magadi Road, Nairobi. Call +254 726 335 283 or email hgalleryltd@gmail.com."
		},
		{
			property: "og:title",
			content: "Contact H.Gallery"
		},
		{
			property: "og:description",
			content: "We'd love to hear about your project."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./cart-N7gcQCwX.mjs");
var Route$2 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Your Cart — H.Gallery" },
		{
			name: "description",
			content: "Review the items in your H.Gallery cart before enquiring."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BQ5kGAPM.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About HGALLERY | Glass & Aluminium Experts in Kenya" }, {
		name: "description",
		content: "Learn about HGALLERY, Kenya's trusted supplier and installer of glass, aluminium, shower cubicles, mirrors, office partitions and premium architectural glass solutions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Dqk-dcsh.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var ShopRoute = Route$6.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$8
});
var ServicesRoute = Route$5.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$8
});
var ProjectsRoute = Route$4.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var CartRoute = Route$2.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var ShopCategoryRoute = Route$10.update({
	id: "/$category",
	path: "/$category",
	getParentRoute: () => ShopRoute
});
var ProductProductIdRoute = Route$9.update({
	id: "/product/$productId",
	path: "/product/$productId",
	getParentRoute: () => Route$8
});
var ShopRouteChildren = { ShopCategoryRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	ContactRoute,
	ProjectsRoute,
	ServicesRoute,
	ShopRoute: ShopRoute._addFileChildren(ShopRouteChildren),
	SitemapDotxmlRoute,
	ProductProductIdRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
