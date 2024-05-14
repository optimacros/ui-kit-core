import type { ButtonHTMLAttributes } from 'react'
import React, { Component } from 'react'

import { ButtonComponent } from './Button'
import { mergeStyles } from '../../utils/mergeStyle'
import themedRippleFactory from '../Ripple'

// order of styles import is important
import themeStyle from './ButtonTheme.module.css'
// eslint-disable-next-line
import style from './Button.module.css'
import classNames from 'classnames'

export type ThemeButtonProps = {
    button: string;
    icon: string;
    rippleWrapper: string;
    accent: string;
    bordered: string;
    neutral: string;
    primary: string;
    flat: string;
    floating: string;
    raised: string;
    inverse: string;
    mini: string;
}

export type ButtonTheme = ThemeButtonProps & {
    Button: string;
    button_uppercase: string;
    gray: string;
    warning: string;
}

export interface ButtonInitialProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
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
    theme: Partial<ThemeButtonProps>;
}

// eslint-disable-next-line react-refresh/only-export-components
const RippledButton = themedRippleFactory({ centered: false })(ButtonComponent)

export class Button extends Component<Partial<ButtonInitialProps>> {
    render(): React.JSX.Element {
        let theme = mergeStyles(style, this.props.theme) as ButtonTheme
        theme = mergeStyles(theme, themeStyle) as ButtonTheme

        const className = classNames(
            this.props.className,
            {
                [theme.button_uppercase]: this.props.uppercase,
                [theme.gray]: this.props.gray,
                [theme.warning]: this.props.warning,
            },
            theme.Button,
        )

        return (
            <RippledButton
                {...this.props}
                className={className}
                theme={theme}
            />
        )
    }
}
