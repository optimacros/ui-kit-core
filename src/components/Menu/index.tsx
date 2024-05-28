// @ts-ignore
import BaseMenu, { Item, SubMenu as BaseSubMenu } from 'rc-menu'
import React from 'react'
// import type { MenuProps } from 'rc-menu/lib/Menu'
// import type{ SubMenuProps } from 'rc-menu/lib/SubMenu'
// import type{ MenuItemProps } from 'rc-menu/lib/MenuItem'

import '../../packages/rc-menu/main.css'

// @ts-ignore
export { MenuItemGroup } from 'rc-menu'
// @ts-ignore
export { Divider } from 'rc-menu'

type MenuProps = {

}

type SubMenuProps = {

}

type MenuItemProps = {

}

export type { MenuProps, SubMenuProps, MenuItemProps }

export const Menu = (props: any): React.JSX.Element => {
    return (
        <BaseMenu
            selectable={false}
            {...props}
        />
    )
}

export const SubMenu = (props: any): React.JSX.Element => {
    return (
        <BaseSubMenu
            {...props}
            title={props.title}
        />
    )
}

export const MenuItem = (props: any): React.JSX.Element => {
    return (
        <Item {...props}>
            {props.title || props.children}
        </Item>
    )
}
