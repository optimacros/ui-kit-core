import type { CSSProperties, MouseEventHandler } from 'react'
import React from 'react'

import { CheckBoxComponent } from './CheckBox'
import { mergeStyles } from '../../utils/mergeStyle'
import { Tooltip, TooltipProps, TooltipTheme } from '../Tooltip'

import themeStyle from './theme.module.css'

export type Theme = {
    field?: string;
    text?: string;
    input?: string;
    check?: string;
    disabled?: string;
    checked?: string;
}

export type InitialProps = {
    checked?: boolean;
    name?: string;
    label?: React.ReactNode | string;
    tooltipLabel?: string;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    onClick?: () => void;
    onChange?: (checked: boolean, event: React.MouseEvent) => void;
    onMouseEnter?: MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLLabelElement> | undefined;
    theme?: Partial<Theme> & Partial<TooltipTheme>;
} & TooltipProps

export type CheckBoxProps = React.PropsWithChildren<InitialProps>

export class CheckBox extends React.Component<CheckBoxProps> {
    render(): React.JSX.Element {
        const {
            tooltipLabel,
            theme,
            tooltipDelay,
            tooltipPosition,
            tooltipOffset,
            onClick,
            onMouseEnter,
            onMouseLeave,
            className,
            ...otherProps
        } = this.props

        const customTheme = mergeStyles(themeStyle, this.props.theme) as Required<Theme>

        return tooltipLabel
            ? (
                <Tooltip
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={className}
                    theme={customTheme}
                    tooltip={tooltipLabel}
                    tooltipDelay={tooltipDelay}
                    tooltipPosition={tooltipPosition}
                    tooltipOffset={tooltipOffset}
                    composedComponent={CheckBoxComponent}
                    composedComponentProps={otherProps}
                />
            )
            : (
                <CheckBoxComponent
                    {...otherProps}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={className}
                    theme={customTheme}
                />
            )
    }
}
