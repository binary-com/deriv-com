import { ReactElement } from 'react'
import { TString } from 'types/generics'

export interface DerivPrimeFAQTextItem {
    type: 'text'
    id: number
    text: TString
    components?: ReactElement[]
}

export interface DerivPrimeFAQListItem {
    type: 'list'
    id: number
    list_title?: TString
    list_items: TString[]
}

export interface DerivPrimeFAQCustomComponentItem {
    type: 'custom_component'
    id: number
    component: React.ReactNode
}
export interface DerivPrimeFAQDataItem {
    question: TString
    id: number
    answers: (DerivPrimeFAQTextItem | DerivPrimeFAQListItem | DerivPrimeFAQCustomComponentItem)[]
}
