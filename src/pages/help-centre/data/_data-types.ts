import { ReactNode } from 'react'
import { TString } from 'types/generics'

export type ListStyleType = 'disc' | 'decimal' | 'circle'

export type TranslationComponentsType = {
    key: number
    type: 'link' | 'strong'
    to?: string
}[]

type LocalizeType = {
    translation_text: TString
    translation_components?: TranslationComponentsType
}

type AnswerPropsType = {
    has_margin_top?: boolean // default 1.7rem
    margin_top?: string
    eu_translation_text?: TString
    list?: ListType
}

type SubItemsType = {
    sub_items?: ListType
}

export type ListType = {
    list_style: ListStyleType
    items: Array<LocalizeType & SubItemsType>
    margin_top: string
    first_child_margin_top?: string
    padding_left?: string
}

export type AnswerType = Array<AnswerPropsType & LocalizeType>

export type ArticlesType = {
    question: TString
    sub_category: TString
    category: string
    label: string
    answer?: AnswerType
    renderProp?: () => ReactNode
    hide_for_non_eu?: boolean
    hide_for_eu?: boolean
}

export type ArticlesDataType = {
    section: string
    category: TString
    articles: ArticlesType[]
}
