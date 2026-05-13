// Import defineConfig from Vite
import { defineConfig } from "vite";

// Import React plugin
import react from "@vitejs/plugin-react";

// Import Tailwind plugin
import tailwindcss from "@tailwindcss/vite";

// Export Vite configuration
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});