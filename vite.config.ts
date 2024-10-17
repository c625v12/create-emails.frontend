/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200,
    host: "localhost",
  },
  root: "src",
  plugins: [react()],
  test: {
    watch: false,
    globals: true,
    setupFiles: "./vitest.setup.js",
    environment: "jsdom",
    // include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../coverage/frontend",
      provider: "v8",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
