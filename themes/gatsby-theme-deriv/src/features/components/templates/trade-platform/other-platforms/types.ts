import { LinkUrlType } from 'features/types'
import { TString } from 'types/generics'

export type PlatformType = {
    id: number
    icon: string
    heading: string
    paragraph: TString
    link: LinkUrlType
}
