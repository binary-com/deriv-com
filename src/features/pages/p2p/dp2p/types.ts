import { ReactElement } from 'react'
import { TSmartContent, TString } from 'types/generics'

export type P2PItem = {
    header: TString
    description: TString
    img: ReactElement
}

type P2PItemConfig = {
    is_eu: boolean
}

export type SmartP2PItem = TSmartContent<P2PItem, P2PItemConfig>
