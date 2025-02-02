import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/learntrackcenter",
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/firestore']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'vendor-i18n': ['i18next', 'react-i18next'],
          'vendor-ui': ['react-icons', 'react-select', 'react-transition-group', 'animate.css'],
          'vendor-utils': ['xlsx']
        }
      }
    }
  }
});
