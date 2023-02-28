import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import type { ModalPayloadType } from './layout'

type LocationProviderProps = {
    has_mounted?: boolean
    setModalPayload?: Dispatch<SetStateAction<ModalPayloadType>>
    toggleModal?: (event: React.MouseEvent<HTMLElement>) => void
}

// Todo: Context is initialized with `true` which is not compatible with the actual value of the context,
// Need to investigate and remove the initial value to correct the type.
export const LocationContext = React.createContext(true as LocationProviderProps)

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
