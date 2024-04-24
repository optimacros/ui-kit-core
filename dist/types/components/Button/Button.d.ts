import { RippleProps } from '../Ripple/Ripple';
import { ButtonInitialProps, ButtonTheme } from './index';
import { MouseEvent, default as React, Component } from 'react';

interface ButtonComponentProps extends Partial<ButtonInitialProps> {
    theme: ButtonTheme;
}
export declare class ButtonComponent extends Component<ButtonComponentProps & Partial<RippleProps>> {
    constructor(props: ButtonComponentProps);
    buttonNode: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
    render(): React.JSX.Element;
    getLevel: () => 'primary' | 'accent' | 'bordered' | 'neutral';
    getShape: () => 'raised' | 'floating' | 'flat';
    handleMouseUp: (event: MouseEvent<HTMLButtonElement>) => void;
    handleMouseLeave: (event: MouseEvent<HTMLButtonElement>) => void;
}
export {};
