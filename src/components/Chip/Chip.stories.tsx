import { Meta, StoryObj } from '@storybook/react'
import { Chip } from './index'

const meta: Meta<typeof Chip> = {
    title: 'UI Kit lite/Chip',
    component: Chip,
}
export default meta

type Story = StoryObj<typeof Chip>

const argTypes = {}

export const Regular: Story = {
    args: {
        children: 'Chip',
    },
    argTypes,
}

export const Deletable: Story = {
    args: {
        deletable: true,
        children: 'Deletable Chip',
    },
    argTypes,
}
