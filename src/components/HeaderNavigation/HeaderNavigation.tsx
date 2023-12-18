import React, { Component } from 'react'

import { Icon } from '../Icon'

import styles from './HeaderNavigation.module.css'

type Props = {
    title: string;
    onClick: () => void;
}

export class HeaderNavigation extends Component<Props> {
    render(): React.ReactElement {
        return (
            <div
                role="none"
                className={styles.Container}
                onClick={this.props.onClick}
                title={this.props.title}
            >
                <div className={styles.Element}>
                    <div className={styles.Element_IconContainer}>
                        <Icon
                            className={styles.Element_Icon}
                            value="menu"
                        />
                    </div>

                    <div className={styles.Element_Title}>
                        {this.props.title}
                    </div>
                </div>
            </div>
        )
    }
}
