import React from 'react'
import BirthPicker, { SetStateDate } from './_birth-picker'
import { ExtraInfo } from './_affiliate-input'
import { InputProps, InputWrapper, RelativeWrapper } from 'components/form/input'

type BirthFormProps = {
    setFieldValue: SetStateDate
    value: Date | [Date, Date] | string
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
            <InputWrapper border={border} label_hover_color={label_hover_color} error={error}>
                <BirthPicker
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

export default BirthForm
