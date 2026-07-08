import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getProductsByCategory, i as getProduct, r as getCategory } from "./catalog-Bp65tuzt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._productId-1bcZ9ug4.js
var $$splitComponentImporter = () => import("./product._productId-siHapRuO.mjs");
var $$splitNotFoundComponentImporter = () => import("./product._productId-C42qgPCw.mjs");
var Route = createFileRoute("/product/$productId")({
	loader: ({ params }) => {
		const product = getProduct(params.productId);
		if (!product) throw notFound();
		return {
			product,
			category: getCategory(product.category),
			related: getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product not found — H.Gallery" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		return { meta: [
			{ title: `${product.name} — H.Gallery` },
			{
				name: "description",
				content: product.description
			},
			{
				property: "og:title",
				content: `${product.name} — H.Gallery`
			},
			{
				property: "og:description",
				content: product.description
			},
			{
				property: "og:image",
				content: product.image
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
