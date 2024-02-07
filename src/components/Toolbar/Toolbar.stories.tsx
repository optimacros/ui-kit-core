import { Meta, StoryObj } from '@storybook/react'

import { Toolbar } from './index'
import { Button } from '../Button'

const meta: Meta<typeof Toolbar> = {
    title: 'UI Kit lite/Toolbar',
    component: Toolbar,
}
export default meta

type Story = StoryObj<typeof Toolbar>

const argTypes = {}

export const LeftToolbar: Story = {
    args: {
        align: 'center',
        children: (
            <>
                <Button
                    label="cancel"
                />

                <Button
                    label="submit"
                    warning
                />
            </>
        ),
    },
    argTypes,
}

