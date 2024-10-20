import React, { ReactNode, SVGProps } from 'react'

import { useUiCore } from '../../store'

import IconStyle from './Icon.module.css'

export interface IconProps {
    value: ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    style?: React.CSSProperties;
}

export function Icon({
    value,
    ...rest
}: SVGProps<SVGSVGElement> & IconProps) {
    const { iconsSrc } = useUiCore()

    if (typeof value === 'string') {
        return (
            <svg
                {...rest}
                data-recipe="Icon"
            >
                <use href={`${iconsSrc}#${value}`} />
            </svg>
        )
    }

    return (
        // @ts-ignore
        <div
            {...rest}
            className={rest.className ?? IconStyle.Container}
        >
            {value}
        </div>
    )
}
