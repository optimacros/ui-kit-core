import { Meta, StoryObj } from '@storybook/react'

import { Icon } from './index'
import { ArgumentType } from "../../types/ArgumentType.ts";

const argTypes: ArgumentType = {
    value: {
        control: 'text',
        description: 'Value of the icon. Using `FontIcon` if value string. Or `div` if value node.'
    },
    title: {
        control: 'text',
        description: 'Icon description, visible on icon hover.'
    },
    alt: {
        control: 'text',
        description: 'The text used to set the `aria-label` attribute.'
    },
    style: {
        control: 'object',
        description: 'Add styles to component.'
    },
    className: {
        table: { disable: true }
    },
    onClick: {
        table: { disable: true }
    },

}


const meta: Meta<typeof Icon> = {
    title: 'UI Kit lite/Icon',
    component: Icon,
    argTypes
}
export default meta

type Story = StoryObj<typeof Icon>


export const Basic: Story = {
    args: {
        value: 'close',
        alt: 'close icon'
    },
}

export const WithTooltip: Story = {
    args: {
        value: 'search',
        title: 'description',
    },
}

export const CustomStyles: Story = {
    args: {
        value: 'add',
        title: 'description',
        style: { border: '1px solid black' }
    },
}

