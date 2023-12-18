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
}

export const Navigation = ({
    children,
    theme,
    className,
    type,
}: React.PropsWithChildren<NavigationProps>): React.ReactElement => {
    const updatedTheme = mergeStyles(theme, themeStyles)
    const classes = classnames(updatedTheme[type ?? 'horizontal'], className)

    return (
        <nav
            data-react-toolbox="navigation"
            className={classes}
        >
            {children}
        </nav>
    )
}

