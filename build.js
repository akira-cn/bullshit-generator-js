import {build} from 'esbuild';

const buildOptions = {
  entryPoints: ['./browser/index.js'],
  outfile: './dist/index.js',
  bundle: true,
  minify: true,
};

build(buildOptions);