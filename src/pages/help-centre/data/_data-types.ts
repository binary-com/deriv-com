import { ReactNode } from 'react'
import { TString } from 'types/generics'

export type TListStyle = 'disc' | 'decimal' | 'circle' | 'none'
export type TImage = {
    src: string
    alt: string
    width: string
    margin?: string
}

export type TTranslationComponents = {
    key: number
    type: 'link' | 'internal_link' | 'deriv_app_link' | 'strong'
    to?: string
}[]

type TLocalize = {
    translation_text?: TString
    eu_translation_text?: TString | null
    translation_components?: TTranslationComponents
    img?: TImage
}

export type TList = {
    list_style: TListStyle
    items: Array<TLocalize & { sub_items?: Omit<TList, 'padding_left'> }>
    margin_top: string
    first_child_margin_top?: string
    padding_left?: string
    size?: string
}

type TAnswerProps = {
    has_margin_top?: boolean // default 1.7rem
    margin_top?: string
    eu_translation_text?: TString
    list?: TList
    color?: string
    size?: string
}

export type TAnswer = Array<TAnswerProps & TLocalize>

export type TQuestions = {
    sub_category?: TString
    category: string
    label: string
    question: TString
    answer?: TAnswer | ((config: { is_eu: boolean }) => TAnswer)
    renderProp?: () => ReactNode
    hide_for_non_eu?: boolean
    hide_for_eu?: boolean
}

export type TQuestionsData = {
    section: string
    category: TString
    hide_for_eu?: boolean
    questions: TQuestions[]
    hide_non_p2p?: boolean
}
