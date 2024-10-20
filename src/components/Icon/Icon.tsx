import React, { SVGProps } from 'react'

import { useUiCore } from '../../store'

export interface IconProps {
    name: string;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    style?: React.CSSProperties;
}

export function Icon({
    name,
    ...rest
}: SVGProps<SVGSVGElement> & IconProps) {
    const { iconsSrc } = useUiCore()

    return (
        <svg
            {...rest}
            data-recipe="Icon"
        >
            <use href={`${iconsSrc}#${name}`} />
        </svg>
    )
}
