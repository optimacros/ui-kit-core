import classnames from 'classnames'
import React, { Component } from 'react'
import { createPortal } from 'react-dom'

import { mergeStyles } from '../../utils/mergeStyle'
import events from '../../utils/react-toolbox-utils/events'
import { getViewport } from '../../utils/react-toolbox-utils/utils'

enum Position {
    bottom = 'BOTTOM',
    horizontal = 'HORIZONTAL',
    left = 'LEFT',
    right = 'RIGHT',
    top = 'TOP',
    vertical = 'VERTICAL',
}

type PositionInfo = {
    top: number;
    left: number;
    position: Position;
}

export type OptionList = {
    className: string;
    delay: number;
    hideOnClick: boolean;
    showOnClick: boolean;
    passthrough: boolean;
    position: Position;
}

export type TooltipTheme = {
    tooltip: string;
    tooltipActive: string;
    tooltipWrapper: string;
}

type TooltipFactoryProps = Partial<OptionList> & { theme: TooltipTheme }

type TooltipProps = {
    className: string;
    onClick: React.MouseEventHandler<HTMLElement>;
    onMouseEnter: React.MouseEventHandler<HTMLElement>;
    onMouseLeave: React.MouseEventHandler<HTMLElement>;
    theme: Record<string, string>;
    tooltip: string | React.ReactNode;
    tooltipDelay: number;
    tooltipHideOnClick: boolean;
    tooltipPosition: Position;
    tooltipShowOnClick: boolean;
    tooltipOffset: number;
}

type State = {
    active: boolean;
    position: Position | undefined;
    visible: boolean;
    top: number;
    left: number;
}

export type TooltipWrapperFC = <T extends React.PropsWithChildren<Partial<TooltipProps>>>(
    ComposedComponent: React.ComponentClass<T> | string
) => React.ComponentClass<T, State>;

