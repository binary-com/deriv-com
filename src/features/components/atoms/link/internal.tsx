import React from 'react'
import { Link } from 'gatsby'
import { LinkProps } from '.'
import dclsx from 'features/utils/dclsx'
import {
    generateBackgroundColor,
    generateBorderRadius,
    generateSpacingClasses,
    generateTextSize,
    generateTypographyAlignClasses,
    generateTypographyClasses,
    generateTypographyFontClasses,
    generateTypographyWeightClasses,
    generateVisibleClasses,
} from 'features/styles/utils'

interface InternalProps extends Omit<LinkProps, 'url'> {
    to: string
}
const Internal = ({
    to,
    className,
    align,
    weight,
    break_word = 'word',
    textcolor = 'primary',
    font_family,
    no_hover,
    margin,
    padding,
    ml,
    mr,
    mt,
    mb,
    margin_inline,
    margin_block,
    pl,
    pr,
    pt,
    pb,
    padding_block,
    padding_inline,
    size,
    visible,
    md,
    lg,
    bgcolor,
    radius,
    ...rest
}: InternalProps) => {
    return (
        <Link
            to={to}
            className={dclsx(
                className,
                'typography-link',
                'typography',
                generateSpacingClasses({
                    margin,
                    padding,
                    ml,
                    mr,
                    mt,
                    mb,
                    margin_inline,
                    margin_block,
                    pl,
                    pr,
                    pt,
                    pb,
                    padding_block,
                    padding_inline,
                }),
                generateVisibleClasses(visible),
                generateSpacingClasses(md ?? {}, 'md'),
                generateSpacingClasses(lg ?? {}, 'lg'),
                generateBackgroundColor(bgcolor),
                generateBorderRadius(radius),
                generateTypographyAlignClasses(align),
                generateTextSize(size),
                generateTypographyWeightClasses(weight),
                generateTypographyFontClasses(font_family),
                generateTypographyClasses({
                    break_word,
                    textcolor,
                }),
                {
                    'typography-hover': !no_hover,
                },
            )}
            {...rest}
        />
    )
}

export default Internal
