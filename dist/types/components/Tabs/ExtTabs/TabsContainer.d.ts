import { TabProps } from '../Tab';
import { ButtonMenuTheme } from '../../ButtonMenu';
import { TabHeaderTheme } from './TabHeader';
import { TabContentTheme } from './TabContent';
import { default as React, Component } from 'react';

export type TabsContainerTheme = {
    TabsContainer: string;
} & TabContentTheme & TabHeaderTheme & ButtonMenuTheme;
export type TabsContainerProps = {
    active: number;
    children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
    className?: string;
    draggable?: boolean;
    onTabSwitch?: (index: number) => void;
    onTabPositionChange?: (newIndex: number, oldIndex: number) => void;
    hideTabHeader?: boolean;
    headerClassName?: string;
    contentClassName?: string;
    theme?: Partial<TabsContainerTheme>;
};
export declare class TabsContainer extends Component<TabsContainerProps> {
    render(): React.JSX.Element;
}
