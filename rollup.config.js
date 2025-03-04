import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import svgr from "@svgr/rollup"
import dts from "rollup-plugin-dts"

const config = [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
    },
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      svgr(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.ts", "**/*.test.tsx"],
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
]

export default config
