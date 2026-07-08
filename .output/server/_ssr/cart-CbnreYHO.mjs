import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-CbnreYHO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CartContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "hgallery.cart.v1";
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		} catch {}
	}, [items]);
	const value = (0, import_react.useMemo)(() => ({
		items,
		count: items.reduce((n, i) => n + i.qty, 0),
		add: (id, qty = 1) => setItems((prev) => {
			if (prev.find((i) => i.id === id)) return prev.map((i) => i.id === id ? {
				...i,
				qty: i.qty + qty
			} : i);
			return [...prev, {
				id,
				qty
			}];
		}),
		remove: (id) => setItems((prev) => prev.filter((i) => i.id !== id)),
		setQty: (id, qty) => setItems((prev) => qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => i.id === id ? {
			...i,
			qty
		} : i)),
		clear: () => setItems([])
	}), [items]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}
//#endregion
export { useCart as n, CartProvider as t };
