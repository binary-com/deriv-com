import React, { useEffect } from 'react'
import { ModalRefType } from 'components/elements/modal'
import { Localize } from 'components/localization'
import { Modal, Header } from 'components/elements'
import { useUserBrowser } from 'components/hooks/use-user-browser'
import { minimum_required_versions } from 'common/constants'
import { CookieStorage } from 'common/storage'

const BrowserUpdateAlertModal = () => {
    const modalRef = React.useRef<ModalRefType>()
    const { browser_name, browser_version } = useUserBrowser()
    const cookie_key = 'update_browser_alert_modal_shown'
    const cookie = new CookieStorage(cookie_key)

    useEffect(
        () =>
            minimum_required_versions[browser_name] &&
            browser_version < minimum_required_versions[browser_name] &&
            modalRef.current.show(),
        [browser_version],
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
                <div>your browser info:</div>
                <ul>
                    <li>name : {browser_name}</li>
                    <li>version : {browser_version}</li>
                    <li>minimum_required_versions : {minimum_required_versions[browser_name]}</li>
                </ul>
            </Header>
        </Modal>
    )
}

export default BrowserUpdateAlertModal
