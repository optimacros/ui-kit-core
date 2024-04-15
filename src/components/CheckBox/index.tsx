import type { CSSProperties, MouseEventHandler } from 'react'
import React from 'react'

import { CheckBoxComponent } from './CheckBox'
import { mergeStyles } from '../../utils/mergeStyle'
import { Tooltip, TooltipTheme } from '../Tooltip/Tooltip'

import style from './CheckBox.module.css'

export type Theme = {
    field?: string;
    text?: string;
    input?: string;
    check?: string;
    disabled?: string;
    checked?: string;
    ripple?: string;
}

export interface InitialProps {
    checked?: boolean;
    name?: string;
    label?: React.ReactNode | string;
    tooltipLabel?: string;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    onChange?: (checked: boolean, event: React.MouseEvent) => void;
    onMouseEnter?: MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
    theme?: Partial<Theme> & Partial<TooltipTheme>;
    children?: React.ReactNode;
}

export class CheckBox extends React.Component<InitialProps> {
    render(): React.JSX.Element {
        const { tooltipLabel, theme, ...otherProps } = this.props

        const customTheme = mergeStyles(style, this.props.theme) as Required<Theme>

        return tooltipLabel
            ? (
                <Tooltip
                    composedComponent={CheckBoxComponent}
                    tooltip={tooltipLabel}
                    theme={customTheme}
                    {...otherProps}
                />
            )
            : (
                <CheckBoxComponent
                    theme={customTheme}
                    {...otherProps}
                />
            )
    }
}
