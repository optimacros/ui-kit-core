import classnames from 'classnames'
import React from 'react'

import { mergeStyles } from '../../utils/mergeStyle'

import themeStyles from './theme.module.css'

export type NavigationTheme = {
    button: string;
    horizontal: string;
    link: string;
    vertical: string;
}

export type NavigationProps = {
    type?: 'vertical' | 'horizontal';
    theme: NavigationTheme;
    className?: string;
    wrap?: boolean;
}

export const Navigation = ({
    children,
    theme,
    className,
    type,
}: React.PropsWithChildren<NavigationProps>): React.JSX.Element => {
    const updatedTheme = mergeStyles(theme, themeStyles)
    const classes = classnames(updatedTheme[type ?? 'horizontal'], className)

    return (
        <nav
            data-react-toolbox="navigation"
            className={classes}
        >
            {React.Children.map(children, (child) => (
                React.isValidElement(child)
                    ? React.cloneElement<any>(child, { theme: updatedTheme })
                    : null
            ))}
        </nav>
    )
}

