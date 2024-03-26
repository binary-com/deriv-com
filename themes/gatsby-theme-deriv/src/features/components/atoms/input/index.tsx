import React, { ReactNode } from 'react'
import CheckboxInput from './checkbox'
import TextInput from './text'

type InputType = {
    Text: typeof TextInput
    Checkbox: typeof CheckboxInput
}

const Input: InputType = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Input.Text = TextInput
Input.Checkbox = CheckboxInput

export default Input
