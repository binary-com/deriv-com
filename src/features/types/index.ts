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
    | 'ul'

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
    show_eu_modal?: boolean
}

export interface InternalLinkType {
    type: 'internal'
    to: `/${string}`
}

export type ExternalLinkType = CompanyExternalLink | NonCompanyExternalLink

export type LinkUrlType = InternalLinkType | ExternalLinkType

type InferSide<T, K extends string> = T extends `${K}-${infer R}` ? R : never

// Typography Classes
export type TTypographyAlign = InferSide<ClassNames, 'typography-align'>
export type TTypographyBreakWord = InferSide<ClassNames, 'typography-break'>
export type TTypographyWeight = InferSide<ClassNames, 'typography-weight'>
export type THeadingSize = InferSide<ClassNames, 'heading'>
export type TTextSize = InferSide<ClassNames, 'text'>
export type TSpacingSize = InferSide<ClassNames, 'margin-block'>
export type TTypographyColor = InferSide<ClassNames, 'typography-color'>

// Background Classes
export type TBGColor = InferSide<ClassNames, 'bg-color'>

// FlexBox Classes
export type TAlignItems = InferSide<ClassNames, 'align-items'>
export type TJustifyContent = InferSide<ClassNames, 'justify'>
export type TFlexGrow = InferSide<ClassNames, 'flex-grow'>
export type TFlexShrink = InferSide<ClassNames, 'flex-shrink'>
export type TFlexWrap = InferSide<ClassNames, 'flex-wrap'>
export type TFlexDirection = InferSide<ClassNames, 'flex-dir'>
export type TFlexBasis = InferSide<ClassNames, 'flex-basis'>
export type TContainerType = 'fixed' | 'fluid'

export interface ClassProps {
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
