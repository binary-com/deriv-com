import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    border-radius: 6px;
    padding: 1rem;
    font-size: var(--text-size-s);

    &:hover {
        cursor: pointer;
    }
    &:focus,
    &:active {
        outline: none;
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
                transition: background-color 0.25s, color 0.25s;

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
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                    0 3px 6px rgba(0, 0, 0, 0.23);
                transition: transform 0.25s;

                &:hover {
                    transform: translateY(-3px);
                }
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
