import classnames from 'classnames'
import React from 'react'

import { mergeStyles } from '../../utils/mergeStyle'

import styles from './theme.module.css'

type Theme = {
    avatar: string;
    chip: string;
    deletable: string;
    delete: string;
    deleteIcon: string;
    deleteX: string;
}

type Props = {
    className: string;
    deletable: boolean;
    onDeleteClick: React.MouseEventHandler<SVGSVGElement>;
    theme: Partial<Theme>;
    settingsDialog: React.JSX.Element;
    customDeleteIcon: React.JSX.Element;
}

export class Chip extends React.Component<React.PropsWithChildren<Partial<Props>>> {
    render(): React.JSX.Element {
        const {
            children,
            className = '',
            deletable = false,
            onDeleteClick,
            settingsDialog,
            theme: customTheme,
            customDeleteIcon,
            ...other
        } = this.props

        const theme = mergeStyles(customTheme, styles) as Required<Theme>

        const isStringChildren = typeof children === 'string'
        const classes = classnames(
            theme.chip,
            {
                [theme.deletable]: deletable,
            },
            className,
        )

        return (
            <div
                {...other}
                data-react-toolbox="chip"
                className={classes}
            >
                {isStringChildren
                    ? <span>{ children }</span>
                    : children
                }

                <div className={styles.iconsContainer}>
                    {settingsDialog && (
                        <span className={styles.customIconsContainer}>
                            {settingsDialog}
                        </span>
                    )}

                    {deletable && this.renderDeleteIcon()}
                </div>
            </div>
        )
    }

    renderDeleteIcon(): React.JSX.Element {
        if (this.props.customDeleteIcon) {
            return (
                <span className={styles.customIconsContainer}>
                    {this.props.customDeleteIcon}
                </span>
            )
        }

        return (
            <svg
                viewBox="0 0 40 40"
                className={styles.deleteIcon}
                onClick={this.props.onDeleteClick}
            >
                <path
                    className={styles.deleteX}
                    d="M 12,12 L 28,28 M 28,12 L 12,28"
                />
            </svg>
        )
    }
}
