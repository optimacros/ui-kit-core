import { Meta, StoryObj } from '@storybook/react'

import { HeaderUserMenu, HeaderUserMenuElement } from './index'

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
        children: (
            <>
                <HeaderUserMenuElement label="element 1" />
                <HeaderUserMenuElement label="element 2" />
            </>
        ),
    },
    argTypes,
}
