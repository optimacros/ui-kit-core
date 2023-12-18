import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './index'

const meta: Meta<typeof Icon> = {
    title: 'UI Kit lite/Icon',
    component: Icon,
}
export default meta

type Story = StoryObj<typeof Icon>

const argTypes = {}

export const WithoutTooltip: Story = {
    args: {
        value: "apps",
    },
    argTypes,
}

export const WithTooltip: Story = {
    args: {
        value: "apps",
        title: 'description'
    },
    argTypes,
}

