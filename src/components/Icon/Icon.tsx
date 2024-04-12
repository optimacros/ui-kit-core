import React from 'react'

import * as icons from './iconsList'
import { FontIcon } from '../FontIcon'

import IconStyle from './Icon.module.css'

interface Props {
    className?: string;
    value: IconComponent | string;
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

export class Icon extends React.Component<Props> {
    icons: Record<string, (({ fill, opacity }: { fill?: string; opacity?: number}) => React.JSX.Element)> = icons

    render() {
        const { value, ...otherProps } = this.props

        if (typeof value !== 'string') {
            const IconComponent = this.icons[value.name]

            if (!IconComponent) {
                return this.renderIcon(value.name, otherProps)
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

        return this.renderIcon(value, otherProps)
    }

    renderIcon(value: string, otherProps: Omit<Props, 'value'>): React.JSX.Element {
        return (
            <FontIcon
                {...otherProps}
                value={value}
            />
        )
    }
}
