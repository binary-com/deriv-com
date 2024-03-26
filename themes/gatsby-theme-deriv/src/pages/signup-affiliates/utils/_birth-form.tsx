import React from 'react'
import BirthPicker from './_birth-picker'
import { StyledInputWrapper, StyledRelativeWrapper } from './_affiliate-input'

const BirthForm = (props) => {
    return (
        <StyledRelativeWrapper>
            <StyledInputWrapper>
                <BirthPicker {...props} />
            </StyledInputWrapper>
        </StyledRelativeWrapper>
    )
}

export default BirthForm
