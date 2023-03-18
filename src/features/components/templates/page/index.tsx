import React, { HTMLAttributes } from 'react'
import apiManager from 'features/websocket'
import usePopup from 'components/hooks/use-popup'
import EURedirect, { useModal } from 'components/custom/_eu-redirect-modal'
import { ModalPayloadType } from 'components/layout/layout'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import BrowserUpdateAlertModal from 'components/layout/modal/browser_update_alert_modal'
import NonEuRedirectPopUp from 'components/custom/_non-eu-redirect-popup'
import LayoutOverlay from 'components/layout/layout-overlay'
import { LocationProvider } from 'components/layout/location-context'
import 'features/styles/app.scss'
import PpcProvider from 'features/contexts/ppc-campaign/ppc.provider'
import { isBrowser } from 'common/utility'
interface ILayoutComponentProps extends HTMLAttributes<HTMLDivElement> {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
}

if (isBrowser()) {
    apiManager.init()
}

const LayoutComponent = ({
    children,
    is_ppc = false,
    is_ppc_redirect = false,
}: ILayoutComponentProps) => {
    const { show_non_eu_popup, setShowNonEuPopup } = usePopup()
    const [show_modal, toggleModal, closeModal] = useModal()
    const [modal_payload, setModalPayload] = React.useState({} as ModalPayloadType)
    const { has_platform } = usePlatformQueryParam()

    //Handle page layout when redirection from mobile app.
    if (has_platform) {
        return <>{children}</>
    }

    return (
        <PpcProvider is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect}>
            <LocationProvider toggleModal={toggleModal} setModalPayload={setModalPayload}>
                {children}
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
                {show_non_eu_popup && (
                    <NonEuRedirectPopUp
                        is_open={show_non_eu_popup}
                        setShowNonEuPopup={setShowNonEuPopup}
                    />
                )}
                <LayoutOverlay is_ppc={is_ppc} />
                <BrowserUpdateAlertModal />
            </LocationProvider>
        </PpcProvider>
    )
}

export default LayoutComponent
