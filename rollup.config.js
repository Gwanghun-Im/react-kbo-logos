const typescript = require("@rollup/plugin-typescript")
const resolve = require("@rollup/plugin-node-resolve")
const svgr = require("@svgr/rollup")

const config = {
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
}

module.exports = config
