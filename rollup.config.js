const typescript = require("@rollup/plugin-typescript")
const resolve = require("@rollup/plugin-node-resolve")
const svgr = require("@svgr/rollup")

const config = {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    svgr({
      exportType: "named",
      namedExport: "ReactComponent",
      svgo: false,
      ref: true,
      memo: true,
      typescript: true,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/*.test.ts", "**/*.test.tsx"],
      declaration: true,
      declarationDir: "dist/types",
    }),
  ],
}

module.exports = config
