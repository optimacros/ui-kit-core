import { default as BaseReactModal } from 'react-modal';
import { default as React, Component } from 'react';

interface Props extends BaseReactModal.Props {
    title?: string | React.ReactNode;
    compact?: boolean;
    nonDraggable?: boolean;
    isFatalError?: boolean;
    draggableTarget?: string;
    customHeaderButton?: React.ReactNode;
    headerClassName?: string;
    contentClassName?: string;
}
export declare class Modal extends Component<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element;
    renderHeader(): React.JSX.Element | null;
    renderCloseButton(): React.JSX.Element | null;
}
export {};
