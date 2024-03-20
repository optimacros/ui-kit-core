import { Meta, StoryObj } from '@storybook/react'

import { HeaderContainer } from './index'

const meta: Meta<typeof HeaderContainer> = {
    title: 'UI Kit lite/HeaderContainer',
    component: HeaderContainer,
}
export default meta

type Story = StoryObj<typeof HeaderContainer>

const argTypes = {}

export const Container: Story = {
    args: {
        children: (
            <>
                <div>Текст</div>

                <div>Текст 2</div>

                <div>Текст 3</div>
            </>
        ),
    },
    argTypes,
}
