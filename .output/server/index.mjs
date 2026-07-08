globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-06T17:52:19.527Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-07-06T17:52:31.959Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/about-BnI65ZWz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94b-MZkcEDSWIYrYUUpTEU+QWFDU8yI\"",
		"mtime": "2026-07-07T19:00:40.497Z",
		"size": 2379,
		"path": "../public/assets/about-BnI65ZWz.js"
	},
	"/assets/cart-BwCISDCB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12aa-O2HmoquJvDgu01PloboqP+hZnjA\"",
		"mtime": "2026-07-07T19:00:40.497Z",
		"size": 4778,
		"path": "../public/assets/cart-BwCISDCB.js"
	},
	"/assets/contact-WNAYm-Ba.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"107f-deUOnOb7pz8eXXRHdLS+d4NSg7o\"",
		"mtime": "2026-07-07T19:00:40.498Z",
		"size": 4223,
		"path": "../public/assets/contact-WNAYm-Ba.js"
	},
	"/assets/chevron-right-B8n1zeom.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f-pj5KVGImmGWWkOQJYGZshBM6fPw\"",
		"mtime": "2026-07-07T19:00:40.498Z",
		"size": 127,
		"path": "../public/assets/chevron-right-B8n1zeom.js"
	},
	"/assets/hero-DJOVsoMP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ef56-anVxsb5UvaOrLzAOXtkTfXGUtMQ\"",
		"mtime": "2026-07-07T19:00:40.513Z",
		"size": 126806,
		"path": "../public/assets/hero-DJOVsoMP.jpg"
	},
	"/assets/Layout-BD-NUUAm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1824-NiLJ+0ZMkl9/Xv1kPRyxJxkua7A\"",
		"mtime": "2026-07-07T19:00:40.460Z",
		"size": 6180,
		"path": "../public/assets/Layout-BD-NUUAm.js"
	},
	"/assets/link-BMlLqjDa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"896a-2wQH7P1CPgp05u6yIp+rz4NunoE\"",
		"mtime": "2026-07-07T19:00:40.499Z",
		"size": 35178,
		"path": "../public/assets/link-BMlLqjDa.js"
	},
	"/assets/product._productId-DnllGzaT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e-UxzPmCduEIg3UQACwSHS20kJecs\"",
		"mtime": "2026-07-07T19:00:40.500Z",
		"size": 606,
		"path": "../public/assets/product._productId-DnllGzaT.js"
	},
	"/assets/product._productId-Ds4jf9_A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"115b-0y1mro/F0FfKBsSnPdxrDKv9Bek\"",
		"mtime": "2026-07-07T19:00:40.500Z",
		"size": 4443,
		"path": "../public/assets/product._productId-Ds4jf9_A.js"
	},
	"/assets/index-DLMkHqbI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4dccb-bR/+BaaXF3gd4L0hfTthql6BPYI\"",
		"mtime": "2026-07-07T19:00:40.459Z",
		"size": 318667,
		"path": "../public/assets/index-DLMkHqbI.js"
	},
	"/assets/routes-rurXI_ly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21dc-4OfGjvBoKWoVS3cc2x/jmhZMdXs\"",
		"mtime": "2026-07-07T19:00:40.501Z",
		"size": 8668,
		"path": "../public/assets/routes-rurXI_ly.js"
	},
	"/assets/ProductCard-DA8VDJlA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c4-JezpLzy6Gv33hNNBkXBKwrA6Hhc\"",
		"mtime": "2026-07-07T19:00:40.460Z",
		"size": 1732,
		"path": "../public/assets/ProductCard-DA8VDJlA.js"
	},
	"/assets/shop._category-COHHDwpF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e7-bBPIu44t553YKbD6d4IhLNiau1M\"",
		"mtime": "2026-07-07T19:00:40.502Z",
		"size": 2023,
		"path": "../public/assets/shop._category-COHHDwpF.js"
	},
	"/assets/shop-Dv2k9sre.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e1-fKQyzlMklmZcKnSJbgbQZjYWzYY\"",
		"mtime": "2026-07-07T19:00:40.501Z",
		"size": 2273,
		"path": "../public/assets/shop-Dv2k9sre.js"
	},
	"/assets/shop._category-Dz7e4RLE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"200-QM7rK1HC3nPhNAhV+rSmIsd8sA4\"",
		"mtime": "2026-07-07T19:00:40.502Z",
		"size": 512,
		"path": "../public/assets/shop._category-Dz7e4RLE.js"
	},
	"/assets/shop._category-S7E48QQP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"229-5UMi2h/Q9NlazCaz4o0sGqYaI18\"",
		"mtime": "2026-07-07T19:00:40.503Z",
		"size": 553,
		"path": "../public/assets/shop._category-S7E48QQP.js"
	},
	"/assets/shopping-cart-DD_xFUP3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58e-vqyYVzUoLUqPMDIPHDLA1OyF2pQ\"",
		"mtime": "2026-07-07T19:00:40.504Z",
		"size": 1422,
		"path": "../public/assets/shopping-cart-DD_xFUP3.js"
	},
	"/assets/styles-FZEvXACM.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1452c-RNROAbp9AwdJPsxxB0B0TISV6Wg\"",
		"mtime": "2026-07-07T19:00:40.514Z",
		"size": 83244,
		"path": "../public/assets/styles-FZEvXACM.css"
	},
	"/assets/useMatch-D4-Xrdzo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c8-6czfNlzpKmhX2aOq1OIuYkhYULM\"",
		"mtime": "2026-07-07T19:00:40.504Z",
		"size": 1224,
		"path": "../public/assets/useMatch-D4-Xrdzo.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_fiAe5E = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_fiAe5E
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
