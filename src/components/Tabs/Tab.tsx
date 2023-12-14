import classNames from 'classnames'
import React from 'react'

import styles from './Tab.module.css'

export interface TabProps {
    counter?: number | undefined;
    maxCounter?: number | undefined;
    className?: string;
    title?: React.ReactElement | string;
    onHeaderContextMenu?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    nonDraggable?: boolean;
    isFixed?: boolean;
    counterLink?: Record<string, any>;
    onDoubleClick?: () => void;
    icon?: React.ReactElement | string;
    disabled?: boolean;
    label?: string;
}

export const Tab = (props: React.PropsWithChildren<TabProps>): React.ReactElement => {
    const newClassName = classNames(styles.Tab, props.className)

    return (
        <div className={newClassName}>
            {props.children}
        </div>
    )
}
