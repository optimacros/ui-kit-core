import { default as React } from 'react';

export type NavigationTheme = {
    button: string;
    horizontal: string;
    link: string;
    vertical: string;
};
export type NavigationProps = {
    type?: 'vertical' | 'horizontal';
    theme: NavigationTheme;
    className?: string;
    wrap?: boolean;
};
export declare const Navigation: ({ children, theme, className, type, }: React.PropsWithChildren<NavigationProps>) => React.JSX.Element;
