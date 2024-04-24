import { IconButtonProps, IconButtonTheme } from './index';
import { MouseEvent, default as React, Component } from 'react';

interface Props extends IconButtonProps {
    theme: IconButtonTheme;
}
export declare class IconButtonComponent extends Component<Props> {
    constructor(props: Props);
    buttonNode: React.RefObject<HTMLButtonElement>;
    render(): React.JSX.Element;
    getLevel: () => 'primary' | 'accent' | 'bordered' | 'neutral';
    handleMouseUp: (event: MouseEvent<HTMLButtonElement>) => void;
    handleMouseLeave: (event: MouseEvent<HTMLButtonElement>) => void;
}
export {};
