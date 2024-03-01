import type { HeadProps } from 'gatsby'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'
import { TString } from 'types/generics'

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
    | 'li'
    | 'form'

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
    | 'label'

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
    | 'traders_hub'
    | 'deriv_app_login'

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
    target?: LinkTarget
}

export type ExternalLinkType = CompanyExternalLink | NonCompanyExternalLink

export type LinkUrlType = InternalLinkType | ExternalLinkType

type InferSide<T, K extends string> = T extends `${K}-${infer R}` ? R : never

// Typography Classes
export type TTypographyAlign = InferSide<ClassNames, 'at-typography-align'>
export type TTypographyBreakWord = InferSide<ClassNames, 'at-typography-break'>
export type TTypographyWeight = InferSide<ClassNames, 'at-typography-weight'>
export type THeadingSize = InferSide<ClassNames, 'at-heading'>
export type TTextSize = InferSide<ClassNames, 'at-text'>
export type TBorderRadius = InferSide<ClassNames, 'at-border-radius'>
export type TSpacingSize = InferSide<ClassNames, 'at-margin-block'>
export type TTypographyColor = InferSide<ClassNames, 'at-typography-color'>
export type TTypographyFont = InferSide<ClassNames, 'at-typography-font'>

// Background Classes
export type TBGColor = InferSide<ClassNames, 'at-bg-color'>

// FlexBox Classes
export type TAlignItems = InferSide<ClassNames, 'at-align-items'>
export type TAlignSelf = InferSide<ClassNames, 'at-align-self'>
export type TJustifyContent = InferSide<ClassNames, 'at-justify'>
export type TFlexGrow = InferSide<ClassNames, 'at-flex-grow'>
export type TFlexShrink = InferSide<ClassNames, 'at-flex-shrink'>
export type TFlexWrap = InferSide<ClassNames, 'at-flex-wrap'>
export type TFlexDirection = InferSide<ClassNames, 'at-flex-dir'>
export type TFlexBasis = InferSide<ClassNames, 'at-flex-basis'>
export type TContainerType = InferSide<ClassNames, 'at-container'>
export type TVisible = InferSide<ClassNames, 'at-visible'>

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
    radius?: TBorderRadius
}

export type TPageContext = {
    locale: string
    pathname: string
    region: BuildVariantContextType['region']
}

export type BuildVariantType = {
    region: BuildVariantContextType['region']
}

export type TGatsbyHead = HeadProps<object, TPageContext>

export type IconType = {
    src: string
    alt: TString
}

export type PathType = `/${string}`
