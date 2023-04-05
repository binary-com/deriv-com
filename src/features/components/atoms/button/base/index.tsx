import React, { ButtonHTMLAttributes } from 'react'
import Box from '../../box'
import { ClassProps, TTextSize, TTypographyColor, TTypographyWeight } from 'features/types'
import './base.button.scss'
import dclsx from 'features/utils/dclsx'
import {
    generateTextColor,
    generateTextSize,
    generateTypographyWeight,
} from 'features/styles/utils'

export interface BaseButtonProps extends ButtonHTMLAttributes<'button'>, ClassProps {
    is_loading?: boolean
    fluid?: boolean
    textsize?: TTextSize
    textcolor?: TTypographyColor
    textweight?: TTypographyWeight
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
    ...rest
}: BaseButtonProps) => {
    return (
        <Box
            as="button"
            className={dclsx(
                className,
                {
                    loading: is_loading,
                    fluid: fluid,
                    hero,
                },
                generateTextSize(textsize),
                generateTextColor(textcolor),
                generateTypographyWeight(textweight),
            )}
            {...rest}
        >
            {children}
        </Box>
    )
}

BaseButton.displayName = 'BaseButton'

export default BaseButton
