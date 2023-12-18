import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
// TODO https://github.com/gxmari007/vite-plugin-eslint/issues/84
// @ts-ignore
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import postcssNesting from 'postcss-nested'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname, 'src'),
    plugins: [
        react({
            babel: {
                babelrc: false,
                configFile: false,
                plugins: [
                    [
                        "@babel/plugin-proposal-decorators",
                        { loose: true, version: "2022-03" },
                    ],
                ],
            }
        }),
        eslint({
            cache: false,
            include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
            exclude: [],
        }),
        tsconfigPaths(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    css: {
        postcss: {
            plugins: [postcssNesting],
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'ui-kit-lite',
            formats: ['es', 'umd'],
            fileName: (format) => `ui-kit-lite.${format}.js`,
        },
        rollupOptions: {
            external: [ 'react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
