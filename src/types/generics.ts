import { PropsWithChildren } from 'react'

export type StringObjectType = {
    [key: string]: string
}

export type PopupModalTypes = {
    is_open: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export type ComponentProps = PropsWithChildren<{ children?: React.ReactNode }>
