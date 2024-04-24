import { TabProps } from './Tab';
import { TabsContainerProps } from './ExtTabs/TabsContainer';
import { default as React } from 'react';

interface Props extends Omit<TabsContainerProps, 'active'> {
    active?: number;
    onChange?: (index: number) => void;
}
type State = {
    activeTab: number;
};
export declare class Tabs extends React.Component<React.PropsWithChildren<Props>, State> {
    constructor(props: React.PropsWithChildren<Props>);
    state: {
        activeTab: number;
    };
    static getDerivedStateFromProps(props: React.PropsWithChildren<Props>, state: State): State | null;
    render(): React.JSX.Element;
    renderContent(): React.ReactElement<TabProps>[];
    private onTabSwitch;
    private setCorrectActiveTab;
    private setActiveTab;
}
export {};
