import clsx from 'clsx'
import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import './white.button.scss'

const WhiteButton = ({ className, ...rest }: BaseButtonProps) => {
    return <BaseButton className={clsx(className, 'white')} {...rest} />
}

export default WhiteButton
