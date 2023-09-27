import React from 'react'
import BirthPicker from './_birth-picker'
import { ExtraInfo, StyledInputWrapper } from './_affiliate-input'
import { RelativeWrapper } from 'components/form/input'

const BirthForm = (props) => {
    return (
        <RelativeWrapper>
            <StyledInputWrapper>
                <BirthPicker {...props} />
            </StyledInputWrapper>
            <ExtraInfo />
        </RelativeWrapper>
    )
}

export default BirthForm
