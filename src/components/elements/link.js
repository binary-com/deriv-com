import React from 'react'
import styled, { css } from 'styled-components'
import { LocalizedLink } from '../localization'

export const StyledLink = styled(props => <LocalizedLink {...props} />)`
    font-size: ${props => props.size || 'var(--text-size-sm)'};
    font-weight: ${props => props.weight || 'normal'};
    text-align: ${props => props.align || 'left'};

    /* prettier-ignore */
    color: var(--color-${props => props.color || 'red'});
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: var(--color-red);
    }

    ${props => {
        if (props.has_arrow)
            return css`
                &::before {
                    content: '<';
                    display: inline-block;
                    margin-right: ${props => props.margin_right || '0.4rem'};
                    font-weight: 300;
                    text-decoration: none;
                }
            `
    }}
`
