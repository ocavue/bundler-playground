import { defineConfig } from "tsdown";

export default defineConfig({
  input: ["src/index.ts"],
  outDir: "dist/tsdown",
  dts: true,
});
