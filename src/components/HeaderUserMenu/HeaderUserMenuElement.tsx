import React from 'react'

import { Icon } from '../Icon'

import styles from './HeaderUserMenu.module.css'

type Props = {
    label: string;
    onClick: () => void;
    href?: string;
    className?: string;
    icon?: string;
}

export const HeaderUserMenuElement = (props: React.PropsWithChildren<Props>): React.JSX.Element => {
    const ContainerNode = props.href
        ? 'a'
        : 'span'

    const {
        className,
        onClick,
        label,
        icon,
        children,
        ...otherProps
    } = props

    return (
        <li
            role="none"
            className={props.className}
            onClick={props.onClick}
            title={props.label}
        >
            <ContainerNode {...otherProps}>
                {props.icon && (
                    <Icon
                        className={styles.Icon}
                        value={props.icon}
                    />
                )}

                <div className={styles.Label}>
                    {props.label}
                    {props.children}
                </div>
            </ContainerNode>
        </li>
    )
}
