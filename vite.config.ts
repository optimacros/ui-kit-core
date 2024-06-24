import react from '@vitejs/plugin-react-swc'
import crypto from 'crypto'
import path from 'node:path'
import postcssCustomProperties from 'postcss-custom-properties'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// TODO https://github.com/gxmari007/vite-plugin-eslint/issues/84
// @ts-ignore
import eslint from 'vite-plugin-eslint'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        libInjectCss(),
        react({ tsDecorators: true }),
        eslint({
            cache: false,
            include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
            exclude: [],
        }),
        tsconfigPaths(),
        dts({
            exclude: ['./src/components/**/*.stories.{ts,tsx}'],
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
                    .replace(/[^\d\w]+/, '')
                    .substring(0, 5)

                return `${componentName?.replace('.module.css', '-module')}__${name}__${hash}`
            },
        },
        postcss: {
            plugins: [
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
            ],
        },
    },
    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, 'src', 'index.tsx'),
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            // todo
            // input: Object.fromEntries(
            //     glob.sync(
            //         './src/components/**/*.{ts,tsx}',
            //         { ignore: 'src/components/**/*.stories.tsx' },
            //     ).map(file => {
            //         const entryName = path.relative(
            //             'src',
            //             file.slice(0, file.length - path.extname(file).length),
            //         )
            //         const newPath = fileURLToPath(new URL(file, import.meta.url))
            //
            //         return [
            //             entryName,
            //             newPath,
            //         ]
            //     }),
            // ),
            output: {
                assetFileNames: 'assets/index[extname]',
                entryFileNames: '[name].js',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
