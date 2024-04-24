import { default as React, Component } from 'react';

declare const POSITION: {
    readonly BOTTOM: "bottom";
    readonly HORIZONTAL: "horizontal";
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly TOP: "top";
    readonly VERTICAL: "vertical";
};
type Position = typeof POSITION[keyof typeof POSITION];
type PositionInfo = {
    top: number;
    left: number;
    position: Position;
};
export type TooltipTheme = {
    tooltip: string;
    tooltipActive: string;
    tooltipWrapper: string;
};
export type TooltipProps = {
    composedComponent: string | React.FunctionComponent<any> | React.ComponentClass<any>;
    composedComponentProps?: Record<string, any>;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
    theme?: Record<string, string>;
    tooltip?: string | React.ReactNode;
    tooltipDelay?: number;
    tooltipHideOnClick?: boolean;
    tooltipPosition?: Position;
    tooltipShowOnClick?: boolean;
    tooltipOffset?: number;
};
type State = {
    active: boolean;
    position: Position | undefined;
    visible: boolean;
    top: number;
    left: number;
};
export declare class Tooltip extends Component<React.PropsWithChildren<TooltipProps>, State> {
    constructor(props: TooltipProps);
    private tooltipNode;
    private timeout;
    state: {
        active: boolean;
        position: Position;
        visible: boolean;
        top: number;
        left: number;
    };
    componentWillUnmount(): void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    onTransformEnd: (event: TransitionEvent) => void;
    getPosition(element: HTMLElement): Position;
    activate({ top, left, position }: PositionInfo): void;
    deactivate(): void;
    calculatePosition(element: HTMLElement): PositionInfo;
    handleMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
    handleMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export {};
