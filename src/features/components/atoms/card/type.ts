import { LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export interface BasicCardType {
    header: TString
    description: TString
}

export interface CardType extends BasicCardType {
    icon?: string
    link?: LinkUrlType
}
