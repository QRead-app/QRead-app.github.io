// @ts-check
import { defineConfig } from "astro/config";
import { config } from "./src/lib/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://lly02.github.io",
  base: config.basePath,
});
