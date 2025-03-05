import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://tala7.com:44",  // API domain
        changeOrigin: true,
        secure: false, // Set false if the API uses self-signed SSL
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Ensure correct API path
      },
    },
  },
});
