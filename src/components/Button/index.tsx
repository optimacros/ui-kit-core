import type { ButtonHTMLAttributes } from 'react'
import React, { Component } from 'react'

import { mergeStyles } from '../../utils/mergeStyle'
import themedRippleFactory from '../Ripple'
import { ButtonComponent } from './Button'

// order of styles import is important
import themeStyle from './ButtonTheme.module.css'
// eslint-disable-next-line
import style from './Button.module.css'

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
    toggle: string;
}

export type Theme = ThemeButtonProps & {
    // eslint-disable-next-line camelcase
    button_uppercase: string;
    gray: string;
    warning: string;
}

export interface ButtonInitialProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    label: string;
    icon: string | React.JSX.Element | null;
    href: string;
    gray: boolean;
    warning: boolean;
    accent: boolean;
    neutral: boolean;
    primary: boolean;
    bordered: boolean;
    uppercase: boolean;
    floating: boolean;
    flat: boolean;
    raised: boolean;
    inverse: boolean;
    mini: boolean;
    buttonColor: string;
    fontColor: string;
    fontSize: string | number;
    tooltip: string | React.ReactNode; // works only for ButtonMenu and IconButton
    theme: Partial<ThemeButtonProps>;
}

const RippledButton = themedRippleFactory({ centered: false })(ButtonComponent)

export class Button extends Component<Partial<ButtonInitialProps>> {
    render(): React.JSX.Element {
        let theme = mergeStyles(style, this.props.theme) as Theme
        theme = mergeStyles(theme, themeStyle) as Theme

        return (
            <RippledButton
                {...this.props}
                theme={theme}
            />
        )
    }
}
