import classNames from 'classnames'
import React from 'react'

import { IconButtonContent } from './IconButtonContent'
import { mergeStyles } from '../../utils/mergeStyle'
import type { ButtonProps, ButtonTheme } from '../Button'
import { Tooltip, TooltipProps } from '../Tooltip'

import style from './IconButton.module.css'


export type IconButtonTheme = ButtonTheme & { IconButton: string }

export interface Props extends Partial<ButtonProps> {
    theme: Partial<IconButtonTheme>;
}

export type IconButtonProps = Partial<Props & TooltipProps>

export class IconButton extends React.Component<IconButtonProps> {
    render(): React.JSX.Element {
        const {
            children,
            label,
            theme: customTheme,
            tooltip,
            tooltipDelay,
            tooltipPosition,
            tooltipOffset,
            onClick,
            onMouseEnter,
            onMouseLeave,
            className,
            ...otherProps
        } = this.props

        const theme = mergeStyles(style, customTheme) as IconButtonTheme

        const updatedClassName = classNames(theme.IconButton, this.props.className)

        return (
            <Tooltip
                composedComponent={IconButtonContent}
                composedComponentProps={{
                    ...otherProps,
                    'data-label': label,
                }}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={updatedClassName}
                tooltip={this.props.label ?? this.props.tooltip}
                tooltipDelay={tooltipDelay}
                tooltipPosition={tooltipPosition}
                tooltipOffset={tooltipOffset}
                theme={theme}
            >
                {children}
            </Tooltip>
        )
    }
}
