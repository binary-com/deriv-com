import { FunctionComponent } from 'react'
import { TString } from 'types/generics'

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
    list?: ListType
}

export type ListType = {
    list_style: 'disc' | 'decimal'
    items: LocalizeType[]
    margin_top: string
    first_child_margin_top?: string
    padding_left?: string
}

export type AnswerType = Array<AnswerPropsType & LocalizeType>

export type ArticlesType = Record<'question' | 'sub_category', TString> &
    Record<'category' | 'label', string> & {
        answer?: AnswerType
        renderProp?: FunctionComponent
    }

export type ArticlesDataType = {
    section: string
    category: TString
    articles: ArticlesType[]
}
