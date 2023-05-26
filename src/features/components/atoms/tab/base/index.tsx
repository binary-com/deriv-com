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

export interface TabBaseProps extends ButtonHTMLAttributes<'button'>, ClassProps {
    textsize?: TTextSize
    textcolor?: TTypographyColor
    textweight?: TTypographyWeight
    visible?: TVisible
}

const TabBase = ({
    className,
    children,
    textsize,
    textcolor,
    textweight,
    ...rest
}: TabBaseProps) => {
    return (
        <Box
            className={dclsx(
                'tab',
                className,
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

TabBase.displayName = 'TabBase'

export default TabBase
