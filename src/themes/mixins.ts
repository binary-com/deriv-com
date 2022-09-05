import { css } from 'styled-components'

interface IProps {
    all?: string | number
    bottom?: string | number
    start?: string | number
    end?: string | number
    top?: string | number
    x?: string | number
    y?: string | number
}

export const BorderMixin = ({
    all,
    x = all,
    y = all,
    bottom = y,
    start = x,
    end = x,
    top = y,
}: IProps) => css`
    border-block-end: ${bottom};
    border-block-start: ${top};
    border-inline-end: ${end};
    border-inline-start: ${start};
    @supports not (border-block-end: 1px solid #000) {
        border-bottom: ${bottom};
        border-left: ${start};
        border-right: ${end};
        border-top: ${top};
    }
`

interface IBorderRadius {
    all?: string
    bottom_left?: string
    bottom_right?: string
    top_left?: string
    top_right?: string
}

export const BorderRadiusMixin = ({
    all,
    bottom_left = all,
    bottom_right = all,
    top_left = all,
    top_right = all,
}: IBorderRadius) => css`
    border-end-end-radius: ${bottom_right};
    border-end-start-radius: ${bottom_left};
    border-start-end-radius: ${top_right};
    border-start-start-radius: ${top_left};
    @supports not (border-end-end-radius: 1px) {
        border-bottom-left-radius: ${bottom_left};
        border-bottom-right-radius: ${bottom_right};
        border-top-left-radius: ${top_left};
        border-top-right-radius: ${top_right};
    }
`

const BlockMargin = (margin?: string | number) => {
    if (typeof margin === 'string') {
        const splitted_margins = margin?.split?.(' ')

        switch (splitted_margins?.length) {
            // margin: "9px"
            case 1:
                return css`
                    margin-block: ${splitted_margins};
                    margin-inline: ${splitted_margins};
                    @supports not ((margin-block: ${margin}) or (margin-inline: ${margin})) {
                        margin: ${margin};
                    }
                `
            // margin: "9px 12px"
            case 2:
                return css`
                    margin-block: ${splitted_margins[0]};
                    margin-inline: ${splitted_margins[1]};
                    @supports not ((margin-block: ${margin}) or (margin-inline: ${margin})) {
                        margin: ${margin};
                    }
                `
            // margin: "9px 10px 11px"
            case 3:
                return css`
                    margin-block-start: ${splitted_margins[0]};
                    margin-inline: ${splitted_margins[1]};
                    margin-block-end: ${splitted_margins[2]};
                    @supports not ((margin-block: ${margin}) or (margin-inline: ${margin})) {
                        margin: ${margin};
                    }
                `
            // margin: "9px 10px 11px"
            case 4:
                return css`
                    margin-block-start: ${splitted_margins[0]};
                    margin-inline-start: ${splitted_margins[1]};
                    margin-inline-end: ${splitted_margins[2]};
                    margin-block-end: ${splitted_margins[3]};
                    @supports not ((margin-block: ${margin}) or (margin-inline: ${margin})) {
                        margin: ${margin};
                    }
                `
            default:
                return css`
                    margin: ${margin};

                    /* margin-block: 0;
                    margin-inline: 0;
                    @supports not ((margin-block: ${margin}) or (margin-inline: ${margin})) {
                        margin: ${margin};
                    } */
                `
        }
    } else {
        return css`
            margin: ${margin};
        `
    }
}
export const MarginMixin = ({
    all = null,
    x = all,
    y = all,
    bottom = y,
    start = x,
    end = x,
    top = y,
}: IProps) => {
    if (all !== null) {
        return BlockMargin(all)
    }
    return css`
        margin-block-end: ${bottom};
        margin-block-start: ${top};
        margin-inline-end: ${end};
        margin-inline-start: ${start};
        @supports not (margin-block-end: 1rem) {
            margin-bottom: ${bottom};
            margin-left: ${start};
            margin-right: ${end};
            margin-top: ${top};
        }
    `
}

