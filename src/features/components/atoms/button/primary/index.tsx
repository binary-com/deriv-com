import clsx from 'clsx'
import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import './primary.button.scss'

const PrimaryButton = ({ className, ...rest }: BaseButtonProps) => {
    return <BaseButton className={clsx(className, 'primary')} {...rest} />
}

export default PrimaryButton
