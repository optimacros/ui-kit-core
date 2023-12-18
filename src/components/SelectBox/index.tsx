import classNames from 'classnames'
import { find, indexOf, map, without, filter } from 'lodash'
import React, { Component } from 'react'

import type { SelectBoxTheme, SelectBoxProps } from './SelectBox'
import { SelectBoxComponent } from './SelectBox'
import { mergeStyles } from '../../utils/mergeStyle'
import { Chip } from '../Chip/index'
import type { InputTheme } from '../Input'

// order of styles import is important
// eslint-disable-next-line
import themeStyle from './theme.module.css'
// eslint-disable-next-line
import style from './SelectBox.module.css'

export interface Props extends Omit<SelectBoxProps, 'theme'> {
    theme?: Partial<SelectBoxTheme & InputTheme>;
    multiSelect?: boolean;
    onChange?: (value: string | number | (string | number)[], event?: React.SyntheticEvent) => void;
}

export class SelectBox extends Component<Props> {
    render(): React.JSX.Element {
        const {
            label,
            className,
            multiSelect,
            theme: customTheme = {},
            ...otherProps
        } = this.props

        let theme = mergeStyles(style, customTheme) as Required<SelectBoxTheme>
        theme = mergeStyles(themeStyle, theme) as Required<SelectBoxTheme>

        const classNameContainer = classNames(className, customTheme.Container ?? {})

        return (
            <div className={classNameContainer}>
                <div className={theme.Title}>
                    {label}
                </div>

                <SelectBoxComponent
                    {...otherProps}
                    theme={theme}
                    auto={false}
                    source={this.elements}
                    onChange={this.onChange}
                />

                {this.renderChip()}
            </div>
        )
    }

    renderChip(): React.JSX.Element | null {
        if (!this.props.multiSelect) {
            return null
        }

        return <div>{this.renderList()}</div>
    }

    renderList(): (React.JSX.Element | null)[] | null {
        if (!Array.isArray(this.props.value)) {
            return null
        }

        return map(this.props.value, (value) => {
            const element = find(this.source, { value })

            if (!element) {
                return null
            }

            return (
                <Chip
                    key={value}
                    onDeleteClick={() => this.onDelete(value)}
                    deletable
                >
                    {element.label}
                </Chip>
            )
        })
    }

    private onChange = (value: string | number, event: React.SyntheticEvent): void => {
        let newValue: string | number | (string | number)[] = value

        if (this.props.multiSelect && Array.isArray(this.props.value)) {
            newValue = [...this.props.value, value]
        }

        if (this.props.onChange) {
            this.props.onChange(newValue, event)
        }
    }

    private onDelete(value: string | number): void {
        if (!Array.isArray(this.props.value)) {
            return
        }

        const newValue = without(this.props.value, value)

        if (this.props.onChange) {
            this.props.onChange(newValue)
        }
    }

    private get elements(): SelectBoxProps['source'] {
        if (this.props.multiSelect && Array.isArray(this.props.value)) {
            return filter(this.source, (option) => indexOf(
                this.props.value as (string | number)[],
                option.value,
            ) == -1)
        }

        return this.source
    }

    private get source(): SelectBoxProps['source'] {
        return this.props.source || []
    }
}
