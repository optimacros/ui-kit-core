import classNames from 'classnames'
import React from 'react'

import styles from './HeaderUserMenu.module.css'

type Props = {
    label: string;
    onClick: () => void;
    className?: string;
}

export const HeaderUserSubMenu = (props: React.PropsWithChildren<Props>): React.JSX.Element => {
    const className = classNames(styles.userMenu_List, styles.userMenu_List_SubMenu, props.className)

    return (
        <li>
            <span
                role="none"
                title={props.label}
                onClick={props.onClick}
            >
                {props.label}
            </span>

            <ul className={className}>
                {props.children}
            </ul>
        </li>
    )
}
