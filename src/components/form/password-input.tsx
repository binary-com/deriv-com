import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
// SVG Component
import CrossIcon from 'images/svg/help/cross.svg'
import {
    ErrorMessages,
    InputProps,
    InputWrapper,
    RelativeWrapper,
    StyledError,
    StyledInput,
    StyledLabel,
} from 'components/form/input'

type AffiliateInputProps = {
    password_icon?: React.ReactElement
    extra_info?: string
} & InputProps

export const ExtraInfo = styled.div<{ p?: string }>`
    padding: 8px 0 16px 16px;
    font-size: 12px;
    color: var(--color-grey-5);
    min-height: 30px;
`
const StyledIcon = styled.img<{ password_icon?: string }>`
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
const StyledErrorMessages = styled(ErrorMessages)`
    padding: 8px 0 16px 16px;
    min-height: 30px;
`
export const AffiliateLabel = styled(StyledLabel)`
    top: 1.6rem;
`

const PasswordInput = ({
    label = '',
    extra_info,
    border = '',
    label_hover_color,
    label_color = '',
    id = '',
    error = '',
    background = '',
    handleError,
    password_icon,
    ...props
}: AffiliateInputProps) => {
    const current_input = useRef(null)
    const [is_password_visible, setPasswordVisible] = useState(false)

    return (
        <RelativeWrapper>
            <InputWrapper border={border} label_hover_color={label_hover_color} error={error}>
                <StyledInput
                    id={id}
                    background={background}
                    error={error}
                    showLabel={label}
                    {...props}
                    type={is_password_visible ? 'text' : props.type}
                    ref={() => current_input}
                />
                {label && (
                    <AffiliateLabel error={error} htmlFor={id} label_color={label_color}>
                        {label}
                    </AffiliateLabel>
                )}
            </InputWrapper>
            {password_icon && (
                <StyledIcon
                    src={password_icon}
                    password_icon
                    alt="eye icon"
                    onClick={() => setPasswordVisible(!is_password_visible)}
                />
            )}
            {error ? (
                <StyledErrorMessages as="div">{error}</StyledErrorMessages>
            ) : (
                extra_info && <ExtraInfo>{extra_info}</ExtraInfo>
            )}
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

export default PasswordInput
