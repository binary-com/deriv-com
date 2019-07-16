import React from 'react'
import styled, { css } from 'styled-components'

const createElement = React.createElement

const BaseElement = css`
    text-align: ${props => props.align || 'left'};

    /* prettier-ignore */
    color: var(--color-${props => props.color || 'black-3'});
    ${props => {
        let margins = ''
        if (props.margin) {
            Object.keys(props.margin).forEach(margin => {
                switch (margin) {
                    case 'vertical':
                        margins += `margin-top: ${props.margin[margin]};`
                        margins += `margin-bottom: ${props.margin[margin]};`
                        break
                    case 'horizontal':
                        margins += `margin-left: ${props.margin[margin]};`
                        margins += `margin-right: ${props.margin[margin]};`
                        break
                    default:
                        margins += `margin-${margin}: ${props.margin[margin]};`
                }
            })
        } else {
            margins = 'margin: 0 auto;'
        }

        return margins
    }}
`

export const Text = styled.p`
    font-weight: ${props => props.weight || 'normal'};
    font-size: var(--text-size-s);
    line-height: ${props => props.lh || '1.5'};
    ${BaseElement}
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
