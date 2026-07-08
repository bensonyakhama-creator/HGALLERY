import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useCart } from "./cart-CbnreYHO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trash2, c as ShoppingBag } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Layout-Mog03DKz.mjs";
import { i as getProduct, n as formatKES } from "./catalog-Bp65tuzt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-CK-3DHBf.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, setQty, remove, clear, count } = useCart();
	const lines = items.map((i) => ({
		item: i,
		product: getProduct(i.id)
	})).filter((l) => Boolean(l.product));
	const subtotal = lines.reduce((s, l) => s + l.product.price * l.item.qty, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold sm:text-4xl",
				children: "Your cart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: count === 0 ? "Your cart is empty." : `${count} item${count === 1 ? "" : "s"} ready for enquiry.`
			}),
			lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-dashed border-border bg-card p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Browse the shop and add items to build your enquiry list."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-6 inline-block rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground",
						children: "Go to shop"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "lg:col-span-2 divide-y divide-border rounded-xl border border-border bg-card",
					children: lines.map(({ item, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$productId",
								params: { productId: product.id },
								className: "h-24 w-24 shrink-0 overflow-hidden rounded-md bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image,
									alt: product.name,
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$productId",
										params: { productId: product.id },
										className: "font-display text-lg font-semibold hover:text-brand",
										children: product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-brand font-semibold",
										children: formatKES(product.price)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center rounded-md border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "px-2 py-1 text-muted-foreground hover:text-brand",
													onClick: () => setQty(item.id, item.qty - 1),
													"aria-label": "Decrease",
													children: "−"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "min-w-8 text-center text-sm font-semibold",
													children: item.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "px-2 py-1 text-muted-foreground hover:text-brand",
													onClick: () => setQty(item.id, item.qty + 1),
													"aria-label": "Increase",
													children: "+"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => remove(item.id),
											className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Remove"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-right text-sm font-semibold",
								children: formatKES(product.price * item.qty)
							})
						]
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-xl border border-border bg-card p-6 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 space-y-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Subtotal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: formatKES(subtotal)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Delivery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Quoted on enquiry" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+254726335283",
							className: "mt-6 block w-full rounded-md bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground shadow-brand",
							children: "Call to place order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/254726335283?text=${encodeURIComponent("Hello H.Gallery, I'd like to enquire about:\n" + lines.map((l) => `• ${l.product.name} × ${l.item.qty}`).join("\n"))}`,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-2 block w-full rounded-md border border-border px-5 py-3 text-center text-sm font-semibold hover:border-brand hover:text-brand",
							children: "Enquire via WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: clear,
							className: "mt-4 w-full text-xs text-muted-foreground hover:text-destructive",
							children: "Clear cart"
						})
					]
				})]
			})
		]
	}) });
}
//#endregion
export { CartPage as component };
