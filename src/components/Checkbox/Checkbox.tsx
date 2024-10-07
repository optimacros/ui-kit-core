import classnames from 'classnames'
import _ from 'lodash'
import React, { Component, PropsWithChildren } from 'react'

import { Box } from './Box'
import type { InitialProps, Theme } from './index'
import { mergeStyles } from '../../utils/mergeStyle'

import checkBoxStyle from './Checkbox.module.css'

export interface CheckboxComponentProps extends InitialProps {
    theme: Required<Theme>;
}

export interface CheckboxComponentState {
    checked: boolean;
}

export class CheckboxComponent extends Component<PropsWithChildren<CheckboxComponentProps>, CheckboxComponentState> {
    constructor(props: CheckboxComponentProps) {
        super(props)

        this.inputNode = React.createRef()
    }

    state = {
        checked: Boolean(this.props.defaultChecked),
    }

    inputNode: React.RefObject<HTMLInputElement>

    render(): React.JSX.Element {
        const {
            defaultChecked,
            children,
            disabled = false,
            label,
            name,
            style,
            onChange,
            onMouseEnter,
            onMouseLeave,
            onClick,
            theme: customTheme,
            ...others
        } = this.props

        const theme = mergeStyles(customTheme, checkBoxStyle) as Required<Theme>
        const { checked } = this

        const className = classnames(
            theme.field,
            { [theme.disabled]: this.props.disabled },
            this.props.className,
        )

        return (
            <label
                data-react-toolbox="checkbox"
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                <input
                    {...others}
                    defaultChecked={checked}
                    className={theme.input}
                    disabled={disabled}
                    name={name}
                    onClick={this.handleToggle}
                    ref={this.inputNode}
                    type="checkbox"
                />

                <Box
                    checked={checked}
                    disabled={disabled}
                    style={style}
                    theme={theme}
                />

                {label && (
                    <span
                        data-react-toolbox="label"
                        className={theme.text}
                    >
                        {label}
                    </span>
                )}

                {children}
            </label>
        )
    }

    handleToggle = (event: React.MouseEvent): void => {
        if (event.pageX !== 0 && event.pageY !== 0) {
            this.blur()
        }

        if (!this.props.disabled && this.props.onChange) {
            this.props.onChange(!this.checked, event)
            this.setState(({ checked }) => ({
                checked: !checked,
            }))
        }
    }

    blur(): void {
        if (this.inputNode) {
            this.inputNode.current?.blur()
        }
    }

    focus(): void {
        if (this.inputNode) {
            this.inputNode.current?.focus()
        }
    }

    get checked(): boolean {
        const { defaultChecked, checked = false } = this.props

        return _.isBoolean(defaultChecked)
            ? this.state.checked
            : checked
    }
}
