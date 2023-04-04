import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

type TInfoItem = {
    header: TString
    sub_header: TString
}
type TButtonLink = {
    text: TString
    url: LinkUrlType
}

export { TInfoItem, TButtonLink }
