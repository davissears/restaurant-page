import { serve } from "bun";
import index from "./public/template.html";

const server = serve({
  routes: {
    // Serve the index.html at the root path

    "/": index,
  },
  development: true,
});

console.log(`Listening on ${server.url}`);
