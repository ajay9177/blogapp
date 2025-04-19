import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/",
  build: {
    outDir: "../dist", // Outputs to root dist instead of client/dist
  },
  plugins: [react(), tailwindcss()],
});