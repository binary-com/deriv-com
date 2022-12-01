import React, { useEffect } from 'react'
import { ModalRefType } from 'components/elements/modal'
import { Localize } from 'components/localization'
import { Modal, Header } from 'components/elements'
import { useUserBrowser } from 'components/hooks/use-user-browser'
import { CookieStorage } from 'common/storage'

const BrowserUpdateAlertModal = () => {
    const modalRef = React.useRef<ModalRefType>()
    const { is_outdated } = useUserBrowser()
    const cookie_key = 'update_browser_alert_modal_shown'
    const cookie = new CookieStorage(cookie_key)

    useEffect(
        () => is_outdated && !cookie.get(cookie_key) && modalRef.current.show(),
        [is_outdated],
    )

    const handlePositive = () => {
        cookie.set(cookie_key, true)
        modalRef.current.hide()
    }

    return (
        <Modal
            ref={modalRef}
            positive={<Localize translate_text="OK" />}
            onPositive={handlePositive}
            is_dismissible={false}
        >
            <Header type="paragraph-2" weight="regular">
                <Localize translate_text="Update your browser to get the best Deriv experience" />
            </Header>
        </Modal>
    )
}

export default BrowserUpdateAlertModal
