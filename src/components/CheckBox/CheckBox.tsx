import type { CSSProperties, MouseEventHandler } from 'react'
import React from 'react'

import { Tooltip, TooltipProps, TooltipTheme } from '../Tooltip'

import { CheckBoxContent } from "./CheckBoxContent";

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
} & Partial<TooltipProps>

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
        
        return tooltipLabel
            ? (
                <Tooltip
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={className}
                    theme={theme}
                    tooltip={tooltipLabel}
                    tooltipDelay={tooltipDelay}
                    tooltipPosition={tooltipPosition}
                    tooltipOffset={tooltipOffset}
                    composedComponent={CheckBoxContent}
                    composedComponentProps={otherProps}
                />
            )
            : (
                <CheckBoxContent
                    {...otherProps}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={className}
                    theme={theme}
                />
            )
    }
}
