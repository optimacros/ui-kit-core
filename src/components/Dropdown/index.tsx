import classNames from 'classnames'
import BaseDropDown from 'rc-dropdown'
import type { DropdownProps } from 'rc-dropdown/lib/Dropdown'
import React from 'react'

import { Key as KeyboardKey } from '../../types/KeyboardKeyList'

import 'rc-dropdown/assets/index.css'
import styles from './Dropdown.module.css'

interface Props extends DropdownProps {
    className?: string;
    disabled?: boolean;
}

type State = {
    visible: boolean;
}

export class Dropdown extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            visible: props.visible ?? false,
        }

        document.addEventListener('keydown', this.onGlobalKeyDown)
    }

    componentWillUnmount(): void {
        document.removeEventListener('keydown', this.onGlobalKeyDown)
    }

    static getDerivedStateFromProps(props: DropdownProps, state: State): State | null {
        if (props.visible !== state.visible) {
            return { visible: props.visible ?? false }
        }

        return null
    }

    render(): React.ReactNode {
        const {
            onVisibleChange,
            ...otherProps
        } = this.props

        if (this.props.disabled) {
            return this.props.children
        }

        const className = classNames(this.props.className, styles.Container)

        return (
            <div className={className}>
                <BaseDropDown
                    {...otherProps}
                    onVisibleChange={this.onVisibleChange}
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

    private onGlobalKeyDown = (event: KeyboardEvent): void => {
        if (this.state.visible && event.key === KeyboardKey.ESCAPE) {
            this.onVisibleChange(false)
        }
    }
}
