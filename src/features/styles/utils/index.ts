import {
    TBGColor,
    TBorderRadius,
    THeadingSize,
    TSpacingSize,
    TTypographyAlign,
    TTypographyBreakWord,
    TTypographyColor,
    TTypographyFont,
    TTypographyWeight,
    TVisible,
} from 'features/types'
import dclsx from 'features/utils/dclsx'

type SpacingClasses = {
    margin?: TSpacingSize
    ml?: TSpacingSize
    mr?: TSpacingSize
    mt?: TSpacingSize
    mb?: TSpacingSize
    margin_inline?: TSpacingSize
    margin_block?: TSpacingSize
    padding?: TSpacingSize
    pl?: TSpacingSize
    pr?: TSpacingSize
    pt?: TSpacingSize
    pb?: TSpacingSize
    padding_inline?: TSpacingSize
    padding_block?: TSpacingSize
}

export const generateVisibleClasses = (visible: TVisible) => {
    return dclsx({
        [`at-visible-${visible}`]: visible,
    })
}

export const generateSpacingClasses = (options: SpacingClasses, prefix = '') => {
    const classPrefix = prefix !== '' ? `${prefix}-` : ''
    const {
        margin,
        ml,
        mr,
        mt,
        mb,
        margin_inline,
        margin_block,
        padding,
        pl,
        pr,
        pt,
        pb,
        padding_inline,
        padding_block,
    } = options
    return dclsx({
        [`${classPrefix}at-margin-${margin}`]: margin,
        [`${classPrefix}at-margin-left-${ml}`]: ml,
        [`${classPrefix}at-margin-right-${mr}`]: mr,
        [`${classPrefix}at-margin-top-${mt}`]: mt,
        [`${classPrefix}at-margin-bottom-${mb}`]: mb,
        [`${classPrefix}at-margin-inline-${margin_inline}`]: margin_inline,
        [`${classPrefix}at-margin-block-${margin_block}`]: margin_block,
        [`${classPrefix}at-padding-${padding}`]: padding,
        [`${classPrefix}at-padding-left-${pl}`]: pl,
        [`${classPrefix}at-padding-right-${pr}`]: pr,
        [`${classPrefix}at-padding-top-${pt}`]: pt,
        [`${classPrefix}at-padding-bottom-${pb}`]: pb,
        [`${classPrefix}at-padding-inline-${padding_inline}`]: padding_inline,
        [`${classPrefix}at-padding-block-${padding_block}`]: padding_block,
    })
}

export const generateGapClasses = (gap?: TSpacingSize) => {
    return dclsx({ [`at-gap-${gap}`]: gap })
}

export const generateBackgroundColor = (bgColor?: TBGColor) => {
    return dclsx({
        [`at-bg-color-${bgColor}`]: bgColor,
    })
}

export const generateHeadingSize = (size?: THeadingSize) => {
    return dclsx({
        [`at-heading-${size}`]: size,
    })
}

export const generateBorderRadius = (radius?: TBorderRadius) => {
    return dclsx({
        [`at-border-radius-${radius}`]: radius,
    })
}
export const generateTextSize = (size?: THeadingSize) => {
    return dclsx({
        [`at-text-${size}`]: size,
    })
}

export const generateTextColor = (color?: TTypographyColor) => {
    return dclsx({
        [`at-typography-color-${color}`]: color,
    })
}

export const generateTypographyWeightClasses = (weight?: TTypographyWeight, prefix = '') => {
    const classPrefix = prefix !== '' ? `${prefix}-` : ''
    return dclsx({
        [`${classPrefix}at-typography-weight-${weight}`]: weight,
    })
}

export const generateTypographyFontClasses = (font_family?: TTypographyFont) => {
    return dclsx({
        [`at-typography-font-${font_family}`]: font_family,
    })
}

export const generateTypographyAlignClasses = (align?: TTypographyAlign, prefix = '') => {
    const classPrefix = prefix !== '' ? `${prefix}-` : ''

    return dclsx({
        [`${classPrefix}at-typography-align-${align}`]: align,
    })
}

export const generateTypographyClasses = ({
    break_word,
    textcolor,
}: {
    break_word?: TTypographyBreakWord
    textcolor?: TTypographyColor
}) => {
    return dclsx(
        {
            [`at-typography-break-${break_word}`]: break_word,
        },
        generateTextColor(textcolor),
    )
}
