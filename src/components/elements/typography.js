import React from 'react'
import styled, { css } from 'styled-components'

const createElement = React.createElement

const BaseElement = css`
    text-align: ${props => props.align || 'left'};

    /* prettier-ignore */
    color: var(--color-${props => props.color || 'black-3'});
`
export const Text = styled.p`
    font-weight: ${props => props.weight || 'normal'};
    font-size: ${props =>
        props.secondary ? 'var(--text-size-sm)' : 'var(--text-size-s)'};
    line-height: ${props => props.lh || '1.5'};
    ${BaseElement}
`

export const LinkText = styled.a`
    /* prettier-ignore */
    color: var(--color-${props => props.color || 'black'});
    font-size: ${props => props.size || 'var(--text-size-s)'};
    line-height: ${props => props.lh || '1.5'};

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
        if (props.as === 'h1') return 'var(--text-size-xxl)'
        if (props.as === 'h2') return 'var(--text-size-xl)'
        if (props.as === 'h3') return 'var(--text-size-l)'
        if (props.as === 'h4') return 'var(--text-size-m)'
        if (props.as === 'h5') return 'var(--text-size-s)'
    }};
    line-height: ${props => props.lh || '1.25'};
    ${BaseElement}
`
