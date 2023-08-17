import { ReactElement } from 'react'
import { TString } from 'types/generics'

export type ExpoCardTypes = {
    title?: TString
    image?: ReactElement
    date?: TString
    link?: string
}
