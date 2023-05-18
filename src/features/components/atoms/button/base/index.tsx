import React, { ButtonHTMLAttributes } from 'react'
import Box from '../../box'
import {
    ClassProps,
    TTextSize,
    TTypographyColor,
    TTypographyWeight,
    TVisible,
} from 'features/types'
import dclsx from 'features/utils/dclsx'
import {
    generateTextColor,
    generateTextSize,
    generateTypographyWeightClasses,
} from 'features/styles/utils'

export interface BaseButtonProps extends ButtonHTMLAttributes<'button'>, ClassProps {
    is_loading?: boolean
    fluid?: boolean
    textsize?: TTextSize
    textcolor?: TTypographyColor
    textweight?: TTypographyWeight
    visible?: TVisible
    hero?: boolean
}

const BaseButton = ({
    className,
    children,
    is_loading,
    fluid,
    textsize,
    textcolor,
    textweight,
    hero,
    role = 'button',
    ...rest
}: BaseButtonProps) => {
    return (
        <Box
            as="button"
            role={role}
            className={dclsx(
                'button',
                className,
                {
                    loading: is_loading,
                    fluid: fluid,
                    hero,
                },
                generateTextSize(textsize),
                generateTextColor(textcolor),
                generateTypographyWeightClasses(textweight),
            )}
            {...rest}
        >
            {children}
        </Box>
    )
}

BaseButton.displayName = 'BaseButton'

export default BaseButton
