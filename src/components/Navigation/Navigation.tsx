import classNames from 'classnames'
import React from 'react'
import { isEqual } from 'lodash'

import type { NavigationProps, NavigationTheme } from './BaseNavigation'
import { BaseNavigation } from './BaseNavigation'
import { mergeStyles } from '../../utils/mergeStyle'

import navigationTheme from './Navigation.module.css'

interface Props extends Omit<NavigationProps, 'theme'> {
    theme?: Partial<NavigationTheme>;
}

interface State {
    theme: NavigationTheme;
}

export class Navigation extends React.PureComponent<React.PropsWithChildren<Props>, State> {
    state = {
        theme: {} as NavigationTheme,
    }

    static getDerivedStateFromProps(props: React.PropsWithChildren<Props>, state: State) {
        const updatedTheme = props.theme
          ? mergeStyles(props.theme, navigationTheme)
          : navigationTheme
        const theme = isEqual(state.theme, updatedTheme)
          ? state.theme
          : updatedTheme

        return {
            theme,
        }
    }

    render(): React.JSX.Element {
        const { theme } = this.state

        const className = classNames(
            this.props.className,
            {
                [navigationTheme.NavigationContainer]: true,
                [navigationTheme.NavigationContainer_Vertical]: this.props?.type === 'vertical',
                [navigationTheme.NavigationContainer_Wrap]: this.props.wrap,
            },
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
