import classNames from 'classnames'
import type { MouseEvent } from 'react'
import React, { ButtonHTMLAttributes, Component } from 'react'

import { FontIcon } from '../FontIcon'
import { mergeStyles } from "../../utils/mergeStyle.ts";
import styles from './Button.module.css'

export type ButtonTheme = {
    button: string;
    icon: string;
    accent: string;
    bordered: string;
    neutral: string;
    primary: string;
    flat: string;
    floating: string;
    raised: string;
    inverse: string;
    mini: string;
    button_uppercase: string;
    gray: string;
    warning: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    label: string;
    icon: string | React.JSX.Element | null;
    href: string;
    target: string;
    gray: boolean;
    warning: boolean;
    accent: boolean;
    neutral: boolean;
    primary: boolean;
    bordered: boolean;
    uppercase: boolean;
    floating: boolean;
    raised: boolean;
    inverse: boolean;
    mini: boolean;
    buttonColor: string;
    fontColor: string;
    fontSize: string | number;
    theme: Partial<ButtonTheme>;
}

export class Button extends Component<Partial<ButtonProps>> {
    constructor(props: Partial<ButtonProps>) {
        super(props)

        this.buttonNode = React.createRef()
    }

    buttonNode: React.RefObject<HTMLButtonElement | HTMLAnchorElement>

    render(): React.JSX.Element {
        const {
            type = 'button',
            label,
            icon,
            href,
            inverse,
            mini,
            neutral,
            uppercase,
            gray,
            warning,
            buttonColor,
            fontSize,
            fontColor,
            children,
            accent,
            primary,
            bordered,
            floating,
            raised,
            ...otherProps
        } = this.props
        
        const theme = mergeStyles(styles, this.props.theme) as ButtonTheme
        
        const element = href
            ? 'a'
            : 'button'
        const level = this.getLevel()
        const shape = this.getShape()

        const mouseEvents = {
            onMouseUp: this.handleMouseUp,
            onMouseLeave: this.handleMouseLeave,
        }

        const className = classNames(
            theme.button,
            [theme[shape]],
            {
                [theme[level]]: neutral ?? true,
                [theme.mini]: mini ?? false,
                [theme.inverse]: inverse ?? false,
                [theme.button_uppercase]: this.props.uppercase ?? false,
                [theme.gray]: this.props.gray ?? false,
                [theme.warning]: this.props.warning ?? false,
            },
            this.props.className,
        )

        const style = {
            backgroundColor: buttonColor,
            color: fontColor,
            fontSize,
        }

        const props = {
            ...otherProps,
            ...mouseEvents,
            href,
            ref: this.buttonNode,
            className,
            type: !href
                ? type
                : null,
            'data-react-toolbox': 'button',
            style,
        }

        const iconContent = icon
            ? (
                <FontIcon
                    className={theme.icon}
                    value={icon}
                />
            )
            : null

        const buttonElement = React.createElement(element, props, iconContent, label, children)

        if (this.props.onMouseEnter && this.props.disabled) {
            return (
                <span {...mouseEvents}>
                    {buttonElement}
                </span>
            )
        }

        return buttonElement
    }

    getLevel = (): 'primary' | 'accent' | 'bordered' | 'neutral' => {
        if (this.props.primary) {
            return 'primary'
        }

        if (this.props.accent) {
            return 'accent'
        }

        if (this.props.bordered) {
            return 'bordered'
        }

        return 'neutral'
    }

    getShape = (): 'raised' | 'floating' | 'flat' => {
        if (this.props.raised) {
            return 'raised'
        }

        if (this.props.floating) {
            return 'floating'
        }

        return 'flat'
    }

    handleMouseUp = (event: MouseEvent<HTMLButtonElement>): void => {
        if (this.buttonNode.current) {
            // TODO проверить не сломает ли это тесты в АМ
            this.buttonNode.current.blur()
        }

        if (this.props.onMouseUp) {
            this.props.onMouseUp(event)
        }
    }

    handleMouseLeave = (event: MouseEvent<HTMLButtonElement>): void => {
        if (this.buttonNode.current) {
            // TODO проверить не сломает ли это тесты в АМ
            this.buttonNode.current.blur()
        }

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event)
        }
    }
}
