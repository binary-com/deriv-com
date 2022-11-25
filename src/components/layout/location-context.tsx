import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import type { ModalPayloadType } from './layout'

type LocationProviderProps = {
    has_mounted?: boolean
    setModalPayload?: Dispatch<SetStateAction<ModalPayloadType>>
    show_cookie_banner?: boolean
    toggleModal?: (event: React.MouseEvent<HTMLElement>) => void
}

export const LocationContext = React.createContext<LocationProviderProps>(null)

export const LocationProvider = ({
    has_mounted = false,
    show_cookie_banner = false,
    children,
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
