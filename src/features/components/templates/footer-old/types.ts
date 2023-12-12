import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export interface FooterLinkConfig {
    is_ppc: boolean
    is_ppc_redirect: boolean
    is_row: boolean
}

export interface FooterLink {
    text: TString
    url: LinkUrlType | ((config: Partial<FooterLinkConfig>) => LinkUrlType)
}

export type SmartFooterLink = TSmartContent<FooterLink, FooterLinkConfig>

export interface FooterLinkColumn {
    title: TString
    links: SmartFooterLink[]
}

export type SmartFooterLinkColumn = TSmartContent<FooterLinkColumn, { is_ppc: boolean }>
