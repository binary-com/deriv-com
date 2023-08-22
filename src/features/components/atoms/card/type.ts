import { LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export interface BasicCardType {
    header: TString
    description: TString
}

export interface CardType {
    header: TString
    description: TString
    icon?: string
    link?: LinkUrlType
    is_coming_soon?: boolean
    alt_icon?: TString
}
