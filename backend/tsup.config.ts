import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  target: 'node18',
  external: ['@ai16z/eliza'],
  esbuildOptions(options) {
    options.banner = {
      js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
    };
  },
});

