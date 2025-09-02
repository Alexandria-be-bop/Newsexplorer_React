import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/stage-1-frontend-and-api/",
  server: {
    port: 3000,
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
  build: {
    sourcemap: false,
  },
});
