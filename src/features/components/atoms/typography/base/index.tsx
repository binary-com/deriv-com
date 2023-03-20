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
import { generateTypographyClasses } from 'features/styles/utils'

export interface TypographyProps {
    align?: TTypographyAlign
    weight?: TTypographyWeight
    break_word?: TTypographyBreakWord
    textcolor?: TTypographyColor
}
export interface BaseTypographyProps<T extends TypographyTagOptions>
    extends BoxProps<TypographyTagOptions>,
        TypographyProps {
    as?: T
}

const BaseTypography = <T extends TypographyTagOptions>({
    as,
    className,
    align,
    weight,
    break_word = 'word',
    textcolor = 'primary',
    ...rest
}: BaseTypographyProps<T>) => {
    const classnames = dclsx(
        className,
        'typography',
        generateTypographyClasses({
            align,
            break_word,
            textcolor,
            weight,
        }),
    )

    return <Box as={as} className={classnames} {...rest} />
}

export default BaseTypography
