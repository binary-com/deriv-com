import React, { ReactNode, Dispatch, SetStateAction } from 'react'

type LocationProviderProps = {
    children: ReactNode
}
type LocationContextType = {
    has_mounted?: boolean
    setModalPayload?: Dispatch<SetStateAction<boolean>>
    show_cookie_banner?: boolean
    toggleModal?: boolean | (() => void)
}
export const LocationContext = React.createContext<LocationContextType>(null) // undefined => true

export const LocationProvider = ({ children }: LocationProviderProps) => {
    return (
        <LocationContext.Provider
            value={{
                has_mounted,
                show_cookie_banner,
                setModalPayload,
                toggleModal,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}
