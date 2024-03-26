import { ReactElement } from 'react'
import { TString } from 'types/generics'

export type ExpoCardTypes = {
    id: number
    title?: string
    image?: ReactElement
    date?: TString
    link?: string
}
