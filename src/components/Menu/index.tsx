import type { MenuItemProps, MenuProps, SubMenuProps } from 'rc-menu'
import BaseMenu, { Item, SubMenu as BaseSubMenu } from 'rc-menu'
import React from 'react'

import 'rc-menu/assets/index.css'
export { MenuItemGroup } from 'rc-menu'
export { Divider } from 'rc-menu'

export const Menu = (props: MenuProps): React.JSX.Element => {
    return (
        <BaseMenu
            selectable={false}
            {...props}
        />
    )
}

export const SubMenu = (props: SubMenuProps): React.JSX.Element => {
    return (
        <BaseSubMenu
            {...props}
            title={props.title}
        />
    )
}

export const MenuItem = (props: MenuItemProps & { label?: string }): React.JSX.Element => {
    return (
        <Item {...props}>
            {props.label || props.title || props.children}
        </Item>
    )
}
