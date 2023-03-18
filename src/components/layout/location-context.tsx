import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import type { ModalPayloadType } from './layout'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

type LocationProviderProps = {
    has_mounted?: boolean
    setModalPayload?: Dispatch<SetStateAction<ModalPayloadType>>
    toggleModal?: (event: React.MouseEvent<HTMLElement>) => void
}

export const LocationContext = React.createContext<LocationProviderProps>({})

export const LocationProvider = ({
    children,
    setModalPayload,
    toggleModal,
}: PropsWithChildren<LocationProviderProps>) => {
    const [has_mounted] = usePageLoaded()

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
