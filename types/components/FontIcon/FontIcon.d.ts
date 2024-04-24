import { default as React } from 'react';

export type FontIconProps = {
    className?: string;
    value: string | React.JSX.Element;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    theme?: Record<string, string>;
};
export declare const FontIcon: (props: React.PropsWithChildren<FontIconProps>) => React.JSX.Element;
