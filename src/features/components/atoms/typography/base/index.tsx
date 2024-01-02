import React from 'react'
import Box, { BoxProps } from '../../box'
import {
    TTypographyAlign,
    TTypographyBreakWord,
    TTypographyColor,
    TTypographyFont,
    TTypographyWeight,
    TypographyTagOptions,
} from 'features/types'
import dclsx from 'features/utils/dclsx'
import {
    generateTypographyAlignClasses,
    generateTypographyClasses,
    generateTypographyFontClasses,
    generateTypographyWeightClasses,
} from 'features/styles/utils'

export interface TypographyAlignWeight {
    align?: TTypographyAlign
    weight?: TTypographyWeight
}

export interface TypographyProps extends TypographyAlignWeight {
    break_word?: TTypographyBreakWord
    textcolor?: TTypographyColor
    font_family?: TTypographyFont
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
    font_family,
    ...rest
}: BaseTypographyProps<T>) => {
    const classnames = dclsx(
        className,
        'at-typography',
        generateTypographyAlignClasses(align),
        generateTypographyAlignClasses(md?.align, 'md'),
        generateTypographyAlignClasses(lg?.align, 'lg'),
        generateTypographyWeightClasses(weight),
        generateTypographyWeightClasses(md?.weight, 'md'),
        generateTypographyWeightClasses(lg?.weight, 'lg'),
        generateTypographyFontClasses(font_family),
        generateTypographyClasses({
            break_word,
            textcolor,
        }),
    )

    return <Box as={as} className={classnames} md={md} lg={lg} {...rest} />
}

export default BaseTypography
