import classNames from 'classnames'
import React from 'react'

import styles from './Toolbar.module.css'

type Props = {
    className?: string;
    align?: 'right' | 'center' | 'left' | 'rightInRow';
    small?: boolean;
}

export class Toolbar extends React.PureComponent<React.PropsWithChildren<Props>> {
    render(): React.JSX.Element {
        const className = classNames(
            {
                [styles.Toolbar]: true,
                [styles.Toolbar__small]: this.props.small ?? false,
                [styles[`Toolbar__align_${this.props.align}`]]: this.props.align ?? 'left',
            },
            this.props.className,
        )

        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}
