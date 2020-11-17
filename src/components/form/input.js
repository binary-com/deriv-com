import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from '../elements'
import device from 'themes/device'
// SVG Component
import CrossIcon from 'images/svg/cross.svg'

const RelativeWrapper = styled.div`
    position: relative;
`
const InputWrapper = styled.div`
    /* prettier-ignore */
    width: 100%;
    border: ${(props) => props.border || '1px solid var(--color-grey-2)'};
    border-radius: 4px;

    @media ${device.tabletL} {
        height: 5rem;
    }

    &:hover {
        border-color: var(--color-grey-5);

        & > label {
            color: var(--color-${(props) => props.labelHoverColor || 'black-3'});
        }
    }
    &:focus-within {
        border-color: ${(props) => props.focusBorder || 'var(--color-green)'};
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
`

const StyledError = styled.img`
    position: absolute;
    right: 0.8rem;
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;

    @media ${device.tablet} {
        right: 2rem;
        top: 1.6rem;
    }
`

const StyledInput = styled.input`
    /* prettier-ignore */
    background: var(--color-${(props) => props.inputBackground || 'none'});
    color: var(--color-${(props) => props.inputColor || 'black'});
    font-size: var(--text-size-xs);
    padding: 1rem 1rem 1rem 0.8rem;
    width: 100%;
    display: block;
    border: none;
    border-radius: 4px;

    @media ${device.tabletL} {
        height: 100%;

        & ~ label {
            font-size: 1.75rem;
            top: 1.5rem;
        }
    }

    @media ${device.mobileL} {
        font-size: 14px;

        & ~ label {
            font-size: 1.5rem;
            top: 1.75rem;
        }
    }

    &::placeholder {
        opacity: 0;
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);

            /* prettier-ignore */
            color: var(--color-${(props) => props.labelFocusColor || 'green'});

            /* prettier-ignore */
            background-color: var(--color-${(props) => props.background || 'grey-1'});

            @media ${device.mobileL} {
                transform: translate(-0.6rem, -20px) scale(0.7);
            }
        }
        &::placeholder {
            opacity: 1;
            color: var(--color-grey-5);
            font-size: 14px;
        }
    }
    &:valid {
        ${(props) =>
            props.value &&
            css`
                & ~ label {
                    transform: translate(-0.6rem, -2rem) scale(0.7);
                    color: var(--color-black-3);

                    @media ${device.tabletL} {
                        top: 9px;
                    }

                    /* prettier-ignore */
                    background-color: var(--color-${(props) => props.background || 'grey-1'});
                }
            `}
    }
`

const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
    min-height: 16px;
`

const StyledLabel = styled.label`
    /* prettier-ignore */
    color: var(--color-${(props) => props.labelColor || 'grey'});
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1.4rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    background: none;
`

const Input = ({
    label,
    border,
    focusBorder,
    labelHoverColor,
    labelColor,
    id,
    error,
    background,
    tabletBackground,
    handleError,
    maxLength,
    ...props
}) => {
    let current_input = useRef(null)

    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focusBorder={focusBorder}
                labelHoverColor={labelHoverColor}
                error={error}
                className="input-wrapper"
            >
                <StyledInput
                    id={id}
                    background={background}
                    maxLength={maxLength}
                    error={error}
                    {...props}
                    ref={(ip) => (current_input = ip)}
                />
                <StyledLabel
                    tabletBackground={tabletBackground}
                    error={error}
                    htmlFor={id}
                    labelColor={labelColor}
                >
                    {label}
                </StyledLabel>
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

Input.propTypes = {
    background: PropTypes.string,
    border: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    error: PropTypes.string,
    focusBorder: PropTypes.string,
    handleError: PropTypes.func,
    id: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    labelHoverColor: PropTypes.string,
    maxLength: PropTypes.string,
    tabletBackground: PropTypes.string,
    width: PropTypes.string,
}

export default Input
