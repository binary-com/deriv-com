import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../elements'
import device from 'themes/device'
// SVG Component
import CrossIcon from 'images/svg/help/cross.svg'

interface ReactInput extends React.ComponentPropsWithoutRef<'input'> {
    handleError?: (current_input: React.MutableRefObject<HTMLInputElement>) => void
}

type InputProps = ReactInput & InputWrapperProps & StyledInputProps & StyledLabelProps

type InputWrapperProps = {
    border?: string
    label_hover_color?: string
    focus_border?: string
    error?: string
    disabled?: boolean
}

type StyledInputProps = {
    input_background?: string
    inputColor?: string
    showLabel?: string
    label_focus_color?: string
    background?: string
    label?: string
    error?: string
}

type ValidProps = {
    background?: string
}

type StyledLabelProps = {
    label_color?: string
    tablet_background?: string
    error?: string
    htmlFor?: string
}

const RelativeWrapper = styled.div`
    position: relative;
`
const InputWrapper = styled.div<InputWrapperProps>`
    /* prettier-ignore */
    inline-size: 100%;
    border: ${(props) => props.border || '1px solid var(--color-grey-2)'};
    border-radius: 4px;
    @media ${device.tabletL} {
        height: 5rem;
    }

    &:hover {
        border-color: var(--color-grey-5);

        & > label {
            color: ${({ label_hover_color }) =>
                label_hover_color ? `var(--color-${label_hover_color})` : 'var(--color-black-3)'};
        }
    }
    &:focus-within {
        border-color: ${({ focus_border }) =>
            focus_border ? `var(--color-${focus_border})` : 'var(--color-green)'};
    }

    ${(props) =>
        !props.error &&
        css`
            border-color: var(--color-grey-7);
        `}
    ${(props) =>
        props.error &&
        css`
            border-color: var(--color-red-1) !important;
            & > label {
                color: var(--color-red-1) !important;
            }
        `}
    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.32;
            pointer-events: none;
        `}
`

const StyledError = styled.img`
    position: absolute;
    inset-inline-end: 0.8rem;
    inset-block-start: 1.2rem;
    block-size: 1.6rem;
    inline-size: 1.6rem;
    cursor: pointer;
    @media ${device.tablet} {
        inset-inline-end: 2rem;
        inset-block-start: 1.6rem;
    }
    @media ${device.desktopL} {
        inset-block-start: 1rem;
    }
`

const StyledInput = styled.input<StyledInputProps>`
    background: ${({ input_background }) =>
        input_background ? `var(--color-${input_background})` : 'none'};
    color: ${({ inputColor }) =>
        inputColor ? `var(--color-${inputColor})` : 'var(--color-black)'};
    font-size: var(--text-size-s);
    padding-block: 1rem;
    padding-inline-start: 1rem;
    padding-inline-end: 0.8rem;
    block-size: ${(props) => props.height || '40px'};
    inline-size: 100%;
    display: block;
    border: none;
    border-radius: 4px;
    @media ${device.tabletL} {
        block-size: 100%;

        & ~ label {
            font-size: 1.75rem;
            inset-block-start: 1.5rem;
        }
    }
    @media ${device.mobileL} {
        font-size: 14px;

        & ~ label {
            font-size: 1.5rem;
            inset-block-start: 1.75rem;
        }
    }

    &::placeholder {
        opacity: ${(props) => (props.showLabel ? 0 : 1)};
        transition: opacity 0.25s;
        padding-inline-start: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
            color: ${({ label_focus_color }) =>
                label_focus_color ? `var(--color-${label_focus_color})` : 'var(--color-green)'};
            background-color: ${({ background }) =>
                background ? `var(--color-${background})` : 'var(--color-grey-1)'};

            @media ${device.mobileL} {
                transform: translate(-0.6rem, -20px) scale(0.7);
            }
        }
        &::placeholder {
            opacity: 1;
            color: var(--color-grey-5);
            ${(props) =>
                props.label &&
                css`
                    font-size: 14px;
                `}
        }
    }
    &:valid {
        ${(props) =>
            props.value &&
            css<ValidProps>`
                & ~ label {
                    transform: translate(-0.6rem, -2rem) scale(0.7);
                    color: var(--color-black-3);
                    background-color: ${({ background }) =>
                        background ? `var(--color-${background})` : 'var(--color-grey-1)'};

                    @media ${device.tabletL} {
                        inset-block-start: 9px;
                    }
                }
            `}
    }
`

const ErrorMessages = styled(Text)`
    padding-inline-start: 0.8rem;
    font-size: 1.2rem;
    min-block-size: 16px;
`

const StyledLabel = styled.label<StyledLabelProps>`
    color: ${({ label_color }) =>
        label_color ? `var(--color-${label_color})` : 'var(--color-grey)'};
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    inset-inline-start: 0.8rem;
    inset-block-start: 1.4rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding-block: 0;
    padding-inline: 0.4rem;
    background: none;
`

const Input = ({
    label = '',
    height = '',
    border = '',
    focus_border = '',
    label_hover_color,
    label_color = '',
    disabled,
    id = '',
    error = '',
    background = '',
    tablet_background = '',
    handleError,
    maxLength,
    ...props
}: InputProps) => {
    const current_input = useRef(null)

    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focus_border={focus_border}
                label_hover_color={label_hover_color}
                disabled={disabled}
                error={error}
                className="input-wrapper"
            >
                <StyledInput
                    id={id}
                    background={background}
                    maxLength={maxLength}
                    error={error}
                    disabled={disabled}
                    height={height}
                    showLabel={label}
                    {...props}
                    ref={() => current_input}
                />
                {label && (
                    <StyledLabel
                        tablet_background={tablet_background}
                        error={error}
                        htmlFor={id}
                        label_color={label_color}
                    >
                        {label}
                    </StyledLabel>
                )}
            </InputWrapper>
            <ErrorMessages lh="1.4" align="left" color="red-1">
                {error}
            </ErrorMessages>
            {error && (
                <StyledError
                    src={CrossIcon}
                    alt="error icon"
                    onClick={() => {
                        handleError(current_input)
                    }}
                />
            )}
        </RelativeWrapper>
    )
}

export default Input
