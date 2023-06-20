import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

type InfoItem = {
    header: TString
    sub_header: TString
}
type ButtonLink = {
    text: TString
    url: LinkUrlType
}

type ImageItem = {
    src: string
    alt: TString
}

export { InfoItem, ButtonLink, ImageItem }
