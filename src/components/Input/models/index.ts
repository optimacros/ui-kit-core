import React from 'react'
import type { TextareaHTMLAttributes, InputHTMLAttributes } from 'react'

export type Callback = 'onChange' | 'onKeyPress' | 'onKeyDown';

/** Delay in milliseconds. Global or callback-specific. */
export type DebounceSettings = number | { [key in Callback]?: number };

type HTMLAttributes = TextareaHTMLAttributes<HTMLTextAreaElement> & InputHTMLAttributes<HTMLInputElement>

export interface InputProps extends Omit<HTMLAttributes, 'onChange' | 'onKeyPress'> {
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    multiline?: boolean;
    floating?: boolean;
    label?: string | React.JSX.Element;
    error?: string | React.JSX.Element | null;
    oneLineError?: boolean;
    hint?: string | React.JSX.Element;
    collapsed?: boolean;
    icon?: string | React.JSX.Element;
    theme?: Partial<InputTheme>;
    debounce?: DebounceSettings;
}

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
}
