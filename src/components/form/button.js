import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Paddings } from 'themes/function'

const Button = styled.button`
    border-radius: 6px;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    transition: all 0.25s;
    font-weight: bold;
    ${Paddings}

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

    ${props => {
        if (props.primary)
            return css`
                border: 2px solid var(--color-red);
                color: var(--color-red);
                background: transparent;

                &:hover {
                    background-color: var(--color-red);
                    color: var(--color-white);
                }
            `
        if (props.secondary)
            return css`
                border: 2px solid var(--color-red);
                color: var(--color-white);
                background: var(--color-red);

                &:hover {
                    background-color: var(--color-red-3);
                    border-color: var(--color-red-3);
                }
            `
        if (props.tertiary)
            return css`
                border: 2px solid var(--color-grey-5);
                color: var(--color-black);
                background: transparent;

                &:hover {
                    background-color: rgba(0, 0, 0, 0.08);
                }
            `
        if (props.social)
            return css`
                background: ${props => {
                    if (props.provider === 'google') return 'var(--color-white)'
                    if (props.provider === 'facebook') return 'var(--color-blue)'
                }};
                border: ${props =>
                    props.provider === 'google' ? '1px solid var(--color-grey-5);' : 'none'};

                svg {
                    width: 2.2rem;
                    height: 2.2rem;
                }

                &:hover {
                    background: ${props => {
                        if (props.provider === 'google') return 'var(--color-grey-4)'
                        if (props.provider === 'facebook') return 'var(--color-blue-2)'
                    }};
                }
            `
    }}
    ${props => {
        if (props.disabled)
            return css`
                pointer-events: none;
                opacity: 0.32;
            `
        if (props.loading)
            return css`
                width: 8rem;
                height: 8rem;
                border: 10 px solid var(--color-black);
                border-radius: 50%;
                animation: sweep 1s linear alternate infinite, rotates 0.8s linear infinite;
            `
    }}
`

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default Button
