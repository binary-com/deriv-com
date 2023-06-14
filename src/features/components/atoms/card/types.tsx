import { LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export interface CardType {
    header: TString
    description: TString
    icon?: string
    link?: LinkUrlType
}
