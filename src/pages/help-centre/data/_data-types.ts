import { TString } from 'types/generics'

export type TTranslationComponents = {
    key: number
    type: 'link' | 'strong'
    to?: string
}[]

export type TAnswer = {
    translation_text: TString
    translation_components?: TTranslationComponents
    has_margin_top?: boolean
}[]

export type TArticles = Record<'question' | 'sub_category', TString> &
    Record<'category' | 'label', string> & {
        answer?: TAnswer
    }

export type TArticlesData = {
    section: string
    category: TString
    articles: TArticles[]
}
