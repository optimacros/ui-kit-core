import type { CSSProperties, MouseEventHandler } from 'react'
import React from 'react'

import { CheckBoxComponent } from './CheckBox'
import { mergeStyles } from '../../utils/mergeStyle'
import { tooltip } from '../Tooltip'

import style from './CheckBox.module.css'

export type Theme = {
    field?: string;
    text?: string;
    input?: string;
    check?: string;
    disabled?: string;
    checked?: string;
    ripple?: string;
}

export interface InitialProps {
    checked?: boolean;
    name?: string;
    label?: React.ReactNode | string;
    tooltipLabel?: string;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    onChange: (checked: boolean, event: React.MouseEvent) => void;
    onMouseEnter?: MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLLabelElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
    theme?: Partial<Theme>;
    children?: React.ReactNode;
}

export class CheckBox extends React.Component<InitialProps> {
    render(): React.JSX.Element {
        const ThemedCheckboxComponent = this.props.tooltipLabel
            ? tooltip(CheckBoxComponent)
            : CheckBoxComponent

        const theme = mergeStyles(style, this.props.theme) as Required<Theme>

        return (
            <ThemedCheckboxComponent
                {...this.props}
                theme={theme}
            />
        )
    }
}
