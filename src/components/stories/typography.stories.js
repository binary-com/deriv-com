import React from 'react'
import { Text, Header, LinkText, SpanLinkText } from 'components/elements/typography'

export default {
    title: 'Typography',
    argTypes: {
        children: {
            defaultValue: 'Typography',
            control: { type: 'text' },
        },
        align: {
            name: 'text-align',
            control: { type: 'text' },
        },
        padding: {
            control: { type: 'text' },
        },
        color: {
            control: { type: 'text' },
        },
        lh: {
            name: 'line-height',
            control: { type: 'text' },
        },
        max_width: {
            name: 'max-width',
            control: { type: 'text' },
        },
        min_width: {
            name: 'min-width',
            control: { type: 'text' },
        },
    },
}

/***********   HEADER   ***********/
export const HeaderComponent = (args) => {
    return <Header {...args} />
}
HeaderComponent.storyName = 'Header'

HeaderComponent.argTypes = {
    as: {
        control: { type: 'text' },
    },
    weight: {
        name: 'font-weight',
        control: { type: 'text' },
    },
    size: {
        name: 'font-size',
        control: { type: 'text' },
    },
    type: {
        control: { type: 'text' },
    },
    width: {
        control: { type: 'text' },
    },
}

/***********   TEXT   ***********/
export const TextComponent = (args) => {
    return <Text {...args} />
}
TextComponent.storyName = 'Text'

TextComponent.argTypes = {
    weight: {
        name: 'font-weight',
        control: { type: 'text' },
    },
    size: {
        name: 'font-size',
        control: { type: 'text' },
    },
    width: {
        control: { type: 'text' },
    },
}

/***********   LINK_TEXT   ***********/
export const LinkTextComponent = (args) => {
    return <LinkText {...args} />
}
LinkTextComponent.storyName = 'LinkText'

LinkTextComponent.argTypes = {
    weight: {
        name: 'font-weight',
        control: { type: 'text' },
    },
    size: {
        name: 'font-size',
        control: { type: 'text' },
    },
    width: {
        control: { type: 'text' },
    },
}

/***********   SPAN_LINK_TEXT   ***********/
export const SpanLinkTextComponent = (args) => {
    return <SpanLinkText {...args} />
}
SpanLinkTextComponent.storyName = 'SpanLinkText'

SpanLinkTextComponent.argTypes = {
    weight: {
        name: 'font-weight',
        control: { type: 'text' },
    },
    size: {
        name: 'font-size',
        control: { type: 'text' },
    },
    width: {
        control: { type: 'text' },
    },
}
