import classnames from 'classnames'
import { omit } from 'lodash'
import React, { Component } from 'react'

import { mergeStyles } from '../../utils/mergeStyle'
import events from '../../utils/react-toolbox-utils/events'
import prefixer from '../../utils/react-toolbox-utils/prefixer'

export type Theme = {
    ripple: string;
    rippleActive: string;
    rippleRestarting: string;
    rippleWrapper: string;
}

export type Options = {
    centered: boolean;
    className: string;
    multiple: boolean;
    passthrough: boolean;
    spread: number;
}

type RippleFactoryProps = Partial<Options> & {
    theme: Theme;
}

export interface RippleProps {
    disabled: boolean;
    onMouseDown: React.MouseEventHandler<HTMLElement>;
    onRippleEnded: (event: TransitionEvent) => void;
    onTouchStart: React.TouchEventHandler<HTMLElement>;
    onMouseUp: React.MouseEventHandler<HTMLElement>;
    onTouchEnd: React.TouchEventHandler<HTMLElement>;
    ripple: boolean;
    rippleCentered: boolean;
    rippleClassName: string;
    rippleMultiple: boolean;
    rippleSpread: number;
    theme: Record<string, string>;
}

type RippleItem = {
    active: boolean;
    restarting: boolean;
    left: number;
    top: number;
    width: number;
    endRipple: () => void;
}

type State = {
    ripples: Record<string, RippleItem | never>;
}

export type RippleWrapperFC = <T extends React.PropsWithChildren<Partial<RippleProps>>>(
    ComposedComponent: React.ComponentClass<T> | React.FC<T>
) => React.ComponentClass<T, State>;

