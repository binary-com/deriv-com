import clsx from 'clsx'
import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import './flat.button.scss'

const FlatButton = ({ className, ...rest }: BaseButtonProps) => {
    return <BaseButton className={clsx(className, 'flat')} {...rest} />
}

export default FlatButton
