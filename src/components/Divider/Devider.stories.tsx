import { Meta, StoryObj } from '@storybook/react'
import { Divider } from './index'

const meta: Meta<typeof Divider> = {
    title: 'UI Kit lite/Divider',
    component: Divider,
}
export default meta

type Story = StoryObj<typeof Divider>

const argTypes = {}

export const Horizontal: Story = {
    args: {
        vertical: false,
    },
    argTypes,
}

export const Vertical: Story = {
    args: {
        vertical: true,
    },
    argTypes,
}
