import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import type { ModalPayloadType } from './layout'

type LocationProviderProps = {
    has_mounted?: boolean
    setModalPayload?: Dispatch<SetStateAction<ModalPayloadType>>
    toggleModal?: (event: React.MouseEvent<HTMLElement>) => void
}

export const LocationContext: React.Context<LocationProviderProps> = React.createContext({})

export const LocationProvider = ({
    children,
    has_mounted = false,
    setModalPayload,
    toggleModal,
}: PropsWithChildren<LocationProviderProps>) => {
    return (
        <LocationContext.Provider
            value={{
                has_mounted,
                setModalPayload,
                toggleModal,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}
