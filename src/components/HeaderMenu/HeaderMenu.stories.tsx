import { Meta, StoryObj } from '@storybook/react'
import { HeaderMenu } from './index'

const meta: Meta<typeof HeaderMenu> = {
    title: 'UI Kit lite/HeaderMenu',
    component: HeaderMenu,
}
export default meta

type Story = StoryObj<typeof HeaderMenu>

const argTypes = {}

export const Menu: Story = {
    args: {
        elements: [
            {
                id: '1',
                icon: 'list',
                title: 'Applications',
                disabled: false,
            },
            {
                id: '2',
                icon: 'dynamic_feed',
                title: 'Tasks manager',
                disabled: false,
            },
        ],
    },
    argTypes,
}
