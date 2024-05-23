import { Meta, StoryObj } from '@storybook/react'

import { Divider } from './index'

interface ArgumentTypes {
    [key: string]: {
        control?: string;
        description?: string;
    }
}

const argTypes: ArgumentTypes = {
    vertical: {
        control: 'boolean',
        description: 'If `true`, divider will be vertical.'
    }
}


const meta: Meta<typeof Divider> = {
    title: 'UI Kit lite/Divider',
    component: Divider,
    argTypes
}
export default meta

type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
    args: {
        vertical: false,
    },
}

export const Vertical: Story = {
    args: {
        vertical: true,
    },
}
