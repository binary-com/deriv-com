import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'
import Box from '../../box'
import { SpaceProps } from 'features/types'
import './base.button.scss'

export interface BaseButtonProps extends ButtonHTMLAttributes<'button'>, SpaceProps<'button'> {
    is_loading?: boolean
    fluid?: boolean
}

const BaseButton = ({
    className,
    children,
    disabled,
    is_loading,
    fluid,
    ...rest
}: BaseButtonProps) => {
    return (
        <Box
            as="button"
            className={clsx(className, {
                disabled: disabled,
                loading: is_loading,
                fluid: fluid,
            })}
            {...rest}
        >
            {children}
        </Box>
    )
}

BaseButton.displayName = 'BaseButton'

export default BaseButton
