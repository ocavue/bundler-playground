import { defineConfig } from "rolldown";
import {dts} from 'rolldown-plugin-dts';

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist/rolldown",
    format: "esm",
  },
  plugins: [dts()],
});
