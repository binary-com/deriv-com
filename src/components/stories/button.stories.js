import React from 'react'
import Button, { LinkButton } from '../form/button'

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue: 'Button',
            control: { type: 'text' },
        },
        disabled: {
            options: [true, false],
            control: { type: 'radio' },
        },
        loading: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
}

export const Primary = (args) => <Button primary {...args} />

export const Secondary = (args) => <Button secondary {...args} />

export const Tertiary = (args) => <Button tertiary {...args} />

export const Flat = (args) => <Button flat {...args} />

export const White = (args) => <Button white {...args} />

export const Social = (args) => <Button social {...args} />

export const LinkButtonComponent = () => {
    <LinkButton />
}

Social.argTypes = {
    provider: {
        options: ['google', 'facebook'],
        control: { type: 'radio' },
    },
}
