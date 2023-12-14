import type { MenuItemProps, MenuProps, SubMenuProps } from 'rc-menu'
import BaseMenu, { Item, SubMenu as BaseSubMenu } from 'rc-menu'
import React from 'react'
export { MenuItemGroup } from 'rc-menu'
export { Divider } from 'rc-menu'

import 'rc-menu/assets/index.css'

export const Menu = (props: MenuProps): React.ReactElement => {
    return (
        <BaseMenu selectable={false}
            {...props}
        />
    )
}

export const SubMenu = (props: SubMenuProps): React.ReactElement => {
    return (
        <BaseSubMenu {...props}
            title={props.title}
        />
    )
}

export const MenuItem = (props: MenuItemProps): React.ReactElement => {
    return (
        <Item {...props}>
            {props.title || props.children}
        </Item>
    )
}
