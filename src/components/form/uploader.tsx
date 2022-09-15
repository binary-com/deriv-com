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
const UploadInfo = styled.div`
    padding-top: 5px;
    font-size: 12px;
    color: var(--color-grey-5);
    min-height: 30px;
`
const UploadLabel = styled(StyledLabel)``

const Uploader = ({
    label = '',
    border = '',
    focus_border = '',
    label_hover_color,
    label_color = '',
    background = '',
    id = '',
    error = '',
    upload_info = '',
    ...props
}: InputProps) => {
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
                <ErrorMessages lh="1.4" align="left" color="red-1">
                    {error}
                </ErrorMessages>
            ) : (
                <UploadInfo>{upload_info}</UploadInfo>
            )}
        </RelativeWrapper>
    )
}

export default Uploader
