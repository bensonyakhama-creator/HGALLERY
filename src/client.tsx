import { getRouter } from "./router";

const router = getRouter();

hydrateRoot(document, <StartClient router={router} />);
