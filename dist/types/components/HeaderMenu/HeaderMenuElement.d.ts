import { default as React } from 'react';

export type Element = {
    id: string;
    title: string;
    open?: () => void;
    icon?: string;
    hidden?: boolean;
    disabled?: boolean;
    isChild?: boolean;
    isParent?: boolean;
    children?: Element[];
    type?: string;
};
type Props = {
    element: Element;
    firstLevel?: boolean;
};
type State = {
    showMenu: boolean;
};
export declare class HeaderMenuElement extends React.Component<Props, State> {
    constructor(props: Props);
    private readonly node;
    state: {
        showMenu: boolean;
    };
    render(): React.JSX.Element | null;
    renderSubMenu(): React.JSX.Element | null;
    private onMouseEnter;
    private onMouseLeave;
}
export {};
