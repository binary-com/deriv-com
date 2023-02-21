import React, { HTMLAttributes } from 'react'
import apiManager from 'features/websocket'
import useWebsiteStatus from 'components/hooks/use-website-status'
import usePopup from 'components/hooks/use-popup'
import { useModal } from 'components/custom/_eu-redirect-modal'
import { ModalPayloadType } from 'components/layout/layout'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

interface ILayoutComponentProps extends HTMLAttributes<HTMLDivElement> {
    foo?: boolean
}

apiManager.init()

const LayoutComponent = ({ children }: ILayoutComponentProps) => {
    // const { website_status } = useWebsiteStatus()
    // const { show_non_eu_popup, setShowNonEuPopup } = usePopup()
    // const [show_modal, toggleModal, closeModal] = useModal()
    // const [modal_payload, setModalPayload] = React.useState({} as ModalPayloadType)
    // const { has_platform } = usePlatformQueryParam()

    // useEffect(() => {
    //     const current_client_country = website_status?.clients_country ?? ''
    //     const client_info_cookie = new CookieStorage('client_information')
    //     const residence = client_info_cookie.get('residence')
    //     isEuDomain() && handleRowRedirect(residence, current_client_country)
    //     !isEuDomain() && handleRedirect(residence, current_client_country)
    // }, [website_status])

    return <div>{children}</div>
}

export default LayoutComponent
