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
    | 'footer'
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

export type ColorPallette =
    | 'brand'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inverted'
    | 'transparent'

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
    bgcolor?: ColorPallette
    innerRef?: ComponentPropsWithRef<T>['ref']
}

export type ExternalURLNames =
    | 'affiliate_sign_in'
    | 'affiliate_sign_up'
    | 'dbot'
    | 'deriv_app'
    | 'mt5'
    | 'derivx'
    | 'binary'
    | 'smart_trader'
    | 'binary_bot'
    | 'blog'
    | 'community'
    | 'api'
    | 'zoho'
    | 'derivlife'
    | 'academy'
    | 'tnc_security'
    | 'tnd_clients'

export type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

export interface CompanyExternalLink {
    type: 'company'
    url_name: ExternalURLNames
    path?: string
    target?: LinkTarget
    rel?: string
}

export interface NonCompanyExternalLink {
    type: 'non-company'
    href: string
    target?: LinkTarget
    rel?: string
}

export interface InternalLinkType {
    type: 'internal'
    to: `/${string}`
}

export type ExternalLinkType = CompanyExternalLink | NonCompanyExternalLink

export type LinkUrlType = InternalLinkType | ExternalLinkType

type InferSide<T, K extends string> = T extends `${K}-${infer R}` ? R : never

export type THeadingSize = InferSide<ClassNames, 'heading'>
export type TTextSize = InferSide<ClassNames, 'text'>
export type TSpacingSize = InferSide<ClassNames, 'margin-block'>
export type TBGColor = InferSide<ClassNames, 'bg-color'>
export type TTextColor = InferSide<ClassNames, 'text-color'>
