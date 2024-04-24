import { default as React } from 'react';
import { DropdownProps } from 'rc-dropdown/lib/Dropdown';

interface Props extends DropdownProps {
    className?: string;
    disabled?: boolean;
    closeOnSelect?: boolean;
}
type State = {
    visible: boolean;
    lastVisible: boolean;
};
export declare class Dropdown extends React.PureComponent<React.PropsWithChildren<Props>, State> {
    constructor(props: React.PropsWithChildren<Props>);
    componentWillUnmount(): void;
    static getDerivedStateFromProps(props: React.PropsWithChildren<Props>, state: State): State | null;
    render(): React.ReactNode;
    private onVisibleChange;
    private onOverlayClick;
    private onGlobalKeyDown;
}
export {};
