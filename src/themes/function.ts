import { MarginMixin, PaddingMixin } from './mixins'

export type MarginsType = {
    m?: string | number
    mt?: string | number
    ml?: string | number
    mr?: string | number
    mb?: string | number
}

export type PaddingsType = {
    p?: string | number
    pt?: string | number
    pl?: string | number
    pr?: string | number
    pb?: string | number
}

export const Margins = ({ m = null, mt = '', ml = '', mr = '', mb = '' }: MarginsType) =>
    MarginMixin({ all: String(m), top: mt, start: ml, end: mr, bottom: mb })

export const Paddings = ({ p = null, pt = '', pl = '', pr = '', pb = '' }: PaddingsType) =>
    PaddingMixin({ all: String(p), top: pt, start: pl, end: pr, bottom: pb })
