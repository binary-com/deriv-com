import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import language_config from '../../../../../i18n-config.js'
import { LinkProps } from '.'
import { isBrowser } from 'common/utility'
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

export const isActiveLink = (currentPage: string, active_urls?: string[]) => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

    return active_urls?.length
        ? active_urls.some((url) => pathname.includes(url))
        : pathname.includes(currentPage)
}

interface InternalProps extends Omit<LinkProps, 'url'> {
    url: InternalLinkType
    link_target: string
    link_rel: string
    active_urls?: string[]
}

const Internal = ({
    className,
    align,
    weight,
    break_word = 'word',
    textcolor,
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
    link_target,
    link_rel,
    active_urls,
}: InternalProps) => {
    const [is_active, setIsActive] = useState(false)

    let rawLocale = 'en'
    if (isBrowser()) {
        rawLocale = localStorage.getItem('i18n') ?? 'en'
    }
    let locale = 'en'
    if (typeof rawLocale === 'string') {
        locale = rawLocale?.replace(/-/g, '_')
    }

    const { is_default, path } = language_config[locale]
    const is_non_localized = url.to.includes('careers')

    const to = is_non_localized || is_default ? url.to : `/${path}${url.to}`

    useEffect(() => {
        setIsActive(isActiveLink(url.to, active_urls))
    }, [active_urls, url.to])

    return (
        <Link
            to={to}
            target={link_target}
            rel={link_rel}
            className={dclsx(
                className,
                'at-typography-link',
                'at-typography',
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
                    'at-typography-hover': !no_hover,
                    'at-typography-color-brand': is_active,
                },
            )}
        >
            {children}
        </Link>
    )
}

export default Internal
