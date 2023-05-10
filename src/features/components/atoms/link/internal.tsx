import React from 'react'
import { Link } from 'gatsby'
import language_config from '../../../../../i18n-config.js'
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
import { InternalLinkType } from 'features/types'

interface InternalProps extends Omit<LinkProps, 'url'> {
    url: InternalLinkType
}
const Internal = ({
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
    url,
    children,
}: InternalProps) => {
    const rawLocale = typeof window !== undefined ? localStorage.getItem('i18n') ?? 'en' : 'en'
    const locale = rawLocale?.replaceAll('-', '_')

    const { is_default, path } = language_config[locale]
    const is_non_localized = url.to.includes('careers')

    const to = is_non_localized || is_default ? url.to : `/${path}${url}`
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
        >
            {children}
        </Link>
    )
}

export default React.memo(Internal)
