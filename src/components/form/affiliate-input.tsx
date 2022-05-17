import React, { useRef, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import AffiliateDatePicker from '../elements/affiliate-date-picker'
import device from 'themes/device'
import EyeIcon from 'images/svg/signup-affiliate-details/eye.svg'
import CrossIcon from 'images/svg/help/cross.svg'

interface AffiliateInputProps extends React.ComponentPropsWithoutRef<'input'> {
    password_icon?: boolean
    setFieldValue?: () => void
    setFieldTouched?: () => void
    background?: string
    handleError?: (current_input: React.RefObject<HTMLInputElement>) => void
    disabled?: boolean
    error?: string
    height?: string
    id?: string
    label?: string
    label_color?: string
    tablet_background?: string
    ref?: any
    top_shift?: string
    htmlFor?: string
}
type StyledIconProps = {
    disabled?: boolean
    password_icon?: boolean
}

const RelativeWrapper = styled.div`
    position: relative;
`

const StyledIcon = styled.img<StyledIconProps>`
    position: absolute;
    right: ${(props) => (props.password_icon ? '2.8rem' : '0.8rem')};
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    ${(props) =>
        !props.disabled &&
        css`
            cursor: pointer;
        `}
    @media ${device.tablet} {
        right: ${(props) => (props.password_icon ? '4rem' : '2rem')};
        top: 1.6rem;
    }
    @media ${device.desktopL} {
        top: 1rem;
    }
`

const AffiliateInput = ({
    id,
    background,
    maxLength,
    error,
    disabled,
    height,
    label,
    tablet_background,
    label_color,
    handleError,
    setFieldValue,
    setFieldTouched,
    password_icon,
    ...props
}: AffiliateInputProps) => {
    let current_input = useRef<HTMLInputElement>(null)
    const [is_password_visible, setPasswordVisible] = useState(false)

    useEffect(() => {
        if (current_input.current) {
            current_input.current.type = !is_password_visible && password_icon ? 'password' : 'text'
        }
    }, [is_password_visible])

    return (
        <RelativeWrapper>
            <AffiliateDatePicker
                id={id}
                top_shift="1.5rem"
                background={background}
                maxLength={maxLength}
                error={error}
                disabled={disabled}
                height={height}
                label={label}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                tablet_background={tablet_background}
                htmlFor={id}
                label_color={label_color}
                {...props}
                ref={(ip) => (current_input = ip)}
            />

            {password_icon && (
                <StyledIcon
                    src={EyeIcon}
                    disabled={disabled}
                    password_icon={password_icon}
                    alt="eye icon"
                    onClick={() => (!disabled ? setPasswordVisible(!is_password_visible) : null)}
                />
            )}

            {error && (
                <StyledIcon
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

export default AffiliateInput
