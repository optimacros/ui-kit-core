import { TooltipProps, TooltipTheme } from '../Tooltip/Tooltip';
import { ButtonTheme } from '../Button';
import { default as React, PureComponent } from 'react';

export type ButtonMenuTheme = Partial<ButtonTheme> & Partial<TooltipTheme>;
type TooltipPickedProps = Pick<TooltipProps, 'tooltip' | 'tooltipDelay' | 'tooltipHideOnClick' | 'tooltipPosition' | 'tooltipShowOnClick' | 'tooltipOffset'>;
type Props = {
    label?: string;
    disabled?: boolean;
    className?: string;
    uppercase?: boolean;
    showOnlyIcon?: boolean;
    arrowUp?: boolean;
    menuRootContainerClassName?: string;
    onVisibleChange?: (visible: boolean) => void;
    visible?: boolean;
    theme?: ButtonMenuTheme;
    icon?: string | React.JSX.Element;
    dataName?: string;
    classNameDropdownContainer?: string;
} & TooltipPickedProps;
export declare class ButtonMenu extends PureComponent<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element;
    renderMenu(): React.JSX.Element;
    renderButton(): React.JSX.Element;
    renderContent: (classNameText: string, classNameIcon: string, iconValue: string) => React.JSX.Element;
}
export {};
