import { default as React } from 'react';

type CounterProps = {
    value: number;
    maxValue?: number;
    className?: string;
    route?: Record<string, any>;
    navigationComponent?: React.JSXElementConstructor<React.PropsWithChildren<{
        route: Record<string, any>;
        className: string;
    }>>;
};
export declare class Counter extends React.Component<CounterProps> {
    render(): React.ReactNode;
    private renderCounter;
}
export {};
