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
        libInjectCss(),
        react({ tsDecorators: true }),
        eslint({
            cache: false,
            include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
            exclude: [],
        }),
        tsconfigPaths(),
        dts({
            include: ['./src/components/**/!(*.stories).{ts,tsx}'],
            insertTypesEntry: true,
            outDir: ['.'],
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
        copyPublicDir: false,
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.cjs'),
            formats: ['cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob.sync(
                    './src/components/**/!(*.stories).{ts,tsx}',
                    { ignore: 'src/components/**/*.stories.tsx' },
                ).map(file => [
                    // The name of the entry point
                    // src/components/nested/foo.ts becomes nested/foo
                    path.relative(
                        'src/components',
                        file.slice(0, file.length - path.extname(file).length),
                    ),
                    // The absolute path to the entry file
                    // src/components/nested/foo.ts becomes /project/src/components/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url)),
                ]),
            ),
            output: {
                chunkFileNames: (chunkInfo) => {
                    switch (chunkInfo.name) {
                        case 'TabHeaderState':
                            return 'Tabs/ExtTabs/[name].cjs'
                        case 'react-lifecycles-compat.es':
                            return 'Modal/[name].cjs'
                        default:
                            return 'helpers/[name].cjs'
                    }
                },
                assetFileNames: 'assets/index[extname]',
                entryFileNames: '[name].cjs',
                dir: 'components',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
