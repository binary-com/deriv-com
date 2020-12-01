import React from 'react'
import styled, { css } from 'styled-components'
import { LocalizedLink } from 'components/localization'
import { Margins, Paddings } from 'themes/function'
import device from 'themes/device'

const createElement = React.createElement

export const BaseLink = css`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`

export const BaseElement = css`
    text-align: ${(props) => props.align || 'left'};
    padding: ${(props) => props.padding || ''};

    /* prettier-ignore */
    color: var(--color-${(props) => props.color || 'black-3'});
    line-height: ${(props) => props.lh || '1.5'};
    max-width: ${(props) => props.max_width || ''};
    min-width: ${(props) => props.min_width || ''};
    ${Margins}
    ${Paddings}

    @media ${device.tablet} {
        max-width: ${(props) => props.mobile_max_width || ''};
    }
`
export const Text = styled.p`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'normal'};
    font-size: ${(props) => props.size || 'var(--text-size-s)'};
    width: ${(props) => props.width || 'auto'};
`

export const Header = styled(({ as = 'h1', children, ...props }) =>
    createElement(as, props, children),
)`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'bold'};
    font-size: ${(props) => {
        if (props.size) return props.size
        if (props.as === 'h1') return 'var(--text-size-xxl)'
        if (props.as === 'h2') return 'var(--text-size-xl)'
        if (props.as === 'h3') return 'var(--text-size-l)'
        if (props.as === 'h4') return 'var(--text-size-m)'
        if (props.as === 'h5') return 'var(--text-size-s)'
    }};
    width: ${(props) => props.width || '100%'};
`

export const LinkText = styled(Text).attrs({ as: 'a' })`
    ${BaseLink}
`

export const SpanLinkText = styled(Text).attrs({ as: 'span' })`
    ${BaseLink}
`

export const LocalizedLinkText = styled((props) => <LocalizedLink {...props} />)`
    ${BaseElement}
    font-weight: ${(props) => props.weight || 'normal'};
    font-size: ${(props) => props.size || 'var(--text-size-s)'};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`
