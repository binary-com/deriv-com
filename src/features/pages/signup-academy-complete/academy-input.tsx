import React, { useRef, useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import device from 'themes/device'
import {
    InputProps,
    InputWrapper,
    RelativeWrapper,
    StyledInput,
    StyledLabel,
} from 'components/form/input'
import OpenedEye from 'images/svg/signup-affiliates/opened-eye.svg'
import ClosedEye from 'images/svg/eye.svg'

type AcademyPasswordInputProps = {
    password_icon?: boolean
    error_or_warning?: { text: string; is_warning: boolean }
} & InputProps

export const StyledRelativeWrapper = styled(RelativeWrapper)`
    margin-block: 16px 36px;
`
export const ErrorMessage = styled.div<{ is_warning?: boolean }>`
    position: absolute;
    font-size: 12px;
    color: ${({ is_warning }) => (is_warning ? 'var(--color-yellow-3)' : 'var(--color-red)')};
    padding: 6px 0;
`
const StyledIcon = styled.img<{ password_icon?: boolean }>`
    position: absolute;
    right: ${({ password_icon }) => (password_icon ? '2.8rem' : '0.8rem')};
    top: 1.5rem;
    height: 1rem;
    width: 1.5rem;
    cursor: pointer;

    @media ${device.tablet} {
        right: ${({ password_icon }) => (password_icon ? '4rem' : '2rem')};
        top: 1.6rem;
    }
    @media ${device.desktopL} {
        top: 1rem;
    }
`
export const Label = styled(StyledLabel)`
    top: 1.5rem;
    color: var(--color-grey-5);
`
export const StyledInputWrapper = styled(InputWrapper)<{
    password_length?: number
    is_password?: boolean
    // is_warning:boolean
}>`
    border-radius: 4px;
    border: solid 1px var(--color-grey-7);
    ${({ password_length, is_password }) => {
        if (is_password && password_length == 0)
            return css`
                border-bottom: solid 4px var(--color-grey-5);
            `
        else if (is_password && password_length >= 1)
            return css`
                border-bottom: solid 4px var(--color-blue-7);
                &:hover {
                    border-color: var(--color-blue-7);
                }
            `
        else
            return css`
                border-bottom: solid 1px var(--color-grey-7);
                &:hover {
                    border-color: var(--color-grey-5);

                    & > label {
                        color: var(--color-grey-5);
                    }
                }
            `
    }}

    @media ${device.tabletL} {
        height: unset;
        border-radius: 4px;
    }
`

const AcademyPasswordInput = ({
    label = '',
    id = '',
    error_or_warning = { text: '', is_warning: false },
    password_icon,
    ...props
}: AcademyPasswordInputProps) => {
    const current_input = useRef(null)
    const [is_password_visible, setPasswordVisible] = useState(false)

    const get_error_message = useCallback(() => {
        return error_or_warning.text
    }, [error_or_warning])
    return (
        <StyledRelativeWrapper>
            <StyledInputWrapper
                error={error_or_warning.is_warning ? '' : get_error_message()}
                is_password={props.type === 'password'}
                password_length={props.type === 'password' && props.value.length}
            >
                <StyledInput
                    {...props}
                    id={id}
                    width={500}
                    error={get_error_message()}
                    showLabel={label}
                    background="white"
                    ref={current_input}
                    type={is_password_visible ? 'text' : props.type}
                />
                {label && (
                    <Label error={get_error_message()} htmlFor={id}>
                        {label}
                    </Label>
                )}
            </StyledInputWrapper>
            {password_icon && (
                <StyledIcon
                    src={is_password_visible ? ClosedEye : OpenedEye}
                    password_icon={password_icon}
                    alt="eye icon"
                    onClick={() => setPasswordVisible(!is_password_visible)}
                />
            )}
            {get_error_message() && (
                <>
                    <ErrorMessage is_warning={error_or_warning.is_warning}>
                        {get_error_message()}
                    </ErrorMessage>
                </>
            )}
        </StyledRelativeWrapper>
    )
}

export default AcademyPasswordInput
