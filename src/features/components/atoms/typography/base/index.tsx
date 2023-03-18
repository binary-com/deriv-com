import clsx from 'clsx'
import React from 'react'
import Box, { BoxProps } from '../../box'
import { ColorPallette, TypographyTagOptions } from 'features/types'
import './base.typography.scss'

export type TypographyAlign = 'end' | 'start' | 'center'

export interface TypographyProps<T extends TypographyTagOptions> {
    as?: T
    align?: TypographyAlign
    bold?: boolean
    italic?: boolean
    word_break?: boolean
    textcolor?: ColorPallette
}
export interface BaseTypographyProps<T extends TypographyTagOptions>
    extends Omit<BoxProps<TypographyTagOptions>, 'as'>,
        TypographyProps<T> {}

const BaseTypography = <T extends TypographyTagOptions>({
    as,
    className,
    align,
    bold,
    italic,
    word_break = true,
    textcolor = 'primary',
    ...rest
}: BaseTypographyProps<T>) => {
    const headingTags =
        as === 'h1' || as === 'h2' || as === 'h3' || as === 'h4' || as === 'h5' || as === 'h6'

    const _className = clsx(
        'typography',
        {
            word_break: word_break,
            bold: bold || as === 'strong',
            italic: italic || as === 'em',
            [align]: align && (headingTags || as === 'p'),
            [`typography-color-${textcolor}`]: textcolor,
        },
        className,
    )

    return <Box as={as} className={_className} {...rest} />
}

export default BaseTypography
