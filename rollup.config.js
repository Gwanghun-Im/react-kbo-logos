const resolve = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const typescript = require("@rollup/plugin-typescript")
const svgr = require("@svgr/rollup")
const { copy } = require("@web/rollup-plugin-copy")

module.exports = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
    }),
    svgr({
      exportType: "named",
      typescript: true,
      ref: true,
    }),
    copy({
      patterns: ["src/assets/**/*"],
      rootDir: "src",
      dest: "dist",
    }),
  ],
  external: ["react", "react-dom"],
}
