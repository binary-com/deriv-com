import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import {
    InputProps,
    InputWrapper,
    RelativeWrapper,
    StyledError,
    StyledInput,
    StyledLabel,
} from 'components/form/input'
import OpenedEye from 'images/svg/signup-affiliates/opened-eye.svg'
import ClosedEye from 'images/svg/signup-affiliates/closed-eye.svg'
import CrossIcon from 'images/svg/help/cross.svg'

type AffiliateInputProps = {
    password_icon?: boolean
    extra_info?: string
    extra_info_size?: string
} & InputProps

export const StyledRelativeWrapper = styled(RelativeWrapper)`
    margin-block: 16px 36px;
`
export const ErrorMessage = styled.div<{ error?: boolean; extra_info_size?: string }>`
    position: absolute;
    font-size: 12px;
    color: ${({ error }) => (error ? 'var(--color-red-1)' : 'var(--color-grey-5)')};
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
export const AffiliateLabel = styled(StyledLabel)`
    top: 1.5rem;
    color: var(--color-grey-5);
`
export const StyledInputWrapper = styled(InputWrapper)`
    border-radius: 4px;
    border: solid 1px var(--color-grey-7);

    &:hover {
        border-color: var(--color-grey-5);

        & > label {
            color: var(--color-grey-5);
        }
    }

    @media ${device.tabletL} {
        height: unset;
        border-radius: 4px;
    }
`

const AffiliateInput = ({
    label = '',
    extra_info,
    extra_info_size,
    id = '',
    error = '',
    handleError,
    password_icon,
    ...props
}: AffiliateInputProps) => {
    const current_input = useRef(null)
    const [is_password_visible, setPasswordVisible] = useState(false)

    return (
        <StyledRelativeWrapper>
            <StyledInputWrapper error={error}>
                <StyledInput
                    {...props}
                    id={id}
                    width={500}
                    error={error}
                    showLabel={label}
                    background={'white'}
                    ref={() => current_input}
                    type={is_password_visible ? 'text' : props.type}
                />
                {label && (
                    <AffiliateLabel error={error} htmlFor={id}>
                        {label}
                    </AffiliateLabel>
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
            {error && (
                <>
                    <ErrorMessage error>{error}</ErrorMessage>
                    <StyledError
                        src={CrossIcon}
                        alt="error icon"
                        onClick={() => {
                            handleError(current_input)
                        }}
                    />
                </>
            )}
        </StyledRelativeWrapper>
    )
}

export default AffiliateInput
