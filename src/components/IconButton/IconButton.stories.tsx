import { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './index'

const meta: Meta<typeof IconButton> = {
    title: 'UI Kit lite/IconButton',
    component: IconButton,
}
export default meta

type Story = StoryObj<typeof IconButton>

const argTypes = {}

export const Accent: Story = {
    args: {
        icon: 'favorite',
    },
    argTypes,
    decorators: [
        (Story) => (
          <div style={{ marginLeft: '20px' }}>
              <Story />
          </div>
        ),
    ],
}

export const WithTooltip: Story = {
    args: {
        icon: 'favorite',
        tooltip: 'Like',
    },
    argTypes,
    decorators: [
        (Story) => (
          <div style={{ marginLeft: '20px' }}>
              <Story />
          </div>
        ),
    ],
}
