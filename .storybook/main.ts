import type { StorybookConfig } from '@storybook/react-vite'
import { withoutVitePlugins } from '@storybook/builder-vite'

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
    ],

    features: {
        storyStoreV7: true,
    },

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
