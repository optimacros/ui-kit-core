import { Meta, StoryObj } from '@storybook/react'
import { Counter } from './index'

const meta: Meta<typeof Counter> = {
    title: 'UI Kit lite/Counter',
    component: Counter,
}
export default meta

type Story = StoryObj<typeof Counter>

const argTypes = {}

export const Regular: Story = {
    args: {
        value: 65,
    },
    argTypes,
}

export const MaxValue: Story = {
    args: {
        value: 5,
        maxValue: 3,
    },
    argTypes,
}
