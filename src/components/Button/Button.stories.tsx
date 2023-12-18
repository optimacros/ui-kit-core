import { Meta, StoryObj } from '@storybook/react'

import { Button } from './index.tsx'

const meta: Meta<typeof Button> = {
    title: 'UI Kit lite/Button',
    component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

const argTypes = {
    icon: {
        control: 'text',
        description: 'Overwritten description',
    },
    fontSize: {
        control: 'text',
        description: 'Overwritten description',
    },
    tooltip: {
        table: {
            disable: true,
        },
    },
}

export const Accent: Story = {
    args: {
        icon: 'bookmark',
        label: 'Bookmark',
        accent: true,
    },
    argTypes,
}

export const Link: Story = {
    args: {
        href: 'http://github.com/',
        // @ts-ignore
        target: '_blank',
        accent: true,
        label: 'Github',
    },
    argTypes,
}

export const Flat: Story = {
    args: {
        icon: 'inbox',
        label: 'Inbox',
        flat: true,
    },
    argTypes,
}

export const Disabled: Story = {
    args: {
        icon: 'add',
        label: 'Add this',
        disabled: true,
        accent: true,
    },
    argTypes,
}

export const Gray: Story = {
    args: {
        label: 'Cancel',
        gray: true,
    },
    argTypes,
}

export const Warning: Story = {
    args: {
        label: 'Delete',
        warning: true,
    },
    argTypes,
}
