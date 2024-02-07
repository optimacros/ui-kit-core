import classNames from 'classnames'
import React, { Component } from 'react'

import styles from './HeaderContainer.module.css'

type Props = {
    className: string;
}

export class HeaderContainer extends Component<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element {
        const className = classNames(styles.Container, this.props.className)

        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}
