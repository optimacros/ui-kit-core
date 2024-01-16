import react from '@vitejs/plugin-react-swc'
import crypto from 'crypto'
import path from 'node:path'
// @ts-ignore
import postcssApply from 'postcss-apply'
import postcssCustomProperties from 'postcss-custom-properties'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nested'
import postcssNormalize from 'postcss-normalize'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
// TODO https://github.com/gxmari007/vite-plugin-eslint/issues/84
// @ts-ignore
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
        react({ tsDecorators: true }),
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
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: (name, filename, css) => {
                const componentName = filename
                    .split('/')
                    .pop()

                const hash = crypto
                    .createHash('md5')
                    .update(css)
                    .digest('base64')
                    .replace('/', '')
                    .substring(0, 5)

                return `${componentName?.replace('.module.css', '')}_${name}__${hash}`
            },
        },
        postcss: {
            plugins: [
                postcssApply,
                postcssImport({ path: ['src'] }),
                postcssNesting,
                postcssPresetEnv({
                    stage: 3,
                    features: {
                        'nesting-rules': true,
                        'custom-media-queries': true,
                    },
                }),
                postcssCustomProperties({
                    preserve: false,
                }),
                postcssNormalize,
            ],
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
