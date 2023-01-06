import React, { useState, createContext, ReactNode } from 'react'

type PopupProviderProps = {
    children?: ReactNode
}

type PopupContextType = {
    show_non_eu_popup: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const PopupContext = createContext<PopupContextType>(null)

export const PopupProvider = ({ children }: PopupProviderProps) => {
    const [show_non_eu_popup, setShowNonEuPopup] = useState(false)

    return (
        <PopupContext.Provider
            value={{
                show_non_eu_popup,
                setShowNonEuPopup,
            }}
        >
            {children}
        </PopupContext.Provider>
    )
}
