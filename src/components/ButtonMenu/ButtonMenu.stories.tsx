import { Meta, StoryObj } from '@storybook/react'

import { ButtonMenu } from './index'
import { MenuItem } from '../Menu'

const meta: Meta<typeof ButtonMenu> = {
    title: 'UI Kit lite/ButtonMenu',
    component: ButtonMenu,
}
export default meta

type Story = StoryObj<typeof ButtonMenu>

const argTypes = {}

export const Active: Story = {
    args: {
        label: 'Menu',
        icon: 'print',
        children:
    <>
        <MenuItem>
            <span>option</span>
        </MenuItem>
        <MenuItem>
            <span>option</span>
        </MenuItem>
    </>,
    },
    argTypes,
}

export const Uppercase: Story = {
    args: {
        label: 'Button Menu',
        uppercase: true,
        children:
            <>
                <MenuItem>
                    <span>option</span>
                </MenuItem>
                <MenuItem>
                    <span>option</span>
                </MenuItem>
            </>,
    },
    argTypes,
}

export const Visible: Story = {
    args: {
        label: 'Button Menu',
        visible: true,
        children:
            <>
                <MenuItem>
                    <span>option</span>
                </MenuItem>
                <MenuItem>
                    <span>option</span>
                </MenuItem>
            </>,
    },
    argTypes,
}

export const WithTooltip: Story = {
    args: {
        label: 'Button Menu',
        tooltip: 'Tooltip text',
        tooltipDelay: 50,
        tooltipPosition: 'bottom',
        children:
            <>
                <MenuItem>
                    <span>option</span>
                </MenuItem>
                <MenuItem>
                    <span>option</span>
                </MenuItem>
            </>,
    },
    argTypes,
}

export const Disabled: Story = {
    args: {
        label: 'Button Menu',
        disabled: true,
        children:
    <>
        <MenuItem>
            <span>option</span>
        </MenuItem>
        <MenuItem>
            <span>option</span>
        </MenuItem>
    </>,
    },
    argTypes,
}
