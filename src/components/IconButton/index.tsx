import classNames from 'classnames'
import React from 'react'

import { IconButtonComponent } from './IconButton'
import { mergeStyles } from '../../utils/mergeStyle'
import type { ButtonInitialProps, ThemeButtonProps } from '../Button'
import themedRippleFactory from '../Ripple'
import { Tooltip, TooltipProps } from '../Tooltip/Tooltip'

// order of styles import is important
import themeStyle from './theme.module.css'
// eslint-disable-next-line
import style from './IconButton.module.css'

export type IconButtonTheme = ThemeButtonProps & { IconButton: string }

export interface IconButtonProps extends Partial<ButtonInitialProps> {
    theme: Partial<IconButtonTheme>;
}

type TooltipPickedProps = Pick<TooltipProps,
  | 'tooltip'
  | 'tooltipDelay'
  | 'tooltipHideOnClick'
  | 'tooltipPosition'
  | 'tooltipShowOnClick'
  | 'tooltipOffset'
>

// eslint-disable-next-line react-refresh/only-export-components
const RippledIconButton = themedRippleFactory({ centered: true })(IconButtonComponent)

export class IconButton extends React.Component<Partial<IconButtonProps & TooltipPickedProps>> {
    render(): React.JSX.Element {
        const {
            children,
            label,
            theme: customTheme,
            tooltip,
            tooltipDelay,
            tooltipHideOnClick,
            tooltipPosition,
            tooltipShowOnClick,
            tooltipOffset,
            ...otherProps
        } = this.props

        let theme = mergeStyles(style, customTheme) as IconButtonTheme
        theme = mergeStyles(theme, themeStyle) as IconButtonTheme

        const className = classNames(theme.IconButton, this.props.className)

        const composedComponentProps = {
            ...otherProps,
            theme,
            className: className,
            'data-label': label,
        }

        return (
            <Tooltip
                composedComponent={RippledIconButton}
                composedComponentProps={composedComponentProps}
                tooltip={this.props.label ?? this.props.tooltip}
                tooltipDelay={tooltipDelay}
                tooltipHideOnClick={tooltipHideOnClick}
                tooltipPosition={tooltipPosition}
                tooltipShowOnClick={tooltipShowOnClick}
                tooltipOffset={tooltipOffset}
                theme={theme}
            />
        )
    }
}
