import { TString } from 'types/generics'

export type CardType = {
    header: TString
    description: TString
    icon?: string
    link?: `/${string}`
    id?: number
}
