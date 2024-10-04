import BaseMenu, { Item, Divider as MenuDivider } from 'rc-menu'
import type {
    MenuProps,
    SubMenuProps,
    MenuItemProps,
    MenuItemGroupProps,
    DividerProps as MenuDividerProps,
} from 'rc-menu'
import React from 'react'

import '../../packages/rc-menu/main.css'

export { MenuItemGroup } from 'rc-menu'
export { MenuDivider }
export { SubMenu } from 'rc-menu'

export type { MenuProps, SubMenuProps, MenuItemProps, MenuItemGroupProps, MenuDividerProps }

export const Menu = (props: MenuProps): React.JSX.Element => {
    return (
        <BaseMenu
            selectable={false}
            {...props}
        />
    )
}

export const MenuItem = (props: MenuItemProps): React.JSX.Element => {
    return (
        <Item {...props}>
            {props.title || props.children}
        </Item>
    )
}
