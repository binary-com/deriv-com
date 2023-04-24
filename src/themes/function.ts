import { css } from 'styled-components'
import { is_rtl } from 'components/localization/config'

export type MarginsType = {
    m?: string
    mt?: string
    ml?: string
    mr?: string
    mb?: string
}

export type PaddingsType = {
    p?: string
    pt?: string
    pl?: string
    pr?: string
    pb?: string
}

export const Margins = ({ m, mt, ml, mr, mb }: MarginsType) => css`
    margin: ${m || null};
    margin-top: ${mt || null};
    margin-right: ${mr || null};
    margin-bottom: ${mb || null};
    margin-left: ${ml || null};
`
export const Paddings = ({ p, pt, pl, pr, pb }: PaddingsType) => css`
    padding: ${p || null};
    padding-top: ${pt || null};
    padding-bottom: ${pb || null};
    padding-right: ${pr || null};
    padding-left: ${pl || null};
`

const default_styels = {
    ltr_styles: css``,
    rtl_styles: css``,
}

/**
 * @description  will get two styled-component css`` styles and return the suitable style based on the current language direction
 * @param styles the styles for ltr and rtl ( it should be styled `css` )
 * @returns suitable styles for the current language
 */
export const withLangDirection = (styles = default_styels) => {
    const { rtl_styles, ltr_styles } = styles
    return is_rtl() ? rtl_styles : ltr_styles
}
