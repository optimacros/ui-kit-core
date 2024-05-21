import classnames from 'classnames'
import type { CSSProperties, MouseEventHandler, TouchEventHandler } from 'react'
import React from 'react'

import type { Theme } from './index'

interface BoxProps {
    theme: Required<Theme>;
    checked?: boolean;
    disabled?: boolean;
    onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
    style?: CSSProperties;
}

export const Box = (props: React.PropsWithChildren<BoxProps>): React.JSX.Element => (
    <div
        role="none"
        data-react-toolbox="check"
        className={classnames(
            props.theme.check,
            { [props.theme.checked]: props.checked },
        )}
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={props.style}
    >
        {props.children}
    </div>
)
