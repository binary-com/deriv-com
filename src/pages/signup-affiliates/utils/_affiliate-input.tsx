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
import EyeIcon from 'images/svg/signup-affiliates/eye.svg'
import CrossIcon from 'images/svg/help/cross.svg'

type AffiliateInputProps = {
    password_icon?: boolean
    extra_info?: string
} & InputProps

export const ExtraInfo = styled.div<{ error?: boolean }>`
    block-size: 36px;
    padding: 10px 0 16px 16px;
    font-size: 12px;
    color: ${({ error }) => (error ? 'var(--color-red-1)' : 'var(--color-grey-5)')};
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
    top: 1.6rem;
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
    id = '',
    error = '',
    handleError,
    password_icon,
    ...props
}: AffiliateInputProps) => {
    const current_input = useRef(null)
    const [is_password_visible, setPasswordVisible] = useState(false)

    return (
        <RelativeWrapper>
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
                    src={EyeIcon}
                    password_icon={password_icon}
                    alt="eye icon"
                    onClick={() => setPasswordVisible(!is_password_visible)}
                />
            )}
            {error ? (
                <>
                    <ExtraInfo error>{error}</ExtraInfo>
                    <StyledError
                        src={CrossIcon}
                        alt="error icon"
                        onClick={() => {
                            handleError(current_input)
                        }}
                    />
                </>
            ) : (
                <ExtraInfo>{extra_info}</ExtraInfo>
            )}
        </RelativeWrapper>
    )
}

export default AffiliateInput
