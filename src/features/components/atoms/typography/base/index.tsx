import React from 'react'
import Box, { BoxProps } from '../../box'
import {
    TTypographyAlign,
    TTypographyBreakWord,
    TTypographyColor,
    TTypographyWeight,
    TypographyTagOptions,
} from 'features/types'
import dclsx from 'features/utils/dclsx'
import {
    generateTypographyAlignClasses,
    generateTypographyClasses,
    generateTypographyWeightClasses,
} from 'features/styles/utils'

export interface TypographyAlignWeight {
    align?: TTypographyAlign
    weight?: TTypographyWeight
}

export interface TypographyProps extends TypographyAlignWeight {
    break_word?: TTypographyBreakWord
    textcolor?: TTypographyColor
}
export interface BaseTypographyProps<T extends TypographyTagOptions>
    extends BoxProps<TypographyTagOptions>,
        TypographyProps {
    as?: T
    md?: TypographyAlignWeight & BoxProps<TypographyTagOptions>
    lg?: TypographyAlignWeight & BoxProps<TypographyTagOptions>
}

const BaseTypography = <T extends TypographyTagOptions>({
    as,
    className,
    align,
    weight,
    md,
    lg,
    break_word = 'word',
    textcolor = 'primary',
    ...rest
}: BaseTypographyProps<T>) => {
    const classnames = dclsx(
        className,
        'typography',
        generateTypographyAlignClasses(align),
        generateTypographyAlignClasses(md?.align, 'md'),
        generateTypographyAlignClasses(lg?.align, 'lg'),
        generateTypographyWeightClasses(weight),
        generateTypographyWeightClasses(md?.weight, 'md'),
        generateTypographyWeightClasses(lg?.weight, 'lg'),
        generateTypographyClasses({
            break_word,
            textcolor,
        }),
    )

    return <Box as={as} className={classnames} md={md} lg={lg} {...rest} />
}

export default BaseTypography
