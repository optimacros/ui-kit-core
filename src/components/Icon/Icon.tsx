import React, { ReactElement } from 'react'

import * as icons from './iconsList'
import { FontIcon } from '../FontIcon'

import IconStyle from './Icon.module.css'

interface Props {
    className?: string;
    value: IconComponent | string | ReactElement;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    children?: React.JSX.Element;
    theme?: Record<string, string>;
    style?: React.CSSProperties;
}

interface IconComponent {
    name: string;
    fill?: string;
    opacity?: number | string;
}

const iconList: Record<string, (({ fill, opacity }: { fill?: string; opacity?: number}) => React.JSX.Element)> = icons

export const Icon = (props: Props) => {
    const { value, ...otherProps } = props

    if (typeof value !== 'string' && 'name' in value) {
        const IconComponent = iconList[value.name]

        if (!IconComponent) {
            return (
                <FontIcon
                    {...otherProps}
                    value={value.name}
                />
            )
        }

        return (
            <div
                {...otherProps}
                className={otherProps.className ?? IconStyle.Container}
            >
                <IconComponent
                    fill={value.fill}
                    opacity={Number(value.opacity) || 1}
                />
            </div>
        )
    }

    return (
        <FontIcon
            {...otherProps}
            value={value}
        />
    )
}
