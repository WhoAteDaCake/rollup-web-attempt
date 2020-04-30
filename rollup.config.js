import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { namedExports } from './namedExports'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const babelConf = require('./babel.config');

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		json(),
		postcss({
			extract: true,
			use: [['less', {javascriptEnabled: true, paths: ['./node_modules', './src']}]]
		}),
		resolve(), // tells Rollup how to find date-fns in node_modules
		babel({ babelHelpers: 'bundled',  exclude: 'node_modules/**', ...babelConf }),
		commonjs({
			namedExports
		}), // converts date-fns to ES modules
		production && terser() // minify, but only in production
	]
};
