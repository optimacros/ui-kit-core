import classNames from 'classnames'
import React, { PureComponent } from 'react'

import { mergeStyles } from '../../utils/mergeStyle'
import { Button, ButtonTheme } from '../Button'
import { Dropdown } from '../Dropdown'
import { FontIcon } from '../FontIcon'
import { Menu } from '../Menu'
import { Tooltip, TooltipTheme } from '../Tooltip/Tooltip'

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
    theme?: Partial<ButtonTheme> & Partial<TooltipTheme>;
    icon?: string | React.JSX.Element;
    classNameDropdownContainer?: string;
}

export class ButtonMenu extends PureComponent<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element {
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

    renderMenu(): React.JSX.Element {
        const { menuRootContainerClassName } = this.props
        const theme = mergeStyles(this.props.theme, buttonMenuTheme)
        const className = classNames(menuRootContainerClassName, theme.MenuRootContainerClassName)

        return (
            <Menu className={className}>
                {this.props.children}
            </Menu>
        )
    }

    renderButton(): React.JSX.Element {
        const TooltipButton = this.props.tooltip
            ? (
                props: React.PropsWithChildren<Props>) => (
                    <Tooltip
                        {...props}
                        composedComponent={Button}
                    />
            )
            : Button

        const theme = mergeStyles(this.props.theme, buttonMenuTheme)

        const className = classNames(
            {
                [buttonMenuTheme.ButtonMenu]: true,
                [buttonMenuTheme.ButtonMenu__uppercase]: this.props.uppercase,
                [buttonMenuTheme.ButtonMenu__showOnlyIcon]: this.props.showOnlyIcon,
            },
            this.props.className,
            theme.ButtonMenu,
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
