import { TooltipProps } from '../Tooltip/Tooltip';
import { ButtonInitialProps, ThemeButtonProps } from '../Button';
import { default as React } from 'react';

export type IconButtonTheme = ThemeButtonProps & {
    IconButton: string;
};
export interface IconButtonProps extends Partial<ButtonInitialProps> {
    theme: Partial<IconButtonTheme>;
}
type TooltipPickedProps = Pick<TooltipProps, 'tooltip' | 'tooltipDelay' | 'tooltipHideOnClick' | 'tooltipPosition' | 'tooltipShowOnClick' | 'tooltipOffset'>;
export declare class IconButton extends React.Component<Partial<IconButtonProps & TooltipPickedProps>> {
    render(): React.JSX.Element;
}
export {};
