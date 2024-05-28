import { Meta, StoryObj } from "@storybook/react"

import { ButtonMenu } from "./index"
import { MenuItem } from "../Menu"
import { ArgumentType } from "../../types/ArgumentType.ts";

const argTypes: ArgumentType = {
    disabled: {
        control: "boolean",
        description: "If `true`, component will be disabled."
    },
    visible: {
        control: "boolean",
        description: " If `true`, the Menu Dropdown will be visible by default."
    },
    uppercase: {
        control: "boolean",
        description: "If `true`, the text inside the ButtonMenu will be in uppercase."
    },
    showOnlyIcon: {
        control: "boolean",
        description: "If `true` and icon used - only icon will be visible in the ButtonMenu."
    },
    arrowUp: {
        control: "boolean",
        description: "If `true`, dropdown arrow icon will point up."
    },
    label: {
        control: "text",
        description: "The text string to use for the name of the button.",
    },
    icon: {
        control: "text",
        description: "Value of the icon (See Font Icon Component).",
    },
    tooltip: {
        control: "text",
        description: "The text string to use for the tooltip.",
    },
    tooltipDelay: {
        control: "number",
        description: "Amount of time in milliseconds spent before the tooltip is visible.",
    },
    tooltipHideOnClick: {
        control: "boolean",
        description: "If `true`, the Tooltip hides after a click on element.",
    },
    tooltipPosition: {
        control: "radio",
        options: [ "vertical", "horizontal", "bottom", "top", "left", "right" ],
        table: {
            defaultValue: { summary: "vertical" },
        },
        description: "Determines the position of the tooltip.",
    },
    tooltipShowOnClick: {
        control: "boolean",
        description: "If `true`, the tooltip toggled when clicked. This is useful for mobile where there is no mouse enter.",
    },
    tooltipOffset: {
        control: "number",
        description: " If `tooltipPosition` - `vertical`, `bottom` or `top`, the tooltip moves relative to its axis.",
    },
    className: {
        table: { disable: true }
    },
    theme: {
        table: { disable: true }
    },
    menuRootContainerClassName: {
        table: { disable: true }
    },
    classNameDropdownContainer: {
        table: { disable: true }
    },
    onVisibleChange: {
        table: { disable: true }
    },
    dataName: {
        table: { disable: true }
    },
    children: {
        table: { disable: true }
    },
}

const meta: Meta<typeof ButtonMenu> = {
    title: "UI Kit lite/ButtonMenu",
    component: ButtonMenu,
    argTypes,
}
export default meta

type Story = StoryObj<typeof ButtonMenu>

export const Basic: Story = {
    args: {
        label: "Menu",
        icon: "print",
        arrowUp: false,
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
}

export const Uppercase: Story = {
    args: {
        label: "Menu",
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
}

export const WithTooltip: Story = {
    args: {
        label: "Menu",
        tooltip: "Tooltip text",
        tooltipDelay: 50,
        tooltipPosition: "bottom",
        tooltipHideOnClick: true,
        tooltipShowOnClick: false,
        tooltipOffset: 0,
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
}

export const Disabled: Story = {
    args: {
        label: "Menu",
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
}

export const Visible: Story = {
    args: {
        label: "Menu",
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
}
