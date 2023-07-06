import { InternalLinkType, LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export interface ContentItemImage {
    src: string
    alt: TString
}

export interface OptionContentItemData {
    title: TString
    icon: ContentItemImage
    texts: TString[]
    images: ContentItemImage[]
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
    list_title: TString
    list_items: TString[]
}

export interface OptionsFAQDataItem {
    question: TString
    id: number
    answers: (OptionsFAQTextItem | OptionsFAQListItem)[]
}
