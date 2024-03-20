import react from '@vitejs/plugin-react-swc'
import crypto from 'crypto'
import { glob } from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
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
        react({ tsDecorators: true }),
        libInjectCss(),
        eslint({
            cache: false,
            include: ['./lib/**/*.js', './lib/**/*.jsx', './lib/**/*.ts', './lib/**/*.tsx'],
            exclude: [],
        }),
        tsconfigPaths(),
        dts({
            include: ['lib/**/!(*.stories|vite-env.*).{ts,tsx}'],
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
                    .replace(/[^\d\w]+/, '')
                    .substring(0, 5)

                return `${componentName?.replace('.module.css', '')}_${name}__${hash}`
            },
        },
        postcss: {
            plugins: [
                postcssImport({ path: ['lib'] }),
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
        copyPublicDir: false,
        lib: {
            entry: path.resolve(__dirname, 'lib/index.ts'),
            formats: ['es'],
        },
        rollupOptions: {
            external: [ 'react', 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob.sync('lib/**/!(*.stories|vite-env.*).{ts,tsx}', { ignore: 'lib/**/*.stories.tsx' }).map(file => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    path.relative(
                        'lib',
                        file.slice(0, file.length - path.extname(file).length),
                    ),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
            },
        },
    },
})
