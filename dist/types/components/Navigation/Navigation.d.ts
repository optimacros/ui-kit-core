import { NavigationProps, NavigationTheme } from './BaseNavigation';
import { default as React } from 'react';

interface Props extends Omit<NavigationProps, 'theme'> {
    theme?: Partial<NavigationTheme>;
}
export declare class Navigation extends React.Component<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element;
}
export {};
