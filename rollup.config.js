import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

module.exports = {
    input: 'lib/api.js',
    output: {
      entryFileNames: '[name].js',
      dir: 'dist',
      format: 'esm'
    },
    preserveModules: true,
    plugins: [ commonjs()]
  };