import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: "build",
    assetsDir: "assets",
    sourcemap: true,
  },

  esbuild: {
    jsxInject: `import React from 'react';`,
  },

  // Otras configuraciones específicas de Vite...
});
