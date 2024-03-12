import classNames from 'classnames'
import type { PropsWithChildren } from 'react'
import React, { PureComponent } from 'react'

import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import { FontIcon } from '../FontIcon'
import { Menu } from '../Menu'
import { tooltip } from '../Tooltip'
import { mergeStyles } from 'utils/mergeStyle'

import buttonMenuTheme from './ButtonMenu.module.css'

type Props = {
    label?: string;
    disabled?: boolean;
    className?: string;
    uppercase?: boolean;
    showOnlyIcon?: boolean;
    tooltip?: string;
    arrowUp?: boolean;
    menuRootContainerClassName?: string;
    theme?: Record<string, string>;
    icon?: string | JSX.Element;
    classNameDropdownContainer?: string;
}

export class ButtonMenu extends PureComponent<PropsWithChildren<Props>> {
    render(): JSX.Element {
        return (
            <Dropdown
                overlay={this.renderMenu()}
                trigger={['click']}
                disabled={this.props.disabled}
                className={this.props.classNameDropdownContainer}
            >
                {this.renderButton()}
            </Dropdown>
        )
    }

    renderMenu(): JSX.Element {
        const { menuRootContainerClassName } = this.props
        const theme = mergeStyles(this.props.theme, buttonMenuTheme)
        const className = classNames(menuRootContainerClassName, theme.MenuRootContainerClassName)

        return (
            <Menu className={className}>
                {this.props.children}
            </Menu>
        )
    }

    renderButton(): JSX.Element {
        const TooltipButton = this.props.tooltip
            ? tooltip(Button)
            : Button

        const theme = mergeStyles(this.props.theme, buttonMenuTheme)

        const className = classNames(
            {
                [buttonMenuTheme.ButtonMenu]: true,
                [buttonMenuTheme.ButtonMenu__uppercase]: this.props.uppercase,
                [buttonMenuTheme.ButtonMenu__showOnlyIcon]: this.props.showOnlyIcon,
            },
            this.props.className,
            theme.ButtonMenu
        )

        const classNameText = classNames(buttonMenuTheme.buttonText, theme.buttonText)
        const classNameIcon = classNames(buttonMenuTheme.buttonIcon, theme.buttonIcon)

        const iconValue = this.props.arrowUp
            ? 'arrow_drop_up'
            : 'arrow_drop_down'

        return (
            <TooltipButton
                className={className}
                icon={this.props.icon}
                disabled={this.props.disabled}
                tooltip={this.props.tooltip}
                data-label={this.props.label}
            >
                {!this.props.showOnlyIcon && (
                    <div className={classNameText}>
                        {this.props.label}
                    </div>
                )}

                <div className={classNameIcon}>
                    <FontIcon value={iconValue} />
                </div>
            </TooltipButton>
        )
    }
}
