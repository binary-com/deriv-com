import React, { ReactNode } from 'react'
import BaseButton from './base'
import PrimaryButton from './primary'
import SecondaryButton from './secondary'

type ButtonTypes = {
    Base: typeof BaseButton
    Primary: typeof PrimaryButton
    Secondary: typeof SecondaryButton
}

const Button: ButtonTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Button.Base = BaseButton
Button.Primary = PrimaryButton
Button.Secondary = SecondaryButton

export default Button
