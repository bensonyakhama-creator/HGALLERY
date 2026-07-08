import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getProductsByCategory, r as getCategory } from "./catalog-Bp65tuzt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._category-99fvX7bv.js
var $$splitComponentImporter = () => import("./shop._category-BhPtdcEI.mjs");
var $$splitErrorComponentImporter = () => import("./shop._category-BCH5haRq.mjs");
var $$splitNotFoundComponentImporter = () => import("./shop._category-6Tj0SGpL.mjs");
var Route = createFileRoute("/shop/$category")({
	loader: ({ params }) => {
		const category = getCategory(params.category);
		if (!category) throw notFound();
		return {
			category,
			products: getProductsByCategory(params.category)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Category not found — H.Gallery" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { category } = loaderData;
		return { meta: [
			{ title: `${category.name} — H.Gallery` },
			{
				name: "description",
				content: category.description
			},
			{
				property: "og:title",
				content: `${category.name} — H.Gallery`
			},
			{
				property: "og:description",
				content: category.description
			},
			{
				property: "og:image",
				content: category.image
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
