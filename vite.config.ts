import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { writeFileSync } from "fs";

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
          },
        },
      ],
    },
  },
});
