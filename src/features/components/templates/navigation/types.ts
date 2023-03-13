import { TSmartContent, TString } from 'types/generics'

export type TActiveNav = 'trade' | 'markets' | 'about' | 'resources' | 'none'

export type TNavLink = {
    active: TActiveNav
    title: TString
}

export type TNavContent = {
    icon?: {
        src: string
        alt: string
    }
    content?: TString | ((config: Partial<TNavConfig>) => TString)
    title: TString
    to: string | ((config: Partial<TNavConfig>) => string)
    aria_label?: string
    external?: boolean
    target?: string
}

export type TNavSectionColumns = {
    title?: TString
    section: TSmartNavContent[]
}

export type TNavConfig = {
    is_row: boolean
    is_eu: boolean
    is_ppc: boolean
    is_ppc_redirect: boolean
}

export type TSmartNavContent = TSmartContent<TNavContent, TNavConfig>
export type TSmartNavSectionColumns = TSmartContent<TNavSectionColumns, TNavConfig>

export type TNavItemsContentConfig = {
    is_mobile: boolean
}

export type TNavItemsContent<T extends string> = {
    title?: TString
    active: T
    content: TSmartNavContent[] | TSmartNavSectionColumns[]
}

export type TSmartNavItemsContent<T extends string> = TSmartContent<
    TNavItemsContent<T>,
    TNavItemsContentConfig
>

export type TNavItems<T extends string> = TSmartNavItemsContent<T>[]
