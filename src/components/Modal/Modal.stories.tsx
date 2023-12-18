import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './index'

const meta: Meta<typeof Modal> = {
    title: 'UI Kit lite/Modal',
    component: Modal,
}
export default meta

type Story = StoryObj<typeof Modal>

const argTypes = {}

export const ModalDraggable: Story = {
    args: {
        title: 'Modal name',
        isOpen: true,
        children: (
            <div style={{ color: 'black' }}>Modal content</div>
        ),
    },
    argTypes,
}

export const ModalCompact: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
    args: {
        title: 'Modal name',
        isOpen: true,
        nonDraggable: true,
        compact: true,
        children: (
            <div style={{ color: 'black' }}>Modal content</div>
        ),
    },
    argTypes,
}
