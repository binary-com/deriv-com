import {
    TBGColor,
    THeadingSize,
    TSpacingSize,
    TTypographyAlign,
    TTypographyBreakWord,
    TTypographyColor,
    TTypographyWeight,
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

export const generateTypographyWeight = (weight?: TTypographyWeight) => {
    return dclsx({
        [`typography-weight-${weight}`]: weight,
    })
}

export const generateTypographyClasses = ({
    align,
    weight,
    break_word,
    textcolor,
}: {
    align?: TTypographyAlign
    break_word?: TTypographyBreakWord
    weight?: TTypographyWeight
    textcolor?: TTypographyColor
}) => {
    return dclsx(
        {
            [`typography-align-${align}`]: align,
            [`typography-break-${break_word}`]: break_word,
        },
        generateTextColor(textcolor),
        generateTypographyWeight(weight),
    )
}
