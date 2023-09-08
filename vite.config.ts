import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/hass.ts", import.meta.url)),
      name: "hass",
    },

    rollupOptions: {
      input: {
        hass: fileURLToPath(new URL("./src/hass.ts", import.meta.url)),
      },
    },
  },

  define: { "process.env": {} },
});
