import preact from "@preact/preset-vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact({})],

  build: {
    rollupOptions: {
      input: {
        hass: fileURLToPath(new URL("./src/hass.js", import.meta.url)),
      },
    },
  },

  define: { "process.env": {} },
});
