import React, { Dispatch, SetStateAction, PropsWithChildren } from 'react'
import type { ModalPayloadType } from './layout'

type LocationProviderProps = {
    has_mounted?: boolean
    show_cookie_banner?: boolean
    setModalPayload?: Dispatch<SetStateAction<ModalPayloadType>>
    toggleModal?: (event: React.MouseEvent<HTMLElement>) => void
}

export const LocationContext = React.createContext<LocationProviderProps>(null)

export const LocationProvider = ({
    children,
    has_mounted = false,
    show_cookie_banner = false,
    setModalPayload,
    toggleModal,
}: PropsWithChildren<LocationProviderProps>) => (
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
