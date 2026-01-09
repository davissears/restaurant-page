import { serve } from "bun";
// import homepage from "../public/template.html"; // Optional: if you want to serve the HTML file directly via import

// Build the application
console.log("Building application...");
const buildResult = await Bun.build({
  entrypoints: ["./public/template.html"], // Root-relative path assuming `bun src/app.ts` us run from project root
  outdir: "./dist",
  minify: true, // Minify for production
  // env: "PUBLIC_*", // usage of env vars
});

if (!buildResult.success) {
  console.error("Build failed!");
  for (const message of buildResult.logs) {
    console.error(message);
  }
} else {
  console.log("Build successful!");
}

// Starts a production server to serve the built files
// useful if 'app.ts' is the entry point for deployed container/server
const server = serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // Default to index.html for root
    if (url.pathname === "/") {
      return new Response(Bun.file("./dist/template.html"));
    }

    // Serve files from the dist directory
    const filePath = "./dist" + url.pathname;
    const file = Bun.file(filePath);

    // Check if file exists to avoid ENOENT errors in logs
    if (await file.exists()) {
      return new Response(file);
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Production server listening on ${server.url}`);
