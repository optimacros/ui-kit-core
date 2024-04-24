import { default as React, Component } from 'react';

type Theme = {
    buffer?: string;
    circle?: string;
    circular?: string;
    indeterminate?: string;
    linear?: string;
    multicolor?: string;
    path?: string;
    value?: string;
};
type Props = {
    buffer?: number;
    className?: string;
    max?: number;
    min?: number;
    mode?: 'determinate' | 'indeterminate';
    type?: 'linear' | 'circular';
    value?: number;
    multicolor?: boolean;
    theme?: Theme;
    innerRef?: React.RefObject<HTMLDivElement>;
    disabled?: boolean;
};
export declare class Loader extends Component<Props> {
    min: number;
    max: number;
    render(): React.JSX.Element;
    renderCircular(theme: Theme): React.JSX.Element;
    renderLinear(theme: Theme): React.JSX.Element;
    calculateRatio(value: number): number;
    circularStyle(): {
        'strokeDasharray': string;
    } | undefined;
    linearStyle(): {
        'buffer': Record<string, string>;
        'value': Record<string, string>;
    } | Record<string, never>;
}
export {};
