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
        [`visible-${visible}`]: visible,
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
        [`${classPrefix}margin-${margin}`]: margin,
        [`${classPrefix}margin-left-${ml}`]: ml,
        [`${classPrefix}margin-right-${mr}`]: mr,
        [`${classPrefix}margin-top-${mt}`]: mt,
        [`${classPrefix}margin-bottom-${mb}`]: mb,
        [`${classPrefix}margin-inline-${margin_inline}`]: margin_inline,
        [`${classPrefix}margin-block-${margin_block}`]: margin_block,
        [`${classPrefix}padding-${padding}`]: padding,
        [`${classPrefix}padding-left-${pl}`]: pl,
        [`${classPrefix}padding-right-${pr}`]: pr,
        [`${classPrefix}padding-top-${pt}`]: pt,
        [`${classPrefix}padding-bottom-${pb}`]: pb,
        [`${classPrefix}padding-inline-${padding_inline}`]: padding_inline,
        [`${classPrefix}padding-block-${padding_block}`]: padding_block,
    })
}

export const generateGapClasses = (gap?: TSpacingSize) => {
    return dclsx({ [`gap-${gap}`]: gap })
}

export const generateBackgroundColor = (bgColor?: TBGColor) => {
    return dclsx({
        [`bg-color-${bgColor}`]: bgColor,
    })
}

export const generateHeadingSize = (size?: THeadingSize) => {
    return dclsx({
        [`heading-${size}`]: size,
    })
}

export const generateBorderRadius = (radius?: TBorderRadius) => {
    return dclsx({
        [`border-radius-${radius}`]: radius,
    })
}
export const generateTextSize = (size?: THeadingSize) => {
    return dclsx({
        [`text-${size}`]: size,
    })
}

export const generateTextColor = (color?: TTypographyColor) => {
    return dclsx({
        [`typography-color-${color}`]: color,
    })
}

export const generateTypographyWeightClasses = (weight?: TTypographyWeight, prefix = '') => {
    const classPrefix = prefix !== '' ? `${prefix}-` : ''
    return dclsx({
        [`${classPrefix}typography-weight-${weight}`]: weight,
    })
}

export const generateTypographyFontClasses = (font_family?: TTypographyFont) => {
    return dclsx({
        [`typography-font-${font_family}`]: font_family,
    })
}

export const generateTypographyAlignClasses = (align?: TTypographyAlign, prefix = '') => {
    const classPrefix = prefix !== '' ? `${prefix}-` : ''

    return dclsx({
        [`${classPrefix}typography-align-${align}`]: align,
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
            [`typography-break-${break_word}`]: break_word,
        },
        generateTextColor(textcolor),
    )
}
