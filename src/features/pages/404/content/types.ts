import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

type TInfoItem = {
    header: TString
    sub_header: TString
}
type TNotAvailableImage = {
    src: string
    alt: string
}
type TButtonLink = {
    text: TString
    url: LinkUrlType
}

export { TInfoItem, TNotAvailableImage, TButtonLink }
