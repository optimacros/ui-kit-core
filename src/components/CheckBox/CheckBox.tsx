import classnames from 'classnames'
import React, { Component } from 'react'

import rippleFactory from '../Ripple'
import { Box } from './Box'
import type { InitialProps, Theme } from './index'
import { mergeStyles } from '../../utils/mergeStyle'

import themeStyle from './theme.module.css'

interface CheckBoxComponentProps extends InitialProps {
    theme: Required<Theme>;
}

export class CheckBoxComponent extends Component<CheckBoxComponentProps> {
    constructor(props: CheckBoxComponentProps) {
        super(props)

        this.inputNode = React.createRef()
    }

    inputNode: React.RefObject<HTMLInputElement>

    render(): React.JSX.Element {
        const {
            checked = false,
            children,
            disabled = false,
            label,
            name,
            style,
            onChange,
            onMouseEnter,
            onMouseLeave,
            theme: customTheme,
            ...others
        } = this.props

        const theme = mergeStyles(themeStyle, customTheme) as Required<Theme>

        const className = classnames(
            theme.field,
            { [theme.disabled]: this.props.disabled },
            this.props.className
        )

        const RippledBox = rippleFactory({
            centered: true,
            spread: 2.6,
        })(Box)

        return (
            <label
                data-react-toolbox="checkbox"
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
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

                <RippledBox
                    checked={checked}
                    disabled={disabled}
                    style={style}
                    theme={theme}
                    rippleClassName={theme.ripple}
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
            this.props.onChange(!this.props.checked, event)
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
}
