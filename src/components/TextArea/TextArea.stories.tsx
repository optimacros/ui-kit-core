import { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './index'

const meta: Meta<typeof TextArea> = {
    title: 'UI Kit lite/TextArea',
    component: TextArea,
}
export default meta

type Story = StoryObj<typeof TextArea>

const argTypes = {}

export const TextAreaWithLabel: Story = {
    args: {
        label: 'description',
    },
    argTypes,
    decorators: [
        (Story) => (
            <div style={{ width: '200px', color: 'black' }}>
                <Story />
            </div>
        ),
    ],
}

export const TextAreaWithError: Story = {
    args: {
        label: '',
        error: 'error description',
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
