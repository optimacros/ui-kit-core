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
    title: "UI Kit core/Menu",
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

// todo - mode inline, because another return error "any"
export const Basic: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        mode: 'inline',
        children: [
            <MenuItem>1</MenuItem>,
            <MenuItem>2</MenuItem>,
            <MenuItem>3</MenuItem>,
        ],
    },
}

export const DisabledMenuItem: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        mode: 'inline',
        children: [
            <MenuItem disabled={true}>1</MenuItem>,
            <MenuItem>2</MenuItem>,
            <MenuItem>3</MenuItem>,
        ]
    },
}

// todo - uncomment, when update rc-menu, mode 'vertical' -> error rc-menu
// export const MenuWithSubMenu: Story = {
//     decorators: [
//         (Story) => <Wrapper>{Story()}</Wrapper>,
//     ],
//     args: {
//         mode: "vertical",
//         expandIcon: <FontIcon style={{ position: "absolute", right: "20px" }} value="arrow_right_alt" />,
//         children: [
//             <MenuItem key="1">1</MenuItem>,
//             <SubMenu key="sub2" title="2">
//                 <MenuItem key="2-1">2-1</MenuItem>
//                 <SubMenu key="sub3" title="3">
//                     <MenuItem key="3-1">3-1</MenuItem>
//                     <SubMenu key="sub4" title="4">
//                         <MenuItem key="4-1">4-1</MenuItem>
//                         <MenuItem key="4-2">4-2</MenuItem>
//                         <MenuItem key="4-3">4-3</MenuItem>
//                         <MenuItem key="4-4">4-4</MenuItem>
//                     </SubMenu>
//                 </SubMenu>
//             </SubMenu>
//         ]
//     },
// }

export const MenuWithSubGroup: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        mode: "inline",
        expandIcon: <FontIcon style={{ position: "absolute", right: "20px" }} value="arrow_drop_down" />,
        children: [
            <MenuItemGroup title="Menu Group 1">
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <SubMenu title="3">
                    <MenuItem>3-1</MenuItem>
                    <MenuItem>3-2</MenuItem>
                </SubMenu>
            </MenuItemGroup>,
            <MenuItemGroup title="Menu Group 2">
                <MenuItem>3</MenuItem>
                <MenuItem>4</MenuItem>
            </MenuItemGroup>
        ]
    },
}

export const Inline: Story = {
    decorators: [
        (Story) => <Wrapper>{Story()}</Wrapper>,
    ],
    args: {
        mode: "inline",
        expandIcon: <FontIcon style={{ position: "absolute", right: "20px" }} value="arrow_drop_down" />,
        children: [
            <MenuItem>1</MenuItem>,
            <SubMenu title="2">
                <MenuItem>2-1</MenuItem>
                <MenuItem>2-2</MenuItem>
                <MenuItem>2-3</MenuItem>
            </SubMenu>
        ]
    },
}
