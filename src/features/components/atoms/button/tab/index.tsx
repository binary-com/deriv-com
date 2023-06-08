import React from 'react'
import BaseButton, { BaseButtonProps } from '../base'
import dclsx from 'features/utils/dclsx'

export interface PrimaryButtonProps extends Omit<BaseButtonProps, 'bgcolor' | 'textcolor'> {
    outlined?: boolean
}

const TabButton = ({
    textsize = 'small',
    textweight = 'bold',
    className,
    outlined,
    ...rest
}: PrimaryButtonProps) => {
    return (
        <BaseButton
            className={dclsx(className, 'tab', { outlined })}
            textsize={textsize}
            textweight={textweight}
            {...rest}
        />
    )
}

export default TabButton
