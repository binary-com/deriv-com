import React from 'react'
import AffiliateBirthPicker from './_birth-picker'
import { ExtraInfo, InputWrapper, RelativeWrapper } from 'components/form/input'

type BirthPickerProps = {
    border?: string
    children?: React.ReactNode
    error: string
    focus_border?: string
    id: string
    label: string
    extra_info?: string
    label_color?: string
    label_hover_color?: string
    setFieldValue: React.Dispatch<React.SetStateAction<string>>
}

const BirthPicker = ({
    label,
    border,
    extra_info = '',
    focus_border,
    label_hover_color,
    label_color,
    id,
    error,
    setFieldValue,
}: BirthPickerProps) => {
    return (
        <RelativeWrapper>
            <InputWrapper
                border={border}
                focus_border={focus_border}
                label_hover_color={label_hover_color}
                error={error}
            >
                <AffiliateBirthPicker
                    id={id}
                    top_shift="1.5rem"
                    error={error}
                    label={label}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldValue}
                    label_color={label_color}
                />
            </InputWrapper>
            <ExtraInfo>{extra_info}</ExtraInfo>
        </RelativeWrapper>
    )
}

export default BirthPicker