const BlockPadding = (padding?: string | number) => {
    if (typeof padding === 'string') {
        const splitted_paddings = padding?.split?.(' ')
        switch (splitted_paddings?.length) {
            // padding: "9px"
            case 1:
                return css`
                    padding-block: ${padding};
                    padding-inline: ${padding};
                    @supports not ((padding-block: ${padding}) or (padding-inline: ${padding})) {
                        padding: ${padding};
                    }
                `
            // padding: "9px 12px"
            case 2:
                return css`
                    padding-block: ${splitted_paddings[0]};
                    padding-inline: ${splitted_paddings[1]};
                    @supports not ((padding-block: ${padding}) or (padding-inline: ${padding})) {
                        padding: ${padding};
                    }
                `
            // padding: "9px 10px 11px"
            case 3:
                return css`
                    padding-block-start: ${splitted_paddings[0]};
                    padding-inline: ${splitted_paddings[1]};
                    padding-block-end: ${splitted_paddings[2]};
                    @supports not ((padding-block: ${padding}) or (padding-inline: ${padding})) {
                        padding: ${padding};
                    }
                `
            // padding: "9px 10px 11px"
            case 4:
                return css`
                    padding-block-start: ${splitted_paddings[0]};
                    padding-inline-start: ${splitted_paddings[1]};
                    padding-inline-end: ${splitted_paddings[2]};
                    padding-block-end: ${splitted_paddings[3]};
                    @supports not ((padding-block: ${padding}) or (padding-inline: ${padding})) {
                        padding: ${padding};
                    }
                `
            default:
                return css`
                    padding: ${padding};

                    /* padding-block: 0;
                    padding-inline: 0;
                    @supports not ((padding-block: ${padding}) or (padding-inline: ${padding})) {
                        padding: ${padding};
                    } */
                `
        }
    } else {
        return css`
            padding: ${padding};
        `
    }
}

export const PaddingMixin = ({
    all = null,
    x = all,
    y = all,
    bottom = y,
    start = x,
    end = x,
    top = y,
}: IProps) => {
    if (all !== null) {
        return BlockPadding(all)
    }
    return css`
        padding-block-end: ${bottom};
        padding-block-start: ${top};
        padding-inline-end: ${end};
        padding-inline-start: ${start};
        @supports not (padding-block-end: 1rem) {
            padding-bottom: ${bottom};
            padding-left: ${start};
            padding-right: ${end};
            padding-top: ${top};
        }
    `
}

interface IPosition {
    bottom?: string | number
    start?: string | number
    end?: string | number
    top?: string | number
}

export const PositionMixin = ({ top, end, bottom, start }: IPosition) => css`
    inset-block-end: ${bottom};
    inset-block-start: ${top};
    inset-inline-end: ${end};
    inset-inline-start: ${start};
    @supports not (inset-block-end: ${bottom}) {
        bottom: ${bottom};
    }
    @supports not (inset-block-start: ${top}) {
        top: ${top};
    }
    @supports not (inset-block: ${top}) {
        bottom: ${bottom};
        top: ${top};
    }
    @supports not (inset-inline-end: ${start}) {
        left: ${start};
    }
    @supports not (inset-inline-end: ${end}) {
        right: ${end};
    }
    @supports not (inset-inline: ${start}) {
        left: ${start};
        right: ${end};
    }
`

interface ISize {
    height?: string
    max_height?: string
    max_width?: string
    min_height?: string
    min_width?: string
    width?: string
}

export const SizeMixin = ({
    height,
    max_height,
    max_width,
    min_height,
    min_width,
    width,
}: ISize) => css`
    block-size: ${height};
    inline-size: ${width};
    max-block-size: ${max_height};
    max-inline-size: ${max_width};
    min-block-size: ${min_height};
    min-inline-size: ${min_width};
    @supports not (block-size: 1rem) {
        height: ${height};
        max-height: ${max_height};
        min-height: ${min_height};
    }
    @supports not (inline-size: 1rem) {
        max-width: ${max_width};
        min-width: ${min_width};
        width: ${width};
    }
`

export default {
    BorderMixin,
    BorderRadiusMixin,
    MarginMixin,
    PaddingMixin,
    PositionMixin,
    SizeMixin,
}
