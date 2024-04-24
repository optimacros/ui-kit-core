import { default as React, TextareaHTMLAttributes, InputHTMLAttributes } from 'react';

export type InputTheme = {
    bar: string;
    counter: string;
    disabled: string;
    error: string;
    oneLineError: string;
    errored: string;
    hidden: string;
    hint: string;
    icon: string;
    input: string;
    inputElement: string;
    required: string;
    withIcon: string;
    collapsed: string;
    filled: string;
    fixed: string;
    label: string;
};
type HTMLAttributes = TextareaHTMLAttributes<HTMLTextAreaElement> & InputHTMLAttributes<HTMLInputElement>;
interface Props extends Omit<HTMLAttributes, 'onChange' | 'onKeyPress'> {
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    multiline?: boolean;
    floating?: boolean;
    label?: string | React.JSX.Element;
    error?: string | React.JSX.Element | null;
    oneLineError?: boolean;
    hint?: string | React.JSX.Element;
    collapsed?: boolean;
    icon?: string | React.JSX.Element;
    theme?: Partial<InputTheme>;
}
export declare class Input extends React.Component<Props> {
    constructor(props: Props);
    inputNode: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleAutoresize: () => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    blur(): void;
    focus(): void;
}
export {};
