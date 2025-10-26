import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/rollup",
    format: "esm",
  },
  plugins: [
    typescript({
      include: "src/**/*.ts",
      compilerOptions: {
        outDir: "dist/rollup",
      },
    }),
  ],
};
