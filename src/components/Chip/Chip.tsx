import classnames from 'classnames'
import React from 'react'

import { mergeStyles } from '../../utils/mergeStyle'

import style from './theme.module.css'

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
    onDeleteClick: React.MouseEventHandler<HTMLSpanElement>;
    theme: Partial<Theme>;
}

export class Chip extends React.Component<React.PropsWithChildren<Partial<Props>>> {
    render(): React.ReactElement {
        const {
            children,
            className = '',
            deletable = false,
            onDeleteClick,
            theme: customTheme,
            ...other
        } = this.props

        const theme = mergeStyles(customTheme, style) as Required<Theme>

        const isStringChildren = typeof children === 'string'
        const classes = classnames(
            theme.chip,
            {
                [theme.deletable]: deletable,
            },
            className
        )

        return (
            <div
                {...other}
                data-react-toolbox="chip"
                className={classes}
            >
                {isStringChildren
                    ? <span>{children}</span>
                    : children
                }

                {deletable && (
                    <span
                        role="none"
                        className={theme.delete}
                        onClick={onDeleteClick}
                    >
                        <svg viewBox="0 0 40 40"
                            className={theme.deleteIcon}
                        >
                            <path className={theme.deleteX}
                                d="M 12,12 L 28,28 M 28,12 L 12,28"
                            />
                        </svg>
                    </span>
                )}
            </div>
        )
    }
}
