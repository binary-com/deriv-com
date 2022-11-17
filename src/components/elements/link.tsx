import React from 'react'
import styled, { css } from 'styled-components'
import { LocalizedLink } from '../localization'

export const StyledLink = styled((props) => <LocalizedLink {...props} />)`
    font-size: ${(props) => props.size || 'var(--text-size-sm)'};
    font-weight: ${(props) => props.weight || 'normal'};
    text-align: ${(props) => props.align || 'left'};
    margin: ${(props) => props.margin || 'none'};
    color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-red)')};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: var(--color-red);
    }

    ${(props) => {
        if (props.has_arrow)
            return css<{ arrow_margin?: string }>`
                &::before {
                    content: url("data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16' width='16' viewBox='0 0 16 16'><path fill='black' fill-rule='evenodd' d='M6.176 8l4.694 5.164a.5.5 0 1 1-.74.672l-5-5.5a.5.5 0 0 1 0-.672l5-5.5a.5.5 0 1 1 .74.672L6.176 8z'/></svg>");
                    vertical-align: middle;
                    display: inline-block;
                    margin-right: ${({ arrow_margin }) => arrow_margin || '0.4rem'};
                    font-weight: 300;
                    text-decoration: none;
                }
            `
    }}
`
