import { serve } from "bun";
// import homepage from "../public/template.html"; // Optional: if you want to serve the HTML file directly via import

// Build the application
console.log("Building application...");
const buildResult = await Bun.build({
  entrypoints: ["./public/template.html"], // Root-relative path assuming you run `bun src/app.ts` from project root
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

// Optional: Start a production server to serve the built files
// This is useful if 'app.ts' is the entry point for your deployed container/server
const server = serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    // Serve files from the dist directory
    let filePath = "./dist" + url.pathname;

    // Default to index.html (which is what template.html builds to)
    if (url.pathname === "/") {
      filePath = "./dist/index.html"; // template.html -> dist/index.html (usually) or dist/template.html depending on naming
      // With bun build of html, it usually keeps the name or becomes index.html if it's the main entry.
      // Let's verify the output name. Usually template.html -> dist/template.html unless renamed.
      // But common convention is to serve index.html.
      // Let's try serving the built file.
      return new Response(Bun.file("./dist/template.html"));
    }

    const file = Bun.file(filePath);
    return new Response(file);
  },
});

console.log(`Production server listening on ${server.url}`);
