import { MarginMixin, PaddingMixin } from './mixins'

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

export const Margins = ({ m = null, mt = '', ml = '', mr = '', mb = '' }: MarginsType) =>
    MarginMixin({ all: m, top: mt, start: ml, end: mr, bottom: mb })

export const Paddings = ({ p = null, pt = '', pl = '', pr = '', pb = '' }: PaddingsType) =>
    PaddingMixin({ all: p, top: pt, start: pl, end: pr, bottom: pb })
