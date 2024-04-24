import { default as React, Component } from 'react';

export type SelectBoxTheme = {
    active: string;
    disabled: string;
    dropdown: string;
    error: string;
    errored: string;
    field: string;
    label: string;
    required: string;
    selected: string;
    focused: string;
    templateValue: string;
    up: string;
    value: string;
    values: string;
    Container: string;
    Title: string;
};
export interface SelectBoxProps {
    source: {
        [key: string]: string | number;
    }[];
    theme: SelectBoxTheme;
    allowBlank?: boolean;
    auto?: boolean;
    className?: string;
    disabled?: boolean;
    error?: string | null;
    label?: string;
    labelKey?: string;
    name?: string;
    onBlur?: (event: React.SyntheticEvent) => void;
    onChange?: (value: string | number, event: React.SyntheticEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    required?: boolean;
    template?: (item: SelectBoxProps['source'][number] | undefined) => React.ReactNode;
    value?: string | number | (string | number)[];
    valueKey?: string;
}
type State = {
    active: boolean;
    up: boolean;
    focusedItemIndex: number | undefined;
};
export declare class SelectBoxComponent extends Component<SelectBoxProps, State> {
    constructor(props: SelectBoxProps);
    state: {
        active: boolean;
        up: boolean;
        focusedItemIndex: undefined;
    };
    private readonly refNode;
    private readonly dropdownNode;
    componentDidUpdate(props: SelectBoxProps, state: State): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
    renderTemplateValue(selected: SelectBoxProps['source'][number] | undefined): React.JSX.Element | null;
    renderValue: (item: SelectBoxProps['source'][number], idx: number) => React.JSX.Element;
    private getDocumentEvents;
    private getSelectedItem;
    private getNextSelectableItemIndex;
    private getPreviousSelectableItemIndex;
    private handleSelect;
    private handleKeyDown;
    private handleClick;
    private handleDocumentClick;
    private close;
    private open;
    private handleFocus;
    private handleBlur;
    private setFocusedItemIndex;
}
export {};
