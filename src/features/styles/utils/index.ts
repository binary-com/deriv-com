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

export const generateSpacingClasses = ({
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
}: SpacingClasses) => {
    return dclsx({
        [`margin-${margin}`]: margin,
        [`margin-left-${ml}`]: ml,
        [`margin-right-${mr}`]: mr,
        [`margin-top-${mt}`]: mt,
        [`margin-bottom-${mb}`]: mb,
        [`margin-inline-${margin_inline}`]: margin_inline,
        [`margin-block-${margin_block}`]: margin_block,
        [`padding-${padding}`]: padding,
        [`padding-left-${pl}`]: pl,
        [`padding-right-${pr}`]: pr,
        [`padding-top-${pt}`]: pt,
        [`padding-bottom-${pb}`]: pb,
        [`padding-inline-${padding_inline}`]: padding_inline,
        [`padding-block-${padding_block}`]: padding_block,
    })
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
    return dclsx({
        [`typography-align-${align}`]: align,
        [`typography-break-${break_word}`]: break_word,
        [`typography-weight-${weight}`]: weight,
        [`typography-color-${textcolor}`]: textcolor,
    })
}
