import { Meta, StoryObj } from '@storybook/react'
import { HeaderUserMenu } from './index'

const meta: Meta<typeof HeaderUserMenu> = {
    title: 'UI Kit lite/HeaderUserMenu',
    component: HeaderUserMenu,
}
export default meta

type Story = StoryObj<typeof HeaderUserMenu>

const argTypes = {}

export const UserMenu: Story = {
    args: {
        userName: 'User Name',
    },
    argTypes,
}
