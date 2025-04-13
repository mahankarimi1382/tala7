import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Required for path.resolve

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './src/assets/img'),
      // Add more aliases as needed
    }
  }
});