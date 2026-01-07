import { serve } from "bun";

import homepage from "../public/template.html";

await Bun.build({
  entrypoints: ["./index.html"],
  outdir: "./dist",
  env: "inline",
});

// Only inline env vars with a specific prefix (recommended)
await Bun.build({
  entrypoints: ["./index.html"],
  outdir: "./dist",
  env: "PUBLIC_*",
});

const server = serve({
  routes: {
    // ** HTML imports **
    // Bundle & route index.html to "/". This uses HTMLRewriter to scan
    // the HTML for `<script>` and `<link>` tags, runs Bun's JavaScript
    // & CSS bundler on them, transpiles any TypeScript, JSX, and TSX,
    // downlevels CSS with Bun's CSS parser and serves the result.
    "/": homepage,
    // Bundle & route dashboard.html to "/dashboard"
    // FIX: NA

    // ** API endpoints ** (Bun v1.2.3+ required)
    // "/api/users": {
    //   async GET(req) {
    //     const users = await sql`SELECT * FROM users`;
    //     return Response.json(users);
    //   },
    //   async POST(req) {
    //     const { name, email } = await req.json();
    //     const [user] = await sql`INSERT INTO users (name, email) VALUES (${name}, ${email})`;
    //     return Response.json(user);
    //   },
    // },
    // "/api/users/:id": async req => {
    //   const { id } = req.params;
    //   const [user] = await sql`SELECT * FROM users WHERE id = ${id}`;
    //   return Response.json(user);
    // },
  },

  // Enable development mode for:
  // - Detailed error messages
  // - Hot reloading (Bun v1.2.3+ required)
  development: true,
});

console.log(`Listening on ${server.url}`);
