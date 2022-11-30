import React, { useEffect } from 'react'
import { ModalRefType } from 'components/elements/modal'
import { Localize } from 'components/localization'
import { Modal, Header } from 'components/elements'
import { useUserBrowser } from 'components/hooks/use-user-browser'
import { CookieStorage } from 'common/storage'

const BrowserUpdateAlertModal = () => {
    const modalRef = React.useRef<ModalRefType>()
    const { name, version } = useUserBrowser()
    const cookie_key = 'update_browser_alert_modal_shown'
    const cookie = new CookieStorage(cookie_key)

    useEffect(() => version > 0 && modalRef.current.show(), [version])

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
                <div>your browser info:</div>
                <ul>
                    <li>name : {name}</li>
                    <li>version : {version}</li>
                </ul>
            </Header>
        </Modal>
    )
}

export default BrowserUpdateAlertModal
