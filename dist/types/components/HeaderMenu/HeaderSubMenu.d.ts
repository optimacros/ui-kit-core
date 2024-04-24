import { Element } from './HeaderMenuElement';
import { default as React } from 'react';

type Props = {
    firstLevel?: boolean;
    rootElementNode: React.RefObject<HTMLLIElement>;
    element: Element;
    elements: Element[] | undefined;
};
export declare class HeaderSubMenu extends React.Component<Props> {
    constructor(props: Props);
    private readonly rootMenuNode;
    componentDidMount(): void;
    render(): React.JSX.Element | null;
    renderList(): (React.JSX.Element | null)[];
    private setStyles;
    private getTopPosition;
    private getLeftPosition;
}
export {};
