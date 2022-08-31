import { css } from 'styled-components'

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

export const Margins = ({ m = '', mt = '', ml = '', mr = '', mb = '' }: MarginsType) => css`
    margin: ${m ? m : null};
    margin-block-start: ${mt ? mt : null};
    margin-inline-end: ${mr ? mr : null};
    margin-block-end: ${mb ? mb : null};
    margin-inline-start: ${ml ? ml : null};
`
export const Paddings = ({ p = '', pt = '', pl = '', pr = '', pb = '' }: PaddingsType) => css`
    padding: ${p ? p : null};
    padding-block-start: ${pt ? pt : null};
    padding-block-end: ${pb ? pb : null};
    padding-inline-end: ${pr ? pr : null};
    padding-inline-start: ${pl ? pl : null};
`
