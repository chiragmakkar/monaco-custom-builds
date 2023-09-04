const babel = require('rollup-plugin-babel');

module.exports = {
  input: "./index.js",
  output: {
    file: './build/bundle.min.js',
    format: 'umd',
    name: 'bundle'
  },
  plugins: [
    babel({
      // exclude: 'node_modules/**',
    })
  ]
}