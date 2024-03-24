import typescript from "@rollup/plugin-typescript";
import { minify } from 'rollup-plugin-esbuild';

export default {
  input: "src/main.ts",
  output: {
    file: "lib/easter.js",
    format: "es",
  },
  plugins: [
    typescript(),
    minify()
  ],
};
