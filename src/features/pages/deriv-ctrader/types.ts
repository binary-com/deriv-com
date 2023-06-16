import { ReactElement } from 'react'
import { TString } from 'types/generics'

export type DerivEzCardTypes = {
    icon?: ReactElement
    title?: TString
    subtitle?: TString
}
export type SellingPointsTypes = {
    title: TString
    subtitle: TString
}
export type FeaturesTypes = {
    id: number
    image: ReactElement
    title?: TString
    subtitle?: TString
}
