import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './index'
import { Tab } from './Tab.tsx'

const meta: Meta<typeof Tabs> = {
    title: 'UI Kit lite/Tabs',
    // @ts-ignore
    component: Tabs,
}
export default meta

type Story = StoryObj<typeof Tabs>

const argTypes = {}

export const RegularTab: Story = {
    args: {
        // @ts-ignore
        children: (
            <>
                <Tab
                    key={0}
                    title="Tab1"
                >
                    <div style={{ height: '40px', color: 'black', fontSize: '12px' }}>Tab content</div>
                </Tab>
            </>
        ),
    },
    argTypes,
}
