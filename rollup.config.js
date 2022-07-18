import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/app.js',
  output: {
    file: 'bundle.js',
  },
  plugins: [minify()]
};