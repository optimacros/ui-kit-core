import { default as React } from 'react';

export type Theme = {
    ripple: string;
    rippleActive: string;
    rippleRestarting: string;
    rippleWrapper: string;
};
export type Options = {
    centered: boolean;
    className: string;
    multiple: boolean;
    passthrough: boolean;
    spread: number;
};
type RippleFactoryProps = Partial<Options> & {
    theme: Theme;
};
export interface RippleProps {
    disabled: boolean;
    onMouseDown: React.MouseEventHandler<HTMLElement>;
    onRippleEnded: (event: TransitionEvent) => void;
    onTouchStart: React.TouchEventHandler<HTMLElement>;
    onMouseUp: React.MouseEventHandler<HTMLElement>;
    onTouchEnd: React.TouchEventHandler<HTMLElement>;
    ripple: boolean;
    rippleCentered: boolean;
    rippleClassName: string;
    rippleMultiple: boolean;
    rippleSpread: number;
    theme: Record<string, string>;
}
type RippleItem = {
    active: boolean;
    restarting: boolean;
    left: number;
    top: number;
    width: number;
    endRipple: () => void;
};
type State = {
    ripples: Record<string, RippleItem | never>;
};
export type RippleWrapperFC = <T extends React.PropsWithChildren<Partial<RippleProps>>>(ComposedComponent: React.ComponentClass<T> | React.FC<T>) => React.ComponentClass<T, State>;
declare const rippleFactory: (options: RippleFactoryProps) => RippleWrapperFC;
export default rippleFactory;
