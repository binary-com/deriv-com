import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    border-radius: 6px;
    border: ${props => {
        if (props.type === 'primary') return props.theme.primary_border
        if (props.type === 'secondary') return props.theme.secondary_border
    }};
    color: ${props => {
        if (props.type === 'primary') return props.theme.primary_color
        if (props.type === 'secondary') return props.theme.secondary_color
    }};
    background-color: ${props => {
        if (props.type === 'primary') return props.theme.primary_bg_color
        if (props.type === 'secondary') return props.theme.secondary_bg_color
    }};
    box-shadow: ${props => {
        if (props.type === 'primary') return props.theme.primary_shadow
        if (props.type === 'secondary') return props.theme.secondary_shadow
    }};
    padding: 0.6rem 1.2rem;
    font-size: 100%;
    transition: ${props => {
        if (props.type === 'primary') return props.theme.primary_transition
        if (props.type === 'secondary') return props.theme.secondary_transition
    }};

    &:hover {
        ${props => {
            if (props.type === 'primary') return props.theme.primary_hover
            if (props.type === 'secondary') return props.theme.secondary_hover
        }};
        cursor: pointer;
    }
    &:focus,
    &:active {
        outline: 0;
    }
`

const button_theme = {
    // primary theme
    primary_border: '2px solid var(--color-red)',
    primary_color: 'var(--color-red)',
    primary_bg_color: 'transparent',
    primary_shadow: 'none',
    primary_transition: 'background-color 0.25s, color 0.25s',
    primary_hover: css`
        background-color: var(--color-red);
        color: var(--color-white);
    `,
    // secondary theme
    secondary_border: 'none',
    secondary_color: 'var(--color-white)',
    secondary_bg_color: 'var(--color-red)',
    secondary_shadow:
        '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);',
    secondary_transition: 'transform 0.25s',
    secondary_hover: css`
        transform: translateY(-3px);
    `,
}

const Button = ({ type = 'primary', children, onClick }) => (
    <>
        <ThemeProvider theme={button_theme}>
            <StyledButton onClick={onClick} type={type}>
                {children}
            </StyledButton>
        </ThemeProvider>
    </>
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
