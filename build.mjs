import { build } from 'esbuild';

await build({
  entryPoints: ['bin/index.js'],   // <- tu archivo actual
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: 'dist/cli.cjs',
  minify: true,
  legalComments: 'none',
  banner: { js: '#!/usr/bin/env node' } // conserva el shebang
});