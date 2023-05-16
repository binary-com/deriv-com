import { ReactElement } from 'react'
import { TFlexDirection } from '../../types'
import { TString } from 'types/generics'

export type DerivEzCardTypes = {
    icon?: ReactElement
    title?: TString
    subtitle?: TString
}
export type FeaturesTypes = {
    title: TString
    subtitle: TString
    image: ReactElement
    direction?: TFlexDirection
}
export type SellingPointsTypes = {
    title: string | TString
    subtitle: TString
}
