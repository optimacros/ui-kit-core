import { Meta, StoryObj } from '@storybook/react'
import { Menu, MenuItem, SubMenu } from './index'

const meta: Meta<typeof Menu> = {
    title: 'UI Kit lite/Menu',
    component: Menu,
}
export default meta

type Story = StoryObj<typeof Menu>

const argTypes = {}

export const MenuAndSubMenu: Story = {
    decorators: [
        (Story) => (
          <div style={{ width: '200px' }}>
              <Story />
          </div>
        ),
    ],
    args: {
        children: (
            <>
                <MenuItem>1</MenuItem>
                <SubMenu title="2">
                    <MenuItem>2-1</MenuItem>
                    <SubMenu title="3">
                        <MenuItem>3-1</MenuItem>
                        <SubMenu title="4">
                            <MenuItem>4-1</MenuItem>
                            <MenuItem>4-2</MenuItem>
                            <MenuItem>4-3</MenuItem>
                            <MenuItem>4-4</MenuItem>
                            <SubMenu title="5">
                                <MenuItem>5-1</MenuItem>
                                <MenuItem>5-2</MenuItem>
                                <SubMenu title="6">
                                    <MenuItem>6-1</MenuItem>
                                    <MenuItem>6-2</MenuItem>
                                    <SubMenu title="7">
                                        <MenuItem>7-1</MenuItem>
                                        <MenuItem>7-2</MenuItem>
                                        <MenuItem>7-3</MenuItem>
                                        <MenuItem>7-4</MenuItem>
                                    </SubMenu>
                                    <MenuItem>6-3</MenuItem>
                                    <MenuItem>6-4</MenuItem>
                                </SubMenu>
                                <MenuItem>5-3</MenuItem>
                                <MenuItem>5-4</MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
            </>
        ),
    },
    argTypes,
}
