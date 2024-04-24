import { default as React } from 'react';
import { MenuItemProps, MenuProps, SubMenuProps } from 'rc-menu';

export { MenuItemGroup } from 'rc-menu';
export { Divider } from 'rc-menu';
export declare const Menu: (props: MenuProps) => React.JSX.Element;
export declare const SubMenu: (props: SubMenuProps) => React.JSX.Element;
export declare const MenuItem: (props: MenuItemProps & {
    label?: string;
}) => React.JSX.Element;
