await Bun.build({
  entrypoints: ["./public/template.html"],
  outdir: "./dist",
  minify: true,
});
