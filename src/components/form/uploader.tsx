import React from 'react'
import styled from 'styled-components'
import {
    ErrorMessages,
    StyledInput,
    InputWrapper,
    StyledLabel,
    RelativeWrapper,
    InputProps,
} from './input'
import { ExtraInfo } from 'pages/signup-affiliates/utils/_affiliate-input'

type UploaderProps = { extra_info?: string } & InputProps

const StyledUpload = styled.div`
    margin-left: auto;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    padding: 13px 16px;
    max-width: 82px;
    min-height: 40px;
    border: 2px solid var(--color-grey-2);
    opacity: 0.32;
    cursor: pointer;
    background: white;

    &:hover {
        border-color: var(--color-black);
    }
`

const UploadLabel = styled(StyledLabel)`
    width: 70%;
    line-height: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Uploader = ({
    label = '',
    border = '',
    focus_border = '',
    label_hover_color,
    label_color = '',
    background = '',
    id = '',
    error = '',
    extra_info = '',
    ...props
}: UploaderProps) => {
    const hiddenFileInput = React.useRef(null)

    const handleClick = () => {
        hiddenFileInput.current.click()
    }
    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focus_border={focus_border}
                label_hover_color={label_hover_color}
                error={error}
            >
                <UploadLabel error={error} htmlFor={id} label_color={label_color}>
                    {label}
                </UploadLabel>
                <div style={{}}>
                    <StyledUpload onClick={handleClick}>Browse</StyledUpload>
                    <StyledInput
                        id={id}
                        error={error}
                        ref={hiddenFileInput}
                        background={background}
                        {...props}
                        style={{ display: 'none' }}
                    />
                </div>
            </InputWrapper>
            {error ? (
                <ErrorMessages as="div">{error}</ErrorMessages>
            ) : (
                <ExtraInfo>{extra_info}</ExtraInfo>
            )}
        </RelativeWrapper>
    )
}

export default Uploader
