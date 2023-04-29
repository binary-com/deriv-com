import { ReactElement } from 'react'
import { TFlexDirection } from '../../types'
import { TString } from 'types/generics'

export type TCard = {
    icon?: ReactElement
    title?: TString
    subtitle?: TString
}
export type TFeatures = {
    title: TString
    subtitle: TString
    image: ReactElement
    direction?: TFlexDirection
}
export type TSellingPoints = {
    title: string | TString
    subtitle: TString
}
