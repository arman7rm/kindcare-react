import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync, writeFileSync } from "fs";

export default defineConfig({
  base: "/",
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "generate-cname",
          closeBundle() {
            writeFileSync("dist/CNAME", "www.meetkindcare.com");
            // GitHub Pages serves 404.html for unknown paths; reuse the SPA shell so
            // BrowserRouter can handle deep links like /about and /services.
            copyFileSync("dist/index.html", "dist/404.html");
          },
        },
      ],
    },
  },
});
