import clsx from 'clsx'
import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import './secondary.button.scss'

const SecondaryButton = ({ className, ...rest }: BaseButtonProps) => {
    return <BaseButton className={clsx(className, 'secondary')} {...rest} />
}

export default SecondaryButton
