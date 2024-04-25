import classNames from 'classnames'
import React from 'react'

import type { NavigationProps, NavigationTheme } from './BaseNavigation'
import { Navigation as BaseNavigation } from './BaseNavigation'
import { mergeStyles } from '../../utils/mergeStyle'

import navigationTheme from './theme.module.css'

interface Props extends Omit<NavigationProps, 'theme'> {
    theme?: Partial<NavigationTheme>;
}

export class Navigation extends React.Component<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element {
        const theme = mergeStyles(this.props.theme, navigationTheme) as NavigationTheme

        const className = classNames(
            {
                [navigationTheme.NavigationContainer]: true,
                [navigationTheme.NavigationContainer_Vertical]: this.props?.type === 'vertical',
                [navigationTheme.NavigationContainer_Wrap]: this.props.wrap,
            },
            this.props.className,
        )

        return (
            <BaseNavigation
                {...this.props}
                theme={theme}
                className={className}
            />
        )
    }
}
