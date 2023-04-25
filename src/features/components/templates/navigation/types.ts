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

interface TBaseNavItem {
    title?: TString
}

export interface TNavSingleItem extends TBaseNavItem {
    type: 'single-item'
    content: LinkUrlType
}

export interface TNavSingleColumnItems extends TBaseNavItem {
    type: 'single-column'
    content: TSmartNavContent[]
}

export interface TNavMultiColumnItems extends TBaseNavItem {
    type: 'multi-column'
    content: TSmartNavSectionColumns[]
}

export type TNavItemsContent = TNavSingleItem | TNavSingleColumnItems | TNavMultiColumnItems

export type TSmartNavItemsContent = TSmartContent<TNavItemsContent, TNavItemsContentConfig>

export type TNavItems = TSmartNavItemsContent[]

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
