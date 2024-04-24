import { default as React, Component } from 'react';

type Props = React.PropsWithChildren<{
    draggableTarget: string;
}>;
type State = {
    isDragging: boolean;
    currentPosition: {
        x: number;
        y: number;
    };
    movePosition: {
        x: number;
        y: number;
    };
    startDragPosition?: {
        x: number;
        y: number;
    };
};
export default class DraggableModalContainer extends Component<Props, State> {
    constructor(props: Props);
    private containerNode;
    private targetNodes;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
    private startDrag;
    private move;
    private endDrag;
    private hasClickedOnTheCurrentElement;
    private setTargetNode;
    private setContainerNode;
}
export {};
