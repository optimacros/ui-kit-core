import { InputTheme } from '../Input';
import { SelectBoxTheme, SelectBoxProps } from './SelectBox';
import { default as React, Component } from 'react';

export interface Props extends Omit<SelectBoxProps, 'theme'> {
    theme?: Partial<SelectBoxTheme & InputTheme>;
    multiSelect?: boolean;
    onChange?: (value: string | number | (string | number)[], event?: React.SyntheticEvent) => void;
}
export declare class SelectBox extends Component<Props> {
    render(): React.JSX.Element;
    renderChip(): React.JSX.Element | null;
    renderList(): (React.JSX.Element | null)[] | null;
    private onChange;
    private onDelete;
    private get elements();
    private get source();
}
