import classNames from 'classnames'
import React, { PureComponent } from 'react'

import styles from './Divider.module.css'

type Props = {
    vertical: boolean;
}

export class Divider extends PureComponent<Props> {
    render(): React.JSX.Element {
        const className = classNames({
            [styles.Divider]: true,
            [styles.Divider__vertical]: this.props.vertical,
        })

        return <hr className={className} />
    }
}
