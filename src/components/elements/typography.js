import React from 'react'
import styled, { css } from 'styled-components'
import device from 'themes/device'

const createElement = React.createElement

const BaseElement = css`
    text-align: ${props => props.align || 'left'};

    /* prettier-ignore */
    color: var(--color-${props => props.color || 'black-3'});
`
export const Text = styled.p`
    font-weight: ${props => props.weight || 'normal'};
    font-size: ${props => {
        if (props.size) return props.size
        if (props.secondary) return 'var(--text-size-sm)'
        return 'var(--text-size-s)'
    }};
    line-height: ${props => props.lh || '1.5'};
    margin: ${props => props.margin || '0'};
    ${BaseElement}
`

export const LinkText = styled.a`
    /* prettier-ignore */
    color: var(--color-${props => props.color || 'black'});
    font-size: ${props => props.size || 'var(--text-size-s)'};
    line-height: ${props => props.lh || '1.5'};
    text-decoration: none;
    font-weight: ${props => props.weight || 'normal'};

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Header = styled(({ as = 'h1', children, ...props }) =>
    createElement(as, props, children),
)`
    font-weight: ${props => props.weight || 'bold'};
    font-size: ${props => {
        if (props.font_size) return props.font_size
        if (props.as === 'h1') return 'var(--text-size-xxl)'
        if (props.as === 'h2') return 'var(--text-size-xl)'
        if (props.as === 'h3') return 'var(--text-size-l)'
        if (props.as === 'h4') return 'var(--text-size-m)'
        if (props.as === 'h5') return 'var(--text-size-s)'
    }};
    line-height: ${props => props.lh || '1.25'};
    ${BaseElement}
    width:  ${props => props.width || '100%'};
    margin: ${props => props.margin || ''};
    @media ${device.tabletL} {
        text-align: ${props => props.mobile_text_align || props.align};
    }
`
