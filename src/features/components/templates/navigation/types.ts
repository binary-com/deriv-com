import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export type TActiveNav = 'trade' | 'markets' | 'about' | 'resources' | 'none'

export type TNavColumn = {
    icon?: {
        src: string
        alt: string
    }
    content?: TString | ((config: Partial<TNavConfig>) => TString)
    title: TString
    url: LinkUrlType | ((config: Partial<TNavConfig>) => LinkUrlType)
    aria_label?: string
}

export type TNavMultiColumn = {
    title?: TString
    section: TSmartNavContent[]
}

export type TSmartNavContent = TSmartContent<TNavColumn, TNavConfig>
export type TSmartNavSectionColumns = TSmartContent<TNavMultiColumn, TNavConfig>

interface TBaseNavItem<T extends string> {
    title?: TString
    active: T
}

export interface TNavSingleItem<T extends string> extends TBaseNavItem<T> {
    type: 'single-item'
    content: LinkUrlType
}

export interface TNavSingleColumnItems<T extends string> extends TBaseNavItem<T> {
    type: 'single-column'
    content: TSmartNavContent[]
}

export interface TNavMultiColumnItems<T extends string> extends TBaseNavItem<T> {
    type: 'multi-column'
    content: TSmartNavSectionColumns[]
}

export type TNavItemsContent<T extends string> =
    | TNavSingleItem<T>
    | TNavSingleColumnItems<T>
    | TNavMultiColumnItems<T>

export type TSmartNavItemsContent<T extends string> = TSmartContent<
    TNavItemsContent<T>,
    TNavItemsContentConfig
>

export type TNavItems<T extends string> = TSmartNavItemsContent<T>[]

export type TNavItemsContentConfig = {
    is_mobile: boolean
    is_eu: boolean
}
export type TNavConfig = {
    is_row: boolean
    is_eu: boolean
    is_ppc: boolean
    is_ppc_redirect: boolean
}
