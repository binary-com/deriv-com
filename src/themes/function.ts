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
    margin-top: ${mt ? mt : null};
    margin-right: ${mr ? mr : null};
    margin-bottom: ${mb ? mb : null};
    margin-left: ${ml ? ml : null};
`
export const Paddings = ({ p = '', pt = '', pl = '', pr = '', pb = '' }: PaddingsType) => css`
    padding: ${p ? p : null};
    padding-top: ${pt ? pt : null};
    padding-bottom: ${pb ? pb : null};
    padding-right: ${pr ? pr : null};
    padding-left: ${pl ? pl : null};
`
