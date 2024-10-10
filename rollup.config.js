import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts', // Entry point
  output: [
    {
      file: production
        ? 'dist/deckofcards.min.js'
        : 'dist/deckofcards.js', // Different output for production

      format: 'umd', // Universal Module Definition
      name: 'deckofcards', // Global name in UMD builds
      sourcemap: true,
    },
    {
      file: production
        ? 'dist/deckofcards.esm.min.js'
        : 'dist/deckofcards.esm.js',

      format: 'es', // ESM format
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // To resolve node_modules
    commonjs(), // To convert CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true, // Output .d.ts files to the specified folder
    }),
    production && terser(), // Minify only if it's production
  ],
};
