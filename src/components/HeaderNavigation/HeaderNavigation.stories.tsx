import { Meta, StoryObj } from '@storybook/react'

import { HeaderNavigation } from './index'

const meta: Meta<typeof HeaderNavigation> = {
    title: 'UI Kit lite/HeaderNavigation',
    component: HeaderNavigation,
}
export default meta

type Story = StoryObj<typeof HeaderNavigation>

const argTypes = {}

export const Navigation: Story = {
    args: {
        title: 'Menu',
    },
    argTypes,
}
