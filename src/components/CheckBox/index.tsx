import type { CSSProperties, MouseEventHandler } from 'react'
import React from 'react'

import { CheckBoxComponent } from './CheckBox'
import { mergeStyles } from '../../utils/mergeStyle'
import { Tooltip, Props, TooltipTheme } from '../Tooltip/Tooltip'

import themeStyle from './theme.module.css'

export type Theme = {
    field?: string;
    text?: string;
    input?: string;
    check?: string;
    disabled?: string;
    checked?: string;
}

export type TooltipPickedProps = Pick<Props,
  'tooltipDelay'
  | 'tooltipPosition'
  | 'tooltipOffset'
>

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
} & TooltipPickedProps

export type CheckBoxProps = React.PropsWithChildren<InitialProps>

export class CheckBox extends React.Component<CheckBoxProps> {
    render(): React.JSX.Element {
        const {
            tooltipLabel,
            theme,
            tooltipDelay,
            tooltipPosition,
            tooltipOffset,
            ...otherProps
        } = this.props

        const customTheme = mergeStyles(themeStyle, this.props.theme) as Required<Theme>

        return tooltipLabel
            ? (
                <Tooltip
                    tooltip={tooltipLabel}
                    theme={customTheme}
                    tooltipDelay={tooltipDelay}
                    tooltipPosition={tooltipPosition}
                    tooltipOffset={tooltipOffset}
                    composedComponent={CheckBoxComponent}
                    composedComponentProps={{ ...otherProps, theme: customTheme }}
                />
            )
            : (
                <CheckBoxComponent
                    {...otherProps}
                    theme={customTheme}
                />
            )
    }
}
