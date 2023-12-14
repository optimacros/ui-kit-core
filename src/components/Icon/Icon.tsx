import React from 'react'

import { FontIcon } from '../FontIcon'
import {
    iconCube,
    iconDataBase,
    iconView,
    iconPersonalView,
    iconModule,
    iconFormula,
    iconDashboard,
    iconWorkspaces,
    iconCopy,
    iconRename,
    iconList,
    iconListView,
} from './iconsList'

enum IconValue {
    IconCube = 'iconCube',
    IconDataBase = 'iconDataBase',
    IconView = 'iconView',
    IconPersonalView = 'iconPersonalView',
    IconModule = 'iconModule',
    IconFormula = 'iconFormula',
    IconDashboard = 'iconDashboard',
    IconWorkspaces = 'iconWorkspaces',
    IconCopy = 'iconCopy',
    IconRename = 'iconRename',
    IconList = 'iconList',
    IconListView = 'iconListView',
}

interface Props {
    className?: string;
    value: string;
    onClick?: (event: React.MouseEvent) => void;
    title?: string;
    alt?: string;
    children?: React.ReactElement;
    theme?: Record<string, string>;
    style?: React.CSSProperties;
}

export class Icon extends React.Component<Props> {
    render(): React.ReactElement {
        const { value, ...otherProps } = this.props

        if (this.props.value in this.icons) {
            return (
                <div {...otherProps}>
                    <img
                        src={this.icons[value as IconValue]}
                        alt=""
                    />
                </div>
            )
        }

        return (
            <FontIcon
                value={value}
                {...otherProps}
            />
        )
    }

    icons = {
        iconCube: iconCube,
        iconDataBase: iconDataBase,
        iconView: iconView,
        iconPersonalView: iconPersonalView,
        iconModule: iconModule,
        iconFormula: iconFormula,
        iconDashboard: iconDashboard,
        iconWorkspaces: iconWorkspaces,
        iconCopy: iconCopy,
        iconRename: iconRename,
        iconList: iconList,
        iconListView: iconListView,
    }
}
