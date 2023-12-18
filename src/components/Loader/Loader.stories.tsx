import { Meta, StoryObj } from '@storybook/react'
import { Loader } from './index'

const meta: Meta<typeof Loader> = {
    title: 'UI Kit lite/Loader',
    component: Loader,
}
export default meta

type Story = StoryObj<typeof Loader>

const argTypes = {}

export const Circular: Story = {
    args: {
        type: "circular",
        mode: "indeterminate",
    },
    argTypes,
}

export const Linear: Story = {
    args: {
        type: "linear",
        mode: "determinate",
        value: 83,
        buffer: 90,
    },
    argTypes,
}
