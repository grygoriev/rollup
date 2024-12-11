import image from '@rollup/plugin-image';
import styles from "rollup-plugin-styles";
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        image(),
        styles(),
        babel({ babelHelpers: 'bundled' }),
        serve(''),
        livereload(),
    ],
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                "corejs": "3.22"
            }
        ]
    ]
};