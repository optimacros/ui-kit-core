import { default as React } from 'react';

interface Props {
    value: React.JSX.Element | string;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    theme?: Record<string, string>;
    style?: React.CSSProperties;
}
export declare const Icon: (props: Props) => React.JSX.Element;
export {};
