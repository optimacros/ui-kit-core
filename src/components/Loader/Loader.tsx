import classnames from 'classnames'
import React, { Component } from 'react'

import { mergeStyles } from '../../utils/mergeStyle'
import prefixer from '../../utils/react-toolbox-utils/prefixer'

import style from './theme.module.css'

type Theme = {
    buffer?: string;
    circle?: string;
    circular?: string;
    indeterminate?: string;
    linear?: string;
    multicolor?: string;
    path?: string;
    value?: string;
}

type Props = {
    buffer?: number;
    className?: string;
    max?: number;
    min?: number;
    mode?: 'determinate' | 'indeterminate';
    type?: 'linear' | 'circular';
    value?: number;
    multicolor?: boolean;
    theme?: Theme;
}

export class Loader extends Component<Props> {
    min = 0;
    max = 100;

    render(): React.ReactElement {
        if (this.props.min) {
            this.min = this.props.min
        }

        if (this.props.max) {
            this.max = this.props.max
        }

        const {
            className = '',
            mode = 'indeterminate',
            multicolor = false,
            type = 'linear',
            theme: userTheme,
            value = 0,
        } = this.props

        const theme = mergeStyles(userTheme, style) as Required<Theme>

        const _className = classnames(
            theme[type],
            {
                [theme.indeterminate]: mode === 'indeterminate',
                [theme.multicolor]: multicolor,
            },
            className
        )

        return (
            <div
                data-react-toolbox="progress-bar"
                aria-valuenow={value}
                aria-valuemin={this.min}
                aria-valuemax={this.max}
                className={_className}
            >
                {type === 'circular'
                    ? this.renderCircular(theme)
                    : this.renderLinear(theme)}
            </div>
        )
    }

    renderCircular(theme: Theme): React.ReactElement {
        return (
            <svg
                className={theme.circle}
                viewBox="0 0 60 60"
            >
                <circle
                    className={theme.path}
                    style={this.circularStyle()}
                    cx="30"
                    cy="30"
                    r="25"
                />
            </svg>
        )
    }

    renderLinear(theme: Theme): React.ReactElement {
        const { buffer = 0, value } = this.linearStyle()

        return (
            <div>
                <span
                    data-ref="buffer"
                    className={theme.buffer}
                    style={buffer as React.CSSProperties}
                />

                <span
                    data-ref="value"
                    className={theme.value}
                    style={value}
                />
            </div>
        )
    }

    calculateRatio(value: number): number {
        if (value < this.min) {
            return 0
        }

        if (value > this.max) {
            return 1
        }

        return (value - this.min) / (this.max - this.min)
    }

    circularStyle(): { 'strokeDasharray': string } | undefined {
        if (this.props.mode !== 'indeterminate') {
            return {
                strokeDasharray: `${2 * Math.PI * 25 * this.calculateRatio(this.props.value ?? 0)}, 400`,
            }
        }

        return undefined
    }

    linearStyle(): { 'buffer': Record<string, string>; 'value': Record<string, string> } | Record<string, never> {
        if (this.props.mode !== 'indeterminate') {
            return {
                buffer: prefixer({ transform: `scaleX(${this.calculateRatio(this.props.buffer ?? 0)})` }),
                value: prefixer({ transform: `scaleX(${this.calculateRatio(this.props.value ?? 0)})` }),
            }
        }

        return {}
    }
}
