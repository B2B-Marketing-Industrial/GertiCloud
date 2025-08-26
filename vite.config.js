// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      // tudo que começar com /api vai para o backend
      "/api": {
        target: "https://cloud.gerti.com.br", // se sua API for outro host, troque aqui
        changeOrigin: true,                    // envia Host do alvo (evita bloqueios)
        secure: true,                          // se o HTTPS do backend for self-signed em dev, use false
        rewrite: (path) => path.replace(/^\/api/, ""), // remove o prefixo /api
      },
    },
  },
});
