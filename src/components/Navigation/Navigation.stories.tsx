import { ArgTypes, Meta, StoryObj } from "@storybook/react"

import { Navigation, NavigationProps } from "./index"
import { Button } from "../Button"

const argTypes: Partial<ArgTypes> = {
    wrap: {
        control: "boolean",
        description: "If `true`, navigation items can wrap onto multiple lines. "
    },
    type: {
        control: "radio",
        options: [ "horizontal", "vertical" ],
        table: {
            defaultValue: { summary: "horizontal" },
        },
        description: "Type of the navigation.",
    },
    theme: { table: { disable: true } },
    className: { table: { disable: true } },
    children: { table: { disable: true } },
}

const meta: Meta<typeof Navigation> = {
    title: "UI Kit core/Navigation",
    component: Navigation as unknown as React.ComponentType<NavigationProps>,
    argTypes
}
export default meta

type Story = StoryObj<NavigationProps>

const Wrapper = ({ children }: { children: JSX.Element }) => (
    <div style={{ width: "300px" }}>
        {children}
    </div>
);


export const Horizontal: Story = {
    args: {
        type: "horizontal",
        children: (
            <>
                <Button label="Portfolio" />
                <Button label="About" />
            </>
        ),
    },
}

export const Vertical: Story = {
    args: {
        type: "vertical",
        children: (
            <>
                <Button label="Portfolio" />
                <Button label="About" />
            </>
        ),
    },
}

export const Wrap: Story = {
    args: {
        type: "horizontal",
        wrap: true,
        children: (
            <>
                <Button label="Portfolio" />
                <Button label="About" />
                <Button label="Menu" />
                <Button label="Location" />
                <Button label="Contact" />
            </>
        ),
    },
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
}
