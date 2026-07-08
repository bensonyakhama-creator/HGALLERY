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
	"/assets/about-BK3-vQKe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f56-b55egm0PRMHOxyKtkSO7ZyDleR8\"",
		"mtime": "2026-07-08T19:38:41.738Z",
		"size": 3926,
		"path": "../public/assets/about-BK3-vQKe.js"
	},
	"/assets/cart-C5diq_ga.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11c6-oM7X/MjrrD74bqZ6homVh80IMlA\"",
		"mtime": "2026-07-08T19:38:41.738Z",
		"size": 4550,
		"path": "../public/assets/cart-C5diq_ga.js"
	},
	"/assets/chevron-right-B8n1zeom.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f-pj5KVGImmGWWkOQJYGZshBM6fPw\"",
		"mtime": "2026-07-08T19:38:41.741Z",
		"size": 127,
		"path": "../public/assets/chevron-right-B8n1zeom.js"
	},
	"/assets/contact-DWWgfcl3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fee-J8zqh1B+WOMg5Qr97JM+igRu5l0\"",
		"mtime": "2026-07-08T19:38:41.743Z",
		"size": 4078,
		"path": "../public/assets/contact-DWWgfcl3.js"
	},
	"/assets/Layout-Bl7j1vtv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"478e-2wyVCyZRQoG50EueqF76ELh6czA\"",
		"mtime": "2026-07-08T19:38:41.478Z",
		"size": 18318,
		"path": "../public/assets/Layout-Bl7j1vtv.js"
	},
	"/assets/link-BMlLqjDa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"896a-2wQH7P1CPgp05u6yIp+rz4NunoE\"",
		"mtime": "2026-07-08T19:38:41.743Z",
		"size": 35178,
		"path": "../public/assets/link-BMlLqjDa.js"
	},
	"/assets/product._productId-CW9l2fsi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e-3E5FUNihVpFHn6Vwv1tg4qxgG34\"",
		"mtime": "2026-07-08T19:38:41.743Z",
		"size": 606,
		"path": "../public/assets/product._productId-CW9l2fsi.js"
	},
	"/assets/product._productId-DLOwBkxl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"115b-Xidmdmq+EZsVGy6US5iOpAzOnC0\"",
		"mtime": "2026-07-08T19:38:41.745Z",
		"size": 4443,
		"path": "../public/assets/product._productId-DLOwBkxl.js"
	},
	"/assets/ProductCard-CK88RkpR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c4-oy+Xnyqb7CV6TmNFnULg+hNfLDE\"",
		"mtime": "2026-07-08T19:38:41.478Z",
		"size": 1732,
		"path": "../public/assets/ProductCard-CK88RkpR.js"
	},
	"/assets/projects-CYCQI4YP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8e-S1TQp5q4nJFoWgHPhelRnMEpSlc\"",
		"mtime": "2026-07-08T19:38:41.746Z",
		"size": 3214,
		"path": "../public/assets/projects-CYCQI4YP.js"
	},
	"/assets/index-BU1c13yE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e045-EiEY6TSIKerncrDhp7gXP38eviQ\"",
		"mtime": "2026-07-08T19:38:41.473Z",
		"size": 319557,
		"path": "../public/assets/index-BU1c13yE.js"
	},
	"/assets/routes-CdW1akGj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"572e-4KeZp3yOkmOJoQ94bVF7ecahfzU\"",
		"mtime": "2026-07-08T19:38:41.746Z",
		"size": 22318,
		"path": "../public/assets/routes-CdW1akGj.js"
	},
	"/assets/services-TAXYs6gE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea5-TiH5/ge5pjamx2TSG51JAoxKQoQ\"",
		"mtime": "2026-07-08T19:38:41.746Z",
		"size": 3749,
		"path": "../public/assets/services-TAXYs6gE.js"
	},
	"/assets/shop-DnOq4rB3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e1-2F/ZRVGza0fY9nAEeWtjTeVAor0\"",
		"mtime": "2026-07-08T19:38:41.746Z",
		"size": 2273,
		"path": "../public/assets/shop-DnOq4rB3.js"
	},
	"/assets/shop._category-DAG-Drio.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e7-qZJTTOmL0mz4LNHNVd8Go02xLpw\"",
		"mtime": "2026-07-08T19:38:41.746Z",
		"size": 2023,
		"path": "../public/assets/shop._category-DAG-Drio.js"
	},
	"/assets/shop._category-S7E48QQP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"229-5UMi2h/Q9NlazCaz4o0sGqYaI18\"",
		"mtime": "2026-07-08T19:38:41.750Z",
		"size": 553,
		"path": "../public/assets/shop._category-S7E48QQP.js"
	},
	"/assets/shop._category-Dz7e4RLE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"200-QM7rK1HC3nPhNAhV+rSmIsd8sA4\"",
		"mtime": "2026-07-08T19:38:41.746Z",
		"size": 512,
		"path": "../public/assets/shop._category-Dz7e4RLE.js"
	},
	"/assets/shopping-bag-D6ypv1ea.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"151-MwYFa+LfqKHUofawwm6FymlyvoI\"",
		"mtime": "2026-07-08T19:38:41.878Z",
		"size": 337,
		"path": "../public/assets/shopping-bag-D6ypv1ea.js"
	},
	"/assets/shopping-cart-DD_xFUP3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58e-vqyYVzUoLUqPMDIPHDLA1OyF2pQ\"",
		"mtime": "2026-07-08T19:38:41.878Z",
		"size": 1422,
		"path": "../public/assets/shopping-cart-DD_xFUP3.js"
	},
	"/assets/shower-head-BZdZXENQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3aa-NUbyaWUkIro5EfMjZr44+byQlUQ\"",
		"mtime": "2026-07-08T19:38:41.878Z",
		"size": 938,
		"path": "../public/assets/shower-head-BZdZXENQ.js"
	},
	"/assets/styles-BhgjVFJG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"164d0-O2mZI6ilBGbwFT6Y/rD7lH1sYIM\"",
		"mtime": "2026-07-08T19:38:41.886Z",
		"size": 91344,
		"path": "../public/assets/styles-BhgjVFJG.css"
	},
	"/assets/useMatch-D4-Xrdzo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c8-6czfNlzpKmhX2aOq1OIuYkhYULM\"",
		"mtime": "2026-07-08T19:38:41.878Z",
		"size": 1224,
		"path": "../public/assets/useMatch-D4-Xrdzo.js"
	},
	"/assets/users-CwzpMSPk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28f-1+9f5DNdMynBVpKh1KLgsRhR350\"",
		"mtime": "2026-07-08T19:38:41.885Z",
		"size": 655,
		"path": "../public/assets/users-CwzpMSPk.js"
	},
	"/assets/wrench-D25X1m33.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"276-FSy0bC6wchPHl4v5/Y3kiQ9jLeY\"",
		"mtime": "2026-07-08T19:38:41.885Z",
		"size": 630,
		"path": "../public/assets/wrench-D25X1m33.js"
	},
	"/images/about/08ac43a1e38f2287a0b7d982d60823c3.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e40-CRH4owF7wFVuvUZ869fQ+61SfU0\"",
		"mtime": "2026-07-08T11:53:54.159Z",
		"size": 20032,
		"path": "../public/images/about/08ac43a1e38f2287a0b7d982d60823c3.jpg"
	},
	"/images/about/about-company.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e40-CRH4owF7wFVuvUZ869fQ+61SfU0\"",
		"mtime": "2026-07-08T11:54:04.196Z",
		"size": 20032,
		"path": "../public/images/about/about-company.jpg"
	},
	"/images/footer/footer-bg.jpg": {
		"type": "image/jpeg",
		"etag": "\"dbbd-etVYjsP77bmr04C0Id+SxBAgPy0\"",
		"mtime": "2026-07-08T12:33:02.724Z",
		"size": 56253,
		"path": "../public/images/footer/footer-bg.jpg"
	},
	"/images/hero/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"15aaa-hW9NGf6b2GpvNLNpm6XIoWWf9K8\"",
		"mtime": "2026-07-08T09:29:25.330Z",
		"size": 88746,
		"path": "../public/images/hero/hero.jpg"
	},
	"/images/logos/footer-logo.png": {
		"type": "image/png",
		"etag": "\"31e9-QGPkHQR2X2e0GIl5hfJy1dLQGAo\"",
		"mtime": "2026-07-08T12:27:48.979Z",
		"size": 12777,
		"path": "../public/images/logos/footer-logo.png"
	},
	"/images/products/aluminium-window.jpg": {
		"type": "image/jpeg",
		"etag": "\"e25d-OEwj21UCWYWw9IEQB50SrmQz1/8\"",
		"mtime": "2026-07-08T10:41:58.072Z",
		"size": 57949,
		"path": "../public/images/products/aluminium-window.jpg"
	},
	"/images/products/angle-grinder.jpg": {
		"type": "image/jpeg",
		"etag": "\"504b-AiSFl7vjEBY+RVK9HPR55WdEWCc\"",
		"mtime": "2026-07-08T10:48:49.078Z",
		"size": 20555,
		"path": "../public/images/products/angle-grinder.jpg"
	},
	"/images/products/bathroom-mirror.jpg": {
		"type": "image/jpeg",
		"etag": "\"b6ac-Z9DVj4p9LDT+C+bL5/0wNUeckC8\"",
		"mtime": "2026-07-08T10:44:40.117Z",
		"size": 46764,
		"path": "../public/images/products/bathroom-mirror.jpg"
	},
	"/images/products/frameless-shower-cubicle.jpg": {
		"type": "image/jpeg",
		"etag": "\"24c38-tEf+ZDIPrjI7MGc+0D81Q3Hu3Zs\"",
		"mtime": "2026-07-08T10:40:17.073Z",
		"size": 150584,
		"path": "../public/images/products/frameless-shower-cubicle.jpg"
	},
	"/images/products/office-glass-partition.jpg": {
		"type": "image/jpeg",
		"etag": "\"10be5-7iahgHXNLq7HNl1mV6eUcWCFGWo\"",
		"mtime": "2026-07-08T10:42:38.408Z",
		"size": 68581,
		"path": "../public/images/products/office-glass-partition.jpg"
	},
	"/images/products/sliding-shower-cubicle.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e14-SypGnT1D0KJndGJlMi30ndkBQBw\"",
		"mtime": "2026-07-08T10:41:06.351Z",
		"size": 32276,
		"path": "../public/images/products/sliding-shower-cubicle.jpg"
	},
	"/images/projects/aluminium-window.jpg": {
		"type": "image/jpeg",
		"etag": "\"d137-b1hUC/01o1qq3YwglubHP6B/iMg\"",
		"mtime": "2026-07-08T09:18:46.371Z",
		"size": 53559,
		"path": "../public/images/projects/aluminium-window.jpg"
	},
	"/images/products/wall-panel.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b2ff-m28VaxFdrfJZurBEVMzcuweiMbk\"",
		"mtime": "2026-07-08T10:43:59.761Z",
		"size": 111359,
		"path": "../public/images/products/wall-panel.jpg"
	},
	"/images/projects/client-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"765c-DIGmvg3XrO5ueeds75Xdq6FcA5Q\"",
		"mtime": "2026-07-08T11:42:16.329Z",
		"size": 30300,
		"path": "../public/images/projects/client-1.jpg"
	},
	"/images/products/picture-frame.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d642-YxvLFh2rPUmyq9JJFKti0EL39lY\"",
		"mtime": "2026-07-08T10:46:46.353Z",
		"size": 382530,
		"path": "../public/images/products/picture-frame.jpg"
	},
	"/images/projects/custom-picture-framing.jpg": {
		"type": "image/jpeg",
		"etag": "\"4018f-OfrXkeLvvUdX260Rn9O2V2LD+4Y\"",
		"mtime": "2026-07-08T11:01:01.097Z",
		"size": 262543,
		"path": "../public/images/projects/custom-picture-framing.jpg"
	},
	"/images/projects/glass-office-partition.jpg": {
		"type": "image/jpeg",
		"etag": "\"9d7e-yVYzYKBe1I/ovZsrVioexEOUcjM\"",
		"mtime": "2026-07-08T10:56:15.155Z",
		"size": 40318,
		"path": "../public/images/projects/glass-office-partition.jpg"
	},
	"/images/projects/frameless-shower-installation.jpg": {
		"type": "image/jpeg",
		"etag": "\"30643-LXYpQg7AHrR+jOR99UaFnYCWIww\"",
		"mtime": "2026-07-08T10:56:51.978Z",
		"size": 198211,
		"path": "../public/images/projects/frameless-shower-installation.jpg"
	},
	"/images/projects/glass-balustrade.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f25a-VToUsaJcsQBwf3paawqj5atlRfE\"",
		"mtime": "2026-07-08T10:59:48.468Z",
		"size": 127578,
		"path": "../public/images/projects/glass-balustrade.jpg"
	},
	"/images/projects/glass-partition.jpg": {
		"type": "image/jpeg",
		"etag": "\"15d24-YFN2oUlfczcLGdukHqM2i3fKQkU\"",
		"mtime": "2026-07-08T09:08:51.699Z",
		"size": 89380,
		"path": "../public/images/projects/glass-partition.jpg"
	},
	"/images/projects/glass-railing.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f97-kk4d7TBryASlTB7v8i+8hy/U8pA\"",
		"mtime": "2026-07-08T09:19:30.655Z",
		"size": 24471,
		"path": "../public/images/projects/glass-railing.jpg"
	},
	"/images/projects/luxury-wall-panels.jpg": {
		"type": "image/jpeg",
		"etag": "\"12f06-Jn1eOY6GxPO5KH9R3gYJ6+faEBU\"",
		"mtime": "2026-07-08T10:58:57.563Z",
		"size": 77574,
		"path": "../public/images/projects/luxury-wall-panels.jpg"
	},
	"/images/projects/modern-aluminium-windows.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b2c7-GdtJExWXlBy9aWXSnpvdBP2yJ4g\"",
		"mtime": "2026-07-08T10:57:26.681Z",
		"size": 176839,
		"path": "../public/images/projects/modern-aluminium-windows.jpg"
	},
	"/images/projects/picture-frame.jpg": {
		"type": "image/jpeg",
		"etag": "\"306b8-4+MZyngNXaC0ooW2sWaYuQzx7Z8\"",
		"mtime": "2026-07-08T09:21:42.317Z",
		"size": 198328,
		"path": "../public/images/projects/picture-frame.jpg"
	},
	"/images/projects/project3.jpg": {
		"type": "image/jpeg",
		"etag": "\"b551-d8FhiNT8I+gHOANc2jWwD0VVyS0\"",
		"mtime": "2026-07-08T17:27:05.407Z",
		"size": 46417,
		"path": "../public/images/projects/project3.jpg"
	},
	"/images/projects/project2.jpg": {
		"type": "image/jpeg",
		"etag": "\"15d24-YFN2oUlfczcLGdukHqM2i3fKQkU\"",
		"mtime": "2026-07-08T17:25:28.984Z",
		"size": 89380,
		"path": "../public/images/projects/project2.jpg"
	},
	"/images/projects/project1.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bb8f-UssEiWHoGK02aYrqtUWB86/xRyo\"",
		"mtime": "2026-07-08T17:24:37.027Z",
		"size": 179087,
		"path": "../public/images/projects/project1.jpg"
	},
	"/images/projects/project4.jpg": {
		"type": "image/jpeg",
		"etag": "\"25969-+V5BENyfcf6FQBKVIZqerNQSr6k\"",
		"mtime": "2026-07-08T17:28:17.307Z",
		"size": 153961,
		"path": "../public/images/projects/project4.jpg"
	},
	"/images/projects/project5.jpg": {
		"type": "image/jpeg",
		"etag": "\"16589-2tgkDm9I0SwkiJz4D8k5KHKFIW4\"",
		"mtime": "2026-07-08T17:29:13.590Z",
		"size": 91529,
		"path": "../public/images/projects/project5.jpg"
	},
	"/images/projects/project6.jpg": {
		"type": "image/jpeg",
		"etag": "\"19890-6bvEF9siuwBAKm+BbgbW+556TZU\"",
		"mtime": "2026-07-08T17:30:21.680Z",
		"size": 104592,
		"path": "../public/images/projects/project6.jpg"
	},
	"/images/projects/shower-cubicle.jpg": {
		"type": "image/jpeg",
		"etag": "\"1428c-TyrQ+QwXHYi0EHk3YQS9m78mGO8\"",
		"mtime": "2026-07-08T09:06:58.617Z",
		"size": 82572,
		"path": "../public/images/projects/shower-cubicle.jpg"
	},
	"/images/services/aluminium.jpg": {
		"type": "image/jpeg",
		"etag": "\"45b6-8d+vkzavrEHp+1JPfwM5OCSUoPc\"",
		"mtime": "2026-07-08T17:15:52.175Z",
		"size": 17846,
		"path": "../public/images/services/aluminium.jpg"
	},
	"/images/projects/wall-panel.jpg": {
		"type": "image/jpeg",
		"etag": "\"41846-vbSfWlRkcUznvuKK6SwxA7acbTw\"",
		"mtime": "2026-07-08T09:20:34.458Z",
		"size": 268358,
		"path": "../public/images/projects/wall-panel.jpg"
	},
	"/images/services/aluminium-works.jpg": {
		"type": "image/jpeg",
		"etag": "\"394f1-L3xTI118GFYt2cBoV5Mm7w+QfGM\"",
		"mtime": "2026-07-08T10:16:13.707Z",
		"size": 234737,
		"path": "../public/images/services/aluminium-works.jpg"
	},
	"/images/services/fabrication.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ae6f-90MqWEvDOOMmI8kNYD7pJEs8fTY\"",
		"mtime": "2026-07-08T17:12:18.091Z",
		"size": 110191,
		"path": "../public/images/services/fabrication.jpg"
	},
	"/images/services/glass-installation.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c282-eh+6sVQrSf/51Bzg4xV7Hvrl0uA\"",
		"mtime": "2026-07-08T10:23:01.302Z",
		"size": 115330,
		"path": "../public/images/services/glass-installation.jpg"
	},
	"/images/services/glass-partition.jpg": {
		"type": "image/jpeg",
		"etag": "\"14e79-3as/fpgFo7yHvzVxSQHaDybvNEw\"",
		"mtime": "2026-07-08T17:14:28.892Z",
		"size": 85625,
		"path": "../public/images/services/glass-partition.jpg"
	},
	"/images/services/mirror.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c5e-fVGySwwKspfgVPV9tSvO6qajSSw\"",
		"mtime": "2026-07-08T17:17:07.257Z",
		"size": 40030,
		"path": "../public/images/services/mirror.jpg"
	},
	"/images/services/hardware-tools.jpg": {
		"type": "image/jpeg",
		"etag": "\"330a9-BdeQZZJ3yagY/ZU0DF7MgG78qCU\"",
		"mtime": "2026-07-08T10:06:30.912Z",
		"size": 209065,
		"path": "../public/images/services/hardware-tools.jpg"
	},
	"/images/services/picture-framing.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d2d-8m520Qu5LDEOzcdjbroIzMwCKd4\"",
		"mtime": "2026-07-08T10:17:50.984Z",
		"size": 93485,
		"path": "../public/images/services/picture-framing.jpg"
	},
	"/images/services/repair.jpg": {
		"type": "image/jpeg",
		"etag": "\"f80f-evlH/urvXXf+9PO3X0/jgBrf26I\"",
		"mtime": "2026-07-08T17:19:15.789Z",
		"size": 63503,
		"path": "../public/images/services/repair.jpg"
	},
	"/images/services/services-hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"17cc1-5NO0xXnX0bk9w81hn+ViAnd4I/4\"",
		"mtime": "2026-07-08T17:10:54.127Z",
		"size": 97473,
		"path": "../public/images/services/services-hero.jpg"
	},
	"/images/services/shower-cubicle.jpg": {
		"type": "image/jpeg",
		"etag": "\"22463-dOQmVXRUfO1A5/5Yug7TajRxDAg\"",
		"mtime": "2026-07-08T17:13:56.552Z",
		"size": 140387,
		"path": "../public/images/services/shower-cubicle.jpg"
	},
	"/images/services/shower-cubicles.jpg": {
		"type": "image/jpeg",
		"etag": "\"1428c-TyrQ+QwXHYi0EHk3YQS9m78mGO8\"",
		"mtime": "2026-07-08T09:06:58.617Z",
		"size": 82572,
		"path": "../public/images/services/shower-cubicles.jpg"
	},
	"/images/services/wall-panels.jpg": {
		"type": "image/jpeg",
		"etag": "\"24844-+e46QOnPP0AeapOa3hVzN4MLVIs\"",
		"mtime": "2026-07-08T10:21:35.469Z",
		"size": 149572,
		"path": "../public/images/services/wall-panels.jpg"
	},
	"/images/testimonials/client-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"765c-DIGmvg3XrO5ueeds75Xdq6FcA5Q\"",
		"mtime": "2026-07-08T11:43:35.774Z",
		"size": 30300,
		"path": "../public/images/testimonials/client-1.jpg"
	},
	"/images/testimonials/client-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"34a6-N1aL9NfqtzSeZ+NgR6fbWudR30Y\"",
		"mtime": "2026-07-08T11:44:03.396Z",
		"size": 13478,
		"path": "../public/images/testimonials/client-2.jpg"
	},
	"/images/testimonials/client-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a56-Cdo87cfLnKGWJx5d1JdKKldJx0c\"",
		"mtime": "2026-07-08T11:44:20.972Z",
		"size": 6742,
		"path": "../public/images/testimonials/client-3.jpg"
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
