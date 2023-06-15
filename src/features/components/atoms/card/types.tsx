import { LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export type CardType = {
    header: TString
    description: TString
    icon?: string
    link?: LinkUrlType
}
