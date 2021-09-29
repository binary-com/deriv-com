import React, { useEffect } from 'react'
import { LocationProvider } from '../src/components/layout/location-context'
import { LocaleContextWrapper } from '../src/components/localization/locale-context'
import EURedirect, { useModal } from '../src/components/custom/_eu-redirect-modal'
import { DerivStore } from '../src/store/index'

export const MockProvider = ({ children, is_eu_country = false, locale = 'en' }) => {
    const [has_mounted, setMounted] = React.useState(false)
    const [modal_payload, setModalPayload] = React.useState({})
    const [show_modal, toggleModal, closeModal] = useModal()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <DerivStore.Provider
            value={{
                is_eu_country,
                is_p2p_allowed_country: true,
                crypto_config: {},
                website_status: {},
                website_status_loading: {},
                setWebsiteStatus: {},
            }}
        >
            <LocationProvider
                has_mounted={has_mounted}
                show_cookie_banner={false}
                toggleModal={toggleModal}
                setModalPayload={setModalPayload}
            >
                <LocaleContextWrapper pageContext={{ locale }}>{children}</LocaleContextWrapper>
                <EURedirect
                    toggle={toggleModal}
                    is_open={show_modal}
                    closeModal={closeModal}
                    to={modal_payload.to}
                    target={modal_payload.target}
                    rel={modal_payload.rel}
                    ref={modal_payload.ref}
                    aria_label={modal_payload.aria_label}
                />
            </LocationProvider>
        </DerivStore.Provider>
    )
}
