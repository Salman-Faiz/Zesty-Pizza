import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    proxy: {
      '/api': {
        target: 'https://react-fast-pizza-api.jonas.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Ensure Vercel uses local.json for production builds
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});
