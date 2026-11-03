import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  base: process.env.GITHUB_PAGES && repositoryName ? `/${repositoryName}/` : "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