const tooltipFactory = (options: TooltipFactoryProps): TooltipWrapperFC => {
    const {
        className: defaultClassName = '',
        delay: defaultDelay = 0,
        hideOnClick: defaultHideOnClick = true,
        showOnClick: defaultShowOnClick = false,
        passthrough: defaultPassthrough = true,
        position: defaultPosition = Position.vertical,
        theme: defaultTheme = {},
    } = { ...options }

    return function <T extends React.PropsWithChildren<Partial<TooltipProps>>>(
        ComposedComponent: React.ComponentClass<T> | string,
    ): React.ComponentClass<T, State> {
        return class TooltippedComponent extends Component<T, State> {
            constructor(props: T) {
                super(props)

                this.tooltipNode = React.createRef()
            }

            private tooltipNode: React.RefObject<HTMLSpanElement>
            private timeout: ReturnType<typeof setTimeout> | undefined

            state = {
                active: false,
                position: this.props.tooltipPosition ?? defaultPosition,
                visible: false,
                top: 0,
                left: 0,
            }

            componentWillUnmount(): void {
                if (this.tooltipNode.current) {
                    events.removeEventListenerOnTransitionEnded(this.tooltipNode.current, this.onTransformEnd)
                }

                if (this.timeout) {
                    clearTimeout(this.timeout)
                }
            }

            render() {
                const {
                    active,
                    left,
                    top,
                    position,
                    visible,
                } = this.state

                const positionClass = `tooltip${position.charAt(0).toUpperCase() + position.slice(1)}`

                const {
                    children,
                    className = defaultClassName,
                    theme: customTheme,
                    onClick,
                    onMouseEnter,
                    onMouseLeave,
                    tooltip,
                    tooltipDelay,
                    tooltipHideOnClick,
                    tooltipPosition,
                    tooltipShowOnClick,
                    ...other
                } = this.props

                const theme = mergeStyles(defaultTheme, this.props.theme)

                const _className = classnames(theme.tooltip, {
                    [theme.tooltipActive]: active,
                    [theme[positionClass]]: theme[positionClass],
                })

                const childProps = {
                    ...other,
                    className,
                    onClick: this.handleClick,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                }

                const shouldPass = typeof ComposedComponent !== 'string' && defaultPassthrough
                const finalProps = (
                    shouldPass
                        ? { ...childProps, theme }
                        : childProps
                ) as T

                return React.createElement(
                    ComposedComponent,
                    finalProps,
                    children,
                    visible && createPortal(
                        <span
                            ref={this.tooltipNode}
                            className={_className}
                            data-react-toolbox="tooltip"
                            style={{ top, left }}
                        >
                            <span className={theme.tooltipInner}>
                                { tooltip }
                            </span>
                        </span>,
                        document.body,
                    ),
                )
            }

            onTransformEnd = (event: TransitionEvent): void => {
                if (event.propertyName === 'transform') {
                    events.removeEventListenerOnTransitionEnded(this.tooltipNode.current, this.onTransformEnd)

                    this.setState({ visible: false })
                }
            }

            getPosition(element: HTMLElement): Position {
                const tooltipPosition = this.props.tooltipPosition ?? defaultPosition

                if (tooltipPosition === Position.horizontal) {
                    const origin = element.getBoundingClientRect()
                    const { width: ww } = getViewport()
                    const toRight = origin.left < ww / 2 - origin.width / 2

                    return toRight
                        ? Position.right
                        : Position.left
                }

                if (tooltipPosition === Position.vertical) {
                    const origin = element.getBoundingClientRect()
                    const { height: wh } = getViewport()
                    const toBottom = origin.top < wh / 2 - origin.height / 2

                    return toBottom
                        ? Position.bottom
                        : Position.top
                }

                return tooltipPosition
            }

            activate({ top, left, position }: PositionInfo): void {
                if (this.timeout) {
                    clearTimeout(this.timeout)
                }

                this.setState({ visible: true, position })

                this.timeout = setTimeout(() => {
                    this.setState({ active: true, top, left })
                }, this.props.tooltipDelay ?? defaultDelay)
            }

            deactivate(): void {
                if (this.timeout) {
                    clearTimeout(this.timeout)
                }

                if (this.state.active) {
                    events.addEventListenerOnTransitionEnded(this.tooltipNode.current, this.onTransformEnd)

                    this.setState({ active: false })
                } else if (this.state.visible) {
                    this.setState({ visible: false })
                }
            }

            calculatePosition(element: HTMLElement): PositionInfo {
                const position = this.getPosition(element)
                const { top, left, height, width } = element.getBoundingClientRect()
                const xOffset = window.scrollX || window.pageXOffset
                const yOffset = window.scrollY || window.pageYOffset
                const tooltipOffset = this.props.tooltipOffset || 0

                switch (position) {
                    case (Position.bottom):
                        return {
                            top: top + height + yOffset,
                            left: left + width / 2 + xOffset + tooltipOffset,
                            position,
                        }
                    case (Position.top):
                        return {
                            top: top + yOffset,
                            left: left + width / 2 + xOffset + tooltipOffset,
                            position,
                        }
                    case (Position.left):
                        return {
                            top: top + height / 2 + yOffset,
                            left: left + xOffset,
                            position,
                        }
                    case (Position.right):
                        return {
                            top: top + height / 2 + yOffset,
                            left: left + width + xOffset,
                            position,
                        }
                    default:
                        return {
                            top: 0,
                            left: 0,
                            position,
                        }
                }
            }

            handleMouseEnter = (event: React.MouseEvent<HTMLElement>): void => {
                this.activate(this.calculatePosition(event.currentTarget as HTMLElement))

                if (this.props.onMouseEnter) {
                    this.props.onMouseEnter(event)
                }
            }

            handleMouseLeave = (event: React.MouseEvent<HTMLElement>): void => {
                this.deactivate()

                if (this.props.onMouseLeave) {
                    this.props.onMouseLeave(event)
                }
            }

            handleClick = (event: React.MouseEvent<HTMLElement>): void => {
                if ((this.props.tooltipHideOnClick ?? defaultHideOnClick) && this.state.active) {
                    this.deactivate()
                }

                if ((this.props.tooltipShowOnClick ?? defaultShowOnClick) && !this.state.active) {
                    this.activate(this.calculatePosition(event.currentTarget as HTMLElement))
                }

                if (this.props.onClick) {
                    this.props.onClick(event)
                }
            }
        }
    }
}

export default tooltipFactory
