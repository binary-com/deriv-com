import React from 'react'
import BirthPicker, { SetStateDate } from './_birth-picker'
import { ExtraInfo, StyledInputWrapper } from './_affiliate-input'
import { InputProps, RelativeWrapper } from 'components/form/input'

type BirthFormProps = {
    setFieldValue: SetStateDate
    value: Date | [Date, Date]
} & InputProps

const BirthForm = ({ label, id, error, value, setFieldValue }: BirthFormProps) => {
    return (
        <RelativeWrapper>
            <StyledInputWrapper error={error}>
                <BirthPicker
                    id={id}
                    error={error}
                    value={value}
                    label={label}
                    setFieldValue={setFieldValue}
                />
            </StyledInputWrapper>
            <ExtraInfo />
        </RelativeWrapper>
    )
}

export default BirthForm