const rippleFactory = (options: RippleFactoryProps): RippleWrapperFC => {
    const {
        centered: defaultCentered = false,
        className: defaultClassName = '',
        multiple: defaultMultiple = true,
        passthrough: defaultPassthrough = true,
        spread: defaultSpread = 2,
        theme: defaultTheme,
    } = options

    return function <T extends React.PropsWithChildren<Partial<RippleProps>>>(
        ComposedComponent: React.ComponentClass<T> | React.FC<T>,
    ): React.ComponentClass<T, State> {
        return class RippledComponent extends Component<T, State> {
            state: State = {
                ripples: {},
            }
            /**
             * Variable to store the ripple references
             */
            private rippleNodes: Record<string, HTMLSpanElement | null | never> = {}

            private currentCount = 0
            private touchCache = false

            componentDidUpdate(prevProps: Partial<RippleProps>, prevState: State): void {
                // If a new ripple was just added, add a remove event listener to its animation
                if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
                    this.addRippleRemoveEventListener(this.getLastKey())
                }
            }

            componentWillUnmount(): void {
                // Remove document event listeners for ripple if they still exists
                Object.keys(this.state.ripples).forEach((key) => {
                    this.state.ripples[key].endRipple()
                })
            }

            render(): React.JSX.Element {
                const {
                    children,
                    disabled = false,
                    ripple = true,
                    onRippleEnded,
                    rippleCentered,
                    rippleClassName = defaultClassName,
                    rippleMultiple,
                    rippleSpread,
                    theme = {},
                    ...other
                } = this.props

                const { ripples } = this.state

                const childRipples = Object.keys(ripples).map((key) => {
                    return this.renderRipple(key, rippleClassName, ripples[key])
                })

                const childProps = {
                    onMouseDown: this.handleMouseDown,
                    onTouchStart: this.handleTouchStart,
                    ...other,
                }
                const finalProps = (defaultPassthrough
                    ? { ...childProps, theme, disabled }
                    : childProps) as T

                return !ripple
                    ? React.createElement(ComposedComponent, finalProps, children)
                    : React.createElement(ComposedComponent, finalProps, [children, childRipples])
            }

            private renderRipple(
                key: string,
                className: string,
                { active, left, restarting, top, width }: RippleItem,
            ): React.JSX.Element {
                const theme = mergeStyles(defaultTheme, this.props.theme)

                const scale = restarting
                    ? 0
                    : 1
                const transform = `translate3d(${-width / 2 + left}px, ${-width / 2 + top}px, 0) scale(${scale})`
                const updatedClassName = classnames(
                    theme.ripple,
                    {
                        [theme.rippleActive]: active,
                        [theme.rippleRestarting]: restarting,
                    },
                    className,
                )

                return (
                    <span
                        key={key}
                        data-react-toolbox="ripple"
                        className={theme.rippleWrapper}
                    >
                        <span
                            className={updatedClassName}
                            ref={(node) => {
                                if (node) {
                                    this.rippleNodes[key] = node
                                }
                            }}
                            style={prefixer(
                                { transform },
                                {
                                    width: `${width}px`,
                                    height: `${width}px`,
                                },
                            )}
                        />
                    </span>
                )
            }

            /**
             * Find out a descriptor object for the ripple element being created depending on
             * the position where the it was triggered and the component's dimensions.
             *
             * @param {Number} x Coordinate x in the viewport where ripple was triggered
             * @param {Number} y Coordinate y in the viewport where ripple was triggered
             * @return {Object} Descriptor element including position and size of the element
             */
            private getDescriptor(x: number, y: number, element: HTMLElement): {
                left: number;
                top: number;
                width: number;
            } {
                const sizeData = element.getBoundingClientRect()

                if (!sizeData) {
                    return { left: 0, top: 0, width: 0 }
                }

                const { left, top, height, width } = sizeData

                const {
                    rippleCentered: centered = defaultCentered,
                    rippleSpread: spread = defaultSpread,
                } = this.props

                return {
                    left: centered
                        ? 0
                        : x - left - width / 2,
                    top: centered
                        ? 0
                        : y - top - height / 2,
                    width: width * spread,
                }
            }

            /**
             * Increments and internal counter and returns the next value as a string. It
             * is used to assign key references to new ripple elements.
             *
             * @return {String} Key to be assigned to a ripple.
             */
            private getNextKey(): string {
                this.currentCount = this.currentCount
                    ? this.currentCount + 1
                    : 1

                return `ripple${this.currentCount}`
            }

            /**
             * Return the last generated key for a ripple element. When there is only one ripple
             * and to get the reference when a ripple was just created.
             *
             * @return {String} The last generated ripple key.
             */
            private getLastKey(): string {
                return `ripple${this.currentCount}`
            }

            /**
             * Determine if a ripple should start depending if its a touch event. For mobile both
             * touchStart and mouseDown are launched so in case is touch we should always trigger
             * but if its not we should check if a touch was already triggered to decide.
             *
             * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
             * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
             */
            private rippleShouldTrigger(isTouch: boolean): boolean {
                const shouldStart = isTouch
                    ? true
                    : !this.touchCache

                this.touchCache = isTouch

                return shouldStart
            }

            /**
             * Start a ripple animation on an specific point with touch or mouse events. First
             * decides if the animation should trigger. If the ripple is multiple or there is no
             * ripple present, it creates a new key. If it's a simple ripple and already exists,
             * it just restarts the current ripple. The animation happens in two state changes
             * to allow triggering via css.
             *
             * @param {Number} x Coordinate X on the screen where animation should start
             * @param {Number} y Coordinate Y on the screen where animation should start
             * @param {Boolean} isTouch Use events from touch or mouse.
             */
            private animateRipple(x: number, y: number, isTouch: boolean, element: HTMLElement): void {
                if (this.rippleShouldTrigger(isTouch)) {
                    const { top, left, width } = this.getDescriptor(x, y, element)
                    const noRipplesActive = Object.keys(this.state.ripples).length === 0
                    const key = this.props.rippleMultiple ?? defaultMultiple ?? noRipplesActive
                        ? this.getNextKey()
                        : this.getLastKey()
                    const endRipple = this.addRippleDeactivateEventListener(isTouch, key)
                    const initialState = {
                        active: false,
                        restarting: true,
                        top,
                        left,
                        width,
                        endRipple,
                    }
                    const runningState = { active: true, restarting: false }

                    this.setState(
                        (state) => {
                            return {
                                ripples: {
                                    ...state.ripples,
                                    [key]: initialState,
                                },
                            }
                        },
                        () => {
                            if (this.rippleNodes[key]) {
                                // NOTE: Не понимаю, что здесь происходит, почему без этой строчки нет анимации
                                // eslint-disable-next-line
                                this.rippleNodes[key]?.offsetWidth
                            }

                            this.setState((state) => ({
                                ripples: {
                                    ...state.ripples,
                                    [key]: {
                                        ...state.ripples[key],
                                        ...runningState,
                                    },
                                },
                            }))
                        },
                    )
                }
            }

            /**
             * Add an event listener to the reference with given key so when the animation transition
             * ends we can be sure that it finished and it can be safely removed from the state.
             * This function is called whenever a new ripple is added to the component.
             *
             * @param {String} rippleKey Is the key of the ripple to add the event.
             */
            private addRippleRemoveEventListener(rippleKey: string): void {
                const rippleNode = this.rippleNodes[rippleKey]

                const onOpacityEnd = (event: TransitionEvent): void => {
                    if (event.propertyName === 'opacity') {
                        if (this.props.onRippleEnded) {
                            this.props.onRippleEnded(event)
                        }

                        events.removeEventListenerOnTransitionEnded(this.rippleNodes[rippleKey], onOpacityEnd)

                        delete this.rippleNodes[rippleKey]

                        this.setState((state) => ({
                            ripples: omit(state.ripples, [rippleKey]),
                        }))
                    }
                }

                events.addEventListenerOnTransitionEnded(rippleNode, onOpacityEnd)
            }

            /**
             * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
             * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
             * ending function is created from a factory function and returned.
             *
             * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
             * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
             * @return {Function} Callback function that deactivates the ripple and removes the listener
             */
            private addRippleDeactivateEventListener(isTouch: boolean, rippleKey: string): () => void {
                const eventType = isTouch
                    ? 'touchend'
                    : 'mouseup'
                const endRipple = this.createRippleDeactivateCallback(eventType, rippleKey)

                document.addEventListener(eventType, endRipple)

                return endRipple
            }

            /**
             * Generates a function that can be called to deactivate a ripple and remove its finishing
             * event listener. If is generated because we need to store it to be called on unmount in case
             * the ripple is still running.
             *
             * @param {String} eventType Is the event type that can be touchend or mouseup
             * @param {String} rippleKey Is the key representing the ripple
             * @return {Function} Callback function that deactivates the ripple and removes the listener
             */
            private createRippleDeactivateCallback(eventType: string, rippleKey: string): () => void {
                const endRipple = () => {
                    document.removeEventListener(eventType, endRipple)

                    this.setState((state) => {
                        return {
                            ripples: {
                                ...state.ripples,
                                [rippleKey]: {
                                    ...state.ripples[rippleKey],
                                    active: false,
                                },
                            },
                        }
                    })
                }

                return endRipple
            }

            private doRipple = () => !this.props.disabled && (this.props.ripple ?? true)

            private handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
                if (this.props.onMouseDown) {
                    this.props.onMouseDown(event)
                }

                if (this.doRipple()) {
                    const { x, y } = events.getMousePosition(event)
                    this.animateRipple(x, y, false, event.target as HTMLElement)
                }
            }

            private handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
                if (this.props.onTouchStart) {
                    this.props.onTouchStart(event)
                }

                if (this.doRipple()) {
                    const { x, y } = events.getTouchPosition(event)
                    this.animateRipple(x, y, true, event.target as HTMLElement)
                }
            }
        }
    }
}

export default rippleFactory
