import classnames from 'classnames'
import React from 'react'

export type FontIconProps = {
    className?: string;
    value: string | React.ReactElement;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    theme?: Record<string, string>;
}

export const FontIcon = (props: React.PropsWithChildren<FontIconProps>): React.ReactElement => {
    const {
        alt = '',
        children,
        className = '',
        theme,
        value,
        ...other
    } = props

    return (
        <span
            {...other}
            data-react-toolbox="font-icon"
            aria-label={alt}
            className={classnames(
                {
                    'material-icons': typeof value === 'string' || typeof children === 'string',
                },
                className
            )}
        >
            {value}
            {children}
        </span>
    )
}
