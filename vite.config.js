import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true, // This exposes the server on the network
    port: 5173, // Optional: specify the port
  },
   build: {
    outDir: 'dist',
    sourcemap: true
  },
});