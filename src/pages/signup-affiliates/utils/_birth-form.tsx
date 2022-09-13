import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import AffiliateBirthPicker from './_birth-picker'
import device from 'themes/device'
// SVG Component
import CrossIcon from 'images/svg/help/cross.svg'
import { Header } from 'components/elements'

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
        props.is_disabled &&
        css`
            opacity: 0.32;
            pointer-events: none;
        `}
`

const StyledIcon = styled.img`
    position: absolute;
    right: ${(props) => (props.password_icon ? '2.8rem' : '0.8rem')};
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    ${(props) =>
        !props.is_disabled &&
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

const ErrorMessages = styled(Header)`
    padding-left: 0.8rem;
    padding-bottom: ${({ error_shift }) => (error_shift ? error_shift : 0)};
    font-size: 1.2rem;
    min-height: 16px;
    font-weight: normal;
`

const BirthPicker = ({
    label,
    height,
    border,
    error_shift,
    focus_border,
    label_hover_color,
    label_color,
    id,
    error,
    background,
    tablet_background,
    handleError,
    maxLength,
    setFieldValue,
    ...props
}: BirthPickerProps) => {
    let current_input = useRef(null)
    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focus_border={focus_border}
                label_hover_color={label_hover_color}
                error={error}
                className="input-wrapper"
            >
                <AffiliateBirthPicker
                    id={id}
                    top_shift="1.5rem"
                    background={background}
                    maxLength={maxLength}
                    error={error}
                    height={height}
                    label={label}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldValue}
                    tablet_background={tablet_background}
                    htmlFor={id}
                    label_color={label_color}
                    {...props}
                    ref={(ip) => (current_input = ip)}
                />
            </InputWrapper>
            <ErrorMessages lh="1.4" align="left" color="red-1" error_shift={error_shift}>
                {error}
            </ErrorMessages>
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

type BirthPickerProps = {
    background?: string
    border?: string
    children?: React.ReactNode
    error?: string
    error_shift?: string
    focus_border?: string
    handleError?: () => void
    height?: string | number
    id?: string
    is_date?: boolean
    is_disabled?: boolean
    label?: string
    label_color?: string
    label_hover_color?: string
    maxLength?: string
    password_icon?: boolean
    setFieldValue?: React.Dispatch<React.SetStateAction<string>>
    tablet_background?: string
    width?: string
}

export default BirthPicker
