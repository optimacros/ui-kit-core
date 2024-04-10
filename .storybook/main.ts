import type { StorybookConfig } from '@storybook/react-vite'
import { withoutVitePlugins } from '@storybook/builder-vite'

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            // 👇 Default prop filter, which excludes props from node_modules
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
    ],

    async viteFinal(config) {
        return {
            ...config,
            // don't create d.ts files during storybook creation
            plugins: await withoutVitePlugins(config.plugins, ['vite:dts']),
        }
    },

    docs: {
        autodocs: true
    },

    staticDirs: [{ from: '../src/fonts', to: 'fonts' }]
};

export default config
