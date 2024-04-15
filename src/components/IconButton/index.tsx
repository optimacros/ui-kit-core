import classNames from 'classnames'
import { isString } from 'lodash'
import React from 'react'

import { IconButtonComponent } from './IconButton'
import { mergeStyles } from '../../utils/mergeStyle'
import type { ButtonInitialProps, ThemeButtonProps } from '../Button'
import themedRippleFactory from '../Ripple'
import { Tooltip } from '../Tooltip/Tooltip'

// order of styles import is important
import themeStyle from './theme.module.css'
// eslint-disable-next-line
import style from './IconButton.module.css'

export type IconButtonTheme = ThemeButtonProps & { IconButton: string }

export interface IconButtonProps extends Partial<ButtonInitialProps> {
    theme: Partial<IconButtonTheme>;
}

// eslint-disable-next-line react-refresh/only-export-components
const RippledIconButton = themedRippleFactory({ centered: true })(IconButtonComponent)

export class IconButton extends React.Component<Partial<IconButtonProps>> {
    render(): React.JSX.Element {
        const {
            icon,
            children,
            label,
            theme: customTheme,
            ...otherProps
        } = this.props

        let theme = mergeStyles(style, customTheme) as IconButtonTheme
        theme = mergeStyles(theme, themeStyle) as IconButtonTheme

        const iconIsString = isString(icon)
        const className = classNames(theme.IconButton, this.props.className)

        const composedComponentProps = {
            ...otherProps,
            className: className,
            icon: iconIsString
                ? icon
                : null,
            'data-label': label,
        }

        return (
            <Tooltip
                tooltip={this.props.label ?? this.props.tooltip}
                theme={theme}
                composedComponent={RippledIconButton}
                composedComponentProps={composedComponentProps}
            />
        )
    }
}
