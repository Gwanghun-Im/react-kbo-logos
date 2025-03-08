import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import { copy } from "@web/rollup-plugin-copy"

export default defineConfig({
  root: "./example",
  plugins: [
    react(),
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
    }),
    svgr({
      svgrOptions: {
        exportType: "named",
        typescript: true,
        ref: true,
        dimensions: false,
        svgProps: {
          preserveAspectRatio: "xMidYMid meet", // 비율 유지하면서 중앙 정렬
        },
      },
      include: "**/*.svg",
    }),
  ],
  server: {
    port: 3000,
  },
})
