import { css } from 'styled-components'

export type MarginsProps = {
    m?: string
    mt?: string | number
    ml?: string | number
    mr?: string | number
    mb?: string | number
}

export type PaddingsProps = {
    p?: string
    pt?: string | number
    pl?: string | number
    pr?: string | number
    pb?: string | number
}

export const Margins = ({ m, mt, ml, mr, mb }: MarginsProps): any => css`
    margin: ${m ? m : null};
    margin-top: ${mt ? mt : null};
    margin-right: ${mr ? mr : null};
    margin-bottom: ${mb ? mb : null};
    margin-left: ${ml ? ml : null};
`
export const Paddings = ({ p, pt, pl, pr, pb }: PaddingsProps): any => css`
    padding: ${p ? p : null};
    padding-top: ${pt ? pt : null};
    padding-bottom: ${pb ? pb : null};
    padding-right: ${pr ? pr : null};
    padding-left: ${pl ? pl : null};
`
