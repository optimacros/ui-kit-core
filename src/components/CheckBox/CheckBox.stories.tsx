import { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from './index'

const meta: Meta<typeof CheckBox> = {
    title: 'UI Kit lite/CheckBox',
    component: CheckBox,
}
export default meta

type Story = StoryObj<typeof CheckBox>

const argTypes = {}

export const Active: Story = {
    args: {
        name: 'CheckBox',
        label: 'CheckBox',
        checked: true,
    },
    argTypes,
}

export const Disabled: Story = {
    args: {
        name: 'CheckBox',
        label: 'CheckBox',
        disabled: true,
    },
    argTypes,
}
