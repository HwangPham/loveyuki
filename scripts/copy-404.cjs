const fs = require("fs");
const path = require("path");

const distDir = path.resolve(process.cwd(), "dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in dist. Run build first.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("Copied index.html to 404.html");
