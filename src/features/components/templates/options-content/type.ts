import { LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export interface ContentItemImage {
    src: string
    alt: TString
}

export interface OptionContentSingleItemData {
    title?: TString
    type: 'single'
    icon?: ContentItemImage
    texts: TString[]
    images: ContentItemImage[]
}

export type OptionContentItemData = OptionContentSingleItemData | OptionContentSectionItemData

export interface OptionContentSection {
    title?: TString
    texts: TString[]
    images: ContentItemImage[]
}
export interface OptionContentSectionItemData {
    title: TString
    type: 'sections'
    icon: ContentItemImage
    sections: OptionContentSection[]
}

export interface OptionContentAvailability {
    icon: ContentItemImage
    link: LinkUrlType
    title: TString
}

export interface OptionsFAQTextItem {
    type: 'text'
    id: number
    text: TString
}

export interface OptionsFAQListItem {
    type: 'list'
    id: number
    list_title?: TString
    list_items: TString[]
}

export interface OptionsFAQDataItem {
    question: TString
    id: number
    answers: (OptionsFAQTextItem | OptionsFAQListItem)[]
}
