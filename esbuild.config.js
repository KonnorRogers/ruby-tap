import * as path from "path";
import glob from "glob"
import esbuild from "esbuild"

;(async function () {
  let entries = glob
    .sync("src/**/*.js")
    .map((file) => {
      return path.join(path.dirname(file), path.basename(file, path.extname(file)))
    });

  console.log(entries)

  const defaultConfig = {
    entryPoints: ["./src/index.js"],
    sourcemap: true,
    platform: "browser",
    target: "es2018",
    watch: process.argv.includes("--watch"),
    color: true,
    bundle: true,
    external: []
  }

  const startTime = Number(new Date())

  await Promise.all[
    esbuild.build({
      ...defaultConfig,
      outfile: "dist/bundle/ruby-tap.common.js",
      format: "cjs",
      minify: true,
    }),

    esbuild.build({
      ...defaultConfig,
      outfile: "dist/bundle/ruby-tap.module.js",
      format: "esm",
      minify: true,
    }),

    esbuild.build({
      ...defaultConfig,
      entryPoints: entries,
      outdir: 'dist',
      format: 'esm',
      target: "es2020",
      external: ['./node_modules/*'],
      splitting: true,
      chunkNames: 'chunks/[name]-[hash]'
    })
  ]

  const endTime = Number(new Date())
  const buildTime = endTime - startTime

  console.log(`Build complete in ${buildTime}ms! ✨`)
})()
