import { Element } from './HeaderMenuElement';
import { default as React } from 'react';

type Props = {
    element: Element;
    isFirstLevel?: boolean;
};
export declare class HeaderMenuElementContainer extends React.Component<Props> {
    render(): React.JSX.Element;
    renderIcon(element: Element): React.JSX.Element | null;
    renderArrowIcon(): React.JSX.Element | null;
    private onClick;
}
export {};
