import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    border-radius: 6px;
    padding: 1.5rem;
    font-size: var(--text-size-s);
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
    &:focus,
    &:active {
        outline: none;
    }
    &:active {
        transform: scale(0.95);
    }
    & > * {
        pointer-events: none;
    }

    ${props => {
        if (props.primary)
            return css`
                border: 2px solid var(--color-red);
                color: var(--color-red);
                background: transparent;
                transition: all 0.25s;

                &:hover {
                    background-color: var(--color-red);
                    color: var(--color-white);
                }
            `
        if (props.secondary)
            return css`
                border: none;
                color: var(--color-white);
                background: var(--color-red);
                transition: all 0.25s;

                &:hover {
                    background-color: var(--color-red-3);
                }
            `
    }}
    ${props => {
        if (props.disabled)
            return css`
                pointer-events: none;
                background: var(--color-grey);
            `
        if (props.loading)
            return css`
                width: 8rem;
                height: 8rem;
                border: 10 px solid var(--color-black);
                border-radius: 50%;
                animation: sweep 1s linear alternate infinite,
                    rotates 0.8s linear infinite;
            `
    }}
`

const Button = ({ children, ...props }) => (
    <StyledButton {...props}>{children}</StyledButton>
)

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default Button
