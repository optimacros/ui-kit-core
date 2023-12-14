import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import postcssNesting from 'postcss-nested'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
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
