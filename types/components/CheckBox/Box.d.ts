import { RippleProps } from '../Ripple/Ripple';
import { Theme } from './index';
import { CSSProperties, MouseEventHandler, TouchEventHandler, default as React } from 'react';

interface BoxProps extends Partial<RippleProps> {
    theme: Required<Theme>;
    checked?: boolean;
    disabled?: boolean;
    onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
    style?: CSSProperties;
}
export declare const Box: (props: React.PropsWithChildren<BoxProps>) => React.JSX.Element;
export {};
