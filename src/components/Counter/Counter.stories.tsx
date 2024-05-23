import { Meta, StoryObj } from '@storybook/react'

import {Counter, NavigationComponentProps} from './index'
import React from "react";

interface ArgumentTypes {
    [key: string]: {
        control?: string;
        description?: string;
        table?: {
            disable?: boolean;
        }
    }
}

const argTypes: ArgumentTypes = {
    value: {
        control: "number",
        description: 'Count to show.',
    },
    maxValue: {
        control: "number",
        description: 'Max count to show.',
    },
    navigationComponent: {
        control: "text",
        description: 'Navigation component, displayed only if there is a `route` prop exists.',
    },
    route: {
        control: "object",
        description: 'Object contains custom properties for the `navigationComponent`. Passed as a `prop` to the `navigationComponent`.',
    },
    className: {
        table: { disable: true }
    },    
}


const meta: Meta<typeof Counter> = {
    title: 'UI Kit lite/Counter',
    component: Counter,
    argTypes
}
export default meta

type Story = StoryObj<typeof Counter>

const MyWrapper = ({ children }: { children: JSX.Element }) => (
    <div style={{ background: '#c3c3c3' }}>
        {children}
    </div>
);

const Link = (props: NavigationComponentProps): React.JSX.Element => {
    const { route, className, children } = props

    return (
        <a href={route.href} className={className} >
            {children}
        </a>
    )
}

export const Basic: Story = {
    args: {
        value: 65,
    },
    decorators: [
        (Story) => <MyWrapper>{Story()}</MyWrapper>,
    ],
}

export const MaxValue: Story = {
    args: {
        value: 5,
        maxValue: 3,
    },
    decorators: [
        (Story) => <MyWrapper>{Story()}</MyWrapper>,
    ]
}

export const NavigationLink: Story = {
    args: {
        value: 12,
        navigationComponent: Link,
        route: { href: 'https://google.com' }
    },
    decorators: [
        (Story) => <MyWrapper>{Story()}</MyWrapper>,
    ]
}