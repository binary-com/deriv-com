import styled, { css } from 'styled-components'
import { Paddings, Margins, MarginsType, PaddingsType } from 'themes/function'
import device from 'themes/device'

type SharedButtonStyleProps = {
    width?: string
    provider?: string
    primary?: boolean
    secondary?: boolean
    tertiary?: boolean
    loading?: boolean
    tertiary_light?: boolean
    flat?: boolean
    social?: boolean
    white?: boolean
    hero?: boolean
} & MarginsType &
    PaddingsType

export const SharedButtonStyle = css<SharedButtonStyleProps>`
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 14px;
    transition: all 0.25s;
    font-weight: bold;
    height: fit-content;
    width: ${(props) => props.width};
    ${(props) => {
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
        if (props.tertiary_light)
            return css`
                border: 2px solid var(--color-white);
                color: var(--color-white);
                background: transparent;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.08);
                }
            `
        if (props.flat)
            return css`
                background: transparent;
                color: var(--color-red);
                border: none;

                &:hover {
                    background: rgba(255, 68, 79, 0.08);
                }
            `
        if (props.social)
            return css<SharedButtonStyleProps>`
                background: ${({ provider }) => {
                    if (provider === 'google') return 'var(--color-white)'
                    if (provider === 'facebook') return 'var(--color-blue)'
                }};
                border: ${({ provider }) =>
                    provider === 'google' ? '1px solid var(--color-grey-5);' : 'none'};

                svg {
                    width: 2.2rem;
                    height: 2.2rem;
                }

                &:hover {
                    background: var(--color-grey-4);
                }
            `
        if (props.white)
            return css`
                border: 2px solid var(--color-white);
                color: var(--color-white);
                background: transparent;

                &:hover {
                    background: var(--color-white);
                    color: var(--color-red);
                }
            `
        if (props.hero)
            return css`
                box-shadow: inset 0 var(--color-red);
                color: var(--color-white);
                background: var(--color-red);
                padding: 17px 24px;
                font-size: 20px;
                line-height: 30px;
                border-radius: 8px;

                &:hover {
                    background-color: var(--color-red-3);
                    border-color: var(--color-red-3);
                }

                @media ${device.tabletL} {
                    padding: 20px 24px !important;
                    font-size: 16px !important;
                    line-height: 24px !important;
                }
            `
    }}

    &:focus,
    &:active {
        outline: none;
        transform: scale(0.95);
    }

    ${Paddings}
    ${Margins}
`

const Button = styled.button<SharedButtonStyleProps>`
    ${SharedButtonStyle}

    &:hover {
        cursor: pointer;
    }

    ${(props) => {
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

export default Button
