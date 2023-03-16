import React, { useEffect } from 'react'
import { ModalRefType } from 'components/elements/modal'
import { Localize } from 'components/localization'
import { Modal, Header } from 'components/elements'
import { useUserBrowser } from 'components/hooks/use-user-browser'
import { CookieStorage } from 'common/storage'
import { cookie_key, browsers_minimum_required_version } from 'common/constants'

const BrowserUpdateAlertModal = () => {
    const modalRef = React.useRef<ModalRefType>()
    const { is_outdated } = useUserBrowser(browsers_minimum_required_version)
    const cookie = new CookieStorage(cookie_key)

    useEffect(
        () => is_outdated && !cookie.get(cookie_key) && modalRef.current.show(),
        [is_outdated],
    )

    const handlePositive = () => {
        const expiration_date = Date.now() + 14 * 86400 * 1000 // 2 weeks later (1209600000 ms)
        cookie.set(cookie_key, true, {
            expires: new Date(expiration_date),
        })
        modalRef.current.hide()
    }

    return (
        <Modal
            ref={modalRef}
            positive="_t_OK_t_"
            onPositive={handlePositive}
            is_dismissible={false}
            maxWidth="38rem"
        >
            <Header type="paragraph-2" weight="regular">
                <Localize translate_text="_t_Update your browser to get the best Deriv experience_t_" />
            </Header>
        </Modal>
    )
}

export default BrowserUpdateAlertModal
