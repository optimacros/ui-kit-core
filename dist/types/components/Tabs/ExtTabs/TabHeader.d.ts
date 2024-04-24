import { TabProps } from '../Tab';
import { TabsContainerProps } from './TabsContainer';
import { default as React, Component } from 'react';

export type TabHeaderTheme = {
    TabHeaderContainer: string;
    TabButton: string;
    TabButton_Inner: string;
    TabButton_Content: string;
    TabButton__active: string;
    TabButton__disabled: string;
    TabButton__draggable: string;
};
type Props = Omit<TabsContainerProps, 'headerClassName' | 'contentClassName'> & {
    children: React.ReactElement<TabProps>[];
    draggable?: boolean;
    arrowUp?: boolean;
    theme?: Partial<TabHeaderTheme>;
    hiddenTabsLabel?: string;
    groupName?: string;
    scrollAreaSizeIndicator?: boolean;
};
export declare class TabHeader extends Component<Props> {
    constructor(props: Props);
    private readonly tabHeaderState;
    private scrollableTabsNodes;
    private dragTarget;
    private space;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: React.PropsWithChildren<Props>): void;
    render(): React.JSX.Element;
    renderScroller(): React.JSX.Element | null;
    renderTabsHeaderButton(isScrollableTabs: boolean): (React.JSX.Element | null)[] | null;
    renderCounter(tab: React.JSX.Element): React.JSX.Element | null;
    renderIcon: (tab: React.JSX.Element) => React.JSX.Element | null;
    renderDropdown(): React.JSX.Element | null;
    renderDropdownList(): React.JSX.Element[];
    private onKeyPress;
    private setTabsScrollerNode;
    private switchTab;
    private onWheel;
    private onScroll;
    private onHeaderContextMenu;
    private onDoubleClick;
    private onMouseDown;
    private onMouseUp;
    private onMouseMove;
    private isDraggable;
    private get getTheme();
}
export {};
