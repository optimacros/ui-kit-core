import type { StorybookConfig } from '@storybook/react-vite'

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

    async viteFinal(configuration) {
        return configuration;
    },

    docs: {
        autodocs: true
    }
};

export default config
