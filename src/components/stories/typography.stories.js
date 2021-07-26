import React from 'react'
// import { Story } from '@storybook/react'
import { Text, Header, LinkText, SpanLinkText } from 'components/elements/typography'

export default {
    title: 'Typography',
    argTypes: {
        children: {
            defaultValue: 'Typography',
            control: { type: 'text' },
        },
    },
}

export const HeaderComponent = (args) => {
    return <Header type="display-title" {...args} />
}
HeaderComponent.storyName = 'Header'

export const TextComponent = (args) => {
    return <Text {...args} />
}
TextComponent.storyName = 'Text'

export const LinkTextComponent = (args) => {
    return <LinkText {...args} />
}
LinkTextComponent.storyName = 'LinkText'

export const SpanLinkTextComponent = (args) => {
    return <SpanLinkText {...args} />
}
SpanLinkTextComponent.storyName = 'SpanLinkText'
