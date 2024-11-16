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
});
