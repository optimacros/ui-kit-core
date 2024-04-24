import { TabProps } from '../Tab';
import { TabsContainerProps } from './TabsContainer';
import { default as React, Component } from 'react';

export type TabContentTheme = {
    TabContent: string;
    TabContent_Inner: string;
};
type Props = Omit<TabsContainerProps, 'headerClassName' | 'contentClassName'> & {
    children: React.ReactElement<TabProps>[];
    className?: string;
    theme?: Partial<TabContentTheme>;
};
export declare class TabContent extends Component<Props> {
    render(): React.JSX.Element;
    renderPanel(): (React.JSX.Element | null)[];
    private get getTheme();
}
export {};
