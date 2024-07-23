// import million from "million/compiler";
// import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // million.vite({ auto: true }), 
    // MillionLint.vite(), 
    react()
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
    },
  },
});
