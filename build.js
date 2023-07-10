import {build} from 'esbuild';

build({
  entryPoints: ['./browser/index.js'],
  outfile: './dist/bullshit-generator.browser.js',
  bundle: true,
  minify: true,
});

build({
  entryPoints: ['./index.js'],
  outfile: './dist/bullshit-generator.cjs',
  format: "cjs",
  bundle: true,
  external: ['require', 'fs', 'path', 'url'],
});