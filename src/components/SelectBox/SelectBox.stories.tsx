import { Meta, StoryObj } from '@storybook/react'
import { SelectBox } from './index'

const meta: Meta<typeof SelectBox> = {
    title: 'UI Kit lite/SelectBox',
    component: SelectBox,
}
export default meta

type Story = StoryObj<typeof SelectBox>

const argTypes = {}

export const SelectBoxWithLabel: Story = {
    args: {
        name: "name",
        source: [{ value: 'value1', label: 'label1' }, { value: 'value2', label: 'label2' }],
        value: 'value1',
        label: 'description'
    },
    argTypes,
    decorators: [
        (Story) => (
          <div style={{ width: '200px' }}>
              <Story />
          </div>
        ),
    ],
}

export const SelectBoxWithError: Story = {
    args: {
        label: '',
        name: "name",
        source: [{ value: 'value1', label: 'label1' }, { value: 'value2', label: 'label2' }],
        value: 'value1',
        error: 'error description'
    },
    argTypes,
    decorators: [
        (Story) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
}
