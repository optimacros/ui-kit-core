import { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'

const meta: Meta<typeof Input> = {
    title: 'UI Kit lite/Input',
    component: Input,
}
export default meta

type Story = StoryObj<typeof Input>

const argTypes = {}

export const Required: Story = {
    args: {
        name: 'name',
        value: 'name',
        label: 'Application name',
        required: true,
    },
    argTypes,
    decorators: [
        (Story) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
}

export const WithError: Story = {
    args: {
        name: 'name',
        value: 'name',
        error: 'error description',
        label: 'Application name',
        required: true,
    },
    argTypes,
    decorators: [
        (Story) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
}
