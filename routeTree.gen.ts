import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

// Import your route components
import { Route as RootRoute } from "./src/routes/__root";
import { Route as IndexRoute } from "./src/routes/index";
import { Route as AboutRoute } from "./src/routes/about";
import { Route as ServicesRoute } from "./src/routes/services";
import { Route as ProjectsRoute } from "./src/routes/projects";
import { Route as BlogRoute } from "./src/routes/blog";
import { Route as ContactRoute } from "./src/routes/contact";
import { Route as GalleryRoute } from "./src/routes/gallery";
import { Route as ReviewsRoute } from "./src/routes/reviews";
import { Route as ShopRoute } from "./src/routes/shop";

// Create the route tree
const rootRoute = RootRoute;
rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ServicesRoute,
  ProjectsRoute,
  BlogRoute,
  ContactRoute,
  GalleryRoute,
  ReviewsRoute,
  ShopRoute,
]);

export const routeTree = rootRoute;