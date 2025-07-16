import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          forms: ['react-hook-form'],
          ui: ['@headlessui/react', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  publicDir: 'public',
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});