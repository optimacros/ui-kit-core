import classNames from 'classnames'
import { isNull, isUndefined } from 'lodash'
import React from 'react'
import type { TextareaHTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

import { FontIcon } from '../FontIcon'
import { mergeStyles } from '../../utils/mergeStyle'
import { isValuePresent } from '../../utils/react-toolbox-utils'

// order of styles import is important
import inputThemeStyle from './theme.module.css'
// eslint-disable-next-line
import inputDefaultStyle from './Input.module.css'

export type InputTheme = {
    bar: string;
    counter: string;
    disabled: string;
    error: string;
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

type HTMLAttributes = TextareaHTMLAttributes<HTMLTextAreaElement> & InputHTMLAttributes<HTMLInputElement>

interface Props extends Omit<HTMLAttributes, 'onChange' | 'onKeyPress'> {
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    multiline?: boolean;
    floating?: boolean;
    label?: string | React.ReactElement;
    error?: string | React.ReactElement | null;
    hint?: string | React.ReactElement;
    collapsed?: boolean;
    icon?: string | React.ReactElement;
    theme?: Partial<InputTheme>;
}

export class Input extends React.Component<Props> {
    constructor(props: Props) {
        super(props)

        this.inputNode = React.createRef()
    }

    inputNode: React.RefObject<HTMLInputElement | HTMLTextAreaElement>

    componentDidMount(): void {
        if (this.props.multiline) {
            window.addEventListener('resize', this.handleAutoresize)
            this.handleAutoresize()
        }
    }

    componentDidUpdate(): void {
        // resize the textarea, if necessary
        if (this.props.multiline) {
            this.handleAutoresize()
        }
    }

    componentWillUnmount(): void {
        if (this.props.multiline) {
            window.removeEventListener('resize', this.handleAutoresize)
        }
    }

    render(): React.ReactElement {
        const {
            name,
            value,
            role = 'input',
            type = 'text',
            rows = 1,
            collapsed = false,
            disabled = false,
            multiline = false,
            required = false,
            floating = true,
            defaultValue,
            error,
            hint = '',
            icon,
            label,
            maxLength,
            theme: customTheme,
            onKeyPress,
            ...others
        } = this.props

        const length = !isUndefined(maxLength) && !isUndefined(value)
            ? value.toString().length
            : 0

        const labelText = !collapsed
            ? label
            : ''

        let theme = mergeStyles(inputThemeStyle, customTheme) as InputTheme
        theme = mergeStyles(theme, inputDefaultStyle) as InputTheme

        const labelClassName = classNames(theme.label, {
            [theme.fixed]: !floating,
        })

        const className = classNames(
            theme.input,
            {
                [theme.collapsed]: collapsed,
                [theme.disabled]: disabled,
                [theme.errored]: error,
                [theme.hidden]: type === 'hidden',
                [theme.withIcon]: icon,
            },
            this.props.className
        )

        const valuePresent = isValuePresent(value) || isValuePresent(defaultValue)

        type ElementPropsType = TextareaHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
            & { ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>; type: HTMLInputTypeAttribute }

        const elementProps: ElementPropsType = {
            ...others,
            className: classNames(theme.inputElement, {
                [theme.filled]: valuePresent,
            }),
            onChange: this.handleChange,
            ref: this.inputNode,
            role,
            name,
            defaultValue,
            disabled,
            required,
            type,
            value,
        }

        if (!multiline) {
            elementProps.maxLength = maxLength
            elementProps.onKeyDown = onKeyPress
        } else {
            elementProps.rows = rows
            elementProps.onKeyDown = this.handleKeyPress
        }

        return (
            <div
                data-react-toolbox="input"
                className={className}
            >
                {React.createElement(
                    multiline
                        ? 'textarea'
                        : 'input',
                    elementProps)
                }

                {icon && (
                    <FontIcon
                        className={theme.icon}
                        value={icon}
                    />
                )}

                <span className={theme.bar} />

                {labelText && (
                    <label className={labelClassName}>
                        {labelText}

                        {required && <span className={theme.required}> * </span>}
                    </label>
                )}

                {hint && (
                    <span
                        hidden={!!labelText}
                        className={theme.hint}
                    >
                        {hint}
                    </span>
                )}

                {error && <span className={theme.error}>{error}</span>}

                {maxLength && (
                    <span className={theme.counter}>
                        {length}/{maxLength}
                    </span>
                )}
            </div>
        )
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { onChange, multiline, maxLength } = this.props
        const target = event.target as HTMLInputElement
        const valueFromEvent = target.value

        // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.
        const haveToTrim = multiline && maxLength && target.value.length > maxLength
        const value = haveToTrim
            ? valueFromEvent.substr(0, maxLength)
            : valueFromEvent

        // propagate to store and therefore to the input
        if (onChange) {
            onChange(value, event)
        }
    }

    handleAutoresize = (): void => {
        const element = this.inputNode.current

        if (!element) {
            return
        }

        if (!isUndefined(this.props.rows)) {
            element.style.height = 'none'
        } else {
            // compute the height difference between inner height and outer height
            const style = window.getComputedStyle(element, null)

            const heightOffset =
                style.boxSizing === 'content-box'
                    ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom))
                    : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)

            // resize the input to its content size
            element.style.height = 'auto'
            element.style.height = `${element.scrollHeight + heightOffset}px`
        }
    }

    handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        // prevent insertion of more characters if we're a multiline input
        // and maxLength exists
        const {
            multiline,
            maxLength,
            onKeyPress,
        } = this.props

        if (multiline && maxLength) {
            const target = event.target as HTMLInputElement

            if (isNull(target.selectionEnd) || isNull(target.selectionStart)) {
                return
            }

            // check if smt is selected, in which case the newly added character would
            // replace the selected characters, so the length of value doesn't actually
            // increase.
            const isReplacing = target.selectionEnd - target.selectionStart

            if (!isReplacing && target.value.length === maxLength) {
                event.preventDefault()
                event.stopPropagation()

                return
            }
        }

        if (onKeyPress) {
            onKeyPress(event)
        }
    }

    blur(): void {
        this.inputNode.current?.blur()
    }

    focus(): void {
        this.inputNode.current?.focus()
    }
}
