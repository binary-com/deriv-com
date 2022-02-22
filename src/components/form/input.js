import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from '../elements'
import AffiliateDatePicker from '../elements/affiliate-date-picker'
import device from 'themes/device'
// SVG Component
import CrossIcon from 'images/svg/help/cross.svg'

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
            color: ${({ labelHoverColor }) =>
                labelHoverColor ? `var(--color-${labelHoverColor})` : 'var(--color-black-3)'};
        }
    }
    &:focus-within {
        border-color: ${({ focusBorder }) =>
            focusBorder ? `var(--color-${focusBorder})` : 'var(--color-green)'};
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
    right: 0.8rem;
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
    @media ${device.tablet} {
        right: 2rem;
        top: 1.6rem;
    }
    @media ${device.desktopL} {
        top: 1rem;
    }
`

const StyledInput = styled.input`
    background: ${({ inputBackground }) =>
        inputBackground ? `var(--color-${inputBackground})` : 'none'};
    color: ${({ inputColor }) =>
        inputColor ? `var(--color-${inputColor})` : 'var(--color-black)'};
    font-size: var(--text-size-s);
    padding: 1rem 1rem 1rem 0.8rem;
    height: ${(props) => props.height || '40px'};
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
        opacity: ${(props) => (props.showLabel ? 0 : 1)};
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
            color: ${({ labelFocusColor }) =>
                labelFocusColor ? `var(--color-${labelFocusColor})` : 'var(--color-green)'};
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
            css`
                & ~ label {
                    transform: translate(-0.6rem, -2rem) scale(0.7);
                    color: var(--color-black-3);
                    background-color: ${({ background }) =>
                        background ? `var(--color-${background})` : 'var(--color-grey-1)'};

                    @media ${device.tabletL} {
                        top: 9px;
                    }
                }
            `}
    }
`

const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    ${(props) =>
        props.isAffiliate &&
        css`
            padding-bottom: 0.8rem;
        `}
    font-size: 1.2rem;
    min-height: 16px;
`

const StyledLabel = styled.label`
    color: ${({ labelColor }) => (labelColor ? `var(--color-${labelColor})` : 'var(--color-grey)')};
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
    height,
    border,
    focusBorder,
    labelHoverColor,
    labelColor,
    disabled,
    id,
    isAffiliate,
    isDate,
    error,
    background,
    tabletBackground,
    handleError,
    maxLength,
    setFieldValue,
    setFieldTouched,
    ...props
}) => {
    let current_input = useRef(null)
    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focusBorder={focusBorder}
                labelHoverColor={labelHoverColor}
                disabled={disabled}
                error={error}
                className="input-wrapper"
            >
                {isDate ? (
                    <AffiliateDatePicker
                        id={id}
                        isAffiliate={isAffiliate}
                        background={background}
                        maxLength={maxLength}
                        error={error}
                        disabled={disabled}
                        height={height}
                        label={label}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        tabletBackground={tabletBackground}
                        htmlFor={id}
                        labelColor={labelColor}
                        {...props}
                        ref={(ip) => (current_input = ip)}
                    />
                ) : (
                    <StyledInput
                        id={id}
                        background={background}
                        maxLength={maxLength}
                        error={error}
                        disabled={disabled}
                        height={height}
                        showLabel={label}
                        {...props}
                        ref={(ip) => (current_input = ip)}
                    />
                )}
                {label && !isDate && (
                    <StyledLabel
                        tabletBackground={tabletBackground}
                        error={error}
                        htmlFor={id}
                        labelColor={labelColor}
                    >
                        {label}
                    </StyledLabel>
                )}
            </InputWrapper>
            <ErrorMessages lh="1.4" align="left" color="red-1" isAffiliate={isAffiliate}>
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
    disabled: PropTypes.bool,
    error: PropTypes.string,
    focusBorder: PropTypes.string,
    handleError: PropTypes.func,
    height: PropTypes.any,
    id: PropTypes.string,
    isAffiliate: PropTypes.bool,
    isDate: PropTypes.bool,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    labelHoverColor: PropTypes.string,
    maxLength: PropTypes.string,
    setFieldTouched: PropTypes.func,
    setFieldValue: PropTypes.func,
    tabletBackground: PropTypes.string,
    width: PropTypes.string,
}

export default Input
