import classNames from 'classnames'
import { isNull, isUndefined, debounce } from 'lodash'
import React from 'react'
import type { TextareaHTMLAttributes, HTMLInputTypeAttribute } from 'react'

import { Callback, InputProps, InputState, InputTheme } from './models'
import { mergeStyles } from '../../utils/mergeStyle'
import { isValuePresent } from '../../utils/react-toolbox-utils'
import { FontIcon } from '../FontIcon'

// order of styles import is important
// eslint-disable-next-line
import inputThemeStyle from './inputTheme.module.css'
// eslint-disable-next-line
import inputDefaultStyle from './Input.module.css'

export class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props)

        this.inputNode = React.createRef()

        this.state = { callbacks: this.getCallbacks() }
    }

    inputNode: React.RefObject<HTMLInputElement | HTMLTextAreaElement>

    componentDidMount(): void {
        if (this.props.multiline) {
            window.addEventListener('resize', this.handleAutoresize)
            this.handleAutoresize()
        }
    }

    componentDidUpdate(prevProps: InputProps): void {
        // resize the textarea, if necessary
        if (this.props.multiline) {
            window.addEventListener('resize', this.handleAutoresize)
            this.handleAutoresize()
        }

        if (!this.props.multiline && prevProps.multiline) {
            window.addEventListener('resize', this.handleAutoresize)
        } else if (this.props.multiline && !prevProps.multiline) {
            window.removeEventListener('resize', this.handleAutoresize)
        }
    }

    componentWillUnmount(): void {
        if (this.props.multiline) {
            window.removeEventListener('resize', this.handleAutoresize)
        }

        Object.values(this.state.callbacks).forEach(callback => {
            if (callback && 'cancel' in callback) {
                callback.cancel()
            }
        })
    }

    render(): React.JSX.Element {
        const {
            children,
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
            oneLineError,
            hint = '',
            icon,
            label,
            maxLength,
            theme: customTheme,
            ...others
        } = this.props

        const { onKeyPress, onKeyDown } = this.state.callbacks

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
                [theme.oneLineError]: oneLineError,
                [theme.hidden]: type === 'hidden',
                [theme.withIcon]: icon,
            },
            this.props.className,
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
            value: isNull(value)
                ? ''
                : value,
        }

        if (!multiline) {
            elementProps.maxLength = maxLength
            elementProps.onKeyDown = onKeyDown ?? onKeyPress
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
                    <label
                        title={
                            typeof labelText === 'string'
                                ? labelText
                                : ''
                        }
                        className={labelClassName}
                    >
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

                {!oneLineError && error && <span className={theme.error}>{error}</span>}

                {oneLineError && error
                    ? (
                        <div className={theme.error}>{error}</div>
                    )
                    : (
                        <div className={theme.hidden} />
                    )}

                {maxLength && (
                    <span className={theme.counter}>
                        {length}/{maxLength}
                    </span>
                )}
            </div>
        )
    }

    getCallbacks = () => {
        const { debounce: debounceProp } = this.props

        const getCallback: <T extends Callback>(key: T) => InputProps[T] = (key) => {
            if (!this.props[key]) {
                return undefined
            }

            const callback = this.props[key] as NonNullable<InputProps[Callback]>

            if (typeof debounceProp === 'number') {
                return debounce(callback, debounceProp)
            }

            if (typeof debounceProp === 'object' && typeof debounceProp[key] === 'number') {
                return debounce(callback, debounceProp[key])
            }

            return this.props[key]
        }

        return {
            onChange: getCallback('onChange'),
            onKeyPress: getCallback('onKeyPress'),
            onKeyDown: getCallback('onKeyDown'),
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { multiline, maxLength } = this.props
        const { onChange } = this.state.callbacks
        const target = event.target as HTMLInputElement
        const valueFromEvent = target.value

        // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.
        const haveToTrim = multiline && maxLength && target.value.length > maxLength
        const value = haveToTrim
            ? valueFromEvent.substring(0, maxLength)
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
        } = this.props

        const { onKeyPress, onKeyDown } = this.state.callbacks

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

        if (onKeyDown) {
            onKeyDown(event)
        }
    }

    blur(): void {
        this.inputNode.current?.blur()
    }

    focus(): void {
        this.inputNode.current?.focus()
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export * from './models'
