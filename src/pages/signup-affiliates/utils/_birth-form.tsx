import React from 'react'
import AffiliateBirthPicker from './_birth-picker'
import { ExtraInfo } from './_affiliate-input'
import { InputProps, InputWrapper, RelativeWrapper } from 'components/form/input'

type BirthPickerProps = {
    setFieldValue: React.Dispatch<React.SetStateAction<string>>
} & InputProps

const BirthPicker = ({
    label,
    border,
    label_hover_color,
    label_color,
    id,
    error,
    value,
    setFieldValue,
}: BirthPickerProps) => {
    return (
        <RelativeWrapper>
            <InputWrapper border={border} label_hover_color={label_hover_color} error={error}>
                <AffiliateBirthPicker
                    id={id}
                    error={error}
                    value={value}
                    label={label}
                    setFieldValue={setFieldValue}
                    label_color={label_color}
                />
            </InputWrapper>
            <ExtraInfo />
        </RelativeWrapper>
    )
}

export default BirthPicker
