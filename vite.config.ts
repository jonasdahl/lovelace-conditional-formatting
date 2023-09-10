import preact from "@preact/preset-vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [preact({})],

  build: {
    lib: {
      name: "conditional-formatting",
      fileName: "conditional-formatting",
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
    },
  },

  define: { "process.env": {} },
});
