/* disable-translation */
export type StringObjectType = {
    [key: string]: string
}

export type PopupModalTypes = {
    is_open: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export type TString = `_t_${string}_t_`
export type ObjectPropType<TObj, TProp extends keyof TObj> = TObj[TProp]
export interface TSmartContent<T, V extends object> {
    id: number
    data: T
    visiblity: V
}
