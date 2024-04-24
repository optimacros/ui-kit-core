import { TooltipProps, TooltipTheme } from '../Tooltip/Tooltip';
import { CSSProperties, MouseEventHandler, default as React } from 'react';

export type Theme = {
    field?: string;
    text?: string;
    input?: string;
    check?: string;
    disabled?: string;
    checked?: string;
    ripple?: string;
};
type TooltipPickedProps = Pick<TooltipProps, 'tooltipDelay' | 'tooltipHideOnClick' | 'tooltipPosition' | 'tooltipShowOnClick' | 'tooltipOffset'>;
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
    onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
    theme?: Partial<Theme> & Partial<TooltipTheme>;
} & TooltipPickedProps;
export declare class CheckBox extends React.Component<React.PropsWithChildren<InitialProps>> {
    render(): React.JSX.Element;
}
export {};
