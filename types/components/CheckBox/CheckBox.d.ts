import { InitialProps, Theme } from './index';
import { default as React, Component } from 'react';

interface CheckBoxComponentProps extends InitialProps {
    theme: Required<Theme>;
}
export declare class CheckBoxComponent extends Component<React.PropsWithChildren<CheckBoxComponentProps>> {
    constructor(props: CheckBoxComponentProps);
    inputNode: React.RefObject<HTMLInputElement>;
    render(): React.JSX.Element;
    handleToggle: (event: React.MouseEvent) => void;
    blur(): void;
    focus(): void;
}
export {};
