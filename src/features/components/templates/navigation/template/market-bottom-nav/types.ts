import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type TMarketNavItem = {
    title: TString
    link: LinkUrlType
    active_urls?: string[]
}
