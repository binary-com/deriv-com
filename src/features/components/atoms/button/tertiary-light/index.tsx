import clsx from 'clsx'
import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import './tertiary-light.button.scss'

const TertiaryLightButton = ({ className, ...rest }: BaseButtonProps) => {
    return <BaseButton className={clsx(className, 'tertiary-light')} {...rest} />
}

export default TertiaryLightButton
