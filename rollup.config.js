import typescript from "@rollup/plugin-typescript";
import { minify } from 'rollup-plugin-esbuild';

export default [
  {
    input: "src/main.ts",
    output: {
      file: "lib/easter-date.js",
      format: "es",
    },
    plugins: [
      typescript(),
      minify()
    ],
  },
  {
    input: "src/main.ts",
    output: {
      file: "lib/easter-date.cjs",
      format: "cjs",
    },
    plugins: [
      typescript(),
      minify()
    ],
  }
];
