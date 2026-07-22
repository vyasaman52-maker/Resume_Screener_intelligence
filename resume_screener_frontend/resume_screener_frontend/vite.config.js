import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Resume_Screener_intelligence/",
  test: {
    environment: 'jsdom',
    globals: true
  },
  server: {
    port: 5173,
  },
});
