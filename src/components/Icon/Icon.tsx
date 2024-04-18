import React from 'react'

import { FontIcon } from '../FontIcon'

import IconStyle from './Icon.module.css'

interface Props {
    value: React.FC | string;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    theme?: Record<string, string>;
    style?: React.CSSProperties;
}

export const Icon = (props: Props): React.JSX.Element => {
    const { value, ...otherProps } = props

    if (typeof value === 'string') {
        return (
            <FontIcon
                {...otherProps}
                value={value}
            />
        )
    }

    const IconComponent = value

    return (
        <div
            {...otherProps}
            className={otherProps.className ?? IconStyle.Container}
        >
            <IconComponent />
        </div>
    )
}
