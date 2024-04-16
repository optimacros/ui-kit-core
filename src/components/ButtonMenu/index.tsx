import classNames from 'classnames'
import React, { PureComponent } from 'react'

import { mergeStyles } from '../../utils/mergeStyle'
import { Button, ButtonTheme } from '../Button'
import { Dropdown } from '../Dropdown'
import { FontIcon } from '../FontIcon'
import { Menu } from '../Menu'
import { Tooltip, TooltipProps, TooltipTheme } from '../Tooltip/Tooltip'

import buttonMenuTheme from './ButtonMenu.module.css'

export type ButtonMenuTheme = Partial<ButtonTheme> & Partial<TooltipTheme>

type TooltipPickedProps = Pick<TooltipProps,
  | 'tooltip'
  | 'tooltipDelay'
  | 'tooltipHideOnClick'
  | 'tooltipPosition'
  | 'tooltipShowOnClick'
  | 'tooltipOffset'
>

type Props = {
    label?: string;
    disabled?: boolean;
    className?: string;
    uppercase?: boolean;
    showOnlyIcon?: boolean;
    arrowUp?: boolean;
    menuRootContainerClassName?: string;
    theme?: ButtonMenuTheme;
    icon?: string | React.JSX.Element;
    classNameDropdownContainer?: string;
} & TooltipPickedProps

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
        const {
            tooltip,
            tooltipDelay,
            tooltipHideOnClick,
            tooltipPosition,
            tooltipShowOnClick,
            tooltipOffset,
            theme,
            ...otherProps
        } = this.props

        const customTheme = mergeStyles(this.props.theme, buttonMenuTheme)

        const className = classNames(
            {
                [buttonMenuTheme.ButtonMenu]: true,
                [buttonMenuTheme.ButtonMenu__uppercase]: this.props.uppercase,
                [buttonMenuTheme.ButtonMenu__showOnlyIcon]: this.props.showOnlyIcon,
            },
            this.props.className,
            customTheme.ButtonMenu,
        )

        const classNameText = classNames(buttonMenuTheme.buttonText, customTheme.buttonText)
        const classNameIcon = classNames(buttonMenuTheme.buttonIcon, customTheme.buttonIcon)

        const iconValue = this.props.arrowUp
            ? 'arrow_drop_up'
            : 'arrow_drop_down'

        if (this.props.tooltip) {
            return (
                <Tooltip
                    composedComponent={Button}
                    composedComponentProps={{ ...otherProps, theme: customTheme }}
                    tooltip={tooltip}
                    theme={customTheme}
                    tooltipDelay={tooltipDelay}
                    tooltipHideOnClick={tooltipHideOnClick}
                    tooltipPosition={tooltipPosition}
                    tooltipShowOnClick={tooltipShowOnClick}
                    tooltipOffset={tooltipOffset}
                >
                    {this.renderContent(classNameText, classNameIcon, iconValue)}
                </Tooltip>
            )
        }

        return (
            <Button
                {...otherProps}
                theme={customTheme}
                className={className}
                icon={this.props.icon}
                disabled={this.props.disabled}
                data-label={this.props.label}
            >
                {this.renderContent(classNameText, classNameIcon, iconValue)}
            </Button>
        )
    }

    renderContent = (classNameText: string, classNameIcon: string, iconValue: string): React.JSX.Element => {
        return (
            <>
                {!this.props.showOnlyIcon && (
                    <div className={classNameText}>
                        {this.props.label}
                    </div>
                )}

                <div className={classNameIcon}>
                    <FontIcon value={iconValue} />
                </div>
            </>
        )
    }
}
