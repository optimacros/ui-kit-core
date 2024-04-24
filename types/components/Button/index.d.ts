import { ButtonHTMLAttributes, default as React, Component } from 'react';

export type ThemeButtonProps = {
    button: string;
    icon: string;
    rippleWrapper: string;
    accent: string;
    bordered: string;
    neutral: string;
    primary: string;
    flat: string;
    floating: string;
    raised: string;
    inverse: string;
    mini: string;
    toggle: string;
};
export type ButtonTheme = ThemeButtonProps & {
    button_uppercase: string;
    gray: string;
    warning: string;
};
export interface ButtonInitialProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    label: string;
    icon: string | React.JSX.Element | null;
    href: string;
    gray: boolean;
    warning: boolean;
    accent: boolean;
    neutral: boolean;
    primary: boolean;
    bordered: boolean;
    uppercase: boolean;
    floating: boolean;
    flat: boolean;
    raised: boolean;
    inverse: boolean;
    mini: boolean;
    buttonColor: string;
    fontColor: string;
    fontSize: string | number;
    theme: Partial<ThemeButtonProps>;
}
export declare class Button extends Component<Partial<ButtonInitialProps>> {
    render(): React.JSX.Element;
}
