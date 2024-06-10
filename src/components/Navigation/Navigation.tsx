import classNames from 'classnames'
import React from 'react'
import { isEqual } from 'lodash'

import { mergeStyles } from '../../utils/mergeStyle'

import navigationTheme from './Navigation.module.css'

export type NavigationTheme = {
    horizontal: string;
    vertical: string;
}

interface State {
    theme: NavigationTheme;
}

export interface Props {
    type?: 'vertical' | 'horizontal';
    className?: string;
    wrap?: boolean;
    theme?: Partial<NavigationTheme>;
}

export type NavigationProps = React.PropsWithChildren<Props>

export class Navigation extends React.PureComponent<NavigationProps, State> {
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
            {
                [navigationTheme.NavigationContainer]: true,
                [navigationTheme.NavigationContainer_Vertical]: this.props?.type === 'vertical',
                [navigationTheme.NavigationContainer_Wrap]: this.props.wrap,
            },
            this.props.className,
            theme[this.props.type ?? 'horizontal'],
        )
        
        return (
            <nav
                data-react-toolbox="navigation"
                className={className}
            >
                { React.Children.map(this.props.children, (child) => (
                    React.isValidElement(child)
                        ? React.cloneElement<any>(child, { theme })
                        : null
                )) }
            </nav>
        )
    }
}
