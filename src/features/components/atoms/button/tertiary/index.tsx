import clsx from 'clsx'
import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import './tertiary.button.scss'

const TertiaryButton = ({ className, ...rest }: BaseButtonProps) => {
    return <BaseButton className={clsx(className, 'tertiary')} {...rest} />
}

export default TertiaryButton
