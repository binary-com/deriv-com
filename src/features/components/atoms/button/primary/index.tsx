import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import dclsx from 'features/utils/dclsx'
import './primary.button.scss'

export interface PrimaryButtonProps extends Omit<BaseButtonProps, 'bgcolor' | 'textcolor'> {
    outlined?: boolean
}

const PrimaryButton = ({
    textsize = 'small',
    textweight = 'bold',
    className,
    outlined,
    ...rest
}: PrimaryButtonProps) => {
    return (
        <BaseButton
            className={dclsx(className, 'primary', { outlined })}
            textsize={textsize}
            textweight={textweight}
            {...rest}
        />
    )
}

export default PrimaryButton
