import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import dclsx from 'features/utils/dclsx'
import './secondary.button.scss'

export interface SecondaryButtonProps extends Omit<BaseButtonProps, 'bgcolor' | 'textcolor'> {
    outlined?: boolean
}

const SecondaryButton = ({
    className,
    textsize = 'small',
    textweight = 'bold',
    outlined,
    ...rest
}: SecondaryButtonProps) => {
    return (
        <BaseButton
            className={dclsx(className, 'secondary', { outlined })}
            textsize={textsize}
            textweight={textweight}
            {...rest}
        />
    )
}

export default SecondaryButton
