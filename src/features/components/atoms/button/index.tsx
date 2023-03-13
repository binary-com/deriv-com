import React, { ReactNode } from 'react'
import BaseButton from './base'
import FlatButton from './flat'
import HeroButton from './hero'
import PrimaryButton from './primary'
import SecondaryButton from './secondary'
import TertiaryButton from './tertiary'
import TertiaryLightButton from './tertiary-light'
import WhiteButton from './white'

type ButtonTypes = {
    Base: typeof BaseButton
    Flat: typeof FlatButton
    Hero: typeof HeroButton
    Primary: typeof PrimaryButton
    Secondary: typeof SecondaryButton
    Tertiary: typeof TertiaryButton
    TertiaryLight: typeof TertiaryLightButton
    White: typeof WhiteButton
}

const Button: ButtonTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Button.Base = BaseButton
Button.Flat = FlatButton
Button.Hero = HeroButton
Button.Primary = PrimaryButton
Button.Secondary = SecondaryButton
Button.Tertiary = TertiaryButton
Button.TertiaryLight = TertiaryLightButton
Button.White = WhiteButton

export default Button
