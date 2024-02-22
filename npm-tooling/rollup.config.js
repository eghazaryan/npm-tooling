import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/esm/bundle.ts",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "build/cjs/bundle.ts",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
