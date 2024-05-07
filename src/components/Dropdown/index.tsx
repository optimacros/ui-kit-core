import classNames from 'classnames'
import BaseDropDown from 'rc-dropdown'
import type { DropdownProps } from 'rc-dropdown/lib/Dropdown'
import React from 'react'

import { Key as KeyboardKey } from '../../types/KeyboardKeyList'

import '../../packages/rc-dropdown/main.css'
import styles from './Dropdown.module.css'

interface Props extends DropdownProps {
    className?: string;
    disabled?: boolean;
    closeOnSelect?: boolean;
}

type State = {
    visible: boolean;
    lastVisible: boolean;
}

export class Dropdown extends React.PureComponent<React.PropsWithChildren<Props>, State> {
    constructor(props: React.PropsWithChildren<Props>) {
        super(props)

        this.state = {
            visible: props.visible ?? false,
            lastVisible: props.visible ?? false,
        }

        document.addEventListener('keydown', this.onGlobalKeyDown)
    }

    componentWillUnmount(): void {
        document.removeEventListener('keydown', this.onGlobalKeyDown)
    }

    static getDerivedStateFromProps(props: React.PropsWithChildren<Props>, state: State): State | null {
        const isVisible = props.visible ?? false

        if (isVisible !== state.lastVisible) {
            return { visible: isVisible, lastVisible: isVisible }
        }

        return null
    }

    render(): React.ReactNode {
        const {
            visible,
            onVisibleChange,
            closeOnSelect,
            ...otherProps
        } = this.props

        if (this.props.disabled) {
            return this.props.children
        }

        const className = classNames(this.props.className, styles.Container)
        const overlayClassName = classNames(this.props.overlayClassName, 'wg-dropdown')

        return (
            <div className={className}>
                <BaseDropDown
                    visible={this.state.visible}
                    onVisibleChange={this.onVisibleChange}
                    onOverlayClick={this.onOverlayClick}
                    {...otherProps}
                    overlayClassName={overlayClassName}
                />
            </div>
        )
    }

    private onVisibleChange = (visible: boolean): void => {
        if (this.props.onVisibleChange) {
            this.props.onVisibleChange(visible)
        }

        this.setState({ visible })
    }

    private onOverlayClick = () => {
        if (this.props.closeOnSelect !== false) {
            this.onVisibleChange(false)
        }
    }

    private onGlobalKeyDown = (event: KeyboardEvent): void => {
        if (this.state.visible && event.key === KeyboardKey.ESCAPE) {
            this.onVisibleChange(false)
        }
    }
}
