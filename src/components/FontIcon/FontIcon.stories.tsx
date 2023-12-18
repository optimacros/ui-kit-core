import { Meta, StoryObj } from '@storybook/react'
import { FontIcon } from './index'

const meta: Meta<typeof FontIcon> = {
    title: 'UI Kit lite/FontIcon',
    component: FontIcon,
}
export default meta

type Story = StoryObj<typeof FontIcon>

const argTypes = {}

export const WithoutTooltip: Story = {
    args: {
        value: "close",
    },
    argTypes,
}

export const WithTooltip: Story = {
    args: {
        value: "home",
        title: 'description'
    },
    argTypes,
}
