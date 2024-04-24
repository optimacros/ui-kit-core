import { Element } from './HeaderMenuElement';
import { default as React, Component } from 'react';

type Props = {
    elements: Element[];
};
export declare class HeaderMenu extends Component<Props> {
    render(): React.JSX.Element | null;
    renderList(): (React.JSX.Element | null)[];
}
export {};
