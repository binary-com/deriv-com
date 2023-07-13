import React from 'react'
import BirthPicker, { SetStateDate } from './_birth-picker'
import { ExtraInfo, StyledInputWrapper } from './_affiliate-input'
import { InputProps, RelativeWrapper } from 'components/form/input'

type BirthFormProps = {
    setFieldValue: SetStateDate
    value: Date | [Date, Date]
} & InputProps

const BirthForm = ({
    label,
    border,
    label_hover_color,
    label_color,
    id,
    error,
    value,
    setFieldValue,
}: BirthFormProps) => {
    return (
        <RelativeWrapper>
            <StyledInputWrapper border={border} label_hover_color={label_hover_color} error={error}>
                <BirthPicker
                    id={id}
                    error={error}
                    value={value}
                    label={label}
                    setFieldValue={setFieldValue}
                    label_color={label_color}
                />
            </StyledInputWrapper>
            <ExtraInfo />
        </RelativeWrapper>
    )
}

export default BirthForm
