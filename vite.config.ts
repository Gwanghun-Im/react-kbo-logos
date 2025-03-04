import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  root: "./example",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        dimensions: true,
        expandProps: true,
      },
      include: "**/assets/**/*.svg",
    }),
  ],
  server: {
    port: 3000,
  },
})
