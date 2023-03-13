import { ComponentPropsWithRef } from 'react'

export type ContentSectionTagOptions =
    | 'div'
    | 'address'
    | 'article'
    | 'aside'
    | 'header'
    | 'main'
    | 'nav'
    | 'section'

export type HeadingTagOptions = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextTagOptions =
    | 'p'
    | 'blockquote'
    | 'dd'
    | 'dl'
    | 'dt'
    | 'figcaption'
    | 'figure'
    | 'hr'
    | 'li'
    | 'menu'
    | 'ol'
    | 'pre'
    | 'ul'
    | 'em'
    | 'strong'
    | 'a'
    | 'abbr'
    | 'b'
    | 'bdi'
    | 'bdo'
    | 'br'
    | 'code'
    | 'data'
    | 'dfn'
    | 'em'
    | 'i'
    | 'kbd'
    | 'mark'
    | 'q'
    | 'rp'
    | 'rt'
    | 'span'
    | 'cite'

export type TypographyTagOptions = HeadingTagOptions | TextTagOptions

export type SpacingSize = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

export interface SpaceProps<T extends React.ElementType = 'p'> {
    as?: T
    margin?: SpacingSize
    ml?: SpacingSize
    mr?: SpacingSize
    mt?: SpacingSize
    mb?: SpacingSize
    margin_inline?: SpacingSize
    margin_block?: SpacingSize
    padding?: SpacingSize
    pl?: SpacingSize
    pr?: SpacingSize
    pt?: SpacingSize
    pb?: SpacingSize
    padding_inline?: SpacingSize
    padding_block?: SpacingSize
    innerRef?: ComponentPropsWithRef<T>['ref']
}
