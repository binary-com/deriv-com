// disable-translation
export type StringObjectType = {
    [key: string]: string
}

export type PopupModalTypes = {
    is_open: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export type Tstring = `_t_${string}_t_`
