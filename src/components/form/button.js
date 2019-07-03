import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
    border-radius: 6px;
    padding: 1rem;
    font-size: 1.6rem;

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
                border: ${props.theme.primary_border};
                color: ${props.theme.primary_color};
                background: ${props.theme.primary_bg_color};
                transition: ${props.theme.primary_transition};

                &:hover {
                    ${props.theme.primary_hover}
                }
            `
        if (props.secondary)
            return css`
                color: ${props.theme.secondary_color};
                background: ${props.theme.secondary_bg_color};
                box-shadow: ${props.theme.secondary_shadow};
                transition: ${props.theme.secondary_transition};

                &:hover {
                    ${props.theme.secondary_hover}
                }
            `
    }}
`

const button_theme = {
    primary_border: '2px solid var(--color-red)',
    primary_color: 'var(--color-red)',
    primary_bg_color: 'transparent',
    primary_transition: 'background-color 0.25s, color 0.25s',
    primary_hover: css`
        background-color: var(--color-red);
        color: var(--color-white);
    `,
    secondary_color: 'var(--color-white)',
    secondary_bg_color: 'var(--color-red)',
    secondary_shadow:
        '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);',
    secondary_transition: 'transform 0.25s',
    secondary_hover: css`
        transform: translateY(-3px);
    `,
}

const Button = ({ children, ...props }) => (
    <>
        <ThemeProvider theme={button_theme}>
            <StyledButton {...props}>{children}</StyledButton>
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
