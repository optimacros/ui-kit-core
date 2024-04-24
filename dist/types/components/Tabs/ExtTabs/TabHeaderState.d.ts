import { TabProps } from '../Tab';
import { default as React } from 'react';

export type HiddenTabProps = {
    content: string | React.JSX.Element | undefined;
    active: boolean;
    position: number;
    disabled: boolean;
};
export declare class TabHeaderState {
    constructor();
    private activeTab;
    private scrollLeft;
    private scrollableTabsNodes;
    fixedTabsChildren: React.ReactElement<TabProps>[];
    scrollableTabsChildren: React.ReactElement<TabProps>[];
    countFixedTabs: number;
    countScrollableTabs: number;
    tabsScrollerNode: HTMLDivElement | null;
    countScrolledTabs: number;
    setActiveTab(index: number | null): void;
    setTabsChildren(children?: React.ReactElement<TabProps>[]): void;
    scrollToTab(index: number, toRight?: boolean): void;
    setScrollLeft(): void;
    setTabsScrollerNode(node: HTMLDivElement): void;
    setScrollableTabsNodes(nodes: React.RefObject<HTMLDivElement>[]): void;
    scrollToActiveTab(): void;
    get hiddenTabs(): HiddenTabProps[];
    private get scrollableTabsOffsetsLeft();
    private get scrollableTabsWidth();
}
