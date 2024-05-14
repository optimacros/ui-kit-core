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
        control: { control: 'text' },
        description: 'Overwritten description',
    },
    fontSize: {
        control: { control: 'text' },
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
    argTypes
}

export const Bordered: Story = {
    args: {
        label: 'Apply',
        bordered: true,
    },
    argTypes
}

export const Primary: Story = {
    args: {
        label: 'Apply',
        primary: true,
    },
    argTypes
}


export const Flat: Story = {
    args: {
        icon: 'inbox',
        label: 'Inbox',
        flat: true,
    },
    argTypes
}

export const Floating: Story = {
    args: {
        icon: 'add',
        floating: true,
    },
    argTypes
}

export const Mini: Story = {
    args: {
        icon: 'add',
        floating: true,
        mini: true,
    },
    argTypes
}

export const Raised: Story = {
    args: {
        label: 'Next',
        raised: true,
    },
    argTypes
}

export const Disabled: Story = {
    args: {
        icon: 'add',
        label: 'Add this',
        disabled: true,
        accent: true,
    },
    argTypes
}

export const Gray: Story = {
    args: {
        label: 'Cancel',
        gray: true,
    },
    argTypes
}

export const Warning: Story = {
    args: {
        label: 'Delete',
        warning: true,
    },
    argTypes
}

export const Inverse: Story = {
    args: {
        label: 'Delete',
        inverse: true,
        buttonColor: 'black'
    },
    argTypes
}


export const Styled: Story = {
    args: {
        label: 'Remove',
        buttonColor: "purple",
        fontColor: "white",
        fontSize: 14,
    },
    argTypes
}

export const Link: Story = {
    args: {
        href: 'http://github.com/',
        target: '_blank',
        accent: true,
        label: 'Github',
    },
    argTypes
}