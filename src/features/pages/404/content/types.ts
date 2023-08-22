import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

type InfoItemType = {
    header: TString
    sub_header: TString
}
type LinkType = {
    text: TString
    url: LinkUrlType
}

type IconProps = {
    src: string
    alt: TString
}

export { InfoItemType, LinkType, IconProps }
