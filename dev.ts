import { serve } from "bun";
import index from "./public/template.html";

const server = serve({
  routes: {
    // Serve the index.html at the root path
    // Bun will automatically bundle any <script> and <link> tags inside it!
    "/": index,
  },
  development: true,
});

console.log(`Listening on ${server.url}`);
