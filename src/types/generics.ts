import { PropsWithChildren } from 'react'

export type StringObjectType = {
    [key: string]: string
}

export type PopupModalTypes = {
    is_open: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export type ComponentProps = PropsWithChildren<{ foo: string }>
export type TString = `_t_${string}_t_`
