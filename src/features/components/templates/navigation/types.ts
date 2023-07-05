import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export type NavItemsContentConfig = {
    is_mobile: boolean
    is_eu: boolean
    is_row: boolean
}
export type NavConfig = {
    is_row: boolean
    is_eu: boolean
    is_ppc: boolean
    is_ppc_redirect: boolean
    is_mobile?: boolean
}

export type NavColumn = {
    icon?: {
        src: string
        alt: string
    }
    content?: TString | ((config: Partial<NavConfig>) => TString)
    title: TString
    url: LinkUrlType | ((config: Partial<NavConfig>) => LinkUrlType)
    aria_label?: string
}

export type NavMultiColumn = {
    title?: TString
    section: SmartNavContent[]
    no_title?: boolean
    no_divider?: boolean
}

export type SmartNavContent = TSmartContent<NavColumn, NavConfig>
export type SmartNavSectionColumns = TSmartContent<NavMultiColumn, NavConfig>

interface TBaseNavItem {
    title?: TString
}

export interface NavLinkItem extends TBaseNavItem {
    type: 'single-item'
    content: LinkUrlType
}

export interface NavSingleColumnItems extends TBaseNavItem {
    type: 'single-column'
    content: SmartNavContent[]
}

export interface NavMultiColumnItems extends TBaseNavItem {
    type: 'multi-column'
    content: SmartNavSectionColumns[]
}

export type NavItemsContent = NavLinkItem | NavSingleColumnItems | NavMultiColumnItems

export type SmartSingleItem = TSmartContent<NavLinkItem, NavItemsContentConfig>
export type SmartSingleColumnItems = TSmartContent<NavSingleColumnItems, NavItemsContentConfig>
export type SmartMultiColumnItems = TSmartContent<NavMultiColumnItems, NavItemsContentConfig>

export type SmartNavDropItems = SmartSingleColumnItems | SmartMultiColumnItems

export type NavItem = SmartSingleItem | SmartNavDropItems

export type NavItems = NavItem[]
