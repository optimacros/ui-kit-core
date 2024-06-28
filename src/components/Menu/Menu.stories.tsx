import { ArgTypes, Meta, StoryObj } from "@storybook/react"

import { Menu, MenuItem, SubMenu, MenuItemGroup } from "./index"
import { FontIcon } from "../FontIcon";

const argTypes: Partial<ArgTypes> = {
    mode: {
        control: "text",
        table: {
            defaultValue: { summary: "vertical" },
        },
        description: "Mode of menu.",
    },
    children: { control: "object", table: { disable: true } },
    className: { table: { disable: true } },
    expandIcon: { table: { disable: true } },
}

const meta: Meta<typeof Menu> = {
    title: "UI Kit lite/Menu",
    component: Menu,
    argTypes,
    parameters: {
        docs: {
            description: {
                component: "Ui-kit using rc-menu library for Menu, SubMenu, MenuItemGroup, MenuItem and MenuDivider. Other props can be viewed at the [link](https://react-component.github.io/menu/)."
            },
        },
    },
}
export default meta

type Story = StoryObj<typeof Menu>

const Wrapper = ({ children }: { children: JSX.Element }) => (
    <div style={{  width: "200px", marginLeft: "20px"  }}>
        {children}
    </div>
);


export const Basic: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        children: (
            <>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
            </>
        ),
    },
}

export const DisabledMenuItem: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        children: (
            <>
                <MenuItem disabled={true}>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
            </>
        ),
    },
}

export const MenuWithSubMenu: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        mode: "vertical",
        expandIcon: <FontIcon style={{ position: "absolute", right: "20px" }} value="arrow_right_alt" />,
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
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
            </>
        ),
    },
}

export const MenuWithSubGroup: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        mode: "vertical",
        expandIcon: <FontIcon style={{ position: "absolute", right: "20px" }} value="arrow_right_alt" />,
        children: (
            <>
                <MenuItemGroup title="Menu Group 1">
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <SubMenu title="3">
                        <MenuItem>3-1</MenuItem>
                        <MenuItem>3-2</MenuItem>
                    </SubMenu>
                    <SubMenu title="4">
                        <MenuItem>4-1</MenuItem>
                        <MenuItem>4-2</MenuItem>
                    </SubMenu>
                </MenuItemGroup>
                <MenuItemGroup title="Menu Group 2">
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                </MenuItemGroup>
            </>
        ),
    },
}

export const Inline: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        mode: "inline",
        expandIcon: <FontIcon style={{ position: "absolute", right: "20px" }} value="arrow_drop_down" />,
        children: (
            <>
                <MenuItem>1</MenuItem>
                <SubMenu title="2">
                    <MenuItem>2-1</MenuItem>
                    <MenuItem>2-2</MenuItem>
                    <MenuItem>2-3</MenuItem>
                </SubMenu>
            </>
        ),
    },
}
